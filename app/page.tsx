import { Hero } from "./_components/HompageSections/Hero";
import { SectionTwo } from "./_components/HompageSections/SectionTwo";
import { SectionThree } from "./_components/HompageSections/SectionThree";
import { SectionFour } from "./_components/HompageSections/SectionFour";
import { SectionFive } from "./_components/HompageSections/SectionFive";
import { ContactForm } from "./_components/ContactForm/ContactForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionTwo />
      <SectionThree />
      <SectionFive />
      <SectionFour />

      <ContactForm />
    </main>
  );
}
