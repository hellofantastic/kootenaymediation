import { Metadata } from "next";
import { Providers } from "./providers";
import Header from "./_components/Header/Header";
import { Footer } from "./_components/Footer/Footer";
import StyledComponentsRegistry from "./lib/registry";
import "./globals.css";
import { Poppins } from "next/font/google";

//const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Kootenay Mediation",
  description: "Kootenay Mediation is a mediation and family law service, offering a secure and supportive environment in Nelson, BC for families and individuals seeking peaceful conflict resolution",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Providers>
          <StyledComponentsRegistry>
            <Header />
            {children}
            <Footer />
          </StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  );
}
