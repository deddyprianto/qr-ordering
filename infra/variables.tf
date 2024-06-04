variable "VERSION" {
  type        = string
  description = "SemVer excluding prefix 'v'"
}

variable "ENV" {
  type        = string
  description = "dev, uat or prod"
}

variable "SSL_CERT_ARN" {
  type        = string
  default     = "arn:aws:acm:us-east-1:977902117142:certificate/a4d03694-d5f8-4544-a224-1e282a9d0982"
  description = "*.qro.equipweb.biz certificate"
}

variable "DOMAIN" {
  type        = string
  default     = "edgecafetraining.qro-dev.equipweb.biz"
  description = "Alias domain for CloudFront distribution"
}
