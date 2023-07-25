import { Metadata } from "next";
import { Providers } from "./providers";
import Header from "./_components/Header/Header";
import { Footer } from "./_components/Footer/Footer";
import "./globals.css";

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
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
