import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import data from "../data/gallery.json";

const spanClasses = [
  "col-span-2 row-span-2 aspect-square lg:aspect-auto lg:h-full",
  "aspect-square lg:aspect-auto lg:h-full",
  "aspect-square lg:aspect-auto lg:h-full",
  "aspect-square lg:aspect-auto lg:h-full",
  "aspect-square lg:aspect-auto lg:h-full",
];

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const tile = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

function GalleryTile({ item, className }) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-10, 10]);

  return (
    <motion.div
      ref={ref}
      variants={tile}
      whileHover={{ scale: 1.015 }}
      className={`relative rounded-[20px] overflow-hidden group shadow-card hover:shadow-card-hover transition-all duration-300 border border-navy-900/10 ${className}`}
    >
      <motion.img
        style={{ y }}
        src={item.image}
        alt={item.caption}
        loading="lazy"
        className="w-full h-full object-cover scale-[1.1] transition-transform duration-700 ease-out group-hover:scale-125"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 ease-out">
        <p className="text-white font-bold text-[14px] md:text-[15.5px] leading-snug">{item.title}</p>
        <p className="hidden sm:block text-navy-100/80 text-[12px] mt-1.5 leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {item.caption}
        </p>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="bg-surface-soft py-20 md:py-28">
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

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:auto-rows-[190px]"
        >
          {data.items.map((item, i) => (
            <GalleryTile key={item.title} item={item} className={spanClasses[i] || "aspect-square"} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

