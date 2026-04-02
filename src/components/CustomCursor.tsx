import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, [data-clickable]")) {
        setIsHovering(true);
      }
    };

    const handleOut = () => setIsHovering(false);
    const handleLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mouseout", handleOut);
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  // Hide on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-sage/40"
          style={{ x: position.x, y: position.y }}
          animate={{
            width: isHovering ? 48 : 24,
            height: isHovering ? 48 : 24,
            marginLeft: isHovering ? -24 : -12,
            marginTop: isHovering ? -24 : -12,
            opacity: isHovering ? 0.6 : 0.3,
            backgroundColor: isHovering
              ? "hsl(100 15% 55% / 0.1)"
              : "transparent",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
        />
      )}
    </AnimatePresence>
  );
};

export default CustomCursor;
