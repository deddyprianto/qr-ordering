variable "VERSION" {
  type        = string
  description = "SemVer excluding prefix 'v'"
}

variable "ENV" {
  type        = string
  description = "dev, training or prod"
}

variable "SSL_CERT_ARN" {
  type        = string
  default     = "arn:aws:acm:us-east-1:977902117142:certificate/72dc4d0c-da52-477e-bece-ba556c5f79fd"
  description = "*.equipweb.biz certificate"
}