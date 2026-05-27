"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function MouseTrackCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.div
      className={`relative transition-all duration-300 ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      animate={isHovering ? { scale: 1.02 } : { scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{
        pointerEvents: "auto",
      }}
    >
      {/* グロー背景 */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/20 rounded-3xl blur-xl pointer-events-none"
        animate={{ opacity: isHovering ? 1 : 0.3 }}
        transition={{ duration: 0.3 }}
      />

      {children}
    </motion.div>
  );
}