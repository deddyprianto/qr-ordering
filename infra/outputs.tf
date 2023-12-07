output "cloudfront_domain_name" {
  value = aws_cloudfront_distribution.qrordering.domain_name
}

output "cloudfront_distribution_id" {
  value = aws_cloudfront_distribution.qrordering.id
}

output "s3_bucket_arn" {
  value = aws_s3_bucket.qrordering.arn
}

output "s3_bucket_name" {
  value       = aws_s3_bucket.qrordering.id
  description = "deprecated and will be removed - use `s3_bucket_id`"
}
