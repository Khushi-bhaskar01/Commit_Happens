export const FRAME_COUNT = 169;

export const framePath = (n: number) =>
  `/frames/frame_${String(n).padStart(4, "0")}.jpg`;

export type Dialogue = {
  id: string;
  show: number;
  hide: number;
  quote: string;
  speaker: string;
  film: string;
};

export const DIALOGUES: Dialogue[] = [
  {
    id: "d1",
    show: 0.15,
    hide: 0.35,
    quote: "DATE: 16 MAY 2026",
    speaker: "RELEASE DATE",
    film: "SYSTEM_ALPHA",
  },
  {
    id: "d2",
    show: 0.4,
    hide: 0.6,
    quote: "TIME: 09:00 - 21:00",
    speaker: "SPRINT DURATION",
    film: "SYSTEM_BETA",
  },
  {
    id: "d3",
    show: 0.65,
    hide: 0.85,
    quote: "PRIZE: 6K POOL",
    speaker: "WORTHY_REWARD",
    film: "SYSTEM_GAMMA",
  },
];

export const HERO_TEXT_FADE_END = 0.08;
