# infra

## Creating a new version

## Development

0. Setup AWS cli credentials
1. Create [backend config](backend/)
2. `terraform init -backend-config=backend/dev.conf`
3. `terraform validate`
4. `terraform apply`
