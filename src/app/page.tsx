"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { CinematicReveal } from "@/components/sections/CinematicReveal";
import { SystemsNominal } from "@/components/sections/SystemsNominal";
import { OrganizedBy } from "@/components/sections/OrganizedBy";
import { Footer } from "@/components/sections/Footer";
import { LoadingIntro } from "@/components/ui/LoadingIntro";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);

  useEffect(() => {
    const played = sessionStorage.getItem("doomsday_intro_played");
    if (!played) {
      setLoading(true);
    }
    setHasChecked(true);
  }, []);

  const handleComplete = () => {
    setLoading(false);
    sessionStorage.setItem("doomsday_intro_played", "true");
  };

  if (!hasChecked) return null;

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingIntro onComplete={handleComplete} />}
      </AnimatePresence>
      
      <div style={{ opacity: loading ? 0 : 1, transition: "opacity 1s ease-in" }}>
        <Navbar />
        <main>
          <Hero />
          <CinematicReveal />
          <SystemsNominal />
        </main>
        <OrganizedBy />
        <Footer />
      </div>
    </>
  );
}
