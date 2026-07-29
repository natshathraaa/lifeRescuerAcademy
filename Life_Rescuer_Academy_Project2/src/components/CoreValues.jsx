import { motion } from "framer-motion";
import {
  FaHeart,
  FaGraduationCap,
  FaHandshake,
  FaBookOpen,
  FaTrophy,
  FaGlobeAsia,
} from "react-icons/fa";
import data from "../data/coreValues.json";

const icons = { FaHeart, FaGraduationCap, FaHandshake, FaBookOpen, FaTrophy, FaGlobeAsia };

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function CoreValues() {
  return (
    <section className="relative bg-surface-soft py-20 md:py-28 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
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
          <p className="mt-4 text-[15.5px] text-ink-600 leading-relaxed">{data.subtitle}</p>
        </motion.div>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {data.items.map((item) => {
            const Icon = icons[item.icon] || FaHeart;
            return (
              <motion.div
                key={item.title}
                variants={card}
                whileHover={{ y: -5 }}
                className="group relative flex items-start gap-4 bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-navy-900/[0.04] hover:border-gold-400/40"
              >
                <span className="grid place-items-center w-12 h-12 rounded-xl bg-gold-100 text-gold-600 shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <Icon size={18} />
                </span>
                <div>
                  <h3 className="text-[16px] font-bold text-navy-900">{item.title}</h3>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-ink-600">{item.text}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

