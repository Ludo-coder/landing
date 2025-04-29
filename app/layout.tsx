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
    "Un savoir-faire et une vision globale, de la conception à la mise en production. Développeur web Fullstack.",
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
