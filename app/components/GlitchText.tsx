"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function GlitchText({
  text,
  className = "",
  trigger = "hover", // "hover" | "always"
}: {
  text: string;
  className?: string;
  trigger?: "hover" | "always";
}) {
  const [isGlitching, setIsGlitching] = useState(trigger === "always");

  const handleMouseEnter = () => {
    if (trigger === "hover") {
      setIsGlitching(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === "hover") {
      setIsGlitching(false);
    }
  };

  return (
    <motion.span
      className={`relative inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 元のテキスト */}
      <span className="relative z-0">{text}</span>

      {/* グリッチ効果 1 */}
      {isGlitching && (
        <motion.span
          className="absolute left-0 top-0 text-red-500 opacity-80 font-bold"
          style={{ clip: "var(--clip-1, auto)" }}
          animate={{
            x: [-2, 2, -1, 1, 0],
            y: [-1, 1, -2, 0, 0],
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
        >
          {text}
        </motion.span>
      )}

      {/* グリッチ効果 2 */}
      {isGlitching && (
        <motion.span
          className="absolute left-0 top-0 text-cyan-500 opacity-80 font-bold"
          style={{ clip: "var(--clip-2, auto)" }}
          animate={{
            x: [2, -2, 1, -1, 0],
            y: [1, -1, 2, 0, 0],
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            repeatDelay: 0.5,
            delay: 0.15,
          }}
        >
          {text}
        </motion.span>
      )}
    </motion.span>
  );
}
