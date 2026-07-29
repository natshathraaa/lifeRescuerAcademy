import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import stats from "../data/stats.json";

function Counter({ value, suffix, inView }) {
  const [display, setDisplay] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion) {
      setDisplay(value);
      return;
    }
    let raf;
    const duration = 1400;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, prefersReducedMotion]);

  return (
    <span className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export default function Statistics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative bg-navy-900 py-18 md:py-24 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex flex-col items-center justify-center p-2"
          >
            <p className="text-[34px] md:text-[42px] font-bold text-white leading-none tracking-tight">
              <Counter value={s.value} suffix={s.suffix} inView={inView} />
            </p>
            <p className="mt-2.5 text-[12.5px] md:text-[13px] leading-snug tracking-wide text-navy-100 font-semibold max-w-[11rem]">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


