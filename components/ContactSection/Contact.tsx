import { Card } from "@/components/ui/card";
import { BorderBeam } from "../magicui/border-beam";
import { ContactForm } from "./ContactForm";

export default function Contact() {
  return (
    <Card className="relative w-full max-w-[350px] overflow-hidden -mt-16">
      <ContactForm />
      <BorderBeam duration={8} size={100} />
    </Card>
  );
}
