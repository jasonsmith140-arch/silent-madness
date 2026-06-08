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

const quotes = [
  { id: 1, text: "You are tired, not finished.", category: "Dark Motivation", mood: "Medium Madness" },
  { id: 2, text: "Keep going. Your plot twist is still loading.", category: "Dark Motivation", mood: "Tired but still trying" },
  { id: 3, text: "Survive today. Become suspiciously powerful tomorrow.", category: "Dark Motivation", mood: "Full Moon Energy" },
  { id: 4, text: "Your comeback does not need an announcement. Just arrive different.", category: "Dark Motivation", mood: "Comeback era" },
  { id: 5, text: "Stay soft. Win anyway.", category: "Soft but Dangerous", mood: "Soft Strange" },
  { id: 6, text: "Kindness is not permission to test the fences.", category: "Soft but Dangerous", mood: "Medium Madness" },
  { id: 7, text: "Low battery. Big plans. Suspiciously good posture.", category: "Dead Inside, Still Trying", mood: "Medium Madness" },
  { id: 8, text: "Resting is still part of the dramatic training montage.", category: "Dead Inside, Still Trying", mood: "Soft Strange" },
  { id: 9, text: "Let the doubt watch. It clearly enjoys the show.", category: "Spite & Success", mood: "Full Moon Energy" },
  { id: 10, text: "Some emails are just haunted paper with deadlines.", category: "Workplace Survival", mood: "Medium Madness" },
  { id: 11, text: "This meeting could have been a respectful silence.", category: "Workplace Survival", mood: "Full Moon Energy" },
  { id: 12, text: "Existence is odd. Have a snack and continue.", category: "Existential Nonsense", mood: "Soft Strange" },
  { id: 13, text: "You are the plot twist. Try to act surprised.", category: "Existential Nonsense", mood: "Medium Madness" },
  { id: 14, text: "Tiny smile. Enormous boundaries.", category: "Cute but Concerning", mood: "Soft Strange" },
  { id: 15, text: "Wake up gently. Become alarming later.", category: "Morning Madness", mood: "Medium Madness" },
];

const cardPalettes = {
  "Hot Pink": { background: "#ff38ad", ink: "#050505", accent: "#ffdf28", logoFilter: "brightness(0)" },
  "Acid Green": { background: "#5cf04e", ink: "#050505", accent: "#ff38ad", logoFilter: "brightness(0)" },
  "Caution Yellow": { background: "#ffdf28", ink: "#050505", accent: "#f12f44", logoFilter: "brightness(0)" },
  "Electric Cyan": { background: "#43d7f5", ink: "#050505", accent: "#ff38ad", logoFilter: "brightness(0)" },
  "Midnight Black": { background: "#080808", ink: "#f8f5ec", accent: "#ff38ad", logoFilter: "none" },
  "Bone White": { background: "#f8f5ec", ink: "#050505", accent: "#f12f44", logoFilter: "brightness(0)" },
};

const cardFonts = {
  "Poster Loud": { css: "Impact, 'Arial Narrow', sans-serif", canvas: "Impact, sans-serif", weight: 900 },
  "Gothic Editorial": { css: "'Iowan Old Style', Georgia, serif", canvas: "Georgia, serif", weight: 700 },
  "Chaotic Marker": { css: "'Marker Felt', 'Segoe Print', cursive", canvas: "'Arial Rounded MT Bold', sans-serif", weight: 700 },
  "Clean Modern": { css: "'Avenir Next', 'Helvetica Neue', sans-serif", canvas: "Arial, sans-serif", weight: 800 },
};

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
  currentQuoteId: 1,
  savedIds: [5, 4, 10],
  sharedIds: [],
  customQuotes: [],
  selectedCategory: "Dark Motivation",
  savedFilter: "All",
  createSource: "Today’s Quote",
  createStyle: "Neon Poster",
  createFormat: "Instagram Post",
  createColor: "Hot Pink",
  createFont: "Poster Loud",
  createMood: "Dark Motivation",
  createQuoteId: 5,
  customText: "",
  savedCardDesigns: [],
  reminderEnabled: true,
  selectedPlan: "Yearly Plan",
  trialStarted: false,
  theme: "Neon",
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
    const merged = { ...defaultState, ...saved, profile: { ...defaultState.profile, ...saved.profile } };
    merged.profile.goals = Array.isArray(merged.profile.goals) ? merged.profile.goals : [merged.profile.goals].filter(Boolean);
    merged.profile.cardStyle = Array.isArray(merged.profile.cardStyle) ? merged.profile.cardStyle : [merged.profile.cardStyle].filter(Boolean);
    if (!exportFormats[merged.createFormat]) merged.createFormat = "Instagram Post";
    return merged;
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
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
  const color = iconColors[accent] || iconColors.pink;
  const ink = iconColors.ink;
  const bone = iconColors.bone;
  const { red, green, yellow, cyan } = iconColors;
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
        const selected = multiple ? state.profile[key].includes(title) : state.profile[key] === title;
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
  return `
    <section class="screen scrollable screen-enter">
      <button class="icon-btn" data-go="${back}" title="Back">${stickerIcon("back", "sm", "pink")}</button>
      <div class="progress-line"><span style="width:${progress}%"></span></div>
      <h2 class="headline" style="margin-top:18px">${title}</h2>
      <p class="subtext">${subtitle}${multiple ? " Choose as many as you like." : ""}</p>
      <div class="option-list" style="margin-top:18px">${optionCards(key, next, multiple)}</div>
      ${multiple ? `<button class="primary-btn multi-continue" data-continue-multi="${key}" data-next="${next}" ${state.profile[key].length ? "" : "disabled"}>Continue with ${state.profile[key].length || 0} selected</button>` : ""}
    </section>`;
}

function quoteCard(quote) {
  return `
    <div class="quote-card">
      <div class="ornament">${stickerIcon("moon", "lg", "yellow")}</div>
      <blockquote>${escapeHtml(quote.text)}</blockquote>
      <div class="quote-meta"><span>${quote.category}</span><span>${quote.mood}</span><span>06 June 2026</span></div>
    </div>`;
}

function savedCards() {
  let list = state.savedIds.map(getQuote);
  if (state.savedFilter === "Shared") list = list.filter((quote) => state.sharedIds.includes(quote.id));
  if (state.savedFilter === "Custom") list = list.filter((quote) => quote.custom);
  if (!["All", "Shared", "Custom"].includes(state.savedFilter)) {
    const category = state.savedFilter === "Workplace" ? "Workplace Survival" : state.savedFilter;
    list = list.filter((quote) => quote.category === category);
  }
  if (!list.length) {
    return `<div class="empty-state"><p class="subtext">Nothing saved here yet. Suspiciously emotionally healthy.</p><button class="secondary-btn" data-go="explore">Find Quotes</button></div>`;
  }
  return list
    .map(
      (quote, index) => `
        <article class="saved-card poster-${(index % 3) + 1}">
          <h3>“${escapeHtml(quote.text)}”</h3>
          <p>${quote.category} · Saved locally</p>
          <div class="saved-actions">
            <button data-action="share" data-id="${quote.id}">${stickerIcon("flyingPaper", "button", "yellow")}<span>Share</span></button>
            <button data-action="use-card" data-id="${quote.id}">${stickerIcon("markerBolt", "button", "cyan")}<span>Create</span></button>
            <button data-action="remove" data-id="${quote.id}">${stickerIcon("coffinArchive", "button", "red")}<span>Remove</span></button>
          </div>
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
        <button class="category-card accent-${(index % 4) + 1}" data-category="${escapeHtml(title)}">
          <span><h3>${title}</h3><p>${text}</p></span>
          <strong>${stickerIcon(icon, "category", ["pink", "yellow", "green", "red"][index % 4])}</strong>
        </button>`,
    )
    .join("") || `<div class="empty-state" style="grid-column:1/-1"><p class="subtext">No chaos found under that name.</p></div>`;
}

function categoryQuoteCards() {
  return allQuotes()
    .filter((quote) => quote.category === state.selectedCategory)
    .map(
      (quote, index) => `
        <article class="saved-card poster-${(index % 3) + 1}">
          <h3>“${escapeHtml(quote.text)}”</h3>
          <p>${quote.category} · ${quote.mood}</p>
          <div class="saved-actions">
            <button data-action="save" data-id="${quote.id}">${stickerIcon("stitchedHeart", "button", "red")}<span>${state.savedIds.includes(quote.id) ? "Saved" : "Save"}</span></button>
            <button data-action="share" data-id="${quote.id}">${stickerIcon("flyingPaper", "button", "yellow")}<span>Share</span></button>
            <button data-action="use-card" data-id="${quote.id}">${stickerIcon("markerBolt", "button", "cyan")}<span>Create</span></button>
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
  return `--card-bg:${palette.background};--card-ink:${palette.ink};--card-accent:${palette.accent};--card-font:${font.css};--logo-filter:${palette.logoFilter}`;
}

const templates = {
  welcome: () => `
    <section class="screen screen-enter">
      ${header()}
      <img class="welcome-logo" src="./assets/silent-madness-logo.png" alt="Silent Madness" />
      <div class="hero-art"><div class="hero-sticker">${stickerIcon("skullBattery", "hero", "pink")}</div><div class="clipping"><span>Daily questionable wisdom</span><strong>LOUD HEART. QUIET CHAOS.</strong></div></div>
      <h2 class="headline welcome-headline">HI, HELLO.<br><em>WELCOME</em><br><strong>TO THE MADNESS.</strong></h2>
      <p class="subtext">Daily quirky pep talks for soft hearts, sharp minds + questionable coping mechanisms.</p>
      <button class="primary-btn push-bottom" data-go="vibe">LET'S GO, WEIRDO ${stickerIcon("flyingPaper", "button", "yellow")}</button>
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
    return `
      <section class="screen scrollable screen-enter">
        ${header()}
        <p class="eyebrow" style="margin-top:20px">${stickerIcon("suspiciousFlower", "benefit", "green")} MORNING, TROUBLEMAKER</p>
        <h2 class="headline today-title">TODAY'S PEP TALK<br><em>JUST ROLLED IN.</em></h2>
        ${quoteCard(quote)}
        <div class="mini-actions">
          <button data-action="save" data-id="${quote.id}" title="Save quote">${stickerIcon("stitchedHeart", "action", "red")}<span>${state.savedIds.includes(quote.id) ? "Saved" : "Save"}</span></button>
          <button data-action="share" data-id="${quote.id}" title="Share quote">${stickerIcon("flyingPaper", "action", "yellow")}<span>Share</span></button>
          <button data-action="new-quote" title="New quote">${stickerIcon("skullRefresh", "action", "orange")}<span>New</span></button>
          <button data-action="toggle-reminder" title="Toggle reminder">${stickerIcon("batAlarm", "action", "green")}<span>${state.reminderEnabled ? "On" : "Off"}</span></button>
        </div>
        <div class="task-card"><h3>${stickerIcon("tinyTask", "title", "green")} Today’s Tiny Task</h3><p class="subtext">Protect your peace like it has a tiny security team.</p><button class="secondary-btn" data-action="tiny-task" style="margin-top:12px">I needed that</button></div>
        ${bottomNav("today")}
      </section>`;
  },

  explore: () => `
    <section class="screen scrollable screen-enter">
      ${header("EXPLORE THE MADNESS")}
      <p class="eyebrow">${stickerIcon("confusedEye", "benefit", "green")} GO ON, DIG AROUND</p>
      <input class="search" data-search placeholder="Search quotes, moods, or chaos..." />
      <div class="category-list" data-category-list>${categoryCards()}</div>
      <div class="lock-box"><p class="subtext" style="margin:0 0 10px">Premium packs are available in the demo.</p><button class="secondary-btn" data-go="paywall">View Premium</button></div>
      ${bottomNav("explore")}
    </section>`,

  quoteDetail: () => `
    <section class="screen scrollable screen-enter">
      <button class="icon-btn" data-go="explore" title="Back">${stickerIcon("back", "sm", "pink")}</button>
      <h2 class="headline" style="margin-top:18px">${state.selectedCategory}</h2>
      <p class="subtext">${categories.find(([title]) => title === state.selectedCategory)?.[1] || "A beautifully strange collection."}</p>
      <button class="secondary-btn" data-action="shuffle-category" style="margin:16px 0">Shuffle Quote</button>
      <div class="saved-list">${categoryQuoteCards()}</div>
    </section>`,

  create: () => {
    const preview = createPreviewQuote();
    const mood = cardMoods[state.createMood] || cardMoods["Dark Motivation"];
    return `
      <section class="screen scrollable screen-enter">
        ${header("MAKE A LOUD CARD.")}
        <p class="eyebrow">${stickerIcon("markerBolt", "benefit", "green")} SHARE-WORTHY IN 3 TAPS</p>
        <div class="step-panel"><p class="section-title" style="margin-top:0">1. Choose Quote</p><div class="style-grid">${["Today’s Quote", "Pick from Saved", "Generate New", "Write My Own"].map((item) => `<button class="chip ${state.createSource === item ? "active" : ""}" data-create-source="${item}">${item}</button>`).join("")}</div>${state.createSource === "Write My Own" ? `<textarea class="custom-quote" data-custom-quote maxlength="180" placeholder="Write your own clean chaos...">${escapeHtml(state.customText)}</textarea>` : ""}</div>
        <div class="step-panel"><p class="section-title" style="margin-top:0">2. Base Style</p><div class="style-grid">${options.cardStyle.map(([item]) => `<button class="chip ${state.createStyle === item ? "active" : ""}" data-create-style="${item}">${item}</button>`).join("")}</div></div>
        <div class="step-panel"><p class="section-title" style="margin-top:0">3. Card Color</p><div class="swatch-grid">${Object.entries(cardPalettes).map(([name, palette]) => `<button class="color-swatch ${state.createColor === name ? "active" : ""}" data-create-color="${name}" title="${name}" style="--swatch:${palette.background};--swatch-accent:${palette.accent}"><span></span><b>${name}</b></button>`).join("")}</div></div>
        <div class="step-panel"><p class="section-title" style="margin-top:0">4. Text Font</p><div class="font-grid">${Object.keys(cardFonts).map((name) => `<button class="font-choice ${state.createFont === name ? "active" : ""}" data-create-font="${name}" style="font-family:${cardFonts[name].css}">${name}</button>`).join("")}</div></div>
        <div class="step-panel"><p class="section-title" style="margin-top:0">5. Mood</p><div class="mood-grid">${Object.entries(cardMoods).map(([name, config]) => `<button class="mood-choice ${state.createMood === name ? "active" : ""}" data-create-mood="${name}">${stickerIcon(config.icon, "button", config.accent)}<span>${name}</span></button>`).join("")}</div></div>
        <div class="step-panel"><p class="section-title" style="margin-top:0">6. Preview Ratio</p><div class="format-grid">${Object.entries(exportFormats).map(([name, format]) => `<button class="chip ${state.createFormat === name ? "active" : ""}" data-create-format="${name}">${format.label}</button>`).join("")}</div></div>
        <div class="step-panel"><p class="section-title" style="margin-top:0">7. Preview</p><div class="preview-stage preview-${state.createFormat.toLowerCase().replaceAll(" ", "-")}"><div class="card-preview" style="${cardPreviewStyle()}"><span class="preview-dot">${stickerIcon(mood.icon, "lg", mood.accent)}</span><strong>${escapeHtml(preview.text)}</strong><span class="preview-mood">${state.createMood}</span><img class="brand-stamp" src="./assets/silent-madness-logo.png" alt="Silent Madness" /></div></div></div>
        <button class="primary-btn save-all-btn" data-action="download-all">${stickerIcon("flyingPaper", "button", "yellow")} Save All 4 Formats</button>
        <div class="button-row" style="margin-top:10px"><button class="secondary-btn" data-action="download-card">Save Current Ratio</button><button class="secondary-btn" data-action="share-preview">Share</button></div>
        ${bottomNav("create")}
      </section>`;
  },

  saved: () => `
    <section class="screen scrollable screen-enter">
      ${header("YOUR LITTLE MUSEUM")}
      <p class="eyebrow">${stickerIcon("coffinArchive", "benefit", "green")} THINGS THAT ALMOST SAID IT FOR YOU</p>
      <div class="tabs" style="margin:16px 0">${["All", "Dark Motivation", "Soft but Dangerous", "Workplace", "Shared", "Custom"].map((item) => `<button class="tab ${state.savedFilter === item ? "active" : ""}" data-saved-filter="${item}">${item}</button>`).join("")}</div>
      <div class="saved-list">${savedCards()}</div>
      ${bottomNav("saved")}
    </section>`,

  profile: () => `
    <section class="screen scrollable screen-enter">
      ${header("HELLO, WEIRDO.")}
      <div class="profile-card" style="margin-top:15px"><span class="badge">${state.trialStarted ? `${state.selectedPlan} Demo` : "Free Profile"}</span><div class="profile-sticker">${stickerIcon("skullBattery", "hero", "yellow")}</div><h2 class="profile-title">DEAD INSIDE,<br><em>STILL TRYING.</em></h2><p class="subtext">${state.profile.status}. Still showing up.</p></div>
      <div class="preference-grid"><div class="pref"><span>Quote Vibe</span><strong>${state.profile.vibe}</strong></div><div class="pref"><span>Madness Level</span><strong>${state.profile.level}</strong></div><div class="pref"><span>Quote Goals</span><strong>${state.profile.goals.length} selected</strong></div><div class="pref"><span>Card Styles</span><strong>${state.profile.cardStyle.length} selected</strong></div></div>
      <div class="settings-list">
        <button class="setting-row" data-go="vibe">${stickerIcon("crackedMirror", "setting", "cyan")}<span>Edit My Madness Profile</span>${stickerIcon("chevron", "button", "pink")}</button>
        <button class="setting-row" data-action="toggle-reminder">${stickerIcon("batAlarm", "setting", "green")}<span>Notifications</span><span class="switch ${state.reminderEnabled ? "on" : ""}"></span></button>
        <button class="setting-row" data-action="toggle-theme">${stickerIcon("confusedEye", "setting", "pink")}<span>Appearance: ${state.theme}</span>${stickerIcon("chevron", "button", "pink")}</button>
        <button class="setting-row" data-go="paywall">${stickerIcon("trophy", "setting", "yellow")}<span>Subscription</span>${stickerIcon("chevron", "button", "pink")}</button>
        <button class="setting-row" data-action="restore">${stickerIcon("coffinArchive", "setting", "red")}<span>Restore Purchases</span>${stickerIcon("chevron", "button", "pink")}</button>
        <button class="setting-row" data-action="privacy">${stickerIcon("confusedEye", "setting", "cyan")}<span>Privacy Policy</span>${stickerIcon("chevron", "button", "pink")}</button>
        <button class="setting-row" data-action="terms">${stickerIcon("hauntedMug", "setting", "pink")}<span>Terms of Use</span>${stickerIcon("chevron", "button", "pink")}</button>
        <button class="setting-row" data-action="support">${stickerIcon("flyingPaper", "setting", "yellow")}<span>Contact Support</span>${stickerIcon("chevron", "button", "pink")}</button>
        <button class="setting-row" data-action="reset">${stickerIcon("skullRefresh", "setting", "red")}<span>Reset Demo Data</span>${stickerIcon("chevron", "button", "pink")}</button>
      </div>
      ${bottomNav("profile")}
    </section>`,
};

function renderNav() {
  screenNav.innerHTML = screens.map(([id, label]) => `<button class="nav-screen ${id === currentScreen ? "active" : ""}" data-go="${id}">${label}</button>`).join("");
}

function render(id = currentScreen) {
  currentScreen = templates[id] ? id : "today";
  app.innerHTML = templates[currentScreen]();
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
  const quote = createPreviewQuote();
  const { width, height } = exportFormats[formatName];
  const palette = cardPalettes[state.createColor];
  const font = cardFonts[state.createFont];
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = palette.background;
  ctx.fillRect(0, 0, width, height);

  const inset = Math.max(38, Math.min(width, height) * 0.045);
  ctx.strokeStyle = palette.ink;
  ctx.lineWidth = Math.max(10, Math.min(width, height) * 0.014);
  ctx.strokeRect(inset, inset, width - inset * 2, height - inset * 2);
  ctx.fillStyle = palette.accent;
  ctx.beginPath();
  ctx.arc(width / 2, height * 0.18, Math.min(width, height) * 0.06, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = palette.ink;
  ctx.lineWidth = Math.max(7, Math.min(width, height) * 0.008);
  ctx.stroke();

  ctx.fillStyle = palette.ink;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const baseSize = Math.round(Math.min(width * 0.075, height * 0.1));
  ctx.font = `${font.weight} ${baseSize}px ${font.canvas}`;
  const displayText = state.createFont === "Poster Loud" ? quote.text.toUpperCase() : quote.text;
  const words = displayText.split(" ");
  const lines = [];
  let line = "";
  const maxTextWidth = width * (width > height ? 0.7 : 0.78);
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
  const lineHeight = baseSize * 1.05;
  const startY = height * 0.48 - ((lines.length - 1) * lineHeight) / 2;
  lines.forEach((text, index) => ctx.fillText(text, width / 2, startY + index * lineHeight));

  ctx.font = `700 ${Math.round(Math.min(width, height) * 0.025)}px Arial, sans-serif`;
  ctx.fillText(state.createMood.toUpperCase(), width / 2, height * 0.72);
  ctx.strokeStyle = palette.accent;
  ctx.lineWidth = Math.max(5, Math.min(width, height) * 0.006);
  ctx.beginPath();
  const waveY = height * 0.77;
  for (let x = width * 0.3; x <= width * 0.7; x += width * 0.025) {
    const y = waveY + Math.sin(x / 24) * Math.min(width, height) * 0.008;
    if (x === width * 0.3) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();

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
    logoCtx.fillStyle = palette.ink;
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
    mood: state.createMood,
    savedAt: new Date().toISOString(),
  }, ...state.savedCardDesigns].slice(0, 20);
  saveState();
}

async function triggerCardDownload(formatName) {
  const canvas = await buildCardCanvas(formatName);
  const link = document.createElement("a");
  link.download = `silent-madness-${formatName.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-")}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

async function downloadCard() {
  rememberCardDesign();
  await triggerCardDownload(state.createFormat);
  showToast(`${exportFormats[state.createFormat].label} card downloaded.`);
}

async function downloadAllCards() {
  rememberCardDesign();
  showToast("Preparing all four platform sizes...");
  for (const formatName of Object.keys(exportFormats)) {
    await triggerCardDownload(formatName);
    await new Promise((resolve) => setTimeout(resolve, 180));
  }
  showToast("All four platform cards downloaded.");
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

  if (target.dataset.selectProfile) {
    const key = target.dataset.selectProfile;
    const value = target.dataset.value;
    if (target.dataset.multiple === "true") {
      const current = state.profile[key];
      state.profile[key] = current.includes(value) ? current.filter((item) => item !== value) : [...current, value];
      saveState();
      return render();
    }
    state.profile[key] = value;
    saveState();
    return render(target.dataset.next);
  }

  if (target.dataset.continueMulti) {
    if (!state.profile[target.dataset.continueMulti].length) return showToast("Choose at least one option first.");
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

  if (target.dataset.createMood) {
    state.createMood = target.dataset.createMood;
    saveState();
    return render();
  }

  const action = target.dataset.action;
  const id = Number(target.dataset.id);
  if (!action) return;

  if (action === "save") {
    if (!state.savedIds.includes(id)) state.savedIds.unshift(id);
    else state.savedIds = state.savedIds.filter((savedId) => savedId !== id);
    saveState();
    render();
    return showToast(state.savedIds.includes(id) ? "Saved to your little museum." : "Removed from saved quotes.");
  }
  if (action === "remove") {
    state.savedIds = state.savedIds.filter((savedId) => savedId !== id);
    saveState();
    return render();
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
  if (action === "download-card") return downloadCard();
  if (action === "download-all") return downloadAllCards();
  if (action === "toggle-reminder") {
    state.reminderEnabled = !state.reminderEnabled;
    saveState();
    render();
    return showToast(state.reminderEnabled ? `${state.profile.reminder} enabled.` : "Daily reminder paused.");
  }
  if (action === "tiny-task") return showToast("Peace protected. Tiny security team deployed.");
  if (action === "start-trial") {
    state.trialStarted = true;
    saveState();
    render("today");
    return showToast(`${state.selectedPlan} demo activated. No payment was taken.`);
  }
  if (action === "open-settings") return render("profile");
  if (action === "toggle-theme") {
    state.theme = state.theme === "Neon" ? "Extra Neon" : "Neon";
    saveState();
    render();
    return showToast(`${state.theme} appearance selected.`);
  }
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
