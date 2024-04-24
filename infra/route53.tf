resource "aws_route53_record" "equipweb" {
  zone_id = "Z3FLSDUORIR3O3"
  name    = "${var.DOMAIN}"
  type    = "A"
  alias {
    name                   = aws_cloudfront_distribution.qrordering.domain_name
    zone_id                = aws_cloudfront_distribution.qrordering.hosted_zone_id
    evaluate_target_health = false
  }
}