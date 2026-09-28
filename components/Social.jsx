const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white">
    <path d="M21.8 3.2 18.6 20c-.2 1.2-.9 1.5-1.8.9l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9.1-8.2c.4-.4-.1-.6-.6-.2L6.2 13.8l-4.8-1.5c-1-.3-1-1 .2-1.5L20.4 3c.9-.3 1.7.2 1.4.2Z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white">
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-6 w-6 fill-none stroke-white"
    strokeWidth="2"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" className="fill-white stroke-none" />
  </svg>
);

const DiscordIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-6 w-6 fill-none stroke-white"
    strokeWidth="2"
  >
    <path d="M8 18.5 5 20l1-3.5A7 7 0 1 1 8 18.5Z" />
  </svg>
);

const XIcon = () => (
  <span className="text-[23px] font-normal leading-none text-white">
    𝕏
  </span>
);

const socials = [
  {
    name: "Telegram",
    username: "@tradersparadise",
    description: "Real-time trading signals and market analysis",
    button: "Follow on Telegram",
    link: "https://t.me/tradersparadise",
    Icon: TelegramIcon,
    iconBox: "bg-[#129bd8]",
    buttonStyle:
      "border-[#0786bd] bg-[#06334a] hover:bg-[#084560]",
  },
  {
    name: "YouTube",
    username: "@TradersParadise...",
    description: "Educational content and market breakdowns",
    button: "Follow on YouTube",
    link: "https://youtube.com/",
    Icon: YoutubeIcon,
    iconBox: "bg-[#ff0018]",
    buttonStyle:
      "border-[#c50d19] bg-[#68080d] hover:bg-[#850b12]",
  },
  {
    name: "X",
    username: "@TradersParadise",
    description: "Market updates and quick insights",
    button: "Follow on X",
    link: "https://x.com/",
    Icon: XIcon,
    iconBox: "bg-black",
    buttonStyle:
      "border-[#22252b] bg-[#090a0c] hover:bg-[#15171a]",
  },
  {
    name: "Instagram",
    username: "@traders.paradise",
    description: "Behind the scenes and lifestyle content",
    button: "Follow on Instagram",
    link: "https://instagram.com/",
    Icon: InstagramIcon,
    iconBox: "bg-[#df345e]",
    buttonStyle:
      "border-[#a93651] bg-[#541724] hover:bg-[#6b1c2d]",
  },
  {
    name: "Discord",
    username: "Traders Paradise",
    description:
      "Join our community for live discussions and trading chat",
    button: "Follow on Discord",
    link: "https://discord.com/",
    Icon: DiscordIcon,
    iconBox: "bg-[#5865f2]",
    buttonStyle:
      "border-[#5865f2] bg-[#202550] hover:bg-[#292f67]",
  },
];

export default function Social() {
  return (
    <section id="social" className="relative py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">

        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-[38px] font-bold tracking-[-1px] text-[#f5c84c] md:text-[46px]">
            Connect With Us
          </h2>

          <p className="mx-auto mt-3 max-w-[680px] text-[16px] leading-7 text-[#9da6b5] md:text-[18px]">
            Join our growing community across all platforms for exclusive
            content and insights
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {socials.map((social) => {
            const Icon = social.Icon;

            return (
              <div
                key={social.name}
                className="flex min-h-[220px] flex-col rounded-[12px] border border-[#806621]/80 bg-[#0e1014]/90 p-6 shadow-[0_10px_35px_rgba(0,0,0,0.20)] transition-[border-color,box-shadow] duration-300 hover:border-[#d6aa3c] hover:shadow-[0_0_35px_rgba(245,190,55,0.16)]"
              >
                {/* Top */}
                <div className="flex items-center gap-4">

                  {/* Icon */}
                  <div
                    className={`flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[12px] ${social.iconBox}`}
                  >
                    <Icon />
                  </div>

                  {/* Social Info */}
                  <div className="min-w-0">
                    <h3 className="text-[16px] font-bold text-[#f1f2f4]">
                      {social.name}
                    </h3>

                    <p className="mt-1 truncate text-[12px] text-[#9da6b5]">
                      {social.username}
                    </p>
                  </div>

                </div>

                {/* Description */}
                <p className="mt-6 text-[13px] leading-[1.6] text-[#9da6b5]">
                  {social.description}
                </p>

                {/* Push button to bottom */}
                <div className="flex-1" />

                {/* Button */}
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-5 block w-full rounded-[9px] border py-[11px] text-center text-[13px] font-semibold text-white transition-all duration-300 ${social.buttonStyle}`}
                >
                  {social.button}
                </a>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}