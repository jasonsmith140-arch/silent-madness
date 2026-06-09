const STORAGE_KEY = "silent-madness-state-v2";

const screens = [
  ["welcome", "Onboarding Welcome"],
  ["vibe", "Choose Quote Vibe"],
  ["level", "Madness Level"],
  ["status", "Life Status"],
  ["goals", "Quote Goals"],
  ["reminder", "Reminder Time"],
  ["cardStyle", "Card Style"],
  ["profileResult", "Madness Profile Result"],
  ["paywall", "Paywall Trial"],
  ["today", "Today"],
  ["explore", "Explore"],
  ["create", "Create"],
  ["saved", "Saved"],
  ["profile", "Profile"],
  ["reminders", "Reminders"],
];

const options = {
  vibe: [
    ["Dark Motivation", "For when you need a push, but not a cheesy one."],
    ["Soft but Dangerous", "For gentle souls with sharp boundaries."],
    ["Dead Inside, Still Trying", "For low battery humans with unfinished dreams."],
    ["Spite & Success", "For turning doubt into fuel."],
    ["Workplace Survival", "For meetings, emails, and polite suffering."],
    ["Existential Nonsense", "For laughing at the weirdness of being alive."],
  ],
  level: [
    ["Soft Strange", "Light, quirky, and gently dramatic."],
    ["Medium Madness", "Sarcastic, honest, and a little spicy."],
    ["Full Moon Energy", "Darker, sharper, but still clean."],
  ],
  status: [
    ["Running on caffeine and hope", "A classic survival arrangement."],
    ["Quietly rebuilding myself", "Soft work. Serious results."],
    ["Tired, but still showing up", "Low battery, excellent persistence."],
    ["In my comeback era", "No announcement required."],
    ["Emotionally offline", "Temporarily unavailable, still iconic."],
    ["Doing okay, suspiciously", "We will monitor this development."],
  ],
  goals: [
    ["Make me laugh", "Tiny emotional weather relief."],
    ["Help me get through the day", "One dramatic breath at a time."],
    ["Give me a daily confidence boost", "Quiet fuel, no glitter required."],
    ["Help me protect my peace", "Boundaries with candlelight."],
    ["Give me quotes to share", "Beautifully strange and post-ready."],
    ["Remind me I am not finished yet", "Because the plot is still moving."],
  ],
  reminder: [
    ["Morning Madness", "Start before the world becomes loud."],
    ["Lunch Break Reality Check", "Midday clarity with a raised eyebrow."],
    ["Evening Reflection", "Softly dramatic decompression."],
    ["Surprise Me Gently", "Unexpected, but emotionally polite."],
    ["Let Me Choose a Time", "Your chaos, your calendar."],
  ],
  cardStyle: [
    ["Editorial Gradient", "Bold condensed type on a clean pink-to-coral canvas."],
    ["Neon Poster", "Bright, loud, and impossible to ignore."],
    ["Dark Vintage", "Old paper, moonlight, and premium gloom."],
    ["Gothic Newspaper", "Headlines from your emotional basement."],
    ["Minimal Black and White", "Sharp, clean, and quietly intense."],
    ["Cute but Concerning", "Sweet enough to be suspicious."],
    ["Chaotic Scrapbook", "A beautiful mess with boundaries."],
  ],
};

const categories = [
  ["Dark Motivation", "For tired humans who still want to win.", "moon"],
  ["Spite & Success", "Turn doubt into quiet fuel.", "trophy"],
  ["Dead Inside, Still Trying", "Low battery, high survival rate.", "skullBattery"],
  ["Soft but Dangerous", "Gentle, but not easy to break.", "crackedHeart"],
  ["Workplace Survival", "For emails, meetings, and polite suffering.", "hauntedMug"],
  ["Existential Nonsense", "Because existence is weird and snacks help.", "confusedEye"],
  ["Cute but Concerning", "Sweet, strange, and slightly suspicious.", "suspiciousFlower"],
  ["Morning Madness", "Start the day with strange wisdom.", "tiredSun"],
];

const quotes = window.SILENT_MADNESS_QUOTES;

const cardPalettes = {
  "Hot Pink": { background: "#ff38ad", ink: "#050505", accent: "#ffdf28", logoFilter: "brightness(0)" },
  "Acid Green": { background: "#5cf04e", ink: "#050505", accent: "#ff38ad", logoFilter: "brightness(0)" },
  "Caution Yellow": { background: "#ffdf28", ink: "#050505", accent: "#f12f44", logoFilter: "brightness(0)" },
  "Electric Cyan": { background: "#43d7f5", ink: "#050505", accent: "#ff38ad", logoFilter: "brightness(0)" },
  "Midnight Black": { background: "#080808", ink: "#f8f5ec", accent: "#ff38ad", logoFilter: "none" },
  "Oxblood": { background: "#3a0d18", ink: "#f8f5ec", accent: "#ff526c", logoFilter: "none" },
  "Midnight Navy": { background: "#071b2c", ink: "#f8f5ec", accent: "#43d7f5", logoFilter: "none" },
  "Haunted Forest": { background: "#10261b", ink: "#f8f5ec", accent: "#5cf04e", logoFilter: "none" },
  "Deep Plum": { background: "#281129", ink: "#f8f5ec", accent: "#ff38ad", logoFilter: "none" },
  "Bone White": { background: "#f8f5ec", ink: "#050505", accent: "#f12f44", logoFilter: "brightness(0)" },
};

const cardFonts = {
  "Poster Loud": { css: "Impact, 'Arial Narrow', sans-serif", canvas: "Impact, sans-serif", weight: 900 },
  "Gothic Editorial": { css: "'Iowan Old Style', Georgia, serif", canvas: "Georgia, serif", weight: 700 },
  "Chaotic Marker": { css: "'Kalam', 'Marker Felt', 'Segoe Print', cursive", canvas: "'Arial Rounded MT Bold', sans-serif", weight: 700 },
  "Clean Modern": { css: "'Avenir Next', 'Helvetica Neue', sans-serif", canvas: "Arial, sans-serif", weight: 800 },
  "Modern Grotesk": { css: "'Space Grotesk', 'Helvetica Neue', sans-serif", canvas: "Arial, sans-serif", weight: 700 },
  "Condensed Editorial": { css: "'Bebas Neue', 'Arial Narrow', sans-serif", canvas: "Impact, sans-serif", weight: 400 },
  "Handwritten Script": { css: "'Caveat', 'Segoe Print', cursive", canvas: "'Caveat', cursive", weight: 700 },
};

const cardFontColors = {
  Auto: null,
  White: "#f8f5ec",
  Black: "#050505",
  Pink: "#ff38ad",
  Red: "#ff526c",
  Green: "#62ff4e",
  Yellow: "#ffdf28",
  Cyan: "#43d7f5",
  Violet: "#d47aff",
};

const cardEffects = ["Neon Glow", "Film Grain", "Soft Bloom", "Vignette", "Clean Matte"];

const cardMoods = {
  "Dark Motivation": { icon: "moon", accent: "pink" },
  "Soft but Dangerous": { icon: "crackedHeart", accent: "red" },
  "Dead Inside, Still Trying": { icon: "skullBattery", accent: "green" },
  "Spite & Success": { icon: "trophy", accent: "yellow" },
  "Workplace Survival": { icon: "hauntedMug", accent: "cyan" },
  "Existential Nonsense": { icon: "confusedEye", accent: "pink" },
};

const exportFormats = {
  "Instagram Post": { width: 1080, height: 1080, label: "Instagram 1:1" },
  "Facebook Post": { width: 1200, height: 630, label: "Facebook 1.91:1" },
  "Phone Portrait": { width: 1170, height: 2532, label: "Phone 9:19.5" },
  "Desktop Wallpaper": { width: 1920, height: 1080, label: "Desktop 16:9" },
};

const defaultState = {
  profile: {
    vibe: "Dark Motivation",
    level: "Medium Madness",
    status: "Tired, but still showing up",
    goals: ["Help me get through the day"],
    reminder: "Morning Madness",
    cardStyle: ["Neon Poster"],
  },
  onboardingSelections: {
    vibe: null,
    level: null,
    status: null,
    goals: [],
    reminder: null,
    cardStyle: [],
  },
  currentQuoteId: 1,
  savedIds: [5, 4, 10],
  favoriteIds: [5, 4, 10],
  sharedIds: [],
  customQuotes: [],
  selectedCategory: "Dark Motivation",
  savedFilter: "All",
  createSource: "Today’s Quote",
  createStyle: "Neon Poster",
  createFormat: "Instagram Post",
  createColor: "Hot Pink",
  createFont: "Poster Loud",
  createFontColor: "Auto",
  createEffect: "Neon Glow",
  createMood: "Dark Motivation",
  createTool: "Style",
  createQuoteId: 5,
  customText: "",
  savedCardDesigns: [],
  reminderEnabled: true,
  reminderTime: "08:00",
  reminderVibe: "Morning Madness",
  reminderDays: ["M", "T", "W", "T2", "F"],
  lateNightEnabled: false,
  lateNightTime: "23:30",
  streakDays: 23,
  selectedPlan: "Yearly Plan",
  trialStarted: false,
  theme: "Dark",
};

const app = document.querySelector("#app");
const screenNav = document.querySelector("#screenNav");
let state = loadState();
let currentScreen = state.trialStarted ? "today" : "welcome";
let toastTimer;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return structuredClone(defaultState);
    const merged = {
      ...defaultState,
      ...saved,
      profile: { ...defaultState.profile, ...saved.profile },
      onboardingSelections: {
        ...defaultState.onboardingSelections,
        ...saved.onboardingSelections,
      },
    };
    merged.profile.goals = Array.isArray(merged.profile.goals) ? merged.profile.goals : [merged.profile.goals].filter(Boolean);
    merged.profile.cardStyle = Array.isArray(merged.profile.cardStyle) ? merged.profile.cardStyle : [merged.profile.cardStyle].filter(Boolean);
    merged.onboardingSelections.goals = Array.isArray(merged.onboardingSelections.goals) ? merged.onboardingSelections.goals : [];
    merged.onboardingSelections.cardStyle = Array.isArray(merged.onboardingSelections.cardStyle) ? merged.onboardingSelections.cardStyle : [];
    merged.favoriteIds = Array.isArray(merged.favoriteIds) ? merged.favoriteIds : [...merged.savedIds];
    merged.reminderDays = Array.isArray(merged.reminderDays) ? merged.reminderDays : [...defaultState.reminderDays];
    if (!["Style", "Background", "Colors", "Effects"].includes(merged.createTool)) merged.createTool = "Style";
    if (!cardFontColors.hasOwnProperty(merged.createFontColor)) merged.createFontColor = "Auto";
    if (!cardEffects.includes(merged.createEffect)) merged.createEffect = "Neon Glow";
    if (!["All", "Favorites", "By Mood"].includes(merged.savedFilter)) merged.savedFilter = "All";
    if (!["Dark", "Light"].includes(merged.theme)) merged.theme = "Dark";
    if (!exportFormats[merged.createFormat]) merged.createFormat = "Instagram Post";
    return merged;
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function applyInterfaceTheme() {
  document.body.dataset.interface = state.theme.toLowerCase();
  document.documentElement.style.colorScheme = state.theme === "Light" ? "light" : "dark";
}

function allQuotes() {
  return [...quotes, ...state.customQuotes];
}

function getQuote(id = state.currentQuoteId) {
  return allQuotes().find((quote) => quote.id === Number(id)) || quotes[0];
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function showToast(message) {
  document.querySelector(".toast")?.remove();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  app.appendChild(toast);
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.remove(), 2200);
}

function accentTitle(title) {
  const accents = {
    "EXPLORE THE MADNESS": "EXPLORE THE <em>MADNESS</em>",
    "MAKE A LOUD CARD.": "MAKE A <em>LOUD CARD.</em>",
    "YOUR LITTLE MUSEUM": "YOUR LITTLE <em>MUSEUM</em>",
    "HELLO, WEIRDO.": "HELLO, <em>WEIRDO.</em>",
  };
  return accents[title] || title;
}

const iconColors = {
  pink: "#ff38ad",
  green: "#5cf04e",
  yellow: "#ffdf28",
  cyan: "#43d7f5",
  red: "#f12f44",
  orange: "#ff790f",
  bone: "#f8f5ec",
  ink: "#050505",
};

function stickerIcon(name, size = "md", accent = "pink") {
  const interfaceColors = state.theme === "Light" ? { ...iconColors, green: "#b32655" } : iconColors;
  const color = interfaceColors[accent] || interfaceColors.pink;
  const ink = interfaceColors.ink;
  const bone = interfaceColors.bone;
  const { red, green, yellow, cyan } = interfaceColors;
  const paths = {
    moon: `<path fill="${color}" stroke="${ink}" stroke-width="3" d="M31 5c-8 2-13 9-12 17 1 9 9 15 18 13-5 5-14 7-21 3C7 34 4 24 8 15 12 7 22 3 31 5Z"/><path fill="none" stroke="${ink}" stroke-width="2.5" stroke-linecap="round" d="M15 21l3 1m7 3 3-1m-11 5c3 2 6 2 9 0"/>`,
    crackedHeart: `<path fill="${color}" stroke="${ink}" stroke-width="3" d="M24 39 8 24C-1 15 5 5 14 7c5 1 8 5 10 8 2-3 5-7 10-8 9-2 15 8 6 17L24 39Z"/><path fill="none" stroke="${ink}" stroke-width="3" d="m25 14-5 8 6 2-5 9"/><path fill="${bone}" stroke="${ink}" stroke-width="2" d="m12 22 3 4 3-4m12 1 3 4 3-4"/>`,
    skullBattery: `<path fill="${color}" stroke="${ink}" stroke-width="3" d="M9 18C9 8 16 4 24 4s15 4 15 14c0 7-3 11-7 14v7H16v-7c-4-3-7-7-7-14Z"/><circle cx="18" cy="20" r="4" fill="${ink}"/><circle cx="31" cy="20" r="4" fill="${ink}"/><path fill="none" stroke="${ink}" stroke-width="2.5" d="M21 29h7m-9 6h11"/><rect x="28" y="34" width="12" height="6" rx="1" fill="${bone}" stroke="${ink}" stroke-width="2"/><path stroke="${ink}" stroke-width="2" d="M40 36h2v2h-2"/><path stroke="${red}" stroke-width="2" d="M30 37h3"/>`,
    trophy: `<path fill="${color}" stroke="${ink}" stroke-width="3" d="M15 7h19v8c0 8-4 13-9 15v6h8v5H16v-5h8v-6c-5-2-9-7-9-15V7Z"/><path fill="none" stroke="${ink}" stroke-width="3" d="M15 11H7c0 9 3 13 10 13m17-13h8c0 9-3 13-10 13"/><path fill="${red}" stroke="${ink}" stroke-width="2" d="M25 2c5 5 1 8 5 11-1-6 6-6 4-12 7 6 7 15-1 18H20c-7-4-6-12 0-17-1 5 3 6 2 10 4-3 0-6 3-10Z"/>`,
    hauntedMug: `<path fill="${bone}" stroke="${ink}" stroke-width="3" d="M7 14h28v19c0 6-5 9-14 9S7 39 7 33V14Z"/><path fill="none" stroke="${ink}" stroke-width="3" d="M35 19h4c7 0 7 12 0 12h-4"/><circle cx="16" cy="25" r="3" fill="${ink}"/><circle cx="27" cy="25" r="3" fill="${ink}"/><path fill="none" stroke="${ink}" stroke-width="2.5" d="M16 34c3-3 7-3 10 0"/><path fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round" d="M14 11c-4-5 3-6-1-10m10 10c-4-5 3-6-1-10m10 10c-4-5 3-6-1-10"/>`,
    confusedEye: `<path fill="${bone}" stroke="${ink}" stroke-width="3" d="M3 24C10 12 18 8 25 8s15 4 22 16c-7 12-15 16-22 16S10 36 3 24Z"/><circle cx="25" cy="24" r="9" fill="${color}" stroke="${ink}" stroke-width="3"/><circle cx="25" cy="24" r="4" fill="${ink}"/><path fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round" d="M38 7c1-6 9-5 9 1 0 5-6 5-6 9m0 5h.1"/>`,
    suspiciousFlower: `<path fill="${green}" stroke="${ink}" stroke-width="3" d="M24 16C14 3 6 11 13 20 0 22 4 35 16 31c-2 12 13 14 16 3 11 5 17-8 7-14 8-10-4-18-10-8-1-9-8-9-5 4Z"/><circle cx="24" cy="24" r="9" fill="${color}" stroke="${ink}" stroke-width="3"/><path fill="${bone}" stroke="${ink}" stroke-width="2" d="M17 23c4-5 10-5 14 0-4 5-10 5-14 0Z"/><circle cx="24" cy="23" r="2.5" fill="${ink}"/>`,
    tiredSun: `<circle cx="22" cy="21" r="13" fill="${color}" stroke="${ink}" stroke-width="3"/><path stroke="${ink}" stroke-width="3" stroke-linecap="round" d="M22 2v4M22 36v5M3 21h5m28 0h6M8 7l4 4m20-4-4 4"/><path fill="none" stroke="${ink}" stroke-width="2.5" stroke-linecap="round" d="m14 20 5 1m7 0 5-1m-13 8c3-2 6-2 9 0"/><path fill="${bone}" stroke="${ink}" stroke-width="2.5" d="M31 29h11v8c0 4-11 4-11 0v-8Z"/><path fill="none" stroke="${ink}" stroke-width="2" d="M42 31c5 0 5 5 0 5"/>`,
    stitchedHeart: `<path fill="${color}" stroke="${ink}" stroke-width="3" d="M24 41 7 25C-2 16 4 5 14 7c5 1 8 5 10 8 2-3 5-7 10-8 10-2 16 9 7 18L24 41Z"/><path fill="none" stroke="${bone}" stroke-width="2.5" stroke-linecap="round" d="m14 20 20 9m-17-12-4 6m10-3-4 7m10-4-4 7"/>`,
    flyingPaper: `<path fill="${bone}" stroke="${ink}" stroke-width="3" stroke-linejoin="round" d="M4 24 44 5 31 42l-8-13-19-5Z"/><path fill="${color}" stroke="${ink}" stroke-width="2.5" d="m23 29 21-24-28 20 7 4Z"/><path fill="none" stroke="${ink}" stroke-width="2.5" stroke-linecap="round" d="M12 34 5 41m15-6-7 8"/>`,
    skullRefresh: `<path fill="none" stroke="${color}" stroke-width="4" stroke-linecap="round" d="M9 15C15 4 32 3 40 13l3-7m-3 7-8-1M39 34c-7 10-23 10-31 0l-3 7m3-7 8 1"/><path fill="${bone}" stroke="${ink}" stroke-width="2.5" d="M16 23c0-6 4-9 9-9s9 3 9 9c0 4-2 7-4 8v5H20v-5c-2-1-4-4-4-8Z"/><circle cx="22" cy="24" r="2.5" fill="${ink}"/><circle cx="29" cy="24" r="2.5" fill="${ink}"/>`,
    batAlarm: `<path fill="${color}" stroke="${ink}" stroke-width="3" d="M13 20c0-8 5-13 12-13s12 5 12 13v15H13V20Z"/><circle cx="25" cy="23" r="9" fill="${bone}" stroke="${ink}" stroke-width="2.5"/><path stroke="${ink}" stroke-width="2.5" stroke-linecap="round" d="M25 17v6l4 3M15 39l-3 4m23-4 3 4"/><path fill="${color}" stroke="${ink}" stroke-width="2.5" d="M13 13 3 8l3 10 7 2m24-7 10-5-3 10-7 2"/>`,
    markerBolt: `<path fill="${color}" stroke="${ink}" stroke-width="3" d="m11 35 20-28 9 7-20 28-12 3 3-10Z"/><path fill="${bone}" stroke="${ink}" stroke-width="2.5" d="m31 7 5-5 9 7-5 5-9-7Z"/><path fill="${yellow}" stroke="${ink}" stroke-width="2" d="m7 7 9 2-5 7 8 1-13 14 4-11-7-1L7 7Z"/>`,
    coffinArchive: `<path fill="${color}" stroke="${ink}" stroke-width="3" d="m15 4-8 10 3 28h29l3-28-8-10H15Z"/><path fill="none" stroke="${ink}" stroke-width="3" d="M18 15h13M24.5 10v24m-7-12h14"/><path fill="${bone}" stroke="${ink}" stroke-width="2" d="M14 34h21v5H14z"/>`,
    crackedMirror: `<path fill="${cyan}" stroke="${ink}" stroke-width="3" d="M11 4h27l6 10-5 27H10L4 14 11 4Z"/><path fill="${bone}" stroke="${ink}" stroke-width="2.5" d="M16 20c0-6 4-10 9-10s9 4 9 10c0 4-2 7-5 9 5 2 8 5 9 10H12c1-5 4-8 9-10-3-2-5-5-5-9Z"/><path fill="none" stroke="${ink}" stroke-width="2" d="m24 4 3 10-5 6 6 5-4 16"/>`,
    skullDots: `<g fill="${color}" stroke="${ink}" stroke-width="2"><path d="M3 22c0-5 3-8 7-8s7 3 7 8c0 3-1 5-3 6v4H6v-4c-2-1-3-3-3-6Z"/><path d="M17 18c0-6 4-10 8-10s8 4 8 10c0 4-2 6-4 8v5h-8v-5c-2-2-4-4-4-8Z"/><path d="M33 22c0-5 3-8 7-8s7 3 7 8c0 3-1 5-3 6v4h-8v-4c-2-1-3-3-3-6Z"/></g><g fill="${ink}"><circle cx="8" cy="22" r="1.5"/><circle cx="12" cy="22" r="1.5"/><circle cx="23" cy="18" r="1.7"/><circle cx="28" cy="18" r="1.7"/><circle cx="38" cy="22" r="1.5"/><circle cx="42" cy="22" r="1.5"/></g>`,
    back: `<path fill="${color}" stroke="${ink}" stroke-width="3" stroke-linejoin="round" d="M25 5 5 24l20 19 5-8-9-8h22v-9H21l9-7-5-6Z"/>`,
    chevron: `<path fill="${color}" stroke="${ink}" stroke-width="3" stroke-linejoin="round" d="m14 6 22 18-22 18 7-18-7-18Z"/>`,
    sparkleBone: `<path fill="${color}" stroke="${ink}" stroke-width="2.5" d="m24 2 5 15 15 7-15 6-5 16-6-16-15-6 15-7 6-15Z"/><circle cx="24" cy="24" r="4" fill="${bone}" stroke="${ink}" stroke-width="2"/>`,
    tinyTask: `<path fill="${green}" stroke="${ink}" stroke-width="3" d="M11 7h27v34H11z"/><path fill="${bone}" stroke="${ink}" stroke-width="2.5" d="M17 3h15v8H17z"/><path fill="none" stroke="${ink}" stroke-width="2.5" stroke-linecap="round" d="m17 20 3 3 5-7m-8 15 3 3 5-7m4-7h5m-5 11h5"/>`,
    flame: `<path fill="${color}" stroke="${ink}" stroke-width="3" d="M27 3c3 10-7 12-2 21 2-7 9-8 8-16 9 8 13 17 8 27-4 8-12 11-19 9C9 41 4 30 9 20c3-6 8-9 12-14-1 8 2 10 6 13 4-6 2-10 0-16Z"/><path fill="${bone}" stroke="${ink}" stroke-width="2.5" d="M25 24c5 5 6 9 3 14-2 3-7 3-10 0-4-6 1-10 7-14Z"/>`,
  };
  const content = paths[name] || paths.sparkleBone;
  return `<svg class="sticker-icon sticker-icon--${size} sticker-icon--${accent}" viewBox="0 0 50 48" aria-hidden="true" focusable="false">${content}</svg>`;
}

function optionIcon(key, title, index) {
  const named = {
    "Dark Motivation": "moon",
    "Soft but Dangerous": "crackedHeart",
    "Dead Inside, Still Trying": "skullBattery",
    "Spite & Success": "trophy",
    "Workplace Survival": "hauntedMug",
    "Existential Nonsense": "confusedEye",
    "Morning Madness": "tiredSun",
    "Make me laugh": "skullRefresh",
    "Help me protect my peace": "coffinArchive",
    "Give me quotes to share": "flyingPaper",
    "Remind me I am not finished yet": "skullBattery",
    "Running on caffeine and hope": "hauntedMug",
    "Emotionally offline": "skullBattery",
    "In my comeback era": "trophy",
    "Neon Poster": "sparkleBone",
    "Gothic Newspaper": "confusedEye",
    "Cute but Concerning": "suspiciousFlower",
  };
  const fallbacks = {
    level: ["suspiciousFlower", "crackedHeart", "moon"],
    status: ["hauntedMug", "crackedMirror", "skullBattery", "trophy", "coffinArchive", "confusedEye"],
    goals: ["skullRefresh", "moon", "trophy", "coffinArchive", "flyingPaper", "skullBattery"],
    reminder: ["tiredSun", "hauntedMug", "moon", "batAlarm", "crackedMirror"],
    cardStyle: ["sparkleBone", "moon", "confusedEye", "crackedMirror", "suspiciousFlower", "markerBolt"],
  };
  return named[title] || fallbacks[key]?.[index] || "sparkleBone";
}

function header(title = "") {
  return `
    <div class="top-row">
      <div class="logo-mark">
        <span class="moon">${stickerIcon("moon", "xs", "pink")}</span>
        <img src="./assets/silent-madness-logo.png" alt="Silent Madness" />
      </div>
      <button class="icon-btn" data-action="open-settings" title="Open settings">${stickerIcon("skullDots", "sm", "pink")}</button>
    </div>
    ${title ? `<h2 class="headline" style="margin-top:22px">${accentTitle(title)}</h2>` : ""}
  `;
}

function bottomNav(active) {
  const navItems = [
    ["today", "moon", "Today", "pink"],
    ["explore", "confusedEye", "Explore", "green"],
    ["create", "markerBolt", "Create", "yellow"],
    ["saved", "coffinArchive", "Saved", "red"],
    ["profile", "crackedMirror", "Profile", "cyan"],
  ];
  return `
    <nav class="bottom-nav" aria-label="Main navigation">
      ${navItems
        .map(([id, icon, label, accent]) => `<button class="${active === id ? "active" : ""}" data-go="${id}" title="${label}">${stickerIcon(icon, "nav", accent)}<span>${label}</span></button>`)
        .join("")}
    </nav>
  `;
}

function optionCards(key, next, multiple = false) {
  return options[key]
    .map(
      ([title, text], index) => {
        const activeSelection = state.onboardingSelections[key];
        const selected = multiple ? activeSelection.includes(title) : activeSelection === title;
        return `
        <button class="option-card accent-${(index % 4) + 1} ${selected ? "is-selected" : ""}"
          data-select-profile="${key}" data-value="${escapeHtml(title)}" data-next="${next}" data-multiple="${multiple}">
          <span class="option-dot">${stickerIcon(optionIcon(key, title, index), "option", ["pink", "red", "green", "yellow"][index % 4])}</span>
          <span><h3>${title}</h3><p>${text}</p></span>${multiple ? `<span class="multi-check">${selected ? "✓" : "+"}</span>` : ""}
        </button>`;
      },
    )
    .join("");
}

function onboardingScreen(key, back, next, progress, title, subtitle, multiple = false) {
  const selectedCount = multiple ? state.onboardingSelections[key].length : 0;
  return `
    <section class="screen scrollable screen-enter">
      <button class="icon-btn" data-go="${back}" title="Back">${stickerIcon("back", "sm", "pink")}</button>
      <div class="progress-line"><span style="width:${progress}%"></span></div>
      <h2 class="headline" style="margin-top:18px">${title}</h2>
      <p class="subtext">${subtitle}${multiple ? " Choose as many as you like." : ""}</p>
      <div class="option-list" style="margin-top:18px">${optionCards(key, next, multiple)}</div>
      ${multiple ? `<button class="primary-btn multi-continue" data-continue-multi="${key}" data-next="${next}" ${selectedCount ? "" : "disabled"}>Continue with ${selectedCount} selected</button>` : ""}
    </section>`;
}

function quoteCard(quote) {
  const lengthClass = quote.text.length > 105 ? "quote-length-long" : quote.text.length > 75 ? "quote-length-medium" : "quote-length-short";
  const colorIndex = ((Number(quote.id) - 1) % 7) + 1;
  const colorClass = `quote-color-${colorIndex}`;
  const contrastClass = colorIndex >= 4 ? "quote-card-dark" : "";
  return `
    <div class="quote-card ${lengthClass} ${colorClass} ${contrastClass}">
      <blockquote>${escapeHtml(quote.text)}</blockquote>
      <img class="quote-card-logo" src="./assets/silent-madness-logo.png" alt="Silent Madness" />
    </div>`;
}

function savedCards() {
  let list = state.savedIds.map(getQuote);
  if (state.savedFilter === "Favorites") list = list.filter((quote) => state.favoriteIds.includes(quote.id));
  if (state.savedFilter === "By Mood") list.sort((a, b) => a.category.localeCompare(b.category));
  if (!list.length) {
    return `<div class="empty-state"><p class="subtext">Nothing saved here yet. Suspiciously emotionally healthy.</p><button class="secondary-btn" data-go="explore">Find Quotes</button></div>`;
  }
  return list
    .map(
      (quote, index) => `
        <article class="saved-card saved-card-v2 saved-art-${(index % 4) + 1} ${quote.text.length > 95 ? "saved-art-long" : quote.text.length > 65 ? "saved-art-medium" : "saved-art-short"}">
          <span class="saved-art-texture" aria-hidden="true"></span>
          <details class="saved-card-menu">
            <summary aria-label="Quote actions">•••</summary>
            <div>
              <button data-action="share" data-id="${quote.id}">Share</button>
              <button data-action="use-card" data-id="${quote.id}">Edit</button>
              <button data-action="remove" data-id="${quote.id}">Remove</button>
            </div>
          </details>
          <button class="favorite-button ${state.favoriteIds.includes(quote.id) ? "active" : ""}" data-action="favorite" data-id="${quote.id}" title="Favorite quote">♥</button>
          <h3>“${escapeHtml(quote.text)}”</h3>
          <img class="saved-card-logo" src="./assets/silent-madness-logo.png" alt="Silent Madness" />
        </article>`,
    )
    .join("");
}

function categoryCards(filter = "") {
  const normalized = filter.trim().toLowerCase();
  return categories
    .filter(([title, text]) => `${title} ${text}`.toLowerCase().includes(normalized))
    .map(
      ([title, text, icon], index) => `
        <button class="category-card category-card-v2 category-tone-${(index % 6) + 1}" data-category="${escapeHtml(title)}">
          <strong>${stickerIcon(icon, "category", ["pink", "red", "green", "pink", "cyan", "yellow"][index % 6])}</strong>
          <span><h3>${title}</h3><p>${text}</p></span>
          <b class="category-arrow" aria-hidden="true">→</b>
        </button>`,
    )
    .join("") || `<div class="empty-state" style="grid-column:1/-1"><p class="subtext">No chaos found under that name.</p></div>`;
}

function categoryQuoteCards() {
  return allQuotes()
    .filter((quote) => quote.category === state.selectedCategory)
    .map(
      (quote, index) => `
        <article class="explore-quote-card explore-art-${(index % 4) + 1} ${quote.text.length > 95 ? "explore-art-long" : quote.text.length > 65 ? "explore-art-medium" : "explore-art-short"}">
          <span class="explore-art-texture" aria-hidden="true"></span>
          <h3>“${escapeHtml(quote.text)}”</h3>
          <img class="explore-card-logo" src="./assets/silent-madness-logo.png" alt="Silent Madness" />
          <div class="explore-card-actions">
            <button class="${state.savedIds.includes(quote.id) ? "active" : ""}" data-action="save" data-id="${quote.id}" title="Save quote">♥</button>
            <button data-action="share" data-id="${quote.id}" title="Share quote">↗</button>
            <button data-action="use-card" data-id="${quote.id}" title="Create card">✦</button>
          </div>
        </article>`,
    )
    .join("");
}

function createPreviewQuote() {
  if (state.createSource === "Write My Own" && state.customText.trim()) {
    return { text: state.customText.trim(), category: "Custom Madness" };
  }
  return getQuote(state.createQuoteId || state.currentQuoteId);
}

function cardPreviewStyle() {
  const palette = cardPalettes[state.createColor];
  const font = cardFonts[state.createFont];
  const automaticTextColor = state.createStyle === "Editorial Gradient"
    ? "#050505"
    : state.createStyle === "Minimal Black and White"
      ? "#f8f5ec"
      : palette.accent;
  const textColor = cardFontColors[state.createFontColor] || automaticTextColor;
  return `--card-bg:${palette.background};--card-ink:${palette.ink};--card-accent:${palette.accent};--card-text:${textColor};--card-font:${font.css};--logo-filter:${palette.logoFilter}`;
}

function styleSlug(value) {
  return value.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function createToolPanel() {
  if (state.createTool === "Style") {
    return `<div class="creator-tool-panel"><div class="creator-choice-grid">${options.cardStyle.map(([item]) => `<button class="creator-choice ${state.createStyle === item ? "active" : ""}" data-create-style="${item}">${item}</button>`).join("")}</div></div>`;
  }
  if (state.createTool === "Background") {
    return `<div class="creator-tool-panel"><div class="swatch-grid creator-swatches">${Object.entries(cardPalettes).map(([name, palette]) => `<button class="color-swatch ${state.createColor === name ? "active" : ""}" data-create-color="${name}" title="${name}" style="--swatch:${palette.background};--swatch-accent:${palette.accent}"><span></span><b>${name}</b></button>`).join("")}</div></div>`;
  }
  if (state.createTool === "Colors") {
    return `<div class="creator-tool-panel"><p class="creator-panel-label">Font</p><div class="font-grid">${Object.keys(cardFonts).map((name) => `<button class="font-choice ${state.createFont === name ? "active" : ""}" data-create-font="${name}" style="font-family:${cardFonts[name].css}">${name}</button>`).join("")}</div><p class="creator-panel-label">Font color</p><div class="font-color-grid">${Object.entries(cardFontColors).map(([name, color]) => `<button class="font-color-choice ${state.createFontColor === name ? "active" : ""}" data-create-font-color="${name}" title="${name}" style="--font-swatch:${color || "linear-gradient(135deg,#ff38ad 0 45%,#f8f5ec 46% 100%)"}"><span></span><b>${name}</b></button>`).join("")}</div></div>`;
  }
  return `<div class="creator-tool-panel"><p class="creator-panel-label">Design effect</p><div class="effect-grid">${cardEffects.map((name) => `<button class="effect-choice effect-preview-${styleSlug(name)} ${state.createEffect === name ? "active" : ""}" data-create-effect="${name}"><span></span><b>${name}</b></button>`).join("")}</div><p class="creator-panel-label">Canvas size</p><div class="format-grid">${Object.entries(exportFormats).map(([name, format]) => `<button class="chip ${state.createFormat === name ? "active" : ""}" data-create-format="${name}">${format.label}</button>`).join("")}</div><p class="creator-panel-label">Quote source</p><div class="style-grid">${["Today’s Quote", "Pick from Saved", "Generate New", "Write My Own"].map((item) => `<button class="chip ${state.createSource === item ? "active" : ""}" data-create-source="${item}">${item}</button>`).join("")}</div>${state.createSource === "Write My Own" ? `<textarea class="custom-quote" data-custom-quote maxlength="180" placeholder="Write your own clean chaos...">${escapeHtml(state.customText)}</textarea>` : ""}</div>`;
}

function streakWeek() {
  const days = [["M", true], ["T", true], ["W", true], ["T", true], ["F", true], ["S", true], ["S", false]];
  return days.map(([day, complete]) => `<div class="streak-day"><span>${day}</span><b class="${complete ? "complete" : ""}">${complete ? "✓" : day}</b></div>`).join("");
}

const templates = {
  welcome: () => `
    <section class="screen screen-enter">
      ${header()}
      <img class="welcome-logo" src="./assets/silent-madness-logo.png" alt="Silent Madness" />
      <h2 class="headline welcome-headline">HI, HELLO.<br><em>WELCOME</em><br><strong>TO THE MADNESS.</strong></h2>
      <p class="subtext">Daily quirky pep talks for soft hearts, sharp minds + questionable coping mechanisms.</p>
      <button class="primary-btn push-bottom" data-action="start-onboarding">LET'S GO, WEIRDO ${stickerIcon("flyingPaper", "button", "yellow")}</button>
    </section>`,

  vibe: () => onboardingScreen("vibe", "welcome", "level", 20, "WHAT FLAVOUR<br><em>OF MADNESS</em><br><strong>TODAY?</strong>", "Pick a vibe. We’ll bring the chaos."),
  level: () => onboardingScreen("level", "vibe", "status", 34, "SET YOUR<br><em>MADNESS LEVEL</em>", "How dark should your daily quote be?"),
  status: () => onboardingScreen("status", "level", "goals", 48, "CURRENT<br><em>LIFE STATUS?</em>", "What best describes you lately?"),
  goals: () => onboardingScreen("goals", "status", "reminder", 62, "WHAT SHOULD<br><em>THE CHAOS DO?</em>", "Choose the tiny strange wisdom you want most.", true),
  reminder: () => onboardingScreen("reminder", "goals", "cardStyle", 76, "WHEN SHOULD<br><em>WE APPEAR?</em>", "When should we send your daily madness?"),
  cardStyle: () => onboardingScreen("cardStyle", "reminder", "profileResult", 90, "PICK YOUR<br><em>LOUD LOOK.</em>", "What should your shareable cards look like?", true),

  profileResult: () => `
    <section class="screen screen-enter">
      <button class="icon-btn" data-go="cardStyle" title="Back">${stickerIcon("back", "sm", "pink")}</button>
      <div class="profile-card" style="margin-top:58px">
        <span class="badge">Your Madness Profile is ready</span>
        <div class="profile-sticker">${stickerIcon("skullBattery", "hero", "yellow")}</div>
        <h2 class="profile-title">${state.profile.status === "In my comeback era" ? "COMEBACK ERA,<br><em>QUIETLY LOADING.</em>" : "DEAD INSIDE,<br><em>STILL TRYING.</em>"}</h2>
        <p class="subtext">${state.profile.vibe}, ${state.profile.level.toLowerCase()}, ${state.profile.goals.length} quote goals, and ${state.profile.cardStyle.length} favourite card styles.</p>
      </div>
      <div class="benefits"><span class="benefit">${stickerIcon("moon", "benefit", "pink")} ${state.profile.level}</span><span class="benefit">${stickerIcon("suspiciousFlower", "benefit", "green")} ${state.profile.goals.length} goals</span><span class="benefit">${stickerIcon("markerBolt", "benefit", "yellow")} ${state.profile.cardStyle.length} styles</span><span class="benefit">${stickerIcon("batAlarm", "benefit", "cyan")} ${state.profile.reminder}</span></div>
      <button class="primary-btn push-bottom" data-go="paywall">Continue</button>
    </section>`,

  paywall: () => `
    <section class="screen scrollable screen-enter">
      <span class="badge">7-day free trial demo</span>
      <h2 class="headline" style="margin-top:14px">UNLOCK THE<br><em>GOOD STUFF.</em></h2>
      <p class="subtext">This prototype records your plan choice locally. Real billing will be connected later through RevenueCat.</p>
      <div class="benefits">${[
        ["skullRefresh", "Unlimited daily quotes"],
        ["confusedEye", "Personalised categories"],
        ["flyingPaper", "Shareable quote cards"],
        ["batAlarm", "Custom reminders"],
        ["coffinArchive", "Favourite library"],
        ["trophy", "Premium quote packs"],
        ["sparkleBone", "New weekly quotes"],
        ["hauntedMug", "No ads"],
      ].map(([icon, item], index) => `<span class="benefit">${stickerIcon(icon, "benefit", index % 2 ? "green" : "pink")} ${item}</span>`).join("")}</div>
      <div class="pricing-grid">
        ${[
          ["Yearly Plan", "R299.99/year", "7-day free trial"],
          ["Monthly Plan", "R49.99/month", "7-day free trial"],
          ["Lifetime Access", "R699 once-off", "One payment. Eternal strange wisdom."],
        ].map(([plan, price, detail], index) => `<button class="pricing-card ${index === 0 ? "featured" : ""} ${state.selectedPlan === plan ? "is-selected" : ""}" data-plan="${plan}"><h3>${plan}</h3><div class="price">${price}</div><p>${detail}</p></button>`).join("")}
      </div>
      <button class="primary-btn" data-action="start-trial">Start Free Trial</button>
      <p class="small-muted" style="text-align:center">Demo only · Terms · Privacy · Restore Purchases</p>
    </section>`,

  today: () => {
    const quote = getQuote();
    const artIndex = ((Number(quote.id) - 1) % 4) + 1;
    const lengthClass = quote.text.length > 105 ? "today-art-long" : quote.text.length > 70 ? "today-art-medium" : "today-art-short";
    return `
      <section class="screen scrollable screen-enter screen--today-v2">
        ${header()}
        <div class="today-intro">
          <span>GOOD MORNING, TROUBLEMAKER.</span>
          <h2>YOUR DAILY<br><em>MADNESS.</em></h2>
        </div>
        <article class="today-art-card today-art-${artIndex} ${lengthClass}">
          <span class="today-art-texture" aria-hidden="true"></span>
          <span class="today-art-label">TODAY'S QUOTE</span>
          <blockquote>“${escapeHtml(quote.text)}”</blockquote>
          <img src="./assets/silent-madness-logo.png" alt="Silent Madness" />
          <button class="today-favorite ${state.savedIds.includes(quote.id) ? "active" : ""}" data-action="save" data-id="${quote.id}" title="Save quote">♥</button>
        </article>
        <div class="today-actions">
          <button data-action="share" data-id="${quote.id}" title="Share quote"><span>↗</span><b>Share</b></button>
          <button data-action="new-quote" title="New quote"><span>↻</span><b>New quote</b></button>
          <button data-action="use-card" data-id="${quote.id}" title="Create quote card"><span>✦</span><b>Create</b></button>
          <button data-go="reminders" title="Open reminders"><span>◷</span><b>${state.reminderEnabled ? state.reminderTime : "Remind"}</b></button>
        </div>
        <div class="today-task-v2">
          <span>${stickerIcon("tinyTask", "title", "pink")}</span>
          <div><small>TODAY'S TINY TASK</small><p>Protect your peace like it has a tiny security team.</p></div>
          <button data-action="tiny-task" title="Complete task">✓</button>
        </div>
        ${bottomNav("today")}
      </section>`;
  },

  explore: () => `
    <section class="screen scrollable screen-enter screen--explore-v2">
      ${header()}
      <div class="simple-screen-heading">
        <h2>EXPLORE</h2>
        <p>HOW DO YOU FEEL?</p>
      </div>
      <label class="explore-search">
        <span aria-hidden="true"></span>
        <input data-search placeholder="Search quotes, moods, or chaos..." aria-label="Search quotes, moods, or chaos" />
      </label>
      <div class="category-list" data-category-list>${categoryCards()}</div>
      ${bottomNav("explore")}
    </section>`,

  quoteDetail: () => `
    <section class="screen scrollable screen-enter screen--category-v2">
      <div class="creator-header"><button class="creator-back" data-go="explore" title="Back">‹</button><img src="./assets/silent-madness-logo.png" alt="Silent Madness" /><button class="creator-next" data-action="shuffle-category">SHUFFLE</button></div>
      <div class="simple-screen-heading"><h2>${state.selectedCategory}</h2><p>${categories.find(([title]) => title === state.selectedCategory)?.[1] || "A beautifully strange collection."}</p></div>
      <div class="explore-quote-list">${categoryQuoteCards()}</div>
      ${bottomNav("explore")}
    </section>`,

  create: () => {
    const preview = createPreviewQuote();
    return `
      <section class="screen scrollable screen-enter screen--create-v2">
        <div class="creator-header">
          <button class="creator-back" data-go="today" title="Back">‹</button>
          <img src="./assets/silent-madness-logo.png" alt="Silent Madness" />
          <button class="creator-next" data-action="save-to-photos">NEXT</button>
        </div>
        <div class="creator-title-row"><h2>CREATE</h2><span aria-hidden="true">≋</span></div>
        <div class="creator-canvas-wrap">
          <button class="canvas-corner canvas-close" data-go="today" title="Close editor">×</button>
          <button class="canvas-corner canvas-layers" data-create-tool="Style" title="Card layers">≋</button>
          <div class="preview-stage preview-${state.createFormat.toLowerCase().replaceAll(" ", "-")}"><div class="card-preview theme-${styleSlug(state.createStyle)} effect-${styleSlug(state.createEffect)}" style="${cardPreviewStyle()}"><span class="theme-decoration theme-decoration-a" aria-hidden="true"></span><span class="theme-decoration theme-decoration-b" aria-hidden="true"></span><strong>${escapeHtml(preview.text)}</strong><img class="brand-stamp" src="./assets/silent-madness-logo.png" alt="Silent Madness" /></div></div>
        </div>
        <div class="creator-toolbar">
          ${[["Style", "A"], ["Background", "▧"], ["Colors", "◉"], ["Effects", "✦"]].map(([tool, icon]) => `<button class="${state.createTool === tool ? "active" : ""}" data-create-tool="${tool}"><b>${icon}</b><span>${tool}</span></button>`).join("")}
        </div>
        ${createToolPanel()}
        <div class="creator-actions"><button class="primary-btn" data-action="save-to-photos">Save to Photos</button><button class="secondary-btn" data-action="share-preview">Share</button></div>
        ${bottomNav("create")}
      </section>`;
  },

  saved: () => `
    <section class="screen scrollable screen-enter screen--saved-v2">
      ${header()}
      <div class="simple-screen-heading"><h2>SAVED QUOTES</h2><p>KEEP WHAT HITS DIFFERENT.</p></div>
      <div class="saved-filter-bar"><div class="tabs">${["All", "Favorites", "By Mood"].map((item) => `<button class="tab ${state.savedFilter === item ? "active" : ""}" data-saved-filter="${item}">${item}</button>`).join("")}</div></div>
      <div class="saved-list">${savedCards()}</div>
      ${bottomNav("saved")}
    </section>`,

  profile: () => `
    <section class="screen scrollable screen-enter screen--profile-v2">
      ${header()}
      <div class="simple-screen-heading profile-heading"><h2>PROFILE</h2><p>YOUR DAILY CHAOS, ORGANIZED.</p></div>
      <div class="streak-hero">
        <div class="streak-copy">
          <small>CURRENT STREAK</small>
          <strong>${state.streakDays}<span>DAYS</span></strong>
          <p>Quiet consistency looks suspiciously good on you.</p>
        </div>
        <div class="streak-flame">${stickerIcon("flame", "hero", "pink")}</div>
      </div>
      <div class="streak-week">${streakWeek()}</div>
      <div class="badge-heading"><h3>BADGES</h3><span>4 EARNED</span></div>
      <div class="badge-grid">
        <div>${stickerIcon("tiredSun", "category", "yellow")}<span><strong>Early Bird</strong><small>Morning chaos mastered</small></span></div>
        <div>${stickerIcon("moon", "category", "pink")}<span><strong>Night Owl</strong><small>Wisdom after midnight</small></span></div>
        <div>${stickerIcon("confusedEye", "category", "cyan")}<span><strong>Overthinker</strong><small>Thought spiral survivor</small></span></div>
        <div>${stickerIcon("stitchedHeart", "category", "red")}<span><strong>Soft Heart</strong><small>Still kind, somehow</small></span></div>
      </div>
      <p class="profile-section-label">YOUR ROUTINE</p>
      <button class="reminder-link-card" data-go="reminders">${stickerIcon("batAlarm", "category", "pink")}<span><strong>Daily reminders</strong><small>${state.reminderEnabled ? `${state.reminderTime} · ${state.reminderVibe}` : "Currently paused"}</small></span><b>›</b></button>
      <div class="appearance-panel">
        <p class="section-title">APPEARANCE</p>
        <div class="appearance-options">
          <button class="appearance-choice ${state.theme === "Dark" ? "active" : ""}" data-interface-theme="Dark"><span class="appearance-preview appearance-preview-dark"></span><strong>Dark</strong><small>Midnight neon</small></button>
          <button class="appearance-choice ${state.theme === "Light" ? "active" : ""}" data-interface-theme="Light"><span class="appearance-preview appearance-preview-light"></span><strong>Light</strong><small>Bone paper neon</small></button>
        </div>
      </div>
      <p class="profile-section-label">PROFILE SETTINGS</p>
      <div class="settings-list">
        <button class="setting-row" data-go="vibe">${stickerIcon("crackedMirror", "setting", "cyan")}<span>Edit My Madness Profile</span>${stickerIcon("chevron", "button", "pink")}</button>
        <button class="setting-row" data-go="paywall">${stickerIcon("trophy", "setting", "yellow")}<span>Subscription</span>${stickerIcon("chevron", "button", "pink")}</button>
        <button class="setting-row" data-action="restore">${stickerIcon("coffinArchive", "setting", "red")}<span>Restore Purchases</span>${stickerIcon("chevron", "button", "pink")}</button>
        <button class="setting-row" data-action="privacy">${stickerIcon("confusedEye", "setting", "cyan")}<span>Privacy Policy</span>${stickerIcon("chevron", "button", "pink")}</button>
        <button class="setting-row" data-action="terms">${stickerIcon("hauntedMug", "setting", "pink")}<span>Terms of Use</span>${stickerIcon("chevron", "button", "pink")}</button>
        <button class="setting-row" data-action="support">${stickerIcon("flyingPaper", "setting", "yellow")}<span>Contact Support</span>${stickerIcon("chevron", "button", "pink")}</button>
        <button class="setting-row" data-action="reset">${stickerIcon("skullRefresh", "setting", "red")}<span>Reset Demo Data</span>${stickerIcon("chevron", "button", "pink")}</button>
      </div>
      ${bottomNav("profile")}
    </section>`,

  reminders: () => `
    <section class="screen scrollable screen-enter screen--reminders-v2">
      <div class="creator-header"><button class="creator-back" data-go="profile" title="Back">‹</button><img src="./assets/silent-madness-logo.png" alt="Silent Madness" /><span></span></div>
      <div class="simple-screen-heading"><h2>REMINDERS</h2><p>GET THE RIGHT MESSAGE AT THE RIGHT TIME.</p></div>
      <div class="reminder-banner"><span>YOU GOT THIS.</span><strong>WE'LL REMIND YOU.</strong>${stickerIcon("batAlarm", "hero", "pink")}</div>
      <div class="reminder-panel">
        <div class="reminder-panel-title"><strong>DAILY REMINDER</strong><button class="switch ${state.reminderEnabled ? "on" : ""}" data-action="toggle-reminder" aria-label="Toggle daily reminder"></button></div>
        <button class="reminder-row" data-action="cycle-reminder-time"><span>Time</span><strong>${state.reminderTime} ›</strong></button>
        <button class="reminder-row" data-action="cycle-reminder-vibe"><span>Vibe</span><strong>${state.reminderVibe} ›</strong></button>
        <div class="reminder-days"><span>Days</span><div>${[["S","S1"],["M","M"],["T","T"],["W","W"],["T","T2"],["F","F"],["S","S2"]].map(([label, value]) => `<button class="${state.reminderDays.includes(value) ? "active" : ""}" data-reminder-day="${value}">${label}</button>`).join("")}</div></div>
      </div>
      <div class="reminder-panel">
        <div class="reminder-panel-title"><span><strong>LATE NIGHT MODE</strong><small>For overthinkers and midnight survivors.</small></span><button class="switch ${state.lateNightEnabled ? "on" : ""}" data-action="toggle-late-night" aria-label="Toggle late night mode"></button></div>
        <button class="reminder-row" data-action="cycle-late-time"><span>Time</span><strong>${state.lateNightTime} ›</strong></button>
        <div class="reminder-row"><span>Vibe</span><strong>Late Night Thoughts</strong></div>
      </div>
      ${bottomNav("profile")}
    </section>`,
};

function renderNav() {
  screenNav.innerHTML = screens.map(([id, label]) => `<button class="nav-screen ${id === currentScreen ? "active" : ""}" data-go="${id}">${label}</button>`).join("");
}

function render(id = currentScreen) {
  const previousScreen = currentScreen;
  const previousScroller = app.querySelector(".screen.scrollable");
  const previousScrollTop = previousScroller?.scrollTop || 0;
  const preserveScroll = id === previousScreen;
  currentScreen = templates[id] ? id : "today";
  applyInterfaceTheme();
  app.innerHTML = templates[currentScreen]();
  if (preserveScroll) {
    const nextScroller = app.querySelector(".screen.scrollable");
    if (nextScroller) nextScroller.scrollTop = previousScrollTop;
  }
  renderNav();
}

function randomQuote(category) {
  const pool = category ? allQuotes().filter((quote) => quote.category === category) : allQuotes();
  const alternatives = pool.filter((quote) => quote.id !== state.currentQuoteId);
  return (alternatives.length ? alternatives : pool)[Math.floor(Math.random() * (alternatives.length || pool.length))];
}

async function shareQuote(quote) {
  const text = `“${quote.text}”\n\nSilent Madness`;
  try {
    if (navigator.share) {
      await navigator.share({ title: "Silent Madness", text });
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      showToast("Quote copied to your clipboard.");
    } else {
      showToast("Sharing is not supported in this browser.");
    }
    if (!state.sharedIds.includes(quote.id)) state.sharedIds.push(quote.id);
    saveState();
  } catch (error) {
    if (error.name !== "AbortError") showToast("Sharing was unavailable.");
  }
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

async function buildCardCanvas(formatName) {
  if (document.fonts?.ready) await document.fonts.ready;
  const quote = createPreviewQuote();
  const { width, height } = exportFormats[formatName];
  const palette = cardPalettes[state.createColor];
  const font = cardFonts[state.createFont];
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  const theme = state.createStyle;
  const unit = Math.min(width, height);
  let textX = width / 2;
  let textY = height * 0.48;
  let maxTextWidth = width * (width > height ? 0.7 : 0.78);
  let textAlign = "center";
  let themeFont = font.canvas;
  let uppercase = state.createFont === "Poster Loud";
  const isEditorialGradient = theme === "Editorial Gradient";
  const automaticTextColor = isEditorialGradient
    ? "#050505"
    : theme === "Minimal Black and White"
      ? "#f8f5ec"
      : palette.accent;
  const textColor = cardFontColors[state.createFontColor] || automaticTextColor;

  const inset = Math.max(38, Math.min(width, height) * 0.045);
  if (isEditorialGradient) {
    const editorialGradient = ctx.createLinearGradient(0, 0, width, height);
    editorialGradient.addColorStop(0, "#ff2fa7");
    editorialGradient.addColorStop(0.58, "#f43d87");
    editorialGradient.addColorStop(1, "#ff7864");
    ctx.fillStyle = editorialGradient;
    ctx.fillRect(0, 0, width, height);

    ctx.save();
    ctx.globalAlpha = 0.075;
    ctx.strokeStyle = "#f8f5ec";
    ctx.lineWidth = Math.max(1, unit * 0.0015);
    const stripeGap = Math.max(18, unit * 0.025);
    for (let x = -height; x < width + height; x += stripeGap) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x - height * 0.24, height);
      ctx.stroke();
    }
    ctx.restore();

    ctx.fillStyle = "rgba(5,5,5,0.72)";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.font = `700 ${Math.round(unit * 0.028)}px Impact, sans-serif`;
    ctx.fillText("TODAY'S QUOTE", inset * 1.35, inset * 1.25);
    textX = width / 2;
    textY = height * 0.48;
    maxTextWidth = width * (width > height ? 0.72 : 0.75);
    textAlign = "center";
    uppercase = true;
  } else {
    ctx.fillStyle = "#030303";
    ctx.fillRect(0, 0, width, height);

    const glow = ctx.createRadialGradient(width * 0.2, height * 0.18, 0, width * 0.2, height * 0.18, Math.max(width, height) * 0.48);
    glow.addColorStop(0, palette.accent);
    glow.addColorStop(1, "rgba(0,0,0,0)");
    ctx.save();
    ctx.globalAlpha = theme === "Minimal Black and White" ? 0.05 : 0.22;
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, width, height);
    ctx.restore();

    const secondGlow = ctx.createRadialGradient(width * 0.86, height * 0.72, 0, width * 0.86, height * 0.72, Math.max(width, height) * 0.42);
    secondGlow.addColorStop(0, palette.background);
    secondGlow.addColorStop(1, "rgba(0,0,0,0)");
    ctx.save();
    ctx.globalAlpha = theme === "Cute but Concerning" ? 0.3 : 0.15;
    ctx.fillStyle = secondGlow;
    ctx.fillRect(0, 0, width, height);
    ctx.restore();
  }

  if (state.createEffect === "Soft Bloom") {
    ctx.save();
    ctx.globalAlpha = 0.14;
    ctx.fillStyle = palette.accent;
    ctx.filter = `blur(${Math.max(18, unit * 0.035)}px)`;
    ctx.fillRect(width * 0.18, height * 0.22, width * 0.64, height * 0.56);
    ctx.restore();
  }

  if (state.createEffect === "Film Grain") {
    ctx.save();
    ctx.globalAlpha = 0.08;
    ctx.fillStyle = "#f8f5ec";
    const grainStep = Math.max(12, Math.round(unit * 0.018));
    for (let y = 0; y < height; y += grainStep) {
      for (let x = (y / grainStep) % 2 ? grainStep / 2 : 0; x < width; x += grainStep) {
        ctx.fillRect(x, y, 1.5, 1.5);
      }
    }
    ctx.restore();
  }

  if (state.createEffect === "Vignette") {
    const vignette = ctx.createRadialGradient(width / 2, height / 2, unit * 0.15, width / 2, height / 2, Math.max(width, height) * 0.72);
    vignette.addColorStop(0, "rgba(0,0,0,0)");
    vignette.addColorStop(1, "rgba(0,0,0,0.72)");
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, width, height);
  }

  if (theme === "Dark Vintage" || theme === "Gothic Newspaper") {
    ctx.save();
    ctx.globalAlpha = 0.07;
    ctx.strokeStyle = "#f8f5ec";
    ctx.lineWidth = 1;
    for (let y = inset; y < height - inset; y += Math.max(7, unit * 0.012)) {
      ctx.beginPath();
      ctx.moveTo(inset, y);
      ctx.lineTo(width - inset, y);
      ctx.stroke();
    }
    ctx.restore();
  }

  if (theme === "Chaotic Scrapbook") {
    ctx.save();
    ctx.globalAlpha = 0.14;
    ctx.fillStyle = palette.accent;
    ctx.translate(width / 2, height / 2);
    ctx.rotate(-0.08);
    ctx.fillRect(-unit * 0.04, -height, unit * 0.08, height * 2);
    ctx.restore();
  }

  if (theme === "Cute but Concerning") {
    [[0.1, 0.15], [0.88, 0.2], [0.14, 0.82], [0.86, 0.78]].forEach(([x, y]) => {
      ctx.save();
      ctx.globalAlpha = 0.35;
      ctx.fillStyle = palette.accent;
      ctx.beginPath();
      ctx.arc(width * x, height * y, unit * 0.014, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
  }

  ctx.strokeStyle = isEditorialGradient ? "rgba(5,5,5,0.18)" : "rgba(248,245,236,0.18)";
  ctx.lineWidth = Math.max(2, unit * 0.0025);
  ctx.strokeRect(inset, inset, width - inset * 2, height - inset * 2);

  ctx.fillStyle = textColor;
  ctx.textAlign = textAlign;
  ctx.textBaseline = "middle";
  const lengthScale = quote.text.length > 110 ? 0.68 : quote.text.length > 80 ? 0.8 : 1;
  const baseSize = Math.round(Math.min(width * 0.075, height * 0.1) * lengthScale);
  ctx.font = `${font.weight} ${baseSize}px ${themeFont}`;
  const displayText = uppercase ? quote.text.toUpperCase() : quote.text;
  const words = displayText.split(" ");
  const lines = [];
  let line = "";
  words.forEach((word) => {
    const test = `${line} ${word}`.trim();
    if (ctx.measureText(test).width > maxTextWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  });
  lines.push(line);
  const lineHeight = baseSize * 1.2;
  const startY = textY - ((lines.length - 1) * lineHeight) / 2;
  lines.forEach((text, index) => ctx.fillText(text, textX, startY + index * lineHeight));

  try {
    const logo = await loadImage("./assets/silent-madness-logo.png");
    const logoWidth = Math.min(width * 0.42, height * 0.32);
    const logoHeight = logoWidth * (logo.height / logo.width);
    const logoCanvas = document.createElement("canvas");
    logoCanvas.width = Math.ceil(logoWidth);
    logoCanvas.height = Math.ceil(logoHeight);
    const logoCtx = logoCanvas.getContext("2d");
    logoCtx.drawImage(logo, 0, 0, logoCanvas.width, logoCanvas.height);
    logoCtx.globalCompositeOperation = "source-in";
    logoCtx.fillStyle = textColor;
    logoCtx.fillRect(0, 0, logoCanvas.width, logoCanvas.height);
    ctx.drawImage(logoCanvas, (width - logoWidth) / 2, height * 0.83, logoWidth, logoHeight);
  } catch {
    ctx.font = `700 ${Math.round(width * 0.025)}px Arial, sans-serif`;
    ctx.fillText("SILENT MADNESS", width / 2, height * 0.86);
  }
  return canvas;
}

function rememberCardDesign() {
  const quote = createPreviewQuote();
  state.savedCardDesigns = [{
    id: Date.now(),
    quote: quote.text,
    style: state.createStyle,
    color: state.createColor,
    font: state.createFont,
    fontColor: state.createFontColor,
    effect: state.createEffect,
    mood: state.createMood,
    savedAt: new Date().toISOString(),
  }, ...state.savedCardDesigns].slice(0, 20);
  saveState();
}

function canvasToBlob(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error("Image could not be created.")), "image/png");
  });
}

async function saveCardToPhotos() {
  rememberCardDesign();
  const formatName = state.createFormat;
  const canvas = await buildCardCanvas(formatName);
  const filename = `silent-madness-${formatName.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-")}.png`;
  const blob = await canvasToBlob(canvas);
  const file = new File([blob], filename, { type: "image/png" });

  if (navigator.share && navigator.canShare?.({ files: [file] })) {
    try {
      await navigator.share({
        files: [file],
        title: "Silent Madness",
        text: `${exportFormats[formatName].label} quote card`,
      });
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }

  const link = document.createElement("a");
  link.download = filename;
  link.href = URL.createObjectURL(blob);
  link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  showToast(`${exportFormats[formatName].label} image downloaded.`);
}

document.addEventListener("input", (event) => {
  if (event.target.matches("[data-search]")) {
    document.querySelector("[data-category-list]").innerHTML = categoryCards(event.target.value);
  }
  if (event.target.matches("[data-custom-quote]")) {
    state.customText = event.target.value;
    saveState();
    const preview = document.querySelector(".card-preview strong");
    if (preview) preview.textContent = state.customText || "YOUR CHAOS GOES HERE.";
  }
});

document.addEventListener("click", async (event) => {
  const target = event.target.closest("button");
  if (!target) return;

  if (target.dataset.go) return render(target.dataset.go);

  if (target.dataset.interfaceTheme) {
    state.theme = target.dataset.interfaceTheme;
    saveState();
    render();
    return showToast(`${state.theme} interface selected.`);
  }

  if (target.dataset.selectProfile) {
    const key = target.dataset.selectProfile;
    const value = target.dataset.value;
    if (target.dataset.multiple === "true") {
      const current = state.onboardingSelections[key];
      const updated = current.includes(value) ? current.filter((item) => item !== value) : [...current, value];
      state.onboardingSelections[key] = updated;
      state.profile[key] = updated;
      saveState();
      return render();
    }
    state.onboardingSelections[key] = value;
    state.profile[key] = value;
    saveState();
    return render(target.dataset.next);
  }

  if (target.dataset.continueMulti) {
    if (!state.onboardingSelections[target.dataset.continueMulti].length) return showToast("Choose at least one option first.");
    return render(target.dataset.next);
  }

  if (target.dataset.category) {
    state.selectedCategory = target.dataset.category;
    saveState();
    return render("quoteDetail");
  }

  if (target.dataset.plan) {
    state.selectedPlan = target.dataset.plan;
    saveState();
    return render();
  }

  if (target.dataset.savedFilter) {
    state.savedFilter = target.dataset.savedFilter;
    saveState();
    render();
    document.querySelector(".saved-filter-bar")?.scrollIntoView({ block: "nearest" });
    document.querySelector("[data-saved-filter].active")?.scrollIntoView({ inline: "center", block: "nearest" });
    return;
  }

  if (target.dataset.createTool) {
    state.createTool = target.dataset.createTool;
    saveState();
    return render();
  }

  if (target.dataset.reminderDay) {
    const day = target.dataset.reminderDay;
    state.reminderDays = state.reminderDays.includes(day)
      ? state.reminderDays.filter((item) => item !== day)
      : [...state.reminderDays, day];
    saveState();
    return render();
  }

  if (target.dataset.createSource) {
    state.createSource = target.dataset.createSource;
    if (state.createSource === "Today’s Quote") state.createQuoteId = state.currentQuoteId;
    if (state.createSource === "Pick from Saved") state.createQuoteId = state.savedIds[0] || state.currentQuoteId;
    if (state.createSource === "Generate New") state.createQuoteId = randomQuote().id;
    saveState();
    return render();
  }

  if (target.dataset.createStyle) {
    state.createStyle = target.dataset.createStyle;
    if (state.createStyle === "Editorial Gradient") {
      state.createColor = "Hot Pink";
      state.createFont = "Poster Loud";
      state.createFontColor = "Auto";
      state.createEffect = "Clean Matte";
    }
    saveState();
    return render();
  }

  if (target.dataset.createFormat) {
    state.createFormat = target.dataset.createFormat;
    saveState();
    return render();
  }

  if (target.dataset.createColor) {
    state.createColor = target.dataset.createColor;
    saveState();
    return render();
  }

  if (target.dataset.createFont) {
    state.createFont = target.dataset.createFont;
    saveState();
    return render();
  }

  if (target.dataset.createFontColor) {
    state.createFontColor = target.dataset.createFontColor;
    saveState();
    return render();
  }

  if (target.dataset.createEffect) {
    state.createEffect = target.dataset.createEffect;
    saveState();
    return render();
  }

  if (target.dataset.createMood) {
    state.createMood = target.dataset.createMood;
    saveState();
    return render();
  }

  const action = target.dataset.action;
  const id = Number(target.dataset.id);
  if (!action) return;

  if (action === "start-onboarding") {
    state.onboardingSelections = structuredClone(defaultState.onboardingSelections);
    saveState();
    return render("vibe");
  }

  if (action === "save") {
    if (!state.savedIds.includes(id)) {
      state.savedIds.unshift(id);
      if (!state.favoriteIds.includes(id)) state.favoriteIds.push(id);
    } else {
      state.savedIds = state.savedIds.filter((savedId) => savedId !== id);
      state.favoriteIds = state.favoriteIds.filter((favoriteId) => favoriteId !== id);
    }
    saveState();
    render();
    return showToast(state.savedIds.includes(id) ? "Saved to your little museum." : "Removed from saved quotes.");
  }
  if (action === "remove") {
    state.savedIds = state.savedIds.filter((savedId) => savedId !== id);
    state.favoriteIds = state.favoriteIds.filter((savedId) => savedId !== id);
    saveState();
    return render();
  }
  if (action === "favorite") {
    state.favoriteIds = state.favoriteIds.includes(id)
      ? state.favoriteIds.filter((favoriteId) => favoriteId !== id)
      : [...state.favoriteIds, id];
    saveState();
    render();
    return showToast(state.favoriteIds.includes(id) ? "Added to favorites." : "Removed from favorites.");
  }
  if (action === "share") return shareQuote(getQuote(id));
  if (action === "share-preview") return shareQuote(createPreviewQuote());
  if (action === "new-quote") {
    state.currentQuoteId = randomQuote().id;
    saveState();
    return render();
  }
  if (action === "shuffle-category") {
    const quote = randomQuote(state.selectedCategory);
    state.currentQuoteId = quote.id;
    saveState();
    showToast(`Try this one: “${quote.text}”`);
    return;
  }
  if (action === "use-card") {
    state.createQuoteId = id;
    state.createSource = "Pick from Saved";
    saveState();
    return render("create");
  }
  if (action === "save-to-photos") return saveCardToPhotos();
  if (action === "toggle-reminder") {
    state.reminderEnabled = !state.reminderEnabled;
    saveState();
    render();
    return showToast(state.reminderEnabled ? `${state.profile.reminder} enabled.` : "Daily reminder paused.");
  }
  if (action === "toggle-late-night") {
    state.lateNightEnabled = !state.lateNightEnabled;
    saveState();
    render();
    return showToast(state.lateNightEnabled ? "Late night mode enabled." : "Late night mode paused.");
  }
  if (action === "cycle-reminder-time") {
    const times = ["07:00", "08:00", "09:30", "12:30", "18:00"];
    state.reminderTime = times[(times.indexOf(state.reminderTime) + 1) % times.length];
    saveState();
    return render();
  }
  if (action === "cycle-late-time") {
    const times = ["21:30", "22:30", "23:30", "00:30"];
    state.lateNightTime = times[(times.indexOf(state.lateNightTime) + 1) % times.length];
    saveState();
    return render();
  }
  if (action === "cycle-reminder-vibe") {
    const vibes = ["Morning Madness", "Dark Motivation", "Soft but Dangerous", "Existential Nonsense"];
    state.reminderVibe = vibes[(vibes.indexOf(state.reminderVibe) + 1) % vibes.length];
    saveState();
    return render();
  }
  if (action === "tiny-task") return showToast("Peace protected. Tiny security team deployed.");
  if (action === "start-trial") {
    state.trialStarted = true;
    saveState();
    render("today");
    return showToast(`${state.selectedPlan} demo activated. No payment was taken.`);
  }
  if (action === "open-settings") return render("profile");
  if (action === "restore") return showToast(state.trialStarted ? `${state.selectedPlan} demo restored.` : "No demo purchase found.");
  if (action === "privacy") return showToast("Privacy page placeholder. No personal data leaves this browser.");
  if (action === "terms") return showToast("Terms page placeholder for the production app.");
  if (action === "support") {
    window.location.href = "mailto:support@silentmadness.app?subject=Silent%20Madness%20Support";
    return;
  }
  if (action === "reset") {
    localStorage.removeItem(STORAGE_KEY);
    state = structuredClone(defaultState);
    render("welcome");
  }
});

render(currentScreen);
