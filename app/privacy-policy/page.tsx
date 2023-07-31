import { Metadata } from "next";
import Image from "next/image";

//App
import { HeaderStyled } from "../_components/Header/HeaderStyled";
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
      <HeaderStyled>
        <nav>
          <div className="logo">
            <a href="/">
              <Image src="/images/kootenay-mediation-logo.svg" alt="Kootenay Mediation Logo" width={200} height={72} priority />
            </a>
          </div>
          <ul className="nav-items">
            <li>
              <a href="/">{"<-"} Back To Home</a>
            </li>
          </ul>
        </nav>
      </HeaderStyled>
      <InnerWidthContainer width="800px">
        <PageContent />
      </InnerWidthContainer>
    </main>
  );
}
