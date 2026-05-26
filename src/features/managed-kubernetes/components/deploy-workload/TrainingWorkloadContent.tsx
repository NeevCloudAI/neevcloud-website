import { Text } from "@/shared/ui-lib";

const TrainingWorkloadContent = () => (
  <>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      apiVersion:
      <Text as="span" variant="h6" textColor="white">
        batch/v1
      </Text>
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      kind:
      <Text as="span" variant="h6" textColor="white">
        Job
      </Text>
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      metadata:
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      &nbsp;&nbsp;name:
      <Text as="span" variant="h6" textColor="white">
        llama-finetune
      </Text>
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      spec:
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      &nbsp;&nbsp;parallelism:
      <Text as="span" variant="h6">
        8
      </Text>
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      &nbsp;&nbsp;template:
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      &nbsp;&nbsp;&nbsp;&nbsp;spec:
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;containers:
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- name:
      <Text as="span" variant="h6" textColor="white">
        trainer
      </Text>
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;image:
      <Text as="span" variant="h6" textColor="red-50">
        neevcloud.com/registry/pytorch:2.4
      </Text>
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;command:
      <Text as="span" variant="h6" textColor="white" className="mx-0 md:mx-0">
        [
      </Text>
      <Text as="span" variant="h6" textColor="red-50" className="mx-0 md:mx-0">
        &quot;torchrun&quot;
      </Text>
      <Text as="span" variant="h6" textColor="white" className="mx-0 md:mx-0">
        ,{" "}
      </Text>
      <Text as="span" variant="h6" textColor="red-50" className="mx-0 md:mx-0">
        &quot;--nproc_per_node=8&quot;
      </Text>
      <Text as="span" variant="h6" textColor="white" className="mx-0 md:mx-0">
        ,{" "}
      </Text>
      <Text as="span" variant="h6" textColor="red-50" className="mx-0 md:mx-0">
        &quot;train.py&quot;
      </Text>
      <Text as="span" variant="h6" textColor="white" className="mx-0 md:mx-0">
        ]
      </Text>
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;resources:
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;limits:
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nvidia.com/gpu:
      <Text as="span" variant="p" textColor="white">
        1
      </Text>
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nodeSelector:
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gpu:
      <Text as="span" variant="p" textColor="white">
        h100
      </Text>
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;restartPolicy:
      <Text as="span" variant="p" textColor="white">
        OnFailure
      </Text>
    </Text>
  </>
);

export default TrainingWorkloadContent;
