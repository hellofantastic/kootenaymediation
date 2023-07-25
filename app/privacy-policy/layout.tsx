import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Providers } from "../providers";
import { HeaderStyled } from "../_components/Header/HeaderStyled";
import { Footer } from "../_components/Footer/Footer";

import "../globals.css";

export const metadata: Metadata = {
  title: "Kootenay Mediation",
  description:
    "Kootenay Mediation is a mediation and family law service, offering a secure and supportive environment in Nelson, BC for families and individuals seeking peaceful conflict resolution",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <HeaderStyled>
            <nav>
              <div className="logo">
                <Link href="/">
                  <Image src="/images/kootenay-mediation-logo.svg" alt="Kootenay Mediation Logo" width={200} height={72} priority />
                </Link>
              </div>

              <ul className="nav-items">
                <li>
                  <a href="/">{"<-"} Back To Home</a>
                </li>
              </ul>
            </nav>
          </HeaderStyled>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
