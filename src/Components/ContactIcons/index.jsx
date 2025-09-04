import React from "react";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";

const ContactIcons = () => {
  const telegramUsername = "Cipervibeshadow"; 
  const telegramLink = `https://t.me/${telegramUsername}`;

  const icons = [
    {
      href: "https://wa.me/18352241629", // WhatsApp
      bg: "bg-green-500",
      Icon: MessageCircle,
    },
    {
      href: "tel:+18352241629", // Call
      bg: "bg-gray-500",
      Icon: Phone,
    },
    {
      href: telegramLink, 
      bg: "bg-sky-500",
      Icon: Send,
    },
    {
      href: "mailto:Ciphervibeshadow@gmail.com", // Email
      bg: "bg-red-500",
      Icon: Mail,
    },
  ];

  return (
    <div className="flex justify-center gap-6 mt-6">
      {icons.map(({ href, bg, Icon }, i) => (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-12 h-12 flex items-center justify-center rounded-full ${bg} text-white 
            transition-transform duration-300 hover:scale-125 hover:rotate-6 shadow-lg`}
        >
          <Icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
};

export default ContactIcons;
