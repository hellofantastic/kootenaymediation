import { SectionOne } from "./_components/Sections/SectionOne";
import { SectionTwo } from "./_components/Sections/SectionTwo";
import { SectionThree } from "./_components/Sections/SectionThree";
import { ContactForm } from "./_components/ContactForm/ContactForm";

export default function Home() {
  return (
    <main>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <ContactForm />
    </main>
  );
}
