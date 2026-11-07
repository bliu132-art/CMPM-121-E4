export const ENEMY_STATS = {
  drone: {
    hp: 2,
    score: 100,
    radius: 13,
    dropChance: 0.015,
    canShoot: true,
  },
  dart: {
    hp: 1,
    score: 150,
    radius: 12,
    dropChance: 0.015,
    canShoot: false,
  },
  turret: {
    hp: 12,
    score: 400,
    radius: 19,
    dropChance: 0.3,
    canShoot: true,
  },
  lancer: {
    hp: 4,
    score: 250,
    radius: 15,
    dropChance: 0.06,
    canShoot: true,
  },
} as const;

export type EnemyKind = keyof typeof ENEMY_STATS;

export type Formation = "line" | "vee" | "column" | "pincer";

export interface Wave {
  at: number;
  kind: EnemyKind;
  count: number;
  shape: Formation;
  x: number;
}

export interface Sector {
  name: string;
  subtitle: string;
  length: number;
  waves: Wave[];
}

export const BOSS_NAME = "The Warden";

export const SECTORS: Sector[] = [
  {
    name: "Outer Drift",
    subtitle: "Scouts ahead",
    length: 1560,
    waves: [
      { at: 60, kind: "drone", count: 4, shape: "line", x: 240 },
      { at: 360, kind: "drone", count: 5, shape: "vee", x: 168 },
      { at: 660, kind: "drone", count: 5, shape: "vee", x: 312 },
      { at: 960, kind: "drone", count: 6, shape: "line", x: 240 },
      { at: 1200, kind: "drone", count: 4, shape: "column", x: 120 },
      { at: 1260, kind: "drone", count: 4, shape: "column", x: 360 },
    ],
  },
  {
    name: "Shatter Belt",
    subtitle: "Divers incoming",
    length: 1800,
    waves: [
      { at: 60, kind: "drone", count: 6, shape: "vee", x: 240 },
      { at: 300, kind: "dart", count: 4, shape: "line", x: 240 },
      { at: 600, kind: "dart", count: 5, shape: "column", x: 144 },
      { at: 720, kind: "dart", count: 5, shape: "column", x: 336 },
      { at: 1020, kind: "drone", count: 7, shape: "line", x: 240 },
      { at: 1140, kind: "dart", count: 5, shape: "vee", x: 240 },
      { at: 1440, kind: "dart", count: 6, shape: "line", x: 240 },
    ],
  },
  {
    name: "Gun Lanes",
    subtitle: "Turrets online",
    length: 1920,
    waves: [
      { at: 60, kind: "turret", count: 1, shape: "line", x: 240 },
      { at: 240, kind: "drone", count: 6, shape: "vee", x: 240 },
      { at: 540, kind: "turret", count: 2, shape: "line", x: 240 },
      { at: 840, kind: "dart", count: 6, shape: "column", x: 240 },
      { at: 1080, kind: "turret", count: 2, shape: "line", x: 240 },
      { at: 1140, kind: "drone", count: 6, shape: "line", x: 240 },
      { at: 1500, kind: "turret", count: 3, shape: "line", x: 240 },
    ],
  },
  {
    name: "Lancer Gate",
    subtitle: "Crossfire",
    length: 1920,
    waves: [
      { at: 60, kind: "lancer", count: 4, shape: "pincer", x: 240 },
      { at: 360, kind: "dart", count: 6, shape: "vee", x: 240 },
      { at: 600, kind: "lancer", count: 6, shape: "pincer", x: 240 },
      { at: 780, kind: "turret", count: 2, shape: "line", x: 240 },
      { at: 1140, kind: "lancer", count: 6, shape: "pincer", x: 240 },
      { at: 1260, kind: "drone", count: 8, shape: "vee", x: 240 },
      { at: 1560, kind: "dart", count: 8, shape: "line", x: 240 },
    ],
  },
  {
    name: "Last Approach",
    subtitle: "Everything they have",
    length: 2040,
    waves: [
      { at: 60, kind: "turret", count: 3, shape: "line", x: 240 },
      { at: 180, kind: "lancer", count: 6, shape: "pincer", x: 240 },
      { at: 540, kind: "dart", count: 6, shape: "column", x: 120 },
      { at: 540, kind: "dart", count: 6, shape: "column", x: 360 },
      { at: 900, kind: "drone", count: 9, shape: "vee", x: 240 },
      { at: 1020, kind: "turret", count: 2, shape: "line", x: 240 },
      { at: 1320, kind: "lancer", count: 8, shape: "pincer", x: 240 },
      { at: 1560, kind: "dart", count: 8, shape: "vee", x: 240 },
    ],
  },
];
