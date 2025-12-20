"use client";

import { motion, Variants, useAnimation } from "framer-motion";
import { useState } from "react";

import { cn } from "@/lib/utils";

interface WordFadeInProps {
  words: string;
  className?: string;
  delay?: number;
  variants?: Variants;
}

function WordFadeIn({
  words,
  delay = 0.15,
  variants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * delay },
    }),
  },
  className,
}: WordFadeInProps) {
  const _words = words.split(" ");
  const [animationKey, setAnimationKey] = useState(0);

  const handleMouseEnter = () => {
    // Trigger animation by changing key
    setAnimationKey((prev) => prev + 1);
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      className={cn(
        "font-display text-center text-4xl font-bold tracking-[-0.02em] text-white drop-shadow-sm md:text-7xl md:leading-[5rem] cursor-default",
        "font-lobster",
        className,
      )}
    >
      {_words.map((word, i) => {
        const firstLetter = word[0];
        const isC = firstLetter === 'C' || firstLetter === 'c';
        
        return (
          <motion.span 
            key={`${word}-${i}-${animationKey}`} 
            variants={variants} 
            custom={i} 
            className="inline"
            initial={animationKey > 0 ? "hidden" : "visible"}
            animate="visible"
          >
            {isC ? (
              <motion.span
                className="inline-block relative"
                animate={{
                  filter: [
                    "blur(0px) drop-shadow(0 0 0px rgba(20, 184, 166, 0))",
                    "blur(2px) drop-shadow(0 0 8px rgba(20, 184, 166, 0.8)) drop-shadow(0 0 12px rgba(99, 102, 241, 0.6))",
                    "blur(0px) drop-shadow(0 0 0px rgba(20, 184, 166, 0))",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {firstLetter}
              </motion.span>
            ) : (
              firstLetter
            )}
            {word.slice(1)}{" "}
          </motion.span>
        );
      })}
    </motion.div>
  );
}

export { WordFadeIn };

