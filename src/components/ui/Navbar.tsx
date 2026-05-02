"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[60] transition-[background-color,backdrop-filter,border-color] duration-300 ${
        scrolled || !isHome
          ? "border-b border-white/10 bg-black/60 backdrop-blur-2xl backdrop-saturate-150"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3 md:px-8 md:py-5">
        <Link href="/" className="flex items-center gap-3 z-50">
          <span className="font-display text-base sm:text-lg font-black tracking-tighter text-foreground uppercase">
            Commit <span className="text-accent">Happens.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-400 transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/instructions"
            className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-400 transition-colors hover:text-foreground"
          >
            Instruction
          </Link>
          <Link
            href="/registration"
            className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-400 transition-colors hover:text-foreground"
          >
            Registration
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/registration"
            className="hidden group md:inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-6 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-accent backdrop-blur-md transition-all duration-200 hover:bg-accent/20 active:translate-y-[1px] shadow-[0_0_15px_rgba(8,191,124,0.3)]"
          >
            Register Now
            <ArrowUpRight
              size={14}
              weight="bold"
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground lg:hidden z-50"
          >
            {isOpen ? <X size={18} weight="bold" /> : <List size={18} weight="bold" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 flex flex-col bg-black/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col items-center justify-center flex-1 gap-8 p-6">
              {[
                { name: "Home", href: "/" },
                { name: "Instruction", href: "/instructions" },
                { name: "Registration", href: "/registration" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-mono text-2xl uppercase tracking-[0.3em] text-zinc-400 transition-colors hover:text-accent active:text-accent-toxic"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/registration"
                onClick={() => setIsOpen(false)}
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/20 px-10 py-4 font-mono text-xs font-bold uppercase tracking-[0.3em] text-accent"
              >
                Register Now
                <ArrowUpRight size={18} weight="bold" />
              </Link>
            </nav>
            <div className="p-8 border-t border-white/10 text-center">
              <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
                // System Status: Operational //
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
