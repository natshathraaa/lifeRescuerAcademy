import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaArrowRight } from "react-icons/fa";
import site from "../data/site.json";

const cards = [
  {
    icon: FaPhoneAlt,
    label: "Call Us",
    value: site.phone,
    cta: "Call Now",
    href: `tel:${site.phoneHref}`,
    external: false,
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp Us",
    value: site.whatsapp,
    cta: "WhatsApp Us",
    href: `https://wa.me/${site.whatsappHref}`,
    external: true,
  },
  {
    icon: FaEnvelope,
    label: "Email Us",
    value: site.email,
    cta: "Email Us",
    href: `mailto:${site.email}`,
    external: false,
  },
];

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Contact() {
  return (
    <section id="contact" className="relative bg-white py-20 md:py-28 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-[28px] sm:text-[34px] font-bold text-navy-900 tracking-tight">
            Get In Touch With Us
          </h2>
          <p className="mt-4 text-[15.5px] text-ink-600 leading-relaxed">
            Reach out to learn more about our programs, schedule a training session, or plan a
            workshop for your institution.
          </p>
        </motion.div>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {cards.map((c) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noreferrer" : undefined}
              variants={card}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col items-center text-center bg-surface-soft rounded-[24px] p-8 md:p-10 shadow-card transition-all duration-300 border border-navy-900/[0.06] hover:shadow-card-hover hover:border-gold-400/40 overflow-hidden"
            >
              <span className="relative grid place-items-center w-15 h-15 rounded-2xl bg-navy-900 text-gold-400 mb-5 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-navy-950 group-hover:scale-105">
                <c.icon size={22} />
              </span>
              <p className="relative text-[12px] uppercase tracking-[0.14em] text-ink-600 font-semibold">
                {c.label}
              </p>
              <p className="relative mt-2 text-[17px] font-bold text-navy-900 break-all">{c.value}</p>
              <span className="btn-shine relative mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13.5px] font-bold text-navy-900 bg-white group-hover:bg-navy-900 group-hover:text-white transition-all shadow-sm">
                {c.cta}
                <FaArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

