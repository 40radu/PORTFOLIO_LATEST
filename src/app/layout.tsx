
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

      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="google-site-verification" content="ixHZ2CFS3EmO2MyD6iev-1uq-G-B6ogDV6MP2WukSVM" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </head>
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
