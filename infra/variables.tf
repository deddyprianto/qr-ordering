variable "VERSION" {
  type        = string
  description = "SemVer excluding prefix 'v'"
}

variable "ENV" {
  type        = string
  description = "dev, demo or prod"
}

variable "SSL_CERT_ARN" {
  type        = string
  default     = "arn:aws:acm:us-east-1:977902117142:certificate/2b3b73c7-fa59-4288-858e-f4d035f37d0e"
  description = "*.qro.equipweb.biz certificate"
}

variable "DOMAIN" {
  type        = string
  default     = "edgecafetraining.qro-dev.equipweb.biz"
  description = "Alias domain for CloudFront distribution"
}
