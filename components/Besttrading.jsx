import Image from "next/image";

const platforms = [
  {
    name: "XM",
    image: "/image/xm.png",
    description:
      "A globally recognized platform known for its wide range of instruments and educational resources.",
    link: "https://affs.click/GDCPF",
  },
];

export default function Besttrading() {
  return (
    <section
      id="platforms"
      className="relative py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">

        {/* HEADING */}
        <div className="mb-8 text-center sm:mb-12 lg:mb-14">
          <h2 className="text-[29px] font-bold tracking-[-1px] text-[#f5c84c] sm:text-[38px] md:text-[46px]">
            Best Trading Platform
          </h2>

          <p className="mx-auto mt-2 max-w-[650px] text-[13px] leading-5 text-[#9ca4b2] sm:mt-3 sm:text-[16px] sm:leading-6 md:text-[17px]">
            Global Platform for Trading Forex and Cryptocurrencies
          </p>
        </div>

        {/* XM CARD */}
        <div className="mx-auto w-full max-w-[330px] sm:max-w-[430px]">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              tabIndex={0}
              className="relative flex flex-col items-center rounded-[11px] border border-[#8a6a1d]/80 bg-[#101216]/95 px-5 py-5 text-center shadow-[0_0_18px_rgba(245,190,55,0.06)] outline-none backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-[#d6aa3c] hover:shadow-[0_0_42px_rgba(245,190,55,0.22)] focus:border-[#d6aa3c] focus:shadow-[0_0_42px_rgba(245,190,55,0.22)] active:border-[#d6aa3c] active:shadow-[0_0_42px_rgba(245,190,55,0.28)] sm:min-h-[390px] sm:rounded-[12px] sm:px-8 sm:py-9 lg:min-h-[410px]">

              {/* LOGO */}
              <div className="relative mb-3 h-[52px] w-[70px] sm:mb-5 sm:h-[72px] sm:w-[90px]">
                <Image
                  src={platform.image}
                  alt={`${platform.name} logo`}
                  fill
                  sizes="(max-width: 639px) 70px, 90px"
                  className="object-contain"
                />
              </div>

              {/* NAME */}
              <h3 className="text-[16px] font-bold text-[#f2f2f3] sm:text-[18px]">
                {platform.name}
              </h3>

              {/* GOLD LINE */}
              <div className="mt-2 h-px w-8 bg-[#d6aa3c] sm:mt-3 sm:w-9" />

              {/* DESCRIPTION */}
              <p className="mt-4 max-w-[270px] text-[11px] leading-[1.55] text-[#a3abb8] sm:mt-7 sm:max-w-[310px] sm:text-[13px] sm:leading-[1.6]">
                {platform.description}
              </p>

              {/* DESKTOP/TABLET SPACER */}
              <div className="hidden flex-1 sm:block" />

              {/* SIGNUP BUTTON */}
              <a
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block w-full rounded-[8px] bg-gradient-to-r from-[#f6c83e] to-[#ffcc7a] py-[9px] text-[11px] font-semibold text-[#151515] shadow-[0_6px_20px_rgba(245,190,55,0.12)] transition-[filter,box-shadow] duration-300 hover:brightness-110 hover:shadow-[0_0_28px_rgba(245,190,55,0.25)] active:brightness-110 active:shadow-[0_0_28px_rgba(245,190,55,0.28)] sm:mt-8 sm:rounded-[9px] sm:py-[12px] sm:text-[13px]"
              >
                Signup
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}