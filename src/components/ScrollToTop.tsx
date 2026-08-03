"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setVisible(window.scrollY > 500);
    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 rounded-full border border-cyan-400/30 bg-[#060912]/90 p-3 text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.2)] backdrop-blur"
          aria-label="Scroll to top"
        >
          <FiArrowUp />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
