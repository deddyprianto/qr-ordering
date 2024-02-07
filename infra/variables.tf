variable "VERSION" {
  type        = string
  description = "SemVer excluding prefix 'v'"
}

variable "ENV" {
  type        = string
  description = "dev, testing or prod"
}

variable "SSL_CERT_ARN" {
  type        = string
  default     = "arn:aws:acm:us-east-1:977902117142:certificate/6b4a01b3-9f6d-408d-bb11-2dfd77e1ee24"
  description = "*.qro.equipweb.biz certificate"
}

variable "DOMAIN" {
  type        = string
  default     = "*.qro-dev.equipweb.biz"
  description = "Alias domain for CloudFront distribution"
}
