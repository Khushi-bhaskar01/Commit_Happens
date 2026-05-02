"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";

gsap.registerPlugin(ScrollTrigger);

const INSTRUCTIONS = [
  {
    title: "Phase 01: The Drop",
    content: "At exactly 09:00 AM, problem statements will be broadcasted to all terminals. You must choose one and initialize your repository immediately.",
    status: "CRITICAL",
    image: "/doom_character.png"
  },
  {
    title: "Phase 02: Total Lockdown",
    content: "The terminal enters strict isolation. No breaks, no rounds, no interruptions. Your terminal must remain active. All commits must be made to the designated branch.",
    status: "ENFORCED",
    image: "/Phase2.webp"
  },
  {
    title: "Phase 03: Final Deployment",
    content: "Submission portal closes at 09:00 PM. Late commits will be purged by the system. Ensure your documentation is complete.",
    status: "TERMINAL",
    image: "/doom_council.png"
  }
];

export default function InstructionsPage() {
  const containerRef = useRef(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      INSTRUCTIONS.forEach((_, i) => {
        ScrollTrigger.create({
          trigger: `.step-${i}`,
          start: "top 60%",
          end: "bottom 60%",
          onToggle: (self) => {
            if (self.isActive) {
              gsap.to(imagesRef.current, { opacity: 0, duration: 0.5, overwrite: true });
              gsap.to(imagesRef.current[i], { opacity: 1, duration: 0.5, overwrite: true });
            }
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />
      <main ref={containerRef} className="min-h-screen bg-background pt-28 md:pt-32 pb-20 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-[1fr_1fr] gap-10 md:gap-20 items-start">
          {/* Sticky Image Frame */}
          <div className="sticky top-32 hidden lg:block aspect-[4/5] rounded-2xl border border-accent/20 overflow-hidden bg-black">
            {INSTRUCTIONS.map((step, i) => (
              <img
                key={i}
                ref={(el) => { imagesRef.current[i] = el; }}
                src={step.image}
                alt={step.title}
                className={`absolute inset-0 w-full h-full object-cover grayscale-[0.3] contrast-[1.1] ${i === 0 ? "opacity-100" : "opacity-0"}`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6 flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-[10px] tracking-[0.4em] text-accent uppercase">Surveillance Active</span>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <AnimatedSection className="flex flex-col gap-8">
              <AnimatedItem>
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-accent" />
                  <EyebrowBadge>PROTOCOL // INSTRUCTIONS // SECTOR 7</EyebrowBadge>
                </div>
              </AnimatedItem>

              <AnimatedItem>
                <h1 className="font-display text-4xl font-bold tracking-tighter text-foreground md:text-6xl">
                  The New <span className="text-accent">Doctrine.</span>
                </h1>
                <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-zinc-400">
                  The era of Stark is over. The era of Doom has begun. 
                  You have 12 hours to prove that you are an asset to the new regime.
                </p>
              </AnimatedItem>

              <div className="grid gap-20 mt-12">
                {INSTRUCTIONS.map((step, i) => (
                  <AnimatedItem key={i} className={`step-${i}`}>
                    <div className="relative overflow-hidden card-surface p-6 md:p-8 group min-h-[auto] md:min-h-[300px] flex flex-col justify-center">
                      {/* Mobile Image */}
                      <div className="mb-6 block lg:hidden aspect-video rounded-lg border border-white/10 overflow-hidden">
                        <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute top-0 right-0 p-4">
                        <span className="font-mono text-[10px] tracking-[0.2em] text-accent-alt font-bold">
                          {step.status}
                        </span>
                      </div>
                      <div className="flex flex-col gap-4">
                        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
                          Protocol 0{i + 1}
                        </span>
                        <h3 className="font-display text-2xl font-semibold text-foreground">
                          {step.title}
                        </h3>
                        <p className="font-sans text-zinc-400 leading-relaxed max-w-xl">
                          {step.content}
                        </p>
                      </div>
                      <div className="absolute bottom-0 left-0 h-1 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                    </div>
                  </AnimatedItem>
                ))}
              </div>

              <AnimatedItem>
                <div className="card-surface p-6 md:p-8 border-accent-toxic/20 bg-accent-toxic/[0.02] mt-10">
                  <h4 className="font-display text-xl text-accent-toxic mb-4">Evaluation Metrics</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                    <div className="flex flex-col gap-2">
                      <span className="text-foreground">Innovation</span>
                      <span>30%</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-foreground">UX Design</span>
                      <span>25%</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-foreground">Code Quality</span>
                      <span>25%</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-foreground">Impact</span>
                      <span>20%</span>
                    </div>
                  </div>
                </div>
              </AnimatedItem>
            </AnimatedSection>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
