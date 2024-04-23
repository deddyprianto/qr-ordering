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
# IAM Policy Document
###################################
data "aws_iam_policy_document" "read_qrordering_bucket" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.qrordering.arn}/*"]

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.qrordering.iam_arn]
    }
  }

  statement {
    actions   = ["s3:ListBucket"]
    resources = [aws_s3_bucket.qrordering.arn]

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.qrordering.iam_arn]
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
# S3
###################################
resource "aws_s3_bucket" "qrordering" {
  bucket = "${replace(var.DOMAIN, ".", "-")}"
}

###################################
# S3 Website Encryption
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
# S3 Website Configuration
###################################
resource "aws_s3_bucket_website_configuration" "qrordering" {
  bucket = aws_s3_bucket.qrordering.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
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
  restrict_public_buckets = false
}

###################################
# CloudFront
###################################
resource "aws_cloudfront_distribution" "qrordering" {
  enabled             = true
  default_root_object = "index.html"
  aliases             = ["${var.DOMAIN}"]

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

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.qrordering.cloudfront_access_identity_path
    }
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
    bucket         = aws_s3_bucket.qrordering.id
    include_cookies = false
    prefix         = "logs/"
  }
}