import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";
import Chatbot from "@/components/Chatbot";

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
  icons: {
    icon: [
      {
        url: "/image/logo.jpeg",
        type: "image/jpeg",
      },
    ],
    apple: "/image/logo.png",
  },
};;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#07090d] lg:bg-transparent">

        <AnimatedBackground />

        <div className="relative z-50">
          <Navbar />
        </div>

        <main className="relative z-10 min-h-screen">
          {children}
        </main>

        <div className="relative z-10">
          <Footer />
        </div>

        <WhatsApp />

        <Chatbot />

      </body>
    </html>
  );
}