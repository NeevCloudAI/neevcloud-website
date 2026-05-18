import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { SquareCheck } from "lucide-react";

const IntelligenceSection = () => {
  return (
    <section className="bg-gray-10 py-[3vh] md:py-[7vh]">
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          textColor="black"
          weight="semibold"
          align="center"
          className="max-w-4xl"
        >
          Skip the Infrastructure,
          <Text as="span" variant="h2" textColor="primary">
            Use the Intelligence
          </Text>
        </Text>

        <Text align="center" textColor="gray-75" className="max-w-3xl">
          {`Building AI applications shouldn't require expertise in model
          deployment, scaling infrastructure, or GPU orchestration. Our Model
          API gives you direct access to production-grade models through
          standard HTTP requests, so you can focus on building features that
          matter to your users.`}
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-12">
          <div className="bg-white rounded-lg p-4 md:p-8 w-full">
            <Text as="h6" textColor="blue-40">
              01 / Production-ready from day one
            </Text>
            <Text as="h3" weight="semibold" className="mt-2 md:mt-6">
              Models That Just Work.
            </Text>
            <Text as="h6" className="mt-2">
              All API models are tested, optimized, and monitored in production.
              We handle scaling, versioning, and performance. Just send a
              request and get a reliable prediction.
            </Text>
            <div className="flex flex-col gap-3 mt-4 md:mt-6">
              <div className="flex gap-4 bg-gray-20 px-4 py-2 rounded-lg">
                <SquareCheck size={24} className=" text-primary shrink-0" />
                <Text as="h6">Versioned endpoints</Text>
              </div>
              <div className="flex gap-4 bg-gray-20 px-4 py-2 rounded-lg">
                <SquareCheck size={24} className=" text-primary shrink-0" />
                <Text as="h6">Versioned endpoints</Text>
              </div>
              <div className="flex gap-4 bg-gray-20 px-4 py-2 rounded-lg">
                <SquareCheck size={24} className=" text-primary shrink-0" />
                <Text as="h6">Versioned endpoints</Text>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 md:p-8 w-full">
            <Text as="h6" textColor="blue-40">
              02 / Simple Integration, Powerful Results
            </Text>
            <Text as="h3" weight="semibold" className="mt-2 md:mt-6">
              Standard REST APIs
            </Text>
            <Text as="h6" className="mt-2">
              Our RESTful APIs use JSON and work with any language that supports
              HTTP requests. Simple API key authentication, clear errors, and
              transparent rate limits make integration fast and friction-free.
            </Text>
            <div className="flex flex-col gap-3 mt-4 md:mt-6">
              <div className="flex gap-4 bg-gray-20 px-4 py-2 rounded-lg">
                <SquareCheck size={24} className=" text-primary shrink-0" />
                <Text as="h6">OpenAI-compatible</Text>
              </div>
              <div className="flex gap-4 bg-gray-20 px-4 py-2 rounded-lg">
                <SquareCheck size={24} className=" text-primary shrink-0" />
                <Text as="h6">JSON over HTTP</Text>
              </div>
              <div className="flex gap-4 bg-gray-20 px-4 py-2 rounded-lg">
                <SquareCheck size={24} className=" text-primary shrink-0" />
                <Text as="h6">Python, JS, Go, cURL</Text>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 md:p-8 w-full">
            <Text as="h6" textColor="blue-40">
              03 / Scale Without Thinking About It
            </Text>
            <Text as="h3" weight="semibold" className="mt-2 md:mt-6">
              10 to 10 million requests.
            </Text>
            <Text as="h6" className="mt-2">
              One endpoint handles everything, from your first test to millions
              of daily predictions. Auto-scaling and usage-based pricing ensure
              seamless performance without infrastructure hassles.
            </Text>
            <div className="flex flex-col gap-3 mt-4 md:mt-6">
              <div className="flex gap-4 bg-gray-20 px-4 py-2 rounded-lg">
                <SquareCheck size={24} className=" text-primary shrink-0" />
                <Text as="h6">Auto-scales instantly</Text>
              </div>
              <div className="flex gap-4 bg-gray-20 px-4 py-2 rounded-lg">
                <SquareCheck size={24} className=" text-primary shrink-0" />
                <Text as="h6">Usage-based pricing</Text>
              </div>
              <div className="flex gap-4 bg-gray-20 px-4 py-2 rounded-lg">
                <SquareCheck size={24} className=" text-primary shrink-0" />
                <Text as="h6">No pre-provisioning</Text>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default IntelligenceSection;
