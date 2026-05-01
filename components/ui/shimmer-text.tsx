"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ShimmerTextProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
}

export function ShimmerText({
  children,
  className,
  duration = 3,
  delay = 0.5,
}: ShimmerTextProps) {
  return (
    <motion.h1
      className={cn("inline-block", className)}
      style={{
        background:
          "linear-gradient(to right, #ffffff 0%, #ffffff 20%, #FDE047 40%, #ffffff 55%, #ffffff 100%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      initial={{ backgroundPositionX: "150%" }}
      animate={{ backgroundPositionX: ["-100%", "150%"] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "linear",
      }}
    >
      {children}
    </motion.h1>
  );
}

export default ShimmerText;
