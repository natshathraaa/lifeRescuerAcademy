import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import data from "../data/testimonials.json";
import VitalLine from "./VitalLine";

function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function TestimonialCard({ t }) {
  return (
    <div className="w-[300px] sm:w-[350px] shrink-0 bg-white rounded-2xl shadow-card hover:shadow-card-hover p-7 border border-navy-900/[0.05] hover:border-gold-400/40 flex flex-col transition-all duration-300">
      <FaQuoteLeft className="text-gold-500/80" size={20} />
      <p className="mt-4 text-[14.5px] leading-relaxed text-ink-600 flex-1">{t.quote}</p>
      <div className="mt-6 flex items-center gap-3 pt-4 border-t border-navy-900/10">
        {t.photo ? (
          <img
            src={t.photo}
            alt={t.name}
            className="w-10 h-10 rounded-full object-cover shrink-0"
          />
        ) : (
          <span className="grid place-items-center w-10 h-10 rounded-full bg-navy-900 text-gold-400 text-[12.5px] font-bold shrink-0">
            {initials(t.name)}
          </span>
        )}
        <div>
          <p className="text-[14px] font-bold text-navy-900 leading-tight">{t.name}</p>
          <p className="text-[12px] font-medium text-ink-600">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const track = [...data.items, ...data.items];

  return (
    <section id="testimonials" className="bg-navy-50 py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-[28px] sm:text-[34px] font-bold text-navy-900 tracking-tight">
            {data.heading}
          </h2>
          <div className="flex justify-center mt-2">
            <VitalLine width={150} height={20} />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
        className="mt-14 relative"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-navy-50 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-navy-50 to-transparent z-10" />

        <div className="overflow-hidden">
          <div className="marquee-track flex gap-6 w-max px-5 md:px-8">
            {track.map((t, i) => (
              <TestimonialCard key={`${t.name}-${i}`} t={t} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

