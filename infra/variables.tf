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
  default     = "arn:aws:acm:us-east-1:738652141857:certificate/10ccd767-842a-4c43-a656-7337200d2af5"
  description = "*.qr-ordering.equipweb.biz certificate"
}