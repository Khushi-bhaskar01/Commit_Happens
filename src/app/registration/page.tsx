"use client";

import { useState } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import { Plus, Trash, Users, IdentificationBadge, User } from "@phosphor-icons/react";

export default function RegistrationPage() {
  const [teamName, setTeamName] = useState("");
  const [lead, setLead] = useState({ name: "", contact: "" });
  const [members, setMembers] = useState([
    { name: "", contact: "" }, // At least one member besides lead to reach min 2
  ]);

  const addMember = () => {
    if (members.length < 3) { // 1 lead + 3 members = 4 total
      setMembers([...members, { name: "", contact: "" }]);
    }
  };

  const removeMember = (index: number) => {
    if (members.length > 1) { // Keep at least 1 member (total 2)
      setMembers(members.filter((_, i) => i !== index));
    }
  };

  const updateMember = (index: number, field: "name" | "contact", value: string) => {
    const newMembers = [...members];
    newMembers[index] = { ...newMembers[index], [field]: value };
    setMembers(newMembers);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-28 md:pt-32 pb-20 px-4 md:px-6 relative">
        {/* Aesthetic Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(8,191,124,0.1),transparent_70%)]" />
          <div className="hud-tick absolute inset-x-0 top-0 h-px opacity-20" />
          <div className="hud-tick absolute inset-x-0 bottom-0 h-px opacity-20 rotate-180" />
        </div>

        <div className="mx-auto max-w-4xl relative z-10">
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
                  Total capacity: 4 Operatives. Minimum requirement: 2 Operatives. 
                  Ensure contact data is valid for encrypted communications.
                </p>
              </AnimatedItem>
            </div>

            <AnimatedItem className="w-full mt-12">
              <form className="grid gap-10" onSubmit={(e) => e.preventDefault()}>
                {/* Team Info Section */}
                <div className="card-surface p-0.5 shadow-[0_0_50px_rgba(8,191,124,0.05)]">
                  <div className="bg-background/80 backdrop-blur-xl rounded-[19px] p-5 md:p-8 border border-white/5">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-8 h-8 rounded bg-accent/10 flex items-center justify-center text-accent">
                        <Users size={20} weight="bold" />
                      </div>
                      <h2 className="font-mono text-xs font-bold uppercase tracking-[0.4em] text-white">Team Identity</h2>
                    </div>
                    
                    <div className="grid gap-3">
                      <label className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent flex justify-between">
                        <span>Team Name</span>
                        <span className="text-accent/40 font-bold text-[8px]">REQUIRED</span>
                      </label>
                      <input 
                        type="text" 
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-5 py-4 text-foreground focus:border-accent/50 focus:bg-white/[0.05] outline-none transition-all font-mono text-sm placeholder:text-white/10"
                        placeholder="ENTER TEAM DESIGNATION"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Team Lead Section */}
                <div className="grid gap-6">
                  <div className="flex items-center gap-3 px-2">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <h2 className="font-mono text-xs font-bold uppercase tracking-[0.4em] text-zinc-500">Command & Control</h2>
                  </div>

                  <div className="card-surface p-5 md:p-8 border-accent/20 bg-accent/[0.02]">
                    <div className="flex items-center gap-3 mb-6">
                      <IdentificationBadge size={20} className="text-accent" weight="bold" />
                      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent">Team Lead (Primary Operative)</span>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="grid gap-2">
                        <label className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">Full Name</label>
                        <input 
                          type="text" 
                          value={lead.name}
                          onChange={(e) => setLead({ ...lead, name: e.target.value })}
                          className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-3 text-foreground focus:border-accent outline-none transition-all text-sm font-sans"
                          placeholder="ENTER NAME"
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <label className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">Contact Address (Email)</label>
                        <input 
                          type="email" 
                          value={lead.contact}
                          onChange={(e) => setLead({ ...lead, contact: e.target.value })}
                          className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-3 text-foreground focus:border-accent outline-none transition-all text-sm font-sans"
                          placeholder="LEAD@EXAMPLE.COM"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Members Section */}
                <div className="grid gap-6">
                  <div className="flex justify-between items-center px-2">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-zinc-700" />
                      <h2 className="font-mono text-xs font-bold uppercase tracking-[0.4em] text-zinc-500">Additional Operatives</h2>
                    </div>
                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">
                      Slots filled: {1 + members.length} / 4
                    </span>
                  </div>

                  <div className="grid gap-6">
                    {members.map((member, index) => (
                      <div key={index} className="group relative card-surface p-5 md:p-8 border-white/5 bg-white/[0.01] hover:border-white/10 transition-all">
                        <div className="flex justify-between items-center mb-6">
                          <div className="flex items-center gap-3">
                            <User size={16} className="text-zinc-500" />
                            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Operative 0{index + 2}</span>
                          </div>
                          {members.length > 1 && (
                            <button 
                              type="button"
                              onClick={() => removeMember(index)}
                              className="w-8 h-8 flex items-center justify-center rounded-full border border-white/5 text-zinc-500 hover:text-red-500 hover:border-red-500/30 hover:bg-red-500/5 transition-all"
                            >
                              <Trash size={16} />
                            </button>
                          )}
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="grid gap-2">
                            <label className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">Full Name</label>
                            <input 
                              type="text" 
                              value={member.name}
                              onChange={(e) => updateMember(index, "name", e.target.value)}
                              className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-3 text-foreground focus:border-accent outline-none transition-all text-sm font-sans"
                              placeholder="ENTER NAME"
                              required
                            />
                          </div>
                          <div className="grid gap-2">
                            <label className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">Contact Address</label>
                            <input 
                              type="text" 
                              value={member.contact}
                              onChange={(e) => updateMember(index, "contact", e.target.value)}
                              className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-3 text-foreground focus:border-accent outline-none transition-all text-sm font-sans"
                              placeholder="EMAIL OR HANDLE"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    ))}

                    {members.length < 3 && (
                      <button 
                        type="button"
                        onClick={addMember}
                        className="group flex items-center justify-center gap-4 py-8 rounded-xl border border-dashed border-white/10 bg-transparent hover:bg-white/[0.02] hover:border-accent/30 transition-all"
                      >
                        <div className="w-10 h-10 rounded-full border border-dashed border-white/20 flex items-center justify-center text-zinc-500 group-hover:text-accent group-hover:border-accent transition-all">
                          <Plus size={20} />
                        </div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500 group-hover:text-accent transition-all font-bold">Add Operative to Unit</span>
                      </button>
                    )}
                  </div>
                </div>
                
                <div className="pt-8">
                  <button 
                    type="submit"
                    className="group relative w-full overflow-hidden rounded-lg bg-accent py-5 font-mono text-[13px] font-bold uppercase tracking-[0.5em] text-background hover:bg-accent-toxic transition-all shadow-[0_0_40px_rgba(8,191,124,0.2)] active:scale-[0.98]"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Initialize Deployment Sequence
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                  </button>
                  <div className="mt-6 flex justify-between items-center opacity-30 font-mono text-[8px] uppercase tracking-[0.2em]">
                    <span>Secure Link Established</span>
                    <span>No: RX-99 / {new Date().getFullYear()}</span>
                    <span>Auth Level: Crimson</span>
                  </div>
                </div>
              </form>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </>
  );
}

