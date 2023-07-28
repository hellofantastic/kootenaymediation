import { Metadata } from "next";

//App
import { InnerWidthContainer } from "../_components/Container/InnerWidthContainer";
import { PageContent } from "./PageContent";
import "./privacy.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Kootenay Mediation",
  description: "Kootenay Mediation Privacy Policy page regarding user rights and data",
  robots: "noindex,nofollow",
};

export default function Privacy() {
  return (
    <main className="privacy">
      <InnerWidthContainer width="800px">
        <PageContent />
      </InnerWidthContainer>
    </main>
  );
}
