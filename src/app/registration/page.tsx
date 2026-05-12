"use client";

import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";

export default function RegistrationPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-32 pb-20 px-4 md:px-6 relative overflow-hidden">
        {/* Aesthetic Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(8,191,124,0.1),transparent_70%)]" />
          <div className="hud-tick absolute inset-x-0 top-0 h-px opacity-20" />
          <div className="hud-tick absolute inset-x-0 bottom-0 h-px opacity-20 rotate-180" />
        </div>

        <div className="mx-auto max-w-5xl relative z-10">
          <AnimatedSection className="flex flex-col gap-10">
            <div className="text-center">
              <AnimatedItem>
                <EyebrowBadge>PROTOCOL // REGISTRATION // LIVE</EyebrowBadge>
              </AnimatedItem>

              <AnimatedItem className="mt-6 md:mt-8">
                <h1 className="font-display text-3xl font-bold tracking-tighter text-foreground md:text-6xl uppercase italic">
                  Assemble Your <span className="text-accent">Unit.</span>
                </h1>
                <p className="mt-6 max-w-2xl mx-auto font-sans text-lg leading-relaxed text-zinc-400">
                  Complete the official registration protocol via the secure channel below.
                </p>
              </AnimatedItem>
            </div>

            <AnimatedItem className="w-full mt-4">
              <div className="card-surface p-0.5 shadow-[0_0_50px_rgba(8,191,124,0.1)] relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-accent-alt/20 rounded-[21px] blur-xl opacity-50" />
                <div className="bg-background/80 backdrop-blur-xl rounded-[19px] overflow-hidden border border-white/5 relative">
                  <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSe--JXMuHCuFbpXJnq0idwHcBPw06xat7tloJjdJi79zQKigw/viewform?embedded=true" 
                    width="100%" 
                    height="3228" 
                    frameBorder="0" 
                    marginHeight={0} 
                    marginWidth={0}
                    className="w-full grayscale invert-[0.9] contrast-[1.2] brightness-[1.1] hover:grayscale-0 transition-all duration-700"
                  >
                    Loading…
                  </iframe>
                </div>
              </div>
              
              <div className="mt-8 flex justify-between items-center opacity-30 font-mono text-[8px] uppercase tracking-[0.2em]">
                <span>Secure Link Established</span>
                <span>No: RX-99 / {new Date().getFullYear()}</span>
                <span>Auth Level: Crimson</span>
              </div>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </>
  );
}

