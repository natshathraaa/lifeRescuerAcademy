import { motion } from "framer-motion";
import {
  FaHandsHelping,
  FaClipboardCheck,
  FaCertificate,
  FaHospital,
  FaCalendarCheck,
  FaHeartbeat,
  FaUsers,
} from "react-icons/fa";
import { GiDoctorFace } from "react-icons/gi";
import data from "../data/whyChooseUs.json";
import VitalLine from "./VitalLine";

const iconSets = {
  GiDoctorFace,
  FaHandsHelping,
  FaClipboardCheck,
  FaCertificate,
  FaHospital,
  FaCalendarCheck,
  FaHeartbeat,
  FaUsers,
};

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative bg-navy-50 py-20 md:py-28 overflow-hidden">
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
          <p className="mt-4 text-[15.5px] text-ink-600 leading-relaxed">{data.subtitle}</p>
        </motion.div>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {data.items.map((item) => {
            const Icon = iconSets[item.icon] || FaHeartbeat;
            return (
              <motion.div
                key={item.title}
                variants={card}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-2xl p-7 shadow-card transition-all duration-300 border border-navy-900/[0.04] hover:shadow-card-hover hover:border-gold-400/40"
              >
                <span className="grid place-items-center w-13 h-13 rounded-2xl bg-navy-900 text-gold-400 mb-5 transition-transform duration-300 group-hover:scale-105 group-hover:bg-gold-500 group-hover:text-navy-950">
                  <Icon size={22} />
                </span>
                <h3 className="text-[17px] font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-[14px] leading-relaxed text-ink-600">{item.text}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

