locals {
  name          = "train_buddy"
  author        = "Rahman Younus"
  email         = "rahman_95@live.co.uk"
  lambda_memory = 128

  tags = {
    Name      = "Train Buddy"
    GitRepo   = "https://github.com/rahman95/train-buddy"
    ManagedBy = "Terraform"
    Owner     = "${local.email}"
  }
}
