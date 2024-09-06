
import type { Metadata } from "next";
import "./_globals.scss";
import NavBar from "@/Components/Layout/NavBar/NavBar";
import Footer from "@/Components/Layout/Footer/Footer";
import Head from "next/head";

export const metadata: Metadata = {
  title: "R-Portfolio / Dev",
  description: "Portfolio Developper Front-End"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="google" content="notranslate" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title as string}</title>

      </Head>
      <body>
        <header className="relative">
          <NavBar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
