import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  const phoneNumber = "91 9876543210";

  const message = encodeURIComponent(
    "Hi Synent Technologies 👋 I visited your website and want to know more."
  );

  const waLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-[999] group">

      {/* TOOLTIP */}
      <span
        className="absolute right-16 top-1/2 -translate-y-1/2
        bg-black text-white text-sm px-3 py-1 rounded-lg
        opacity-0 group-hover:opacity-100 transition whitespace-nowrap"
      >
        Chat with us
      </span>

      {/* BUTTON */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600
        text-white p-4 rounded-full
        shadow-2xl flex items-center justify-center
        transition-transform hover:scale-110"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

    </div>
  );
};

export default WhatsAppFloat;