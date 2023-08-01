import "./globals.css";
import type { Metadata } from "next";
import { PT_Sans_Narrow } from "next/font/google";
import Navbar from "./navbar";
import Footer from "./footer";

const inter = PT_Sans_Narrow({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hardik Chhabra",
  description: "Academic Profile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
