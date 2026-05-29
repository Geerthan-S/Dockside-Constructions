"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleLinkHoverEvents = () => {
      const hoverables = document.querySelectorAll(
        "a, button, [role='button'], input, select, textarea, .hoverable"
      );
      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    handleLinkHoverEvents();
    
    // Setup mutation observer to attach events to dynamically added elements
    const observer = new MutationObserver(() => {
      handleLinkHoverEvents();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      observer.disconnect();
    };
  }, [cursorX, cursorY, isVisible]);

  if (typeof window === "undefined") return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-8 w-8 rounded-full mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        opacity: isVisible ? 1 : 0,
        backgroundColor: "white",
      }}
      animate={{
        scale: isHovering ? 2.5 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    />
  );
}
