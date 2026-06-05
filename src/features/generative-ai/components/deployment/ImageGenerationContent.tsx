import { Text } from "@/shared/ui-lib";

const ImageGenerationContent = () => (
  <>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      from
      <Text as="span" variant="h6" textColor="white">
        neevcloud
      </Text>
      import
      <Text as="span" variant="h6" textColor="white">
        NeevCloud
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="mt-4 md:mt-6 leading-7"
    >
      client = NeevCloud(api_key=
      <Text as="span" variant="h6" textColor="red-50">
        &apos;nc-...&apos;
      </Text>
      )
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="gray-75"
      className="mt-4 md:mt-6 leading-7"
    >
      # Generate images
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      response = client.images.generate(
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;model=
      <Text as="span" variant="h6" textColor="red-50" className="mr-0 md:mr-0">
        &quot;flux-1-dev&quot;
      </Text>
      ,
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;prompt=
      <Text as="span" variant="h6" textColor="red-50" className="mr-0 md:mr-0">
        &quot;A futuristic city with flying cars at sunset&quot;
      </Text>
      ,
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;n=
      <Text as="span" variant="h6" textColor="primary" className="mr-0 md:mr-0">
        4
      </Text>
      ,
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;size=
      <Text as="span" variant="h6" textColor="red-50">
        &quot;1024x1024&quot;
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      )
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="gray-75"
      className="mt-4 md:mt-6 leading-7"
    >
      # Get image URLs
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      image_urls = [img.url
      <Text as="span" variant="h6" textColor="primary">
        for
      </Text>
      img
      <Text as="span" variant="h6" textColor="primary">
        in
      </Text>
      response.data]
    </Text>
  </>
);

export default ImageGenerationContent;
