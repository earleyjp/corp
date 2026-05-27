"use client";

import { motion } from "framer-motion";
import { useState, MouseEvent } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  direction: number;
}

export default function GameParticles({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [nextId, setNextId] = useState(0);

  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    if (Math.random() > 0.7) return; // 30% の確率でパーティクルを生成

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newParticles: Particle[] = Array.from({ length: 4 }, (_, i) => ({
      id: nextId + i,
      x,
      y,
      direction: i,
    }));

    setParticles((prev) => [...prev, ...newParticles]);
    setNextId((prev) => prev + 4);

    // 2秒後にパーティクルを削除
    setTimeout(() => {
      setParticles((prev) =>
        prev.filter((p) => !newParticles.some((np) => np.id === p.id))
      );
    }, 2000);
  };

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
    >
      {children}

      {/* パーティクル */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-400 rounded-full pointer-events-none"
          style={{
            left: particle.x,
            top: particle.y,
          }}
          initial={{ scale: 1, opacity: 1 }}
          animate={{
            x: [0, [40, -40, 60, -60][particle.direction]],
            y: [0, [-60, -60, 40, 40][particle.direction]],
            scale: [1, 0],
            opacity: [1, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
