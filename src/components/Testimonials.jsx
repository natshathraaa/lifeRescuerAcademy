import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import data from "../data/testimonials.json";

function TestimonialCard({ t }) {
  return (
    <div className="w-[280px] sm:w-[340px] shrink-0 bg-white rounded-[22px] shadow-card hover:shadow-card-hover p-7 border border-navy-900/[0.06] hover:border-gold-400/40 flex flex-col justify-between transition-all duration-300">
      <FaQuoteLeft className="text-gold-500 shrink-0" size={24} />
      <p className="mt-4 text-[14.5px] leading-relaxed font-medium text-navy-900 flex-1">"{t.quote}"</p>
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
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}


