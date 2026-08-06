import { ObjectStorageComponent } from "@/features/object-storage";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/object-storage",
  title: "S3 Compatible Object Storage | NeevCloud",
  description:
    "Durable object storage with full S3 API compatibility. Store datasets, models, artifacts. India-resident. ₹8.35/GB/month.",
});

const ObjectStoragePage = () => {
  return <ObjectStorageComponent />;
};

export default ObjectStoragePage;
