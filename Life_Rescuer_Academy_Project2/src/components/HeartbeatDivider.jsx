import { motion, useReducedMotion } from "framer-motion";

/**
 * HeartbeatDivider — full-width ECG trace with realistic medical pulses (P, QRS, T waves)
 */
export default function HeartbeatDivider({ className = "", color = "var(--color-gold-500)" }) {
  const prefersReducedMotion = useReducedMotion();

  // Repeating ECG waveform across 1440px viewbox
  const path = "M 0 30 H 280 Q 300 20, 320 30 H 345 L 357 38 L 377 6 L 397 54 L 413 30 H 435 Q 460 16, 485 30 H 760 Q 780 20, 800 30 H 825 L 837 38 L 857 6 L 877 54 L 893 30 H 915 Q 940 16, 965 30 H 1440";

  return (
    <div className={`relative w-full overflow-hidden ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[32px] md:h-[42px]">
        <motion.path
          d={path}
          fill="none"
          stroke={color}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={prefersReducedMotion ? { pathLength: 1, opacity: 0.4 } : { pathLength: 0, opacity: 0.4 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

