import type { Metadata } from "next";
import "./globals.css";
import Header from "@/src/components/Layout/Header";
import { Ubuntu, IBM_Plex_Mono } from "next/font/google";
import Navbar from "@/src/components/Navbar/Navbar";
import Footer from "@/src/components/Layout/Footer";
import { Toaster } from "react-hot-toast";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ubuntu",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Hamidreza Nemati | Front-end Developer",
  icons: {
    icon: "/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.variable} ${ibmPlexMono.variable} antialiased`}
      >
        <Header />
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
