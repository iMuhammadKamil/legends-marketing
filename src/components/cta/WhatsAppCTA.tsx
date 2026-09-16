import { contact } from "@/data/contact";

interface WhatsAppCTAProps {
  message?: string;
}

export default function WhatsAppCTA({ message }: WhatsAppCTAProps) {
  const text = encodeURIComponent(
    message ??
      "Hello Legends Marketing, I am interested in real estate investment."
  );
  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.2 1.6 6L4 29l8.2-1.5c1.2.4 2.5.5 3.8.5 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.8c-1.8 0-3.5-.5-5-1.3l-.4-.2-4.8.9 1-4.7-.3-.5c-1-1.7-1.5-3.6-1.5-5.5 0-5.5 4.5-9.9 10-9.9s10 4.4 10 9.9-4.5 9.3-10 9.3zm5.5-7.4c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0c-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1s0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5s0-.4 0-.6c-.1-.2-.7-1.6-.9-2.2s-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.1.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.4z" />
      </svg>
    </a>
  );
}