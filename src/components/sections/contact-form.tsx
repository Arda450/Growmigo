"use client";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { sendMail } from "@/lib/send-email";
import { toast } from "sonner";
import SubmitButton from "@/components/form/submit-button";
import FormInput from "@/components/form/form-input";
import SectionTitle from "../ui/section-title";
import { Mail } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Bitte geben Sie Ihren Namen ein" }),
  email: z
    .string()
    .email({ message: "Bitte geben Sie eine gültige Email Adresse ein" }),
  subject: z.string().min(2, { message: "Bitte geben Sie einen Betreff ein" }),
  message: z
    .string()
    .min(10, {
      message: "Bitte geben Sie eine Nachricht mit mindestens 10 Zeichen ein.",
    })
    .max(500, {
      message: "Die Nachricht darf maximal 500 Zeichen enthalten.",
    }),
});
export default function ContactForm() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  // wenn der form submit button gedrückt wird, wird der onSubmit funktion aufgerufen
  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    // formatierte nachricht für die email wird erstellt
    const mailText = `Name: ${values.name}\nEmail: ${values.email}\nBetreff: ${values.subject}\nNachricht: ${values.message}`;
    // sendEmail funktion wird aufgerufen
    const response = await sendMail({
      email: values.email,
      subject: `Kontaktformular: ${values.subject}`,
      text: mailText,
    });
    // wenn die email erfolgreich gesendet wurde, wird eine toast message angezeigt
    console.log("Email response:", response);
    if (response && !("error" in response)) {
      console.log("Showing success toast");
      toast.success("Email wurde erfolgreich gesendet.");
      form.reset();
    } else {
      console.log("Showing error toast");
      toast.error("Fehler beim Senden der Email.");
    }
  };
  return (
    <section
      id="contact"
      className="flex flex-col lg:flex-row px-4 lg:px-10 items-start justify-center gap-20 py-8"
    >
      <div className="flex flex-col items-center gap-4 w-full">
        <SectionTitle title="Kontaktieren Sie uns" />
        <div className="flex items-center gap-2">
          <Mail className="w-5 h-5" />
          <span>info@growmigo.ch</span>
        </div>
      </div>

      <Form {...form}>
        <form
          className="w-full p-4 bg-white rounded-lg shadow-md"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className=" flex flex-col gap-6">
            <FormInput
              form={form}
              name="name"
              label="Name:"
              placeholder="John Doe"
            />

            <FormInput
              form={form}
              name="email"
              label="Email:"
              placeholder="john@example.com"
            />

            <FormInput form={form} name="subject" label="Betreff:" />

            <div className="space-y-1">
              <h3 className="lg:text-xl mb-1">Nachricht:</h3>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      {/* verhindert das überschreiten der max länge */}
                      <Textarea maxLength={500} {...field} />
                    </FormControl>
                    <div className="text-xs text-gray-500 text-right mt-1">
                      {/* zeigt die aktuelle länge der nachricht an */}
                      {field.value?.length || 0}/500 Zeichen
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <SubmitButton
            isLoading={isLoading}
            text="Nachricht senden"
            loadingText="Wird gesendet..."
            className=" bg-[#ff914d] hover:bg-[#909d7b] font-bold py-4 px-6 shadow-lg hover:shadow-xl transform hover:scale-105 duration-200 mt-6"
          />
        </form>
      </Form>
    </section>
  );
}
