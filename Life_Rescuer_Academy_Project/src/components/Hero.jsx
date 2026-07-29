import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import hero from "../data/hero.json";
import VitalLine from "./VitalLine";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Hero() {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, 45]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative pt-[110px] pb-20 md:pt-[140px] md:pb-28 overflow-hidden bg-navy-50"
    >
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-[11.5px] font-semibold tracking-[0.14em] text-navy-900 shadow-sm uppercase border border-navy-900/10"
          >
            {hero.eyebrow}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-5 font-bold text-[36px] leading-[1.12] sm:text-[44px] md:text-[52px] tracking-tight text-navy-900"
          >
            {hero.headingLine1}
            <br />
            <span className="text-gold-500">{hero.headingLine2}</span>
          </motion.h1>

          <motion.div variants={item} className="mt-4">
            <VitalLine width={200} height={26} strokeWidth={2.5} />
          </motion.div>

          <motion.p variants={item} className="mt-5 max-w-lg text-[15.5px] md:text-[16px] leading-relaxed text-ink-600">
            {hero.subtitle}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={hero.primaryCta.href}
              className="btn-shine inline-flex items-center gap-2 rounded-full bg-navy-900 text-white px-7 py-3.5 text-[14.5px] font-semibold transition-all duration-300 hover:bg-navy-800 hover:shadow-card-hover hover:scale-[1.02] active:scale-[0.98] shadow-card group"
            >
              {hero.primaryCta.label}
              <FaArrowRight className="transition-transform group-hover:translate-x-1.5" size={13} />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="btn-shine btn-shine-dark inline-flex items-center gap-2 rounded-full border border-navy-900/20 bg-white text-navy-900 px-7 py-3.5 text-[14.5px] font-semibold transition-all duration-300 hover:border-navy-900/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              {hero.secondaryCta.label}
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-8 border-t border-navy-900/10 pt-6">
            <div>
              <p className="text-2xl font-bold text-navy-900">500+</p>
              <p className="text-[12.5px] font-medium text-ink-600">Students Trained</p>
            </div>
            <div className="h-8 w-px bg-navy-900/15" />
            <div>
              <p className="text-2xl font-bold text-navy-900">100%</p>
              <p className="text-[12.5px] font-medium text-ink-600">Hands-On Training</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <motion.div style={{ y: imageY }} className="relative rounded-[24px] overflow-hidden shadow-card-hover aspect-[4/3] sm:aspect-[5/4] border border-navy-900/10">
            <img
              src={hero.image}
              alt="Medical CPR and BLS practical training at Life Rescuer Academy"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

