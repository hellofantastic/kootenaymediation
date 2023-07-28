import { Header } from "../_components/Header/Header";
import { Hero } from "../_components/HompageSections/Hero";
import { Mediation } from "../_components/HompageSections/Mediation";
import { CollaborativeLaw } from "../_components/HompageSections/CollaborativeLaw";
import { Process } from "../_components/HompageSections/Process";
import { About } from "../_components/HompageSections/About";
import { ContactForm } from "../_components/ContactForm/ContactForm";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Mediation />
      <CollaborativeLaw />
      <About />
      <Process />
      <ContactForm />
    </main>
  );
}
