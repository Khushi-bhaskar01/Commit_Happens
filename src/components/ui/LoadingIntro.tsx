"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TOTAL_FRAMES = 169;
const FRAME_RATE = 24;

const TITLE_CHARS_1 = "COMMIT".split("");
const TITLE_CHARS_2 = "HAPPENS".split("");

export function LoadingIntro({ onComplete }: { onComplete: () => void }) {
  const [frameIndex, setFrameIndex] = useState(1);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prev) => {
        if (prev >= TOTAL_FRAMES) {
          clearInterval(interval);
          setTimeout(() => setShowTitle(true), 80);
          return prev;
        }
        return prev + 1;
      });
    }, 1000 / FRAME_RATE);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (showTitle) {
      // Show title for 2.8s then fade the whole screen out
      const timer = setTimeout(() => onComplete(), 2800);
      return () => clearTimeout(timer);
    }
  }, [showTitle, onComplete]);

  // Preload frames
  useEffect(() => {
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = document.createElement("img");
      img.src = `/frames/frame_${String(i).padStart(4, "0")}.jpg`;
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] bg-black overflow-hidden flex items-center justify-center"
    >
      {/* --- Frame sequence --- */}
      <AnimatePresence>
        {!showTitle && (
          <motion.div
            key="frames"
            className="absolute inset-0"
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            <motion.div
              className="w-full h-full bg-center bg-cover"
              animate={{
                x: [0, -1.5, 1.5, -1, 1, 0],
                y: [0, 1, -1, 1.5, -1.5, 0],
              }}
              transition={{ duration: 0.08, repeat: Infinity }}
              style={{
                backgroundImage: `url('/frames/frame_${String(frameIndex).padStart(4, "0")}.jpg')`,
                filter: "contrast(1.25) brightness(0.75)",
              }}
            />
            {/* vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,black_100%)] opacity-75" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
            {/* scanlines */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.15] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.4)_2px,rgba(0,0,0,0.4)_4px)]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Title reveal --- */}
      <AnimatePresence>
        {showTitle && (
          <motion.div
            key="title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 flex flex-col items-center select-none"
          >
            {/* Top label */}
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="font-mono text-[10px] tracking-[0.6em] text-white/30 uppercase mb-6"
            >
              ACM · DevSource Present
            </motion.p>

            {/* COMMIT — stagger per character */}
            <div className="flex overflow-hidden">
              {TITLE_CHARS_1.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.15 + i * 0.06,
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="font-display text-[clamp(3rem,12vw,8rem)] font-black tracking-[-0.04em] text-white uppercase italic leading-none"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Accent divider line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.55, duration: 0.6, ease: "easeOut" }}
              className="w-full h-[3px] bg-accent origin-left my-2"
            />

            {/* HAPPENS — stagger per character */}
            <div className="flex overflow-hidden">
              {TITLE_CHARS_2.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.35 + i * 0.06,
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="font-display text-[clamp(3rem,12vw,8rem)] font-black tracking-[-0.04em] text-accent uppercase italic leading-none"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="font-mono text-[11px] tracking-[0.45em] text-white/35 uppercase mt-8"
            >
              The Reckoning · 16 May 2026
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
