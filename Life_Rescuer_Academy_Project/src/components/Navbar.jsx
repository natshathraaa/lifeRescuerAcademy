import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import nav from "../data/nav.json";
import site from "../data/site.json";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-nav shadow-[0_4px_24px_-8px_rgba(11,60,109,0.16)] border-b border-navy-900/[0.06]"
          : "bg-white/80 backdrop-blur-md border-b border-navy-900/[0.04]"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 h-[76px]">
        <a href="#home" className="flex items-center gap-3 shrink-0 group">
          <div className="h-10 w-10 rounded-xl bg-navy-900 grid place-items-center text-gold-400 font-bold text-lg shadow-sm transition-transform duration-300 group-hover:scale-105">
            LR
          </div>
          <span className="flex flex-col leading-tight">
            <span className="font-bold text-navy-900 text-[17px] tracking-tight">{site.name}</span>
            <span className="text-[9.5px] tracking-[0.2em] text-gold-600 font-semibold uppercase">EMERGENCY MEDICAL TRAINING</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {nav.map((item) => {
            const isActive = active === item.href;
            return (
              <li key={item.href} className="relative py-2">
                <a
                  href={item.href}
                  className={`text-[14.5px] font-semibold transition-colors duration-200 ${
                    isActive ? "text-navy-900" : "text-ink-600 hover:text-navy-900"
                  }`}
                >
                  {item.label}
                  {isActive ? (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gold-500 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ) : (
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold-500/60 rounded-full transition-all duration-300 group-hover:w-full" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="btn-shine inline-flex items-center gap-2 rounded-full bg-navy-900 text-white text-[13.5px] font-bold px-6 py-2.5 transition-all duration-300 hover:bg-navy-800 hover:shadow-card-hover hover:scale-[1.02] active:scale-[0.98] shadow-card"
          >
            <FaPhoneAlt size={12} className="text-gold-400" />
            Get In Touch
          </a>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="lg:hidden grid place-items-center w-10 h-10 rounded-lg text-navy-900 bg-navy-50 hover:bg-navy-100 transition-colors"
          aria-label="Open menu"
        >
          <FaBars size={18} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy-950/50 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl px-6 py-6 flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-navy-900/10">
                  <span className="font-bold text-navy-900 text-lg">{site.name}</span>
                  <button onClick={() => setOpen(false)} aria-label="Close menu" className="w-9 h-9 grid place-items-center rounded-lg bg-navy-50 text-navy-900">
                    <FaTimes size={16} />
                  </button>
                </div>
                <ul className="flex flex-col gap-1">
                  {nav.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`block py-3 text-[15.5px] font-semibold border-b border-navy-50 transition-colors ${
                          active === item.href ? "text-gold-600 font-bold" : "text-ink-900"
                        }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-navy-900/10">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 text-white text-sm font-bold px-6 py-3.5 shadow-card"
                >
                  <FaPhoneAlt size={13} className="text-gold-400" />
                  Get In Touch
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

