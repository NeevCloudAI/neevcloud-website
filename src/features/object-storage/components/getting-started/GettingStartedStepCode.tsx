import { Text } from "@/shared/ui-lib";
import {
  OBJECT_STORAGE_DEFAULT_BUCKET,
  OBJECT_STORAGE_S3_ENDPOINT,
  OBJECT_STORAGE_S3_REGION,
} from "../../constants/getting-started-section.constants";
import type { GettingStartedStepCodeProps } from "../../types/getting-started-section.types";

const GettingStartedStepCode = ({
  stepId,
  tabId,
}: GettingStartedStepCodeProps) => {
  if (stepId === "create-bucket" && tabId === "bash") {
    return (
      <pre className="overflow-x-auto">
        <code>
          <Text
            fontFamily="spaceMono"
            textColor="primary"
            className="leading-6"
          >
            aws s3 mb
            <Text as="span" textColor="white" variant="p">
              {` s3://${OBJECT_STORAGE_DEFAULT_BUCKET} \\`}
            </Text>
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {`  `}
            <Text as="span" textColor="pulse-red" variant="p">
              --endpoint-url
            </Text>
            {` ${OBJECT_STORAGE_S3_ENDPOINT} \\`}
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {`  `}
            <Text as="span" textColor="pulse-red" variant="p">
              --region
            </Text>
            {` ${OBJECT_STORAGE_S3_REGION}`}
          </Text>
        </code>
      </pre>
    );
  }

  if (stepId === "create-bucket" && tabId === "python") {
    return (
      <pre className="overflow-x-auto">
        <code>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            import
            <Text as="span" textColor="primary" variant="p">
              {" boto3"}
            </Text>
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {"\ns3 = "}
            <Text as="span" textColor="primary" variant="p">
              boto3.client
            </Text>
            {"('s3',"}
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {`    endpoint_url='${OBJECT_STORAGE_S3_ENDPOINT}',`}
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {`    aws_access_key_id='YOUR_ACCESS_KEY',`}
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {`    aws_secret_access_key='YOUR_SECRET_KEY'`}
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {")"}
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {"\ns3."}
            <Text as="span" textColor="primary" variant="p">
              create_bucket
            </Text>
            {`(Bucket='${OBJECT_STORAGE_DEFAULT_BUCKET}')`}
          </Text>
        </code>
      </pre>
    );
  }

  if (stepId === "upload-data" && tabId === "bash") {
    return (
      <pre className="overflow-x-auto">
        <code>
          <Text
            fontFamily="spaceMono"
            textColor="gray-04"
            className="leading-6"
          >
            # Upload single checkpoint
          </Text>
          <Text
            fontFamily="spaceMono"
            textColor="primary"
            className="leading-6"
          >
            aws s3 cp
            <Text as="span" textColor="white" variant="p">
              {` checkpoint.pt s3://${OBJECT_STORAGE_DEFAULT_BUCKET}/checkpoints/ \\`}
            </Text>
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {`  `}
            <Text as="span" textColor="pulse-red" variant="p">
              --endpoint-url
            </Text>
            {` ${OBJECT_STORAGE_S3_ENDPOINT}`}
          </Text>
          <Text
            fontFamily="spaceMono"
            textColor="gray-04"
            className="mt-3 leading-6"
          >
            # Sync full dataset directory
          </Text>
          <Text
            fontFamily="spaceMono"
            textColor="primary"
            className="leading-6"
          >
            aws s3 sync
            <Text as="span" textColor="white" variant="p">
              {` ./data/ s3://${OBJECT_STORAGE_DEFAULT_BUCKET}/train/ \\`}
            </Text>
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {`  `}
            <Text as="span" textColor="pulse-red" variant="p">
              --endpoint-url
            </Text>
            {` ${OBJECT_STORAGE_S3_ENDPOINT}`}
          </Text>
        </code>
      </pre>
    );
  }

  if (stepId === "upload-data" && tabId === "multipart") {
    return (
      <pre className="overflow-x-auto">
        <code>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {"s3."}
            <Text as="span" textColor="primary" variant="p">
              upload_file
            </Text>
            {"('model-weights.safetensors',"}
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {`  '${OBJECT_STORAGE_DEFAULT_BUCKET}',`}
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {`  'models/llama-70b/weights.safetensors')`}
          </Text>
          <Text
            fontFamily="spaceMono"
            textColor="gray-04"
            className="mt-3 leading-6"
          >
            # Large file with multipart acceleration
          </Text>
          <Text
            fontFamily="spaceMono"
            textColor="pulse-red"
            className="leading-6"
          >
            from
            <Text as="span" textColor="white" variant="p">
              {" boto3.s3.transfer import TransferConfig"}
            </Text>
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {"config = "}
            <Text as="span" textColor="primary" variant="p">
              TransferConfig
            </Text>
            {"(multipart_threshold=1024*25)"}
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {"s3."}
            <Text as="span" textColor="primary" variant="p">
              upload_file
            </Text>
            {"('large-dataset.tar',"}
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {`  '${OBJECT_STORAGE_DEFAULT_BUCKET}', 'datasets/imagenet.tar',`}
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {"  Config=config)"}
          </Text>
        </code>
      </pre>
    );
  }

  if (stepId === "access-from-gpu" && tabId === "pytorch") {
    return (
      <pre className="overflow-x-auto">
        <code>
          <Text
            fontFamily="spaceMono"
            textColor="pulse-red"
            className="leading-6"
          >
            import
            <Text as="span" textColor="white" variant="p">
              {" torch"}
            </Text>
          </Text>
          <Text
            fontFamily="spaceMono"
            textColor="pulse-red"
            className="leading-6"
          >
            from
            <Text as="span" textColor="white" variant="p">
              {" torch.utils.data import DataLoader"}
            </Text>
          </Text>
          <Text
            fontFamily="spaceMono"
            textColor="gray-04"
            className="leading-6"
          >
            {"\n# Load dataset from S3"}
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {"dataset = torch.load("}
            <Text as="span" textColor="primary" variant="p">
              {`'s3://${OBJECT_STORAGE_DEFAULT_BUCKET}/train/dataset.pt'`}
            </Text>
            {")"}
          </Text>
          <Text
            fontFamily="spaceMono"
            textColor="gray-04"
            className="mt-3 leading-6"
          >
            # Save checkpoint to S3 after epoch
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {"torch.save(model.state_dict(),"}
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {`    `}
            <Text as="span" textColor="primary" variant="p">
              {`'s3://${OBJECT_STORAGE_DEFAULT_BUCKET}/checkpoints/epoch-10.pt'`}
            </Text>
            {")"}
          </Text>
        </code>
      </pre>
    );
  }

  if (stepId === "access-from-gpu" && tabId === "hugging-face") {
    return (
      <pre className="overflow-x-auto">
        <code>
          <Text
            fontFamily="spaceMono"
            textColor="pulse-red"
            className="leading-6"
          >
            from
            <Text as="span" textColor="white" variant="p">
              {" datasets import load_dataset"}
            </Text>
          </Text>
          <Text
            fontFamily="spaceMono"
            textColor="pulse-red"
            className="leading-6"
          >
            import
            <Text as="span" textColor="white" variant="p">
              {" os"}
            </Text>
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {"\nos.environ['HF_DATASETS_CACHE'] = "}
            <Text as="span" textColor="primary" variant="p">
              {`'s3://${OBJECT_STORAGE_DEFAULT_BUCKET}/hf-cache/'`}
            </Text>
          </Text>
          <Text
            fontFamily="spaceMono"
            textColor="gray-04"
            className="leading-6"
          >
            {"\n# Stream large datasets directly from S3"}
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {"dataset = load_dataset('parquet',"}
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {`  data_files='s3://${OBJECT_STORAGE_DEFAULT_BUCKET}/train/*.parquet',`}
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {"  streaming=True)"}
          </Text>
        </code>
      </pre>
    );
  }

  if (stepId === "lifecycle-policies" && tabId === "json-policy") {
    return (
      <pre className="overflow-x-auto">
        <code>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {"{"}
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {`  "Rules": [`}
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {`    {`}
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {`      "ID": "archive-stale-checkpoints",`}
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {`      "Prefix": "checkpoints/",`}
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {`      "Status": "Enabled",`}
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {`      "Transitions": [`}
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {`        { "Days": 30, "StorageClass": "GLACIER" }`}
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {`      ]`}
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {`    }`}
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {`  ]`}
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {"}"}
          </Text>
        </code>
      </pre>
    );
  }

  if (stepId === "lifecycle-policies" && tabId === "python-apply") {
    return (
      <pre className="overflow-x-auto">
        <code>
          <Text
            fontFamily="spaceMono"
            textColor="pulse-red"
            className="leading-6"
          >
            import
            <Text as="span" textColor="white" variant="p">
              {" json"}
            </Text>
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {"\nwith open('lifecycle.json') as f:"}
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {"    policy = json.load(f)"}
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {"\ns3.put_bucket_lifecycle_configuration("}
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {`    Bucket='${OBJECT_STORAGE_DEFAULT_BUCKET}',`}
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {"    LifecycleConfiguration=policy"}
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            {")"}
          </Text>
          <Text
            fontFamily="spaceMono"
            textColor="primary"
            className="leading-6"
          >
            {"\nprint('Lifecycle policy applied ✓')"}
          </Text>
        </code>
      </pre>
    );
  }

  return null;
};

export default GettingStartedStepCode;
