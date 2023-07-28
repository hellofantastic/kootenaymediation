import { Metadata } from "next";
import { Providers } from "./providers";
import { Footer } from "./_components/Footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kootenay Mediation | Providing Mediation Services around the Kootenay",
  description:
    "Kootenay Mediation is a mediation and family law service, offering a secure and supportive environment in Nelson, BC for families and individuals seeking peaceful conflict resolution.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://kootenaymediation.com",
    title: "Kootenay Mediation | Providing Mediation Services around the Kootenay",
    description:
      "Kootenay Mediation is a mediation and family law service, offering a secure and supportive environment in Nelson, BC for families and individuals seeking peaceful conflict resolution.",
    images: [
      {
        url: "https://kootenaymedaition.ca/images/kootenay-mediation-logo.svg",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
