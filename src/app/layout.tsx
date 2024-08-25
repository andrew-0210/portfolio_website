import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { lora, manrope } from "./font/font";

export const metadata: Metadata = {
  title: "Andrew Monthero - Designer & Developer",
  description: "Portfolio website for product designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${lora.variable} selection:bg-[#ff6f6f] selection:text-[#f4f4f4]`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
