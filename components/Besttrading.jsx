import Image from "next/image";

const platforms = [
  {
    name: "Elefin",
    image: "/image/elefin.png",
    description:
      "Friction-free forex broker with light-speed execution, razor-thin spreads and instant withdrawals.",
    featured: true,
    link: "https://affs.click/GDCPF",
  },
  {
    name: "FundedFirm",
    image: "/image/fundedfirm.png",
    description: "Start your trading journey today",
    link: "https://my.fundedfirm.com/register?ref=ba9f773acdfed89",
  },
  {
    name: "Vantage Markets",
    image: "/image/vantage.png",
    description:
      "A leading multi-asset broker offering tight spreads, fast execution, and robust trading tools.",
    link: "https://www.vantagemarkets.com/en/open-live-account/?affid=MjMxNDE5NzE=",
  },
  {
    name: "XM",
    image: "/image/xm.png",
    description:
      "A globally recognized platform known for its wide range of instruments and educational resources.",
    link: "#",
  },
  {
    name: "Exness",
    image: "/image/exness.png",
    description:
      "A trusted, multi-asset broker with excellent customer support and fast withdrawals.",
    link: "https://my.exness.global/accounts/sign-up/?utm_source=partners&ex_ol=1",
  },
  {
    name: "Delta",
    image: "/image/delta.png",
    description:
      "Specializes in cryptocurrency derivatives, offering innovative products for crypto traders.",
    link: "https://www.delta.exchange/?code=tradersparadise",
  },
];

export default function Besttrading() {
  return (
    <section id="platforms" className="relative py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">

        {/* ================= HEADING ================= */}
        <div className="mb-14 text-center">
          <h2 className="text-[38px] font-bold tracking-[-1px] text-[#f5c84c] md:text-[46px]">
            Best Trading Platforms
          </h2>

          <p className="mt-3 text-[16px] text-[#9ca4b2] md:text-[17px]">
            Global Platforms for Trading Forex and Cryptocurrencies
          </p>
        </div>

        {/* ================= CARDS ================= */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className={`relative flex min-h-[410px] flex-col items-center rounded-[11px] border px-8 py-9 text-center backdrop-blur-sm transition-[border-color,box-shadow] duration-300 ${
                platform.featured
                  ? "border-[#1688ff]/80 bg-[#0b111b]/95 shadow-[0_8px_30px_rgba(0,0,0,0.28)] hover:border-[#2b9cff] hover:shadow-[0_0_42px_rgba(0,119,255,0.30)]"
                  : "border-[#8a6a1d]/80 bg-[#101216]/95 shadow-[0_8px_30px_rgba(0,0,0,0.28)] hover:border-[#d6aa3c] hover:shadow-[0_0_42px_rgba(245,190,55,0.22)]"
              }`}
            >

              {/* ================= FEATURED ================= */}
              {platform.featured && (
                <div className="mb-5 flex items-center gap-3 text-[9px] font-bold tracking-[3px] text-[#f5c84c]">
                  <span className="h-px w-5 bg-[#806a2b]" />

                  FEATURED

                  <span className="h-px w-5 bg-[#806a2b]" />
                </div>
              )}

              {/* ================= LOGO ================= */}
              <div className="relative mb-5 h-[72px] w-[90px]">
                <Image
                  src={platform.image}
                  alt={`${platform.name} logo`}
                  fill
                  sizes="90px"
                  className="object-contain"
                />
              </div>

              {/* ================= NAME ================= */}
              <h3 className="text-[17px] font-bold text-[#f2f2f3]">
                {platform.name}
              </h3>

              {/* Featured blue underline */}
              {platform.featured && (
                <div className="mt-2 h-px w-9 bg-[#208aff]" />
              )}

              {/* ================= DESCRIPTION ================= */}
              <p className="mt-8 max-w-[310px] text-[13px] leading-[1.6] text-[#a3abb8]">
                {platform.description}
              </p>

              {/* Keeps all buttons aligned */}
              <div className="flex-1" />

              {/* ================= SIGNUP BUTTON ================= */}
              {platform.link === "#" ? (
                <button
                  type="button"
                  className="mt-8 block w-full cursor-default rounded-[9px] bg-gradient-to-r from-[#f6c83e] to-[#ffcc7a] py-[12px] text-[13px] font-semibold text-[#151515]"
                >
                  Signup
                </button>
              ) : (
                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 block w-full rounded-[9px] py-[12px] text-[13px] font-semibold transition-all duration-300 ${
                    platform.featured
                      ? "bg-[#1976ed] text-white shadow-[0_6px_20px_rgba(25,118,237,0.22)] hover:bg-[#2788ff] hover:shadow-[0_8px_25px_rgba(25,118,237,0.32)]"
                      : "bg-gradient-to-r from-[#f6c83e] to-[#ffcc7a] text-[#151515] shadow-[0_6px_20px_rgba(245,190,55,0.12)] hover:brightness-110"
                  }`}
                >
                  Signup
                </a>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}