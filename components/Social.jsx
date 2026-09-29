const TelegramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5 fill-white sm:h-6 sm:w-6"
  >
    <path d="M21.8 3.2 18.6 20c-.2 1.2-.9 1.5-1.8.9l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9.1-8.2c.4-.4-.1-.6-.6-.2L6.2 13.8l-4.8-1.5c-1-.3-1-1 .2-1.5L20.4 3c.9-.3 1.7.2 1.4.2Z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5 fill-white sm:h-6 sm:w-6"
  >
    <path d="M12 2a9.7 9.7 0 0 0-8.4 14.6L2 22l5.6-1.5A9.8 9.8 0 1 0 12 2Zm0 17.7a8 8 0 0 1-4.1-1.1l-.3-.2-3.3.9.9-3.2-.2-.3A8 8 0 1 1 12 19.7Zm4.4-6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1-1.4-.7-2.4-1.3-3.3-2.9-.2-.3.2-.3.7-1.1.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 1.8.8 2.5.8 3.4.7 1-.1 1.4-.7 1.6-1.3.2-.6.2-1.1.1-1.3-.1-.2-.2-.2-.4-.3Z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5 fill-white sm:h-6 sm:w-6"
  >
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5 fill-none stroke-white sm:h-6 sm:w-6"
    strokeWidth="2"
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
    />

    <circle
      cx="12"
      cy="12"
      r="4"
    />

    <circle
      cx="17.5"
      cy="6.5"
      r="1"
      className="fill-white stroke-none"
    />
  </svg>
);

const socials = [
  {
    name: "Telegram",
    username: "@Tradingsidesofficial",
    description: "Real-time trading signals and market analysis",
    button: "Follow on Telegram",
    link: "https://t.me/Tradingsidesofficial",
    Icon: TelegramIcon,
    iconBox: "bg-[#129bd8]",
    buttonStyle:
      "border-[#0786bd] bg-[#06334a] hover:bg-[#084560] active:bg-[#084560]",
  },

  {
    name: "WhatsApp",
    username: "Trading Sides",
    description: "Trading updates, announcements and community content",
    button: "Follow on WhatsApp",
    link: "https://whatsapp.com/channel/0029Vb8mpn16LwHixN2tza0L",
    Icon: WhatsAppIcon,
    iconBox: "bg-[#25D366]",
    buttonStyle:
      "border-[#1d9f50] bg-[#0d4828] hover:bg-[#126038] active:bg-[#126038]",
  },

  {
    name: "YouTube",
    username: "@tradingsides",
    description: "Educational content and market breakdowns",
    button: "Follow on YouTube",
    link: "https://youtube.com/@tradingsides?si=O0Io1nwB_ie02jED",
    Icon: YoutubeIcon,
    iconBox: "bg-[#ff0018]",
    buttonStyle:
      "border-[#c50d19] bg-[#68080d] hover:bg-[#850b12] active:bg-[#850b12]",
  },

  {
    name: "Instagram",
    username: "@tradingsides",
    description: "Behind the scenes and trading lifestyle content",
    button: "Follow on Instagram",
    link: "https://www.instagram.com/tradingsides?stkn=ZTJ6dHhvODdoZjJq",
    Icon: InstagramIcon,
    iconBox: "bg-[#df345e]",
    buttonStyle:
      "border-[#a93651] bg-[#541724] hover:bg-[#6b1c2d] active:bg-[#6b1c2d]",
  },
];

export default function Social() {
  return (
    <section
      id="social"
      className="relative py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">

        {/* HEADING */}
        <div className="mb-10 text-center sm:mb-14 lg:mb-16">
          <h2 className="text-[32px] font-bold tracking-[-1px] text-[#f5c84c] sm:text-[38px] md:text-[46px]">
            Connect With Us
          </h2>

          <p className="mx-auto mt-3 max-w-[680px] text-[14px] leading-6 text-[#9da6b5] sm:text-[16px] sm:leading-7 md:text-[18px]">
            Join our growing community across all platforms for exclusive
            content and insights
          </p>
        </div>

        {/* SOCIAL CARDS */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {socials.map((social) => {
            const Icon = social.Icon;

            return (
              <div
                key={social.name}
                tabIndex={0}
                className="flex min-w-0 flex-col rounded-[12px] border border-[#806621]/80 bg-[#0e1014]/90 p-3.5 shadow-[0_0_18px_rgba(245,190,55,0.05)] outline-none transition-[border-color,box-shadow] duration-300 hover:border-[#d6aa3c] hover:shadow-[0_0_35px_rgba(245,190,55,0.16)] focus:border-[#d6aa3c] focus:shadow-[0_0_35px_rgba(245,190,55,0.16)] active:border-[#d6aa3c] active:shadow-[0_0_35px_rgba(245,190,55,0.22)] sm:p-5 lg:min-h-[220px] lg:p-6"
              >

                {/* TOP */}
                <div className="flex min-w-0 items-center gap-2.5 sm:gap-4">

                  {/* ICON */}
                  <div
                    className={`flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[10px] sm:h-[48px] sm:w-[48px] sm:rounded-[12px] ${social.iconBox}`}
                  >
                    <Icon />
                  </div>

                  {/* SOCIAL INFO */}
                  <div className="min-w-0">
                    <h3 className="truncate text-[13px] font-bold text-[#f1f2f4] sm:text-[16px]">
                      {social.name}
                    </h3>

                    <p className="mt-0.5 truncate text-[9px] text-[#9da6b5] sm:mt-1 sm:text-[12px]">
                      {social.username}
                    </p>
                  </div>

                </div>

                {/* DESCRIPTION */}
                <p className="mt-4 text-[11px] leading-[1.55] text-[#9da6b5] sm:mt-6 sm:text-[13px] sm:leading-[1.6]">
                  {social.description}
                </p>

                <div className="flex-1" />

                {/* BUTTON */}
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-4 block w-full rounded-[8px] border px-1 py-[9px] text-center text-[10px] font-semibold text-white transition-[background-color,box-shadow,border-color] duration-300 sm:mt-5 sm:rounded-[9px] sm:py-[11px] sm:text-[13px] ${social.buttonStyle}`}
                >
                  <span className="sm:hidden">
                    {social.name}
                  </span>

                  <span className="hidden sm:inline">
                    {social.button}
                  </span>
                </a>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}