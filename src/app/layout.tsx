import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const kumbh = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rô Modas e Acessórios",
  description: "Acessórios e moda evangélica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kumbh.className}>
        <Header />
        <div className="w-full h-screen py-20 px-2 md:px-6">{children}</div>
      </body>
    </html>
  );
}
