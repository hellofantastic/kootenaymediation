import { Metadata } from "next";
import Image from "next/image";
import { HeaderStyled } from "../_components/Header/HeaderStyled";

export const metadata: Metadata = {
  title: "Kootenay Mediation",
  description:
    "Kootenay Mediation is a mediation and family law service, offering a secure and supportive environment in Nelson, BC for families and individuals seeking peaceful conflict resolution",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
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
      {children}
    </>
  );
}
