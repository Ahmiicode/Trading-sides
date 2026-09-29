
import Hero from "@/components/Hero";
import Besttrading from "@/components/Besttrading";
import Signal from "@/components/Signals";
import Social from "@/components/Social";
import Giveaway from "@/components/Giveaway";
export default function Page() {
  return (
    <main className="min-h-screen text-white">
    
      <Hero />
      <Signal/>
      
      <Besttrading/>
      <Giveaway/>
       <Social/>
     
    </main>
  );
}