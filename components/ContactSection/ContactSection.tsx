import { CallToAction } from "./CallToAction";
import Contact from "./Contact";

export default function ContactSection() {
  return (
    <section id="contact" className="flex items-center justify-center flex-col">
      <CallToAction />
      <Contact />
    </section>
  );
}
