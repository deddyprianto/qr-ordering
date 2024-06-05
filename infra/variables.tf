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
  default     = "arn:aws:acm:us-east-1:977902117142:certificate/c8612b38-89e3-44d0-b799-72a26fe603ad"
  description = "*.qro.equipweb.biz certificate"
}

variable "DOMAIN" {
  type        = string
  default     = "edgecafetraining.qro-dev.equipweb.biz"
  description = "Alias domain for CloudFront distribution"
}
