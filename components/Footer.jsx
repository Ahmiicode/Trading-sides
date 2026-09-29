import Link from "next/link";

const TelegramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[17px] w-[17px] fill-current"
  >
    <path d="M21.8 3.2 18.6 20c-.2 1.2-.9 1.5-1.8.9l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9.1-8.2c.4-.4-.1-.6-.6-.2L6.2 13.8l-4.8-1.5c-1-.3-1-1 .2-1.5L20.4 3c.9-.3 1.7.2 1.4.2Z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[17px] w-[17px] fill-current"
  >
    <path d="M12 2a9.7 9.7 0 0 0-8.4 14.6L2 22l5.6-1.5A9.8 9.8 0 1 0 12 2Zm0 17.7a8 8 0 0 1-4.1-1.1l-.3-.2-3.3.9.9-3.2-.2-.3A8 8 0 1 1 12 19.7Zm4.4-6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1-1.4-.7-2.4-1.3-3.3-2.9-.2-.3.2-.3.7-1.1.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 1.8.8 2.5.8 3.4.7 1-.1 1.4-.7 1.6-1.3.2-.6.2-1.1.1-1.3-.1-.2-.2-.2-.4-.3Z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[17px] w-[17px] fill-current"
  >
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[17px] w-[17px] fill-none stroke-current"
    strokeWidth="1.8"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle
      cx="17.5"
      cy="6.5"
      r="1"
      className="fill-current stroke-none"
    />
  </svg>
);

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[18px] w-[18px] fill-none stroke-current"
    strokeWidth="1.8"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[18px] w-[18px] fill-none stroke-current"
    strokeWidth="1.8"
  >
    <path d="M5 4h4l2 5-2.5 1.5a15 15 0 0 0 5 5L15 13l5 2v4c0 1.1-.9 2-2 2C9.7 21 3 14.3 3 6c0-1.1.9-2 2-2Z" />
  </svg>
);

const LocationIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[18px] w-[18px] fill-none stroke-current"
    strokeWidth="1.8"
  >
    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const socialLinks = [
  {
    name: "Telegram",
    href: "https://t.me/Tradingsidesofficial",
    Icon: TelegramIcon,
  },
  {
    name: "WhatsApp",
    href: "https://whatsapp.com/channel/0029Vb8mpn16LwHixN2tza0L",
    Icon: WhatsAppIcon,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@tradingsides?si=O0Io1nwB_ie02jED",
    Icon: YoutubeIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/tradingsides?stkn=ZTJ6dHhvODdoZjJq",
    Icon: InstagramIcon,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.03]">
      <div className="mx-auto max-w-[1440px] px-6 pb-8 pt-14 lg:px-12 lg:pt-16">

        {/* TOP */}
        <div>
          <h2 className="text-[21px] font-bold text-[#f2f3f5] sm:text-[23px]">
            Trading Sides
          </h2>

          <p className="mt-4 max-w-[900px] text-[13px] leading-6 text-[#d5d8de] sm:text-[14px]">
            Empowering traders worldwide with cutting-edge strategies,
            professional education, and unmatched support.
          </p>

          {/* SOCIAL ICONS */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            {socialLinks.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                title={name}
                className="flex h-[40px] w-[40px] items-center justify-center rounded-[10px] border border-[#8a6a1d]/70 bg-[#0b0d11]/70 text-white transition-[border-color,box-shadow,color] duration-300 hover:border-[#f4c44e] hover:text-[#f4c44e] hover:shadow-[0_0_22px_rgba(244,196,78,0.16)]"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* MIDDLE */}
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20 lg:mt-9 lg:grid-cols-[1fr_1fr]">

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-[16px] font-bold text-[#f1f2f4]">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col items-start gap-4">
              <Link
                href="/#services"
                className="text-[14px] text-[#e1e3e7] transition-colors duration-300 hover:text-[#f4c44e]"
              >
                Services
              </Link>

              <Link
                href="/#platforms"
                className="text-[14px] text-[#e1e3e7] transition-colors duration-300 hover:text-[#f4c44e]"
              >
                Platforms
              </Link>

              <Link
                href="/#social"
                className="text-[14px] text-[#e1e3e7] transition-colors duration-300 hover:text-[#f4c44e]"
              >
                Social
              </Link>

              <Link
                href="/giveaway"
                className="text-[14px] text-[#e1e3e7] transition-colors duration-300 hover:text-[#f4c44e]"
              >
                Giveaway
              </Link>

              <Link
                href="/contact"
                className="text-[14px] text-[#e1e3e7] transition-colors duration-300 hover:text-[#f4c44e]"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-[16px] font-bold text-[#f1f2f4]">
              Contact
            </h3>

            <div className="mt-5 space-y-4">

              {/* EMAIL */}
              <a
                href="mailto:support@tradingsides.com"
                className="flex items-center gap-3 text-[14px] text-[#e1e3e7] transition-colors duration-300 hover:text-[#f4c44e]"
              >
                <span className="text-[#f4c44e]">
                  <MailIcon />
                </span>

                <span className="break-all">
                  support@tradingsides.com
                </span>
              </a>

              {/* PHONE */}
              <a
                href="tel:+923030703449"
                className="flex items-center gap-3 text-[14px] text-[#e1e3e7] transition-colors duration-300 hover:text-[#f4c44e]"
              >
                <span className="text-[#f4c44e]">
                  <PhoneIcon />
                </span>

                <span>+92 303 565656</span>
              </a>

              {/* LOCATION */}
              <div className="flex items-center gap-3 text-[14px] text-[#e1e3e7]">
                <span className="text-[#f4c44e]">
                  <LocationIcon />
                </span>

                <span>Pakistan</span>
              </div>

            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-12 h-px w-full bg-white/[0.06]" />

        {/* BOTTOM */}
        <div className="flex flex-col gap-5 pt-7 text-[12px] text-[#d3d6dc] sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} Trading Sides. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
            <Link
              href="/privacy-policy"
              className="transition-colors duration-300 hover:text-[#f4c44e]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors duration-300 hover:text-[#f4c44e]"
            >
              Terms of Service
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}