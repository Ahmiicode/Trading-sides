import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Besttrading from "@/components/Besttrading";
import Signal from "@/components/Signals";
import ContactForm from "@/components/contact";
import Social from "@/components/Social";

export default function Page() {
  return (
    <main className="min-h-screen text-white">
      <Navbar />
      <Hero />
      <Signal/>
      <Social/>
      <Besttrading/>
      <ContactForm/>
    </main>
  );
}