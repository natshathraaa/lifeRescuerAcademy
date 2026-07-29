import { motion, useReducedMotion } from "framer-motion";

/**
 * VitalLine — signature ECG heartbeat motif with realistic medical waveform (P wave, QRS complex, T wave).
 */
export default function VitalLine({
  className = "",
  color = "var(--color-gold-500)",
  width = 180,
  height = 24,
  strokeWidth = 2.2,
  delay = 0,
}) {
  const prefersReducedMotion = useReducedMotion();
  const baseline = height * 0.6;
  const pWaveHeight = height * 0.4;
  const rPeakHeight = height * 0.1;
  const sDipHeight = height * 0.92;
  const qDipHeight = height * 0.72;
  const tWaveHeight = height * 0.32;

  const path = `M 0 ${baseline} H ${width * 0.22} Q ${width * 0.27} ${pWaveHeight}, ${width * 0.32} ${baseline} H ${width * 0.38} L ${width * 0.41} ${qDipHeight} L ${width * 0.46} ${rPeakHeight} L ${width * 0.51} ${sDipHeight} L ${width * 0.55} ${baseline} H ${width * 0.61} Q ${width * 0.67} ${tWaveHeight}, ${width * 0.73} ${baseline} H ${width}`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      fill="none"
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      <motion.path
        d={path}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={prefersReducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: "easeInOut", delay }}
      />
    </svg>
  );
}

