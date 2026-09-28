export default function WhatsApp() {
  const phoneNumber = "923449";

  const message =
    "Hi Traders Paradise, I would like to know more about your services.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-[9999] flex h-[58px] w-[58px] items-center justify-center rounded-full border border-[#25D366]/70 bg-[#25D366] shadow-[0_6px_25px_rgba(0,0,0,0.30)] transition-[box-shadow,border-color] duration-300 hover:border-[#54ef8d] hover:shadow-[0_0_38px_rgba(37,211,102,0.55)]"
    >
      {/* Tooltip */}
      <div className="pointer-events-none absolute right-[72px] whitespace-nowrap rounded-[8px] border border-[#25D366]/25 bg-[#101216]/95 px-4 py-[9px] text-[12px] font-semibold text-white opacity-0 shadow-[0_8px_25px_rgba(0,0,0,0.30)] backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
        Chat on WhatsApp
      </div>

      {/* WhatsApp Icon */}
      <svg
        viewBox="0 0 32 32"
        className="h-[31px] w-[31px] fill-white"
        aria-hidden="true"
      >
        <path d="M16.04 3C9.39 3 4 8.29 4 14.82c0 2.28.66 4.5 1.91 6.39L4 28l7-1.83a12.2 12.2 0 0 0 5.04 1.08h.01C22.7 27.25 28 21.96 28 15.43 28 8.89 22.69 3 16.04 3Zm0 21.98a9.9 9.9 0 0 1-5.03-1.37l-.36-.21-4.15 1.09 1.11-4.02-.23-.37a9.63 9.63 0 0 1-1.5-5.16c0-5.36 4.55-9.72 10.15-9.72 5.6 0 10.16 4.36 10.16 9.72 0 5.37-4.55 10.04-10.15 10.04Zm5.57-7.29c-.3-.15-1.8-.87-2.08-.97-.28-.1-.48-.15-.69.15-.2.3-.79.97-.97 1.17-.18.2-.36.22-.66.07-.3-.15-1.28-.46-2.43-1.48-.9-.78-1.5-1.74-1.68-2.04-.18-.3-.02-.46.13-.61.14-.13.3-.35.46-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.68-1.62-.94-2.22-.25-.6-.5-.51-.69-.52h-.58c-.2 0-.53.07-.81.37-.28.3-1.07 1.03-1.07 2.5s1.1 2.9 1.25 3.1c.15.2 2.16 3.23 5.23 4.53.73.31 1.3.5 1.74.64.73.23 1.4.2 1.93.12.59-.09 1.8-.72 2.05-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z" />
      </svg>
    </a>
  );
}