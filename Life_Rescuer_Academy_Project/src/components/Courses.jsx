import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaHandHoldingHeart,
  FaBriefcaseMedical,
  FaStethoscope,
  FaAmbulance,
  FaBolt,
  FaLungs,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";
import data from "../data/courses.json";
import VitalLine from "./VitalLine";

const Fa = {
  FaHeartbeat,
  FaHandHoldingHeart,
  FaBriefcaseMedical,
  FaStethoscope,
  FaAmbulance,
  FaBolt,
  FaLungs,
  FaArrowRight,
};

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Courses() {
  return (
    <section id="courses" className="relative bg-white py-20 md:py-28 overflow-hidden">
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
          <div className="flex justify-center mt-2">
            <VitalLine width={150} height={20} />
          </div>
        </motion.div>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7"
        >
          {data.items.map((course) => {
            const Icon = Fa[course.icon] || Fa.FaHeartbeat;
            return (
              <motion.div
                key={course.title}
                variants={card}
                whileHover={{ y: -6 }}
                className="group relative bg-surface-soft rounded-[22px] p-7 border border-navy-900/[0.06] shadow-card hover:shadow-card-hover hover:bg-white transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <span className="grid place-items-center w-14 h-14 rounded-2xl bg-navy-900 text-gold-400 shrink-0 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-navy-950 group-hover:scale-105">
                      <Icon size={22} />
                    </span>
                    <div>
                      <h3 className="text-[17.5px] font-bold text-navy-900 leading-tight">{course.title}</h3>
                      <p className="text-[11.5px] text-gold-600 font-semibold tracking-wide uppercase mt-0.5">
                        {course.short}
                      </p>
                    </div>
                  </div>

                  <p className="text-[14px] leading-relaxed text-ink-600">
                    {course.description}
                  </p>

                  {course.bullets && course.bullets.length > 0 && (
                    <ul className="mt-5 space-y-2 border-t border-navy-900/10 pt-4">
                      {course.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-[13px] font-medium text-navy-900">
                          <FaCheck className="text-gold-500 shrink-0 mt-0.5" size={11} />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-navy-900/10 flex justify-between items-center">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-[13.5px] font-bold text-navy-900 group-hover:text-gold-600 transition-colors"
                  >
                    Enroll / Inquire
                    <FaArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="btn-shine inline-flex items-center gap-2 rounded-full bg-navy-900 text-white px-8 py-3.5 text-[14.5px] font-semibold transition-all duration-300 hover:bg-navy-800 hover:shadow-card-hover hover:scale-[1.02] active:scale-[0.98] shadow-card"
          >
            Inquire About Courses
            <FaArrowRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}

