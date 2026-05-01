"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = [
  { text: "STARK_ARCHIVES_COMPROMISED...", color: "var(--accent-alt)" },
  { text: "UPLOADING DOOMSDAY PROTOCOLS...", color: "var(--accent)" },
  { text: "TIMESTAMP: 16 MAY 2026 // 09:00", color: "var(--accent-toxic)" },
  { text: "NEW LEADERSHIP DETECTED: VICTOR", color: "var(--accent)" },
  { text: "EVENT: COMMIT HAPPENS // THE RECKONING", color: "var(--foreground)" },
  { text: "THE MASK IS FINAL. INITIALIZING.", color: "var(--accent-toxic)" },
];

export function LoadingIntro({ onComplete }: { onComplete: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep < STEPS.length) {
      const timer = setTimeout(() => {
        setCurrentStep((s) => s + 1);
      }, 2500); // Increased for readability and impact
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(onComplete, 1500);
      return () => clearTimeout(timer);
    }
  }, [currentStep, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black font-mono overflow-hidden"
    >
      {/* Cinematic Background */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 5, ease: "linear" }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/doomsday_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(0.6) contrast(1.4) brightness(0.7) sepia(0.1) hue-rotate(90deg) blur(2px)"
        }}
      />

      <div className="relative z-10 w-full max-w-md px-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: 20, filter: "blur(10px)" }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-alt" />
                <span className="text-[10px] tracking-[0.4em] text-muted">
                  UPLOADING_PROTOCOL_{String(currentStep).padStart(3, "0")}
                </span>
              </div>
              <span className="text-[8px] text-muted font-bold">16.MAY.2026</span>
            </div>
            
            <p 
              className="font-display text-xl font-bold leading-tight tracking-tight md:text-2xl"
              style={{ color: STEPS[currentStep]?.color || "var(--foreground)" }}
            >
              {STEPS[currentStep]?.text}
            </p>

            <div className="mt-6 h-0.5 w-full bg-white/5 relative overflow-hidden">
              <motion.div 
                className="h-full bg-accent shadow-[0_0_15px_var(--accent)]"
                initial={{ width: "0%" }}
                animate={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute top-10 left-10 flex flex-col gap-1">
        <span className="text-[8px] tracking-[0.5em] text-accent uppercase font-bold">Terminal Connection: Encrypted</span>
        <span className="text-[8px] tracking-[0.5em] text-muted uppercase">Sector 7 // Command Center</span>
      </div>

      {/* Glitch Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay">
          <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%),linear-gradient(90deg,rgba(139,92,246,0.1),rgba(239,68,68,0.1),rgba(74,222,128,0.1))] bg-[length:100%_4px,4px_100%]" />
      </div>
    </motion.div>
  );
}
