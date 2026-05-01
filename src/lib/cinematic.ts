export const CINE_FRAME_COUNT = 169;

export const cineFramePath = (n: number) =>
  `/frames2/frame_${String(n).padStart(4, "0")}.jpg`;

export type Beat = {
  id: string;
  show: number;
  hide: number;
  label: string;
  quote: string;
  speaker: string;
  film: string;
};

export const BEATS: Beat[] = [
  {
    id: "b1",
    show: 0.1,
    hide: 0.3,
    label: "01 — Initialization",
    quote: "A set of carefully curated problem statements will be provided.",
    speaker: "RELEASE PROTOCOL",
    film: "SYSTEM_ALPHA",
  },
  {
    id: "b2",
    show: 0.35,
    hide: 0.55,
    label: "02 — Execution",
    quote: "Ideate, design, and build a working solution in 12 hours.",
    speaker: "SPRINT CORE",
    film: "SYSTEM_BETA",
  },
  {
    id: "b3",
    show: 0.6,
    hide: 0.8,
    label: "03 — Evaluation",
    quote: "Innovation, technical implementation, and user experience.",
    speaker: "VERDICT UNIT",
    film: "SYSTEM_GAMMA",
  },
];

export const CINE_INTRO_FADE_END = 0.08;
