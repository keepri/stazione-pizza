#!/usr/bin/env bash
set -euo pipefail

BUCKET="stazione-pizza"
DISTRIBUTION_ID="E31JRGNHHD6NLA"

cd "$(dirname "$0")/.."

pnpm build

aws s3 sync dist/ "s3://$BUCKET/" --delete \
  --exclude "index.html" \
  --cache-control "public,max-age=31536000,immutable"

aws s3 cp dist/index.html "s3://$BUCKET/index.html" \
  --cache-control "public,max-age=0,must-revalidate"

aws cloudfront create-invalidation --distribution-id "$DISTRIBUTION_ID" --paths "/*"
