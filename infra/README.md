# infra

## Creating a new version

## Development

Please note that this only needs to be done if you intend to modify the infrastructure. This is not needed for local development

0. Setup AWS cli credentials
1. Setup env variables:

   ```shell
   export AWS_PROFILE=ew
   export TF_VAR_ENV=testing
   export TF_VAR_VERSION=0.0.1
   ```

2. Create [backend config](backend/)
3. `terraform init -backend-config=backend/dev.conf -backend-config="key=$TF_VAR_ENV/$TF_VAR_VERSION/terraform.tfstate"`
4. `terraform validate`
5. `terraform apply`
