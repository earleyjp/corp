"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ScanlineOverlay({
  children,
  intensity = "low", // "low" | "medium" | "high"
  animateOnHover = true,
}: {
  children: React.ReactNode;
  intensity?: "low" | "medium" | "high";
  animateOnHover?: boolean;
}) {
  const [isActive, setIsActive] = useState(false);

  const opacityMap = {
    low: 0.05,
    medium: 0.1,
    high: 0.2,
  };

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => animateOnHover && setIsActive(true)}
      onMouseLeave={() => animateOnHover && setIsActive(false)}
    >
      {children}

      {/* スキャンラインオーバーレイ */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, ${opacityMap[intensity]}),
            rgba(0, 0, 0, ${opacityMap[intensity]}) 2px,
            transparent 2px,
            transparent 4px
          )`,
        }}
        animate={
          isActive
            ? {
                y: [0, 4],
              }
            : {}
        }
        transition={{
          duration: 0.1,
          repeat: isActive ? Infinity : 0,
          repeatType: "loop",
        }}
      />

      {/* フリッカーエフェクト */}
      {isActive && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          animate={{ opacity: [1, 1, 1, 0.95, 1] }}
          transition={{
            duration: 0.15,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      )}
    </div>
  );
}
