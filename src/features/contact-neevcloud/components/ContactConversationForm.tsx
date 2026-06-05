import { Button, Text } from "@/shared/ui-lib";
import {
  CONTACT_FORM_FIELDS,
  CONVERSATION_SECTION,
} from "../data/conversation-section.data";

const inputClassName =
  "w-full border-0 border-b border-gray-60 bg-transparent text-sm text-black outline-none focus:border-primary";

const ContactConversationForm = () => {
  return (
    <form
      className="flex md:flex-2 flex-col border border-primary-105 bg-white p-4 md:p-10"
      aria-labelledby="contact-conversation-form-heading"
    >
      <Text as="h3" id="contact-conversation-form-heading" className="sr-only">
        Contact form
      </Text>
      <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2">
        {CONTACT_FORM_FIELDS.map((field) => (
          <div
            key={field.id}
            className={field.fullWidth ? "md:col-span-2" : undefined}
          >
            <label htmlFor={field.id} className="flex flex-col gap-2">
              <Text as="h3">{field.label}</Text>
              {field.type === "textarea" ? (
                <textarea
                  id={field.id}
                  name={field.name}
                  rows={4}
                  className={`${inputClassName} resize-none`}
                />
              ) : (
                <input
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  autoComplete={field.autoComplete}
                  required={!field.optional}
                  className={inputClassName}
                />
              )}
            </label>
          </div>
        ))}
      </div>

      <div className="mt-6 md:mt-10 flex flex-col gap-3">
        {CONVERSATION_SECTION.consentTexts.map((text) => (
          <Text key={text} as="h6" textColor="black-5">
            {text}
          </Text>
        ))}
      </div>

      <Button
        type="submit"
        variant="black"
        spacing="xl"
        className="mt-6 md:mt-10"
      >
        {CONVERSATION_SECTION.submitButtonText}
      </Button>
    </form>
  );
};

export default ContactConversationForm;
