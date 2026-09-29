import Hero from "@/components/Hero";
import Besttrading from "@/components/Besttrading";
import Signal from "@/components/Signals";
import Social from "@/components/Social";
import Giveaway from "@/components/Giveaway";

function MobileDivider() {
  return (
    <div className="flex w-full justify-center lg:hidden">
      <div className="h-[3px] w-[75%] rounded-full bg-gradient-to-r from-transparent via-[#f5c84c] to-transparent shadow-[0_0_14px_rgba(245,200,76,0.45)]" />
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen text-white">
      <Hero />

      <MobileDivider />
      <Signal />

      <MobileDivider />
      <Besttrading />

      <MobileDivider />
      <Giveaway />

      <MobileDivider />
      <Social />
    </main>
  );
}