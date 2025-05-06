import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pixel by Ludo : Développeur Web",
  description:
    "Développeur web Fullstack. Sites sur mesure, applications performantes, conseils techniques. Un savoir-faire et une vision globale, de la conception à la mise en production.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className="dark scroll-smooth"
      style={{ colorScheme: "dark" }}
    >
      <head>
        <meta name="robots" content="max-image-preview:large" />
        <link rel="canonical" href="https://www.pixelbyludo.fr/" />
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:title"
          content="Pixel by Ludo : Développeur Web"
        ></meta>
        <meta property="og:url" content="https://www.pixelbyludo.fr/"></meta>
        <meta
          property="og:site_name"
          content="Pixel by Ludo : Développeur Web"
        ></meta>
        <meta
          property="og:image"
          content="https://www.pixelbyludo.fr/images/ludo.jpeg"
        ></meta>
        <meta property="og:image:width" content="3300"></meta>
        <meta property="og:image:height" content="1698"></meta>
        <meta property="og:image:alt" content=""></meta>
        <meta property="og:locale" content="fr_FR"></meta>
        <meta
          name="application-name"
          content="Pixel by Ludo : Développeur Web"
        ></meta>
        <meta
          name="msapplication-window"
          content="width=device-width;height=device-height"
        ></meta>
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          geistSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
