import { motion } from "framer-motion";
import { FaEye, FaBullseye, FaCheckCircle } from "react-icons/fa";
import about from "../data/about.json";
import VitalLine from "./VitalLine";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.08 },
  }),
};

export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Intro: photo + About Us copy */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="rounded-[24px] overflow-hidden shadow-card aspect-[4/3] border border-navy-900/10">
              <motion.img
                src={about.image}
                alt="Trainees practicing CPR during a Life Rescuer Academy session"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-navy-900 text-white rounded-2xl shadow-card-hover px-6 py-4 max-w-[240px] border border-gold-500/20">
              <p className="text-[13px] font-medium leading-relaxed text-navy-100">
                "{about.tagline}"
              </p>
            </div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="text-[28px] sm:text-[34px] font-bold text-navy-900 tracking-tight leading-tight"
            >
              {about.heading}
            </motion.h2>
            <VitalLine className="mt-3" width={160} height={20} />

            <div className="mt-6 space-y-4 max-w-xl">
              {about.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  custom={i + 1}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-[15.5px] leading-relaxed text-ink-600"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            <motion.a
              variants={fadeUp}
              custom={4}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              href={about.cta.href}
              className="btn-shine mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 text-white px-7 py-3.5 text-[14.5px] font-semibold transition-all duration-300 hover:bg-navy-800 hover:shadow-card-hover hover:scale-[1.02] active:scale-[0.98] shadow-card"
            >
              {about.cta.label}
            </motion.a>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="mt-20 md:mt-24 grid lg:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="flex flex-col justify-between rounded-[24px] bg-surface-soft p-8 md:p-10 border border-navy-900/[0.08] shadow-card hover:shadow-card-hover transition-all duration-300"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="grid place-items-center w-12 h-12 rounded-2xl bg-navy-900 text-gold-400 shrink-0">
                  <FaEye size={20} />
                </span>
                <div>
                  <h3 className="text-[22px] font-bold text-navy-900">{about.vision.title}</h3>
                  <VitalLine width={110} height={16} />
                </div>
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
                {about.vision.text}
              </p>
            </div>
            <ul className="mt-6 space-y-3.5 pt-4 border-t border-navy-900/10">
              {about.vision.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FaCheckCircle className="text-gold-500 mt-1 shrink-0" size={14} />
                  <span className="text-[14.5px] leading-snug font-medium text-navy-900">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col justify-between rounded-[24px] bg-surface-soft p-8 md:p-10 border border-navy-900/[0.08] shadow-card hover:shadow-card-hover transition-all duration-300"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="grid place-items-center w-12 h-12 rounded-2xl bg-navy-900 text-gold-400 shrink-0">
                  <FaBullseye size={20} />
                </span>
                <div>
                  <h3 className="text-[22px] font-bold text-navy-900">{about.mission.title}</h3>
                  <VitalLine width={110} height={16} />
                </div>
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
                {about.mission.text}
              </p>
            </div>
            <ul className="mt-6 space-y-3.5 pt-4 border-t border-navy-900/10">
              {about.mission.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FaCheckCircle className="text-gold-500 mt-1 shrink-0" size={14} />
                  <span className="text-[14.5px] leading-snug font-medium text-navy-900">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

