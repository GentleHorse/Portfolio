import { useRef, useEffect } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
} from "framer-motion";

export default function SmoothScroll({ children }) {
  const target = useRef("");

  const { scrollYProgress } = useScroll({
    target: target,
  });

  const smoothedScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const y = useTransform(smoothedScrollYProgress, [0, 1], ["0%", "-100%"]);

  return <motion.div style={{ y }}>{children}</motion.div>;
}
