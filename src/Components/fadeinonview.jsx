"use client";

import { motion, useAnimation } from "framer-motion"; // eslint-disable-line no-unused-vars
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function FadeInOnView({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // Ubah threshold jika perlu
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    } else {
      // Reset animasi jika keluar dari viewport
      controls.start({ opacity: 0, y: 100 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
}
