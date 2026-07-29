import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import site from "../data/site.json";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={`https://wa.me/${site.whatsappHref}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 grid place-items-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-card-hover"
    >
      <FaWhatsapp size={26} />
    </motion.a>
  );
}
