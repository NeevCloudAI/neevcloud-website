import { ObjectStorageComponent } from "@/features/object-storage";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "Object Storage | NeevCloud",
  description:
    "Durable, scalable cloud storage with zero API migration friction, works with every tool you already use. Move datasets, model artifacts, and application data without changing a single line of code.",
  openGraphDescription:
    "S3-compatible object storage with full API compatibility, MLOps-ready workflows, India-resident storage, and 99.999% durability.",
});

const ObjectStoragePage = () => {
  return <ObjectStorageComponent />;
};

export default ObjectStoragePage;
