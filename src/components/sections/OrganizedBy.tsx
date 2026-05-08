import Image from "next/image";

export function OrganizedBy() {
  return (
    <section className="border-t border-white/5 bg-background/50 backdrop-blur-sm px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.32em] text-foreground">
            <span
              aria-hidden
              className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(8,191,124,0.9)]"
            />
            Organized By
          </div>
          <p className="text-center font-sans text-sm leading-relaxed text-zinc-400">
            Brought to you by the teams behind innovation and excellence
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <div className="flex flex-col items-center gap-3">
            <Image 
              src="/DevSource.png" 
              alt="DevSource Logo" 
              width={120} 
              height={120} 
              className="h-24 w-auto brightness-200 hover:brightness-300 transition-all duration-300"
            />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">DevSource</span>
          </div>
          <div className="hidden h-16 w-px bg-white/10 md:block" />
          <div className="flex flex-col items-center gap-3">
            <Image 
              src="/ACM_logo.png" 
              alt="ACM Logo" 
              width={120} 
              height={120} 
              className="h-24 w-auto brightness-200 hover:brightness-300 transition-all duration-300"
            />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">ACM</span>
          </div>
        </div>
      </div>
    </section>
  );
}
