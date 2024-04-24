terraform {
  required_version = ">= 0.11.5"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "ap-southeast-1"
}

###################################
# CloudFront Origin Access Identity
###################################
resource "aws_cloudfront_origin_access_identity" qrordering {
  comment = "qrordering"
}

###################################
# S3 IAM Policy Document
###################################
data "aws_iam_policy_document" "read_qrordering_bucket" {
  statement {
    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    actions = [
      "s3:GetObject"
    ]

    resources = [
      aws_s3_bucket.qrordering.arn,
      "${aws_s3_bucket.qrordering.arn}/*"
    ]

    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [aws_cloudfront_distribution.qrordering.arn]
    }
  }
}

###################################
# KMS IAM Policy Document
###################################
data "aws_iam_policy_document" "kms_key" {
  statement {
    actions   = [
        "kms:Decrypt",
        "kms:Encrypt",
        "kms:GenerateDataKey*"
    ]
    resources = ["*"]

    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }
    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [aws_cloudfront_distribution.qrordering.arn]
    }
  }

  statement {
    actions   = [
        "kms:*"
    ]
    resources = ["*"]

    principals {
      type        = "AWS"
      identifiers = [
        "arn:aws:iam::977902117142:user/ian",
        "arn:aws:iam::977902117142:user/github-qr-ordering-web",
      ]
    }
  }

}

###################################
# KMS Key
###################################
resource "aws_kms_key" "qrordering" {
  enable_key_rotation = true
}

###################################
# KMS Key Policy
###################################
resource "aws_kms_key_policy" "kms_key" {
  key_id      = aws_kms_key.qrordering.key_id
  policy      = data.aws_iam_policy_document.kms_key.json
}

###################################
# S3
###################################
resource "aws_s3_bucket" "qrordering" {
  bucket = "${replace(var.DOMAIN, ".", "-")}"

  tags = {
    Environment = "${var.ENV}"
    Terraform   = true
  }
}

###################################
# S3 Versioning
###################################
resource "aws_s3_bucket_versioning" "qrordering" {
  bucket = aws_s3_bucket.qrordering.id
  versioning_configuration {
    status = "Enabled"
  }
}

###################################
# S3 Encryption
###################################
resource "aws_s3_bucket_server_side_encryption_configuration" "qrordering_encrypt" {
  bucket = aws_s3_bucket.qrordering.id

  rule {
    apply_server_side_encryption_by_default {
      kms_master_key_id = aws_kms_key.qrordering.arn
      sse_algorithm     = "aws:kms"
    }
  }
}

###################################
# S3 Bucket Policy
###################################
resource "aws_s3_bucket_policy" "read_qrordering" {
  bucket = aws_s3_bucket.qrordering.id
  policy = data.aws_iam_policy_document.read_qrordering_bucket.json
}

###################################
# S3 Bucket Public Access Block
###################################
resource "aws_s3_bucket_public_access_block" "qrordering" {
  bucket = aws_s3_bucket.qrordering.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

###################################
# S3 Bucket Ownership Controls
###################################
resource "aws_s3_bucket_ownership_controls" "qrordering" {
  bucket = aws_s3_bucket.qrordering.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

###################################
# S3 Bucket ACL
###################################
resource "aws_s3_bucket_acl" "qrordering" {
  depends_on = [aws_s3_bucket_ownership_controls.qrordering]

  bucket = aws_s3_bucket.qrordering.id
  acl    = "private"
}

resource "aws_cloudfront_origin_access_control" "qrordering" {
  name                              = "${replace(var.DOMAIN, ".", "-")}"
  description                       = "qrordering Policy for ${var.DOMAIN}"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

###################################
# CloudFront
###################################
resource "aws_cloudfront_distribution" "qrordering" {
  enabled             = true
  default_root_object = "index.html"
  aliases             = ["${var.DOMAIN}"]
  depends_on          = [aws_s3_bucket.qrordering]

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = aws_s3_bucket.qrordering.bucket
    viewer_protocol_policy = "redirect-to-https"
    compress               = true

    min_ttl     = 0
    default_ttl = 3600
    max_ttl     = 86400

    forwarded_values {
      query_string = true

      cookies {
        forward = "none"
      }
    }
  }

  ordered_cache_behavior {
    path_pattern     = "/index.html"
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD", "OPTIONS"]
    target_origin_id = aws_s3_bucket.qrordering.bucket

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    min_ttl                = 0
    default_ttl            = 0
    max_ttl                = 0
    compress               = true
    viewer_protocol_policy = "redirect-to-https"
  }

  origin {
    domain_name = aws_s3_bucket.qrordering.bucket_regional_domain_name
    origin_id   = aws_s3_bucket.qrordering.bucket
    origin_access_control_id = aws_cloudfront_origin_access_control.qrordering.id
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = var.SSL_CERT_ARN
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  custom_error_response {
    error_caching_min_ttl = 300
    error_code            = 403
    response_code         = 200
    response_page_path    = "/index.html"
  }

  custom_error_response {
    error_caching_min_ttl = 300
    error_code            = 404
    response_code         = 200
    response_page_path    = "/index.html"
  }

  logging_config {
    bucket         = "${aws_s3_bucket.qrordering.id}.s3.amazonaws.com"
    include_cookies = false
    prefix         = "logs/"
  }

  tags = {
    Environment = "${var.ENV}"
    Terraform   = true
  }
}