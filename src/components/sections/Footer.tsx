import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-white/5 bg-background px-6 py-14 md:px-10 md:py-16"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.32em] text-foreground">
              <span
                aria-hidden
                className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(8,191,124,0.9)]"
              />
              Commit / Happens
            </div>
            <p className="max-w-[38ch] font-sans text-sm leading-relaxed text-zinc-400">
              &copy; Commit Happens 2026. A 12-hour high-intensity hack sprint. 
              <br />
              <span className="text-accent-alt">by DevSource ACM Weekend.</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/5 pt-6 font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500 md:flex-row md:items-center md:justify-between">
          <span>&nbsp;&middot;&nbsp; Protocol Alpha &nbsp;&middot;&nbsp; Central DEVSOURCE Online</span>
          <span>Online hack sprint &mdash; no rounds, no interruptions</span>
        </div>
      </div>
    </footer>
  );
}
