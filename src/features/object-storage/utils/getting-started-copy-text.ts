import type { GettingStartedStepId } from "../types/getting-started-section.types";
import {
  OBJECT_STORAGE_DEFAULT_BUCKET,
  OBJECT_STORAGE_S3_ENDPOINT,
  OBJECT_STORAGE_S3_REGION,
} from "../constants/getting-started-section.constants";

const COPY_TEXT_BY_STEP_TAB: Record<
  GettingStartedStepId,
  Record<string, string>
> = {
  "create-bucket": {
    bash: `aws s3 mb s3://${OBJECT_STORAGE_DEFAULT_BUCKET} \\
  --endpoint-url ${OBJECT_STORAGE_S3_ENDPOINT} \\
  --region ${OBJECT_STORAGE_S3_REGION}`,
    python: `import boto3

s3 = boto3.client('s3',
    endpoint_url='${OBJECT_STORAGE_S3_ENDPOINT}',
    aws_access_key_id='YOUR_ACCESS_KEY',
    aws_secret_access_key='YOUR_SECRET_KEY'
)

s3.create_bucket(Bucket='${OBJECT_STORAGE_DEFAULT_BUCKET}')`,
  },
  "upload-data": {
    bash: `# Upload single checkpoint
aws s3 cp checkpoint.pt s3://${OBJECT_STORAGE_DEFAULT_BUCKET}/checkpoints/ \\
  --endpoint-url ${OBJECT_STORAGE_S3_ENDPOINT}

# Sync full dataset directory
aws s3 sync ./data/ s3://${OBJECT_STORAGE_DEFAULT_BUCKET}/train/ \\
  --endpoint-url ${OBJECT_STORAGE_S3_ENDPOINT}`,
    multipart: `s3.upload_file('model-weights.safetensors',
  '${OBJECT_STORAGE_DEFAULT_BUCKET}',
  'models/llama-70b/weights.safetensors')

# Large file with multipart acceleration
from boto3.s3.transfer import TransferConfig
config = TransferConfig(multipart_threshold=1024*25)
s3.upload_file('large-dataset.tar',
  '${OBJECT_STORAGE_DEFAULT_BUCKET}', 'datasets/imagenet.tar',
  Config=config)`,
  },
  "access-from-gpu": {
    pytorch: `import torch
from torch.utils.data import DataLoader

# Load dataset from S3
dataset = torch.load('s3://${OBJECT_STORAGE_DEFAULT_BUCKET}/train/dataset.pt')

# Save checkpoint to S3 after epoch
torch.save(model.state_dict(),
    's3://${OBJECT_STORAGE_DEFAULT_BUCKET}/checkpoints/epoch-10.pt')`,
    "hugging-face": `from datasets import load_dataset
import os

os.environ['HF_DATASETS_CACHE'] = 's3://${OBJECT_STORAGE_DEFAULT_BUCKET}/hf-cache/'

# Stream large datasets directly from S3
dataset = load_dataset('parquet',
  data_files='s3://${OBJECT_STORAGE_DEFAULT_BUCKET}/train/*.parquet',
  streaming=True)`,
  },
  "lifecycle-policies": {
    "json-policy": `{
  "Rules": [
    {
      "ID": "archive-stale-checkpoints",
      "Prefix": "checkpoints/",
      "Status": "Enabled",
      "Transitions": [
        { "Days": 30, "StorageClass": "GLACIER" }
      ]
    }
  ]
}`,
    "python-apply": `import json

with open('lifecycle.json') as f:
    policy = json.load(f)

s3.put_bucket_lifecycle_configuration(
    Bucket='${OBJECT_STORAGE_DEFAULT_BUCKET}',
    LifecycleConfiguration=policy
)
print('Lifecycle policy applied ✓')`,
  },
};

export function getGettingStartedCopyText(
  stepId: GettingStartedStepId,
  tabId: string,
): string {
  return COPY_TEXT_BY_STEP_TAB[stepId][tabId] ?? "";
}
