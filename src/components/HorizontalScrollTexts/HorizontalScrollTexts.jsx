import { useRef } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";

export default function HorizontalScrollTexts({ children }) {
  // Horizontal scroll set up
  const target = useRef("");

  const { scrollYProgress } = useScroll({
    target: target,
  });

  const smoothedScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const x = useTransform(smoothedScrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section className="py-[5rem] overflow-hidden">
      <motion.div
        style={{ x }}
        className="h-[20vh] w-[300vw] flex items-center justify-start bg-neutral-900"
      >
        <h1 className="uppercase font-eb-garamond text-slate-50 text-[20vh] text-nowrap">
          {children}
        </h1>
      </motion.div>
    </section>
  );
}
