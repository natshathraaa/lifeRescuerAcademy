import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import site from "../data/site.json";
import nav from "../data/nav.json";
import courses from "../data/courses.json";

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { key: "instagram", href: site.instagram, icon: FaInstagram, label: "Instagram" },
    { key: "whatsapp", href: `https://wa.me/${site.whatsappHref}`, icon: FaWhatsapp, label: "WhatsApp" },
    { key: "phone", href: `tel:${site.phoneHref}`, icon: FaPhoneAlt, label: "Call" },
  ];

  return (
    <footer className="bg-navy-950 text-navy-100">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-5 md:px-8 pt-20 pb-10 grid gap-12 md:grid-cols-2 lg:grid-cols-4"
      >
        <div>
          <div className="flex items-center gap-3">
            <span className="rounded-xl bg-white/95 px-2.5 py-1.5 shadow-sm">
              <picture>
                <source srcSet="/brand/logo-icon.webp" type="image/webp" />
                <img
                  src="/brand/logo-icon.png"
                  alt="Life Rescuer Academy emblem"
                  className="h-8 w-auto object-contain shrink-0"
                />
              </picture>
            </span>
            <span className="font-semibold text-white text-[17px]">{site.name}</span>
          </div>
          <p className="mt-5 text-[14px] leading-relaxed text-navy-100/70 max-w-xs">
            Professional hands-on emergency medical training and life-saving certification
            programs for students, healthcare professionals and organizations.
          </p>
        </div>

        <div>
          <h4 className="text-[13px] font-semibold tracking-[0.16em] text-gold-400 uppercase mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-[14.5px] text-navy-100/75 hover:text-white transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[13px] font-semibold tracking-[0.16em] text-gold-400 uppercase mb-5">
            Our Courses
          </h4>
          <ul className="space-y-3">
            {courses.items.slice(0, 5).map((c) => (
              <li key={c.title}>
                <a href="#courses" className="text-[14.5px] text-navy-100/75 hover:text-white transition-colors">
                  {c.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[13px] font-semibold tracking-[0.16em] text-gold-400 uppercase mb-5">
            Contact Info
          </h4>
          <ul className="space-y-3 text-[14.5px] text-navy-100/75">
            <li>{site.phone}</li>
            <li className="break-words">{site.email}</li>
          </ul>
          <div className="flex items-center gap-3 mt-6">
            {socials.map(({ key, href, icon: Icon, label }) => (
              <a
                key={key}
                href={href}
                target={key !== "phone" ? "_blank" : undefined}
                rel={key !== "phone" ? "noreferrer" : undefined}
                aria-label={label}
                className="grid place-items-center w-10 h-10 rounded-full bg-white/5 hover:bg-gold-500 hover:text-navy-950 text-navy-100 transition-all duration-300 hover:scale-110"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] text-navy-100/60">
          <p>&copy; {year} {site.name}. All Rights Reserved.</p>
          <p className="tracking-wide">Learn Today. Save Tomorrow.</p>
        </div>
      </div>
    </footer>
  );
}
