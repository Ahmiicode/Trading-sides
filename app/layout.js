import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Trading Sides",
  description: "Where Precision Meets Performance",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">

        {/* GLOBAL BACKGROUND */}
        <AnimatedBackground />

        {/* GLOBAL NAVBAR */}
        <div className="relative z-50">
          <Navbar />
        </div>

        {/* WEBSITE CONTENT */}
        <main className="relative z-10 min-h-screen">
          {children}
        </main>

        {/* GLOBAL FOOTER */}
        <div className="relative z-10">
          <Footer />
        </div>

        {/* GLOBAL WHATSAPP BUTTON */}
        <WhatsApp />

      </body>
    </html>
  );
}