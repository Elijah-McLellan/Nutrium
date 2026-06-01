/* ========================================
   DATABASES
   ======================================== */
const FOOD_DB = [
  {id:1,name:"Chicken Breast (grilled)",serving:"100g",cal:165,p:31,c:0,f:3.6},
  {id:2,name:"White Rice (cooked)",serving:"100g",cal:130,p:2.7,c:28,f:0.3},
  {id:3,name:"Brown Rice (cooked)",serving:"100g",cal:112,p:2.3,c:24,f:0.8},
  {id:4,name:"Egg (whole, large)",serving:"1 large",cal:72,p:6.3,c:0.4,f:4.8},
  {id:5,name:"Egg White",serving:"1 large",cal:17,p:3.6,c:0.2,f:0},
  {id:6,name:"Salmon (baked)",serving:"100g",cal:208,p:20,c:0,f:13},
  {id:7,name:"Ground Beef 85%",serving:"100g",cal:218,p:24,c:0,f:13},
  {id:8,name:"Sweet Potato (baked)",serving:"1 medium",cal:103,p:2.3,c:24,f:0.1},
  {id:9,name:"Broccoli (steamed)",serving:"100g",cal:35,p:2.4,c:7.2,f:0.4},
  {id:10,name:"Banana",serving:"1 medium",cal:105,p:1.3,c:27,f:0.4},
  {id:11,name:"Apple",serving:"1 medium",cal:95,p:0.5,c:25,f:0.3},
  {id:12,name:"Greek Yogurt (0%)",serving:"170g",cal:100,p:17,c:6,f:0.7},
  {id:13,name:"Oatmeal (cooked)",serving:"1 cup",cal:154,p:6,c:27,f:2.6},
  {id:14,name:"Almonds",serving:"28g",cal:164,p:6,c:6,f:14},
  {id:15,name:"Peanut Butter",serving:"2 tbsp",cal:188,p:8,c:6,f:16},
  {id:16,name:"Whole Wheat Bread",serving:"1 slice",cal:69,p:3.6,c:12,f:1.1},
  {id:17,name:"Avocado",serving:"1/2 medium",cal:114,p:1.3,c:6,f:10.5},
  {id:18,name:"Cottage Cheese (2%)",serving:"113g",cal:92,p:12,c:5,f:1.3},
  {id:19,name:"Tuna (canned)",serving:"100g",cal:116,p:26,c:0,f:0.8},
  {id:20,name:"Quinoa (cooked)",serving:"100g",cal:120,p:4.4,c:21,f:1.9},
  {id:21,name:"Milk (2%)",serving:"1 cup",cal:122,p:8,c:12,f:5},
  {id:22,name:"Whey Protein",serving:"1 scoop (30g)",cal:120,p:24,c:3,f:1.5},
  {id:23,name:"Pasta (cooked)",serving:"100g",cal:131,p:5,c:25,f:1.1},
  {id:24,name:"Steak (sirloin)",serving:"100g",cal:207,p:26,c:0,f:11},
  {id:25,name:"Tofu (firm)",serving:"100g",cal:76,p:8,c:1.9,f:4.8},
  {id:26,name:"Lentils (cooked)",serving:"100g",cal:116,p:9,c:20,f:0.4},
  {id:27,name:"Black Beans",serving:"100g",cal:132,p:8.9,c:24,f:0.5},
  {id:28,name:"Spinach (raw)",serving:"100g",cal:23,p:2.9,c:3.6,f:0.4},
  {id:29,name:"Blueberries",serving:"100g",cal:57,p:0.7,c:14,f:0.3},
  {id:30,name:"Cheddar Cheese",serving:"28g",cal:113,p:7,c:0.4,f:9.3},
  {id:31,name:"Olive Oil",serving:"1 tbsp",cal:119,p:0,c:0,f:14},
  {id:32,name:"Turkey Breast",serving:"100g",cal:135,p:30,c:0,f:1},
  {id:33,name:"Shrimp (cooked)",serving:"100g",cal:99,p:24,c:0.2,f:0.3},
  {id:34,name:"White Potato (baked)",serving:"1 medium",cal:161,p:4.3,c:37,f:0.2},
  {id:35,name:"Protein Bar",serving:"1 bar (60g)",cal:220,p:20,c:24,f:8},
  {id:36,name:"Mixed Nuts",serving:"28g",cal:172,p:5,c:7,f:15},
  {id:37,name:"Soy Milk",serving:"1 cup",cal:80,p:7,c:4,f:4},
  {id:38,name:"Chicken Thigh",serving:"100g",cal:209,p:26,c:0,f:10.9},
  {id:39,name:"Honey",serving:"1 tbsp",cal:64,p:0.1,c:17,f:0},
  {id:40,name:"Butter",serving:"1 tbsp",cal:102,p:0.1,c:0,f:11.5},
  {id:41,name:"Pork Chop (lean)",serving:"100g",cal:187,p:27,c:0,f:8},
  {id:42,name:"Asparagus",serving:"100g",cal:20,p:2.2,c:3.9,f:0.1},
  {id:43,name:"Cottage Cheese (full)",serving:"113g",cal:163,p:14,c:5,f:9},
  {id:44,name:"Dark Chocolate (85%)",serving:"28g",cal:170,p:3,c:13,f:12},
  {id:45,name:"Rice Cakes",serving:"2 cakes",cal:70,p:1.4,c:15,f:0.3}
];

const EXERCISE_DB = [
  {id:1,name:"Bench Press",cat:"Chest"},{id:2,name:"Incline DB Press",cat:"Chest"},
  {id:3,name:"Cable Fly",cat:"Chest"},{id:4,name:"Push Up",cat:"Chest"},
  {id:5,name:"Chest Dip",cat:"Chest"},{id:6,name:"Squat",cat:"Legs"},
  {id:7,name:"Leg Press",cat:"Legs"},{id:8,name:"Romanian Deadlift",cat:"Legs"},
  {id:9,name:"Leg Curl",cat:"Legs"},{id:10,name:"Leg Extension",cat:"Legs"},
  {id:11,name:"Calf Raise",cat:"Legs"},{id:12,name:"Lunges",cat:"Legs"},
  {id:13,name:"Hip Thrust",cat:"Legs"},{id:14,name:"Deadlift",cat:"Back"},
  {id:15,name:"Barbell Row",cat:"Back"},{id:16,name:"Pull Up",cat:"Back"},
  {id:17,name:"Lat Pulldown",cat:"Back"},{id:18,name:"Cable Row",cat:"Back"},
  {id:19,name:"Overhead Press",cat:"Shoulders"},{id:20,name:"Lateral Raise",cat:"Shoulders"},
  {id:21,name:"Face Pull",cat:"Shoulders"},{id:22,name:"Rear Delt Fly",cat:"Shoulders"},
  {id:23,name:"Barbell Curl",cat:"Arms"},{id:24,name:"DB Curl",cat:"Arms"},
  {id:25,name:"Tricep Pushdown",cat:"Arms"},{id:26,name:"Skull Crusher",cat:"Arms"},
  {id:27,name:"Hammer Curl",cat:"Arms"},{id:28,name:"Plank",cat:"Core"},
  {id:29,name:"Cable Crunch",cat:"Core"},{id:30,name:"Hanging Leg Raise",cat:"Core"},
  {id:31,name:"Ab Wheel",cat:"Core"}
];

const MEAL_TYPES = [
  {key:"breakfast", label:"Breakfast", icon:"fa-mug-hot", uwu:"Morning nom-noms"},
  {key:"lunch", label:"Lunch", icon:"fa-bowl-food", uwu:"Midday crunchies"},
  {key:"dinner", label:"Dinner", icon:"fa-plate-wheat", uwu:"Evening feast"},
  {key:"snacks", label:"Snacks", icon:"fa-cookie-bite", uwu:"Sneaky nibbles"}
];

const EX_CATS = ["All","Chest","Back","Legs","Shoulders","Arms","Core"];

const THEMES = [
  {key:"mono", label:"Mono", color:"#FFFFFF", dim:"rgba(255,255,255,0.08)", fat:"#FFFFFF"},
  {key:"rose", label:"Rose", color:"#FF8FAB", dim:"rgba(255,143,171,0.1)", fat:"#FF8FAB"},
  {key:"ocean", label:"Ocean", color:"#4DD0E1", dim:"rgba(77,208,225,0.1)", fat:"#4DD0E1"},
  {key:"forest", label:"Forest", color:"#69F0AE", dim:"rgba(105,240,174,0.1)", fat:"#69F0AE"},
  {key:"sunset", label:"Sunset", color:"#FFB74D", dim:"rgba(255,183,77,0.1)", fat:"#FFB74D"},
  {key:"lavender", label:"Lavender", color:"#B388FF", dim:"rgba(179,136,255,0.1)", fat:"#B388FF"}
];

/* ========================================
   STATE & SAFE STORAGE (Capacitor Preferences)
   ======================================== */
let state = {
  currentView: "today",
  selectedDate: dateKey(new Date()),
  profile: { calorieTarget:2200, proteinTarget:150, carbTarget:250, fatTarget:73, waterTarget:8, theme:"mono", notifEnabled:false },
  dailyLogs: {},
  weightLog: [],
  customFoods: [],
  mealTemplates: [],
  recentFoods: []
};

// Use Capacitor Preferences if in native app, fallback to localStorage for web testing
const Pref = (window.Capacitor && window.Capacitor.Preferences) ? window.Capacitor.Preferences : null;

async function save() {
  const data = JSON.stringify(state);
  if (Pref) {
    await Pref.set({ key: 'nutrium_data', value: data });
  } else {
    localStorage.setItem("nutrium_data", data);
  }
}

async function load() {
  let rawData = null;
  if (Pref) {
    const result = await Pref.get({ key: 'nutrium_data' });
    rawData = result.value;
  } else {
    rawData = localStorage.getItem("nutrium_data");
  }

  if (!rawData) return;
  try {
    const parsed = JSON.parse(rawData);
    if (parsed.profile) state.profile = { ...state.profile, ...parsed.profile };
    if (parsed.dailyLogs) state.dailyLogs = parsed.dailyLogs;
    if (parsed.weightLog) state.weightLog = parsed.weightLog;
    if (parsed.customFoods) state.customFoods = parsed.customFoods;
    if (parsed.mealTemplates) state.mealTemplates = parsed.mealTemplates;
    if (parsed.recentFoods) state.recentFoods = parsed.recentFoods;
    if (parsed.selectedDate) state.selectedDate = parsed.selectedDate;
  } catch(e) { console.error("Failed to parse save data", e); }
}

/* ========================================
   HELPERS
   ======================================== */
function dateKey(d) { return d.toISOString().split("T")[0]; }
function todayKey() { return dateKey(new Date()); }

function getDayLog(dk) {
  if (!state.dailyLogs[dk]) {
    return { meals: {breakfast:[],lunch:[],dinner:[],snacks:[]}, workouts:[], water:0 };
  }
  return state.dailyLogs[dk];
}
function setDayLog(dk, log) { state.dailyLogs[dk] = log; save(); }

function fmt(n) { return n < 10 ? n.toFixed(1) : Math.round(n).toString(); }
function fmtC(n) { return Math.round(n).toLocaleString(); }

function mealTotals(items) {
  return items.reduce((a, i) => ({
    cal: a.cal + i.cal * i.servings, p: a.p + i.p * i.servings,
    c: a.c + i.c * i.servings, f: a.f + i.f * i.servings
  }), { cal:0, p:0, c:0, f:0 });
}

function dayTotals(dk) {
  const log = getDayLog(dk);
  let t = { cal:0, p:0, c:0, f:0 };
  for (const m of MEAL_TYPES) {
    const mt = mealTotals(log.meals[m.key] || []);
    t.cal += mt.cal; t.p += mt.p; t.c += mt.c; t.f += mt.f;
  }
  return t;
}

function fmtDate(dk) {
  const d = new Date(dk + "T12:00:00");
  const t = new Date(); t.setHours(12,0,0,0);
  const diff = Math.round((d - t) / 864e5);
  if (diff === 0) return "Today";
  if (diff === -1) return "Yesterday";
  if (diff === 1) return "Tomorrow";
  return d.toLocaleDateString("en-US", { month:"short", day:"numeric" });
}

function fmtDateFull(dk) {
  return new Date(dk + "T12:00:00").toLocaleDateString("en-US", { weekday:"long", month:"long", day:"numeric" });
}

function getStreak() {
  let s = 0;
  const d = new Date();
  for (let i = 0; i < 365; i++) {
    const key = dateKey(new Date(d.getTime() - i * 864e5));
    const t = dayTotals(key);
    if (t.cal > 0) s++; else break;
  }
  return s;
}

function getAllFoods() { return [...FOOD_DB, ...state.customFoods]; }

/* ========================================
   TOAST
   ======================================== */
let _toastTimer;
function toast(msg, type) {
  type = type || "success";
  const el = document.getElementById("toast");
  const icon = type === "success" ? "fa-check" : "fa-exclamation";
  const col = type === "success" ? "var(--accent)" : "var(--danger)";
  el.innerHTML = '<i class="fa-solid ' + icon + '" style="color:' + col + '"></i>' + msg;
  el.className = "toast " + type;
  clearTimeout(_toastTimer);
  requestAnimationFrame(function() { el.classList.add("show"); });
  _toastTimer = setTimeout(function() { el.classList.remove("show"); }, 2200);
}

/* ========================================
   MODAL
   ======================================== */
function openModal(title, bodyHTML) {
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-body").innerHTML = bodyHTML;
  document.getElementById("modal-overlay").classList.add("open");
  document.getElementById("modal-sheet").classList.add("open");
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("open");
  document.getElementById("modal-sheet").classList.remove("open");
}

document.getElementById("modal-overlay").addEventListener("click", closeModal);
document.getElementById("modal-close").addEventListener("click", closeModal);
document.addEventListener("keydown", function(e) { if (e.key === "Escape") closeModal(); });

// Swipe to dismiss modal
(function() {
  var startY = 0;
  var sheet = document.getElementById("modal-sheet");
  sheet.addEventListener("touchstart", function(e) { startY = e.touches[0].clientY; });
  sheet.addEventListener("touchmove", function(e) {
    if (e.touches[0].clientY - startY > 80) closeModal();
  });
})();

/* ========================================
   THEME
   ======================================== */
function applyTheme(themeKey) {
  var theme = THEMES.find(function(t) { return t.key === themeKey; }) || THEMES[0];
  var root = document.documentElement;
  root.style.setProperty("--accent", theme.color);
  root.style.setProperty("--accent-dim", theme.dim);
  root.style.setProperty("--fat", theme.fat);
  state.profile.theme = themeKey;
  save();
}

/* ========================================
   NAVIGATION
   ======================================== */
function switchView(view) {
  state.currentView = view;
  document.querySelectorAll(".view").forEach(function(v) { v.classList.remove("active"); });
  document.getElementById("view-" + view).classList.add("active");
  document.querySelectorAll(".nav-item").forEach(function(n) {
    n.classList.toggle("active", n.dataset.view === view);
  });
  render();
}

document.querySelectorAll(".nav-item").forEach(function(n) {
  n.addEventListener("click", function() { switchView(n.dataset.view); });
});

function render() {
  switch(state.currentView) {
    case "today": renderToday(); break;
    case "food": renderFood(); break;
    case "train": renderTrain(); break;
    case "you": renderYou(); break;
  }
}

function changeDate(offset) {
  var d = new Date(state.selectedDate + "T12:00:00");
  d.setDate(d.getDate() + offset);
  state.selectedDate = dateKey(d);
  save();
  render();
}

/* ========================================
   SVG RING & MACRO BAR
   ======================================== */
function makeRing(pct, sz, sw) {
  sz = sz || 170; sw = sw || 10;
  var r = (sz - sw) / 2;
  var circ = 2 * Math.PI * r;
  var offset = circ * (1 - Math.min(pct, 1));
  return '<svg width="' + sz + '" height="' + sz + '" viewBox="0 0 ' + sz + ' ' + sz + '">' +
    '<circle cx="' + sz/2 + '" cy="' + sz/2 + '" r="' + r + '" class="ring-bg" stroke-width="' + sw + '"/>' +
    '<circle cx="' + sz/2 + '" cy="' + sz/2 + '" r="' + r + '" class="ring-progress" stroke-width="' + sw + '" stroke-dasharray="' + circ + '" stroke-dashoffset="' + offset + '"/>' +
    '</svg>';
}

function macroBar(label, cur, tgt, col) {
  var pct = tgt > 0 ? cur / tgt : 0;
  var w = Math.min(pct * 100, 100);
  return '<div style="margin-bottom:8px">' +
    '<div style="display:flex;justify-content:space-between;margin-bottom:3px">' +
    '<span style="font-size:12px;font-weight:600;color:' + col + '">' + label + '</span>' +
    '<span style="font-size:11px;color:var(--muted)">' + fmt(cur) + '/' + fmt(tgt) + 'g</span>' +
    '</div><div class="macro-bar-track"><div class="macro-bar-fill" style="width:' + w + '%;background:' + col + '"></div></div></div>';
}

function waterGlassesHTML(current, target) {
  var h = "";
  for (var i = 0; i < target; i++) {
    var filled = i < current;
    h += '<div class="water-glass' + (filled ? ' filled' : '') + '" data-glass="' + i + '">' +
      (filled ? '<i class="fa-solid fa-droplet" style="font-size:10px"></i>' : '') + '</div>';
  }
  return h;
}

/* ========================================
   RENDER: TODAY
   ======================================== */
function renderToday() {
  var dk = state.selectedDate, t = dayTotals(dk), pr = state.profile, log = getDayLog(dk);
  var calPct = pr.calorieTarget > 0 ? t.cal / pr.calorieTarget : 0;
  var pPct = pr.proteinTarget > 0 ? t.p / pr.proteinTarget : 0;
  var cPct = pr.carbTarget > 0 ? t.c / pr.carbTarget : 0;
  var fPct = pr.fatTarget > 0 ? t.f / pr.fatTarget : 0;
  var rem = Math.max(0, pr.calorieTarget - t.cal), water = log.water || 0, streak = getStreak();
  var hitAll = calPct >= 1 && pPct >= 1 && cPct >= 1 && fPct >= 1;

  var html = '<div class="date-nav" style="margin-bottom:12px">' +
    '<button onclick="changeDate(-1)"><i class="fa-solid fa-chevron-left"></i></button>' +
    '<div style="text-align:center"><div style="font-weight:700;font-size:15px">' + fmtDate(dk) + '</div>' +
    '<div style="font-size:10px;color:var(--muted)">' + fmtDateFull(dk) + '</div></div>' +
    '<button onclick="changeDate(1)"><i class="fa-solid fa-chevron-right"></i></button></div>';

  if (dk !== todayKey()) {
    html += '<button onclick="state.selectedDate=todayKey();save();render()" class="btn-ghost btn-sm" style="width:100%;margin-bottom:8px">Back to Today</button>';
  }

  // Calorie ring
  html += '<div class="card" style="text-align:center">';
  if (streak > 1) html += '<div style="font-size:11px;color:var(--accent);margin-bottom:6px;font-weight:600">' + streak + '-day streak! Keep going, good kitty~</div>';
  html += '<div class="ring-container">' + makeRing(calPct) +
    '<div class="ring-center"><div style="font-size:30px;font-weight:800;line-height:1">' + fmtC(rem) + '</div>' +
    '<div style="font-size:11px;color:var(--muted);font-weight:500">noms left~</div></div></div>' +
    '<div style="display:flex;justify-content:center;gap:20px;margin-top:6px">' +
    '<div><span style="font-weight:700">' + fmtC(t.cal) + '</span> <span style="color:var(--muted);font-size:11px">eaten</span></div>' +
    '<div><span style="font-weight:700">' + fmtC(pr.calorieTarget) + '</span> <span style="color:var(--muted);font-size:11px">target</span></div></div>';
  if (hitAll) html += '<div style="margin-top:8px;font-size:12px;color:var(--accent);font-weight:600">Purrfect! All targets hit</div>';
  html += '</div>';

  // Macros
  html += '<div class="card">' +
    macroBar("Protein", t.p, pr.proteinTarget, "var(--protein)") +
    macroBar("Carbs", t.c, pr.carbTarget, "var(--carbs)") +
    macroBar("Fat", t.f, pr.fatTarget, "var(--fat)") + '</div>';

  // Water
  html += '<div class="card"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">' +
    '<div style="font-weight:700;font-size:13px"><i class="fa-solid fa-droplet" style="margin-right:4px"></i>Hydration' +
    (water >= pr.waterTarget ? ' — Purrfect~' : '') + '</div>' +
    '<div style="font-size:12px;color:var(--muted)">' + water + '/' + pr.waterTarget + '</div></div>' +
    '<div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:center;margin-bottom:8px" id="water-glasses">' + waterGlassesHTML(water, pr.waterTarget) + '</div>' +
    '<div style="display:flex;gap:6px;justify-content:center">' +
    '<button onclick="addWater(-1)" class="btn-ghost btn-sm"' + (water <= 0 ? ' disabled style="opacity:.3"' : '') + '><i class="fa-solid fa-minus"></i></button>' +
    '<button onclick="addWater(1)" class="btn-accent btn-sm"><i class="fa-solid fa-plus"></i> Glass</button></div></div>';

  // Meals
  html += '<div style="margin-top:2px"><div style="font-weight:700;font-size:14px;margin-bottom:8px">Meals</div>';
  for (var mi = 0; mi < MEAL_TYPES.length; mi++) {
    html += renderMeal(dk, MEAL_TYPES[mi], log.meals[MEAL_TYPES[mi].key] || []);
  }
  html += '</div>';

  // Workouts summary
  if (log.workouts && log.workouts.length > 0) {
    html += '<div class="card" style="margin-top:4px"><div style="font-weight:700;font-size:13px;margin-bottom:6px"><i class="fa-solid fa-dumbbell" style="margin-right:4px"></i>Today\'s Sweat</div>';
    for (var wi = 0; wi < log.workouts.length; wi++) {
      var w = log.workouts[wi];
      html += '<div style="padding:6px 0;border-bottom:1px solid var(--border)"><div style="font-weight:600;font-size:12px">' + w.name + '</div>' +
        '<div style="font-size:11px;color:var(--muted)">' + w.exercises.length + ' exercise' + (w.exercises.length !== 1 ? 's' : '') + '</div></div>';
    }
    html += '</div>';
  }

  document.getElementById("view-today").innerHTML = html;
  document.getElementById("header-date").textContent = fmtDate(dk);

  // Bind water glass clicks
  document.querySelectorAll("#water-glasses .water-glass").forEach(function(g) {
    g.addEventListener("click", function() { toggleWater(parseInt(this.dataset.glass)); });
  });
}

function renderMeal(dk, mt, items) {
  var t = mealTotals(items);
  var html = '<div class="card" style="padding:10px 12px">' +
    '<div class="meal-header" data-meal="' + mt.key + '" data-date="' + dk + '">' +
    '<div style="display:flex;align-items:center;gap:6px">' +
    '<i class="fa-solid ' + mt.icon + '" style="font-size:14px;width:16px;text-align:center"></i>' +
    '<span style="font-weight:700;font-size:13px">' + mt.label + '</span>';
  if (items.length > 0) html += '<span style="font-size:11px;color:var(--muted)">' + fmtC(t.cal) + ' cal</span>';
  html += '</div><i class="fa-solid fa-plus" style="color:var(--accent);font-size:12px"></i></div>';

  if (items.length > 0) {
    html += '<div class="meal-items">';
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      html += '<div class="meal-item-row"><div style="flex:1;min-width:0">' +
        '<div style="font-size:12px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + item.name + '</div>' +
        '<div style="font-size:10px;color:var(--muted)">' + item.servings + 'x ' + item.serving + ' &middot; ' + fmtC(item.cal * item.servings) + ' cal</div></div>' +
        '<div style="display:flex;gap:6px;font-size:10px;color:var(--muted);flex-shrink:0">' +
        '<span style="color:var(--protein)">P' + fmt(item.p * item.servings) + '</span>' +
        '<span style="color:var(--carbs)">C' + fmt(item.c * item.servings) + '</span>' +
        '<span style="color:var(--fat)">F' + fmt(item.f * item.servings) + '</span></div>' +
        '<button class="btn-icon rm-food-btn" data-date="' + dk + '" data-meal="' + mt.key + '" data-idx="' + i + '" style="width:24px;height:24px;font-size:9px;margin-left:2px"><i class="fa-solid fa-trash"></i></button></div>';
    }
    html += '</div>';
  } else {
    html += '<div style="text-align:center;padding:4px 0;font-size:11px;color:var(--muted)">No ' + mt.uwu.toLowerCase() + ' yet... *sad uwu*</div>';
  }
  html += '</div>';
  return html;
}

/* ========================================
   WATER HANDLERS
   ======================================== */
function toggleWater(idx) {
  var dk = state.selectedDate, log = getDayLog(dk), w = log.water || 0;
  log.water = idx < w ? idx : idx + 1;
  setDayLog(dk, log);
  if (log.water >= state.profile.waterTarget) toast("Purrfect hydration, good kitty~");
  render();
}

function addWater(n) {
  var dk = state.selectedDate, log = getDayLog(dk);
  log.water = Math.max(0, (log.water || 0) + n);
  setDayLog(dk, log);
  if (n > 0 && log.water >= state.profile.waterTarget) toast("Purrfect hydration, good kitty~");
  render();
}

/* ========================================
   FOOD OPERATIONS
   ======================================== */
function openAddFood(dk, mk) {
  var all = getAllFoods();
  var recent = state.recentFoods.slice(0, 8).map(function(id) { return all.find(function(f) { return f.id === id; }); }).filter(Boolean);
  var templates = state.mealTemplates;
  var mealLabel = MEAL_TYPES.find(function(m) { return m.key === mk; }).label;

  var body = '<div class="search-box" style="margin-bottom:10px">' +
    '<i class="fa-solid fa-search"></i><input type="text" id="fsearch" class="input-field" placeholder="Search nom-noms..." autofocus></div>' +
    '<div style="display:flex;gap:6px;margin-bottom:10px">' +
    '<button onclick="openCustomFood(\'' + dk + '\',\'' + mk + '\')" class="btn-ghost btn-sm"><i class="fa-solid fa-plus" style="margin-right:3px"></i>Custom</button>' +
    '<button onclick="openSaveTemplate(\'' + dk + '\',\'' + mk + '\')" class="btn-ghost btn-sm"><i class="fa-solid fa-bookmark" style="margin-right:3px"></i>Save Template</button></div>';

  if (templates.length > 0) {
    body += '<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:600;color:var(--muted);margin-bottom:4px">Templates</div>';
    for (var ti = 0; ti < templates.length; ti++) {
      var tp = templates[ti]; var tpCal = tp.items.reduce(function(a, i) { return a + i.cal * i.servings; }, 0);
      body += '<div class="food-item" onclick="applyTemplate(' + tp.id + ',\'' + dk + '\',\'' + mk + '\')">' +
        '<div style="flex:1"><div style="font-weight:600;font-size:13px">' + tp.name + '</div><div style="font-size:11px;color:var(--muted)">' + tp.items.length + ' items &middot; ' + fmtC(tpCal) + ' cal</div></div>' +
        '<i class="fa-solid fa-arrow-right" style="color:var(--accent);font-size:11px"></i></div>';
    }
    body += '</div>';
  }

  if (recent.length > 0) {
    body += '<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:600;color:var(--muted);margin-bottom:4px">Recent nom-noms</div>';
    for (var ri = 0; ri < recent.length; ri++) {
      var rf = recent[ri];
      body += '<div class="food-item" onclick="openServing(' + rf.id + ',\'' + dk + '\',\'' + mk + '\')">' +
        '<div style="flex:1;min-width:0"><div style="font-weight:600;font-size:13px">' + rf.name + '</div><div style="font-size:11px;color:var(--muted)">' + rf.serving + ' &middot; ' + rf.cal + ' cal</div></div>' +
        '<i class="fa-solid fa-plus" style="color:var(--accent);font-size:11px"></i></div>';
    }
    body += '</div>';
  }

  body += '<div style="font-size:11px;font-weight:600;color:var(--muted);margin-bottom:4px">All Foods</div><div id="fresults"></div>';
  openModal("Add to " + mealLabel, body);

  setTimeout(function() {
    var inp = document.getElementById("fsearch"); var res = document.getElementById("fresults");
    if (!inp || !res) return;
    function doSearch() {
      var q = inp.value.toLowerCase();
      var fl = all.filter(function(f) { return f.name.toLowerCase().indexOf(q) !== -1; });
      var h = '';
      for (var i = 0; i < fl.length; i++) {
        var f = fl[i];
        h += '<div class="food-item" onclick="openServing(' + f.id + ',\'' + dk + '\',\'' + mk + '\')">' +
          '<div style="flex:1;min-width:0"><div style="font-weight:600;font-size:13px">' + f.name + '</div><div style="font-size:11px;color:var(--muted)">' + f.serving + ' &middot; ' + f.cal + ' cal</div></div>' +
          '<div style="display:flex;gap:6px;font-size:10px"><span style="color:var(--protein)">P' + fmt(f.p) + '</span><span style="color:var(--carbs)">C' + fmt(f.c) + '</span><span style="color:var(--fat)">F' + fmt(f.f) + '</span></div></div>';
      }
      res.innerHTML = h || '<div style="text-align:center;padding:16px;color:var(--muted);font-size:12px">Nothing found... *sad uwu*</div>';
    }
    inp.addEventListener("input", doSearch); doSearch();
  }, 80);
}

function openServing(fid, dk, mk) {
  var all = getAllFoods(); var f = all.find(function(x) { return x.id === fid; }); if (!f) return;
  var body = '<div style="text-align:center;margin-bottom:12px"><div style="font-weight:700;font-size:15px">' + f.name + '</div>' +
    '<div style="font-size:12px;color:var(--muted)">Per ' + f.serving + ': ' + f.cal + ' cal &middot; P:' + fmt(f.p) + 'g &middot; C:' + fmt(f.c) + 'g &middot; F:' + fmt(f.f) + 'g</div></div>' +
    '<div style="margin-bottom:12px"><label style="font-size:11px;font-weight:600;display:block;margin-bottom:4px">Servings</label>' +
    '<input type="number" id="svinp" class="input-field" value="1" min="0.25" step="0.25" style="text-align:center;font-size:18px;font-weight:700"></div>' +
    '<div id="svprev" style="text-align:center;padding:10px;background:var(--card);border-radius:8px;margin-bottom:12px">' + servingPrev(f, 1) + '</div>' +
    '<button onclick="confirmAdd(' + fid + ',\'' + dk + '\',\'' + mk + '\')" class="btn-accent" style="width:100%">Add Nom-Nom</button>';
  document.getElementById("modal-title").textContent = "Set Serving";
  document.getElementById("modal-body").innerHTML = body;
  setTimeout(function() {
    var inp = document.getElementById("svinp");
    if (inp) {
      inp.addEventListener("input", function() { var sv = parseFloat(inp.value) || 0; document.getElementById("svprev").innerHTML = servingPrev(f, sv); });
      inp.focus(); inp.select();
    }
  }, 80);
}

function servingPrev(f, s) {
  return '<div style="display:flex;justify-content:center;gap:16px">' +
    '<div><div style="font-size:18px;font-weight:700">' + fmtC(f.cal * s) + '</div><div style="font-size:10px;color:var(--muted)">cal</div></div>' +
    '<div><div style="font-size:16px;font-weight:700;color:var(--protein)">' + fmt(f.p * s) + 'g</div><div style="font-size:10px;color:var(--muted)">protein</div></div>' +
    '<div><div style="font-size:16px;font-weight:700;color:var(--carbs)">' + fmt(f.c * s) + 'g</div><div style="font-size:10px;color:var(--muted)">carbs</div></div>' +
    '<div><div style="font-size:16px;font-weight:700;color:var(--fat)">' + fmt(f.f * s) + 'g</div><div style="font-size:10px;color:var(--muted)">fat</div></div></div>';
}

function confirmAdd(fid, dk, mk) {
  var all = getAllFoods(); var f = all.find(function(x) { return x.id === fid; });
  var sv = parseFloat(document.getElementById("svinp").value) || 1; if (!f) return;
  var entry = { foodId:f.id, name:f.name, serving:f.serving, servings:sv, cal:f.cal, p:f.p, c:f.c, f:f.f };
  var log = getDayLog(dk); if (!log.meals[mk]) log.meals[mk] = []; log.meals[mk].push(entry); setDayLog(dk, log);
  state.recentFoods = [fid].concat(state.recentFoods.filter(function(id) { return id !== fid; })).slice(0, 20); save();
  closeModal(); toast(f.name + " added, yummy~"); render();
}

function rmFood(dk, mk, idx) {
  var log = getDayLog(dk); if (log.meals[mk]) {
    var removed = log.meals[mk].splice(idx, 1); setDayLog(dk, log);
    toast((removed[0] ? removed[0].name : "Item") + " removed", "error"); render();
  }
}

/* ===== CUSTOM FOOD ===== */
function openCustomFood(dk, mk) {
  var body = '<div style="margin-bottom:10px"><label style="font-size:11px;font-weight:600;display:block;margin-bottom:3px">Name</label><input type="text" id="cfn" class="input-field" placeholder="e.g. Secret Family Recipe"></div>' +
    '<div style="margin-bottom:10px"><label style="font-size:11px;font-weight:600;display:block;margin-bottom:3px">Serving</label><input type="text" id="cfs" class="input-field" placeholder="e.g. 1 bowl (250g)"></div>' +
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:12px">' +
    '<div><label style="font-size:11px;font-weight:600;display:block;margin-bottom:3px">Calories</label><input type="number" id="cfc" class="input-field" placeholder="0" min="0"></div>' +
    '<div><label style="font-size:11px;font-weight:600;display:block;margin-bottom:3px">Protein (g)</label><input type="number" id="cfp" class="input-field" placeholder="0" min="0" step="0.1"></div>' +
    '<div><label style="font-size:11px;font-weight:600;display:block;margin-bottom:3px">Carbs (g)</label><input type="number" id="cfcc" class="input-field" placeholder="0" min="0" step="0.1"></div>' +
    '<div><label style="font-size:11px;font-weight:600;display:block;margin-bottom:3px">Fat (g)</label><input type="number" id="cff" class="input-field" placeholder="0" min="0" step="0.1"></div></div>' +
    '<button onclick="saveCustomFood(\'' + dk + '\',\'' + mk + '\')" class="btn-accent" style="width:100%">Create & Add</button>';
  document.getElementById("modal-title").textContent = "Custom Nom-Nom";
  document.getElementById("modal-body").innerHTML = body;
}

function saveCustomFood(dk, mk) {
  var n = document.getElementById("cfn").value.trim(), s = document.getElementById("cfs").value.trim() || "1 serving";
  var c = parseFloat(document.getElementById("cfc").value) || 0, p = parseFloat(document.getElementById("cfp").value) || 0;
  var cc = parseFloat(document.getElementById("cfcc").value) || 0, f = parseFloat(document.getElementById("cff").value) || 0;
  if (!n) { toast("Name it something, silly~", "error"); return; }
  if (c === 0 && p === 0 && cc === 0 && f === 0) { toast("Add some macros, kitty~", "error"); return; }
  var id = 1000 + state.customFoods.length;
  state.customFoods.push({id:id, name:n, serving:s, cal:c, p:p, c:cc, f:f}); save();
  var entry = {foodId:id, name:n, serving:s, servings:1, cal:c, p:p, c:cc, f:f};
  var log = getDayLog(dk); if (!log.meals[mk]) log.meals[mk] = []; log.meals[mk].push(entry); setDayLog(dk, log);
  closeModal(); toast(n + " created & added"); render();
}

/* ===== MEAL TEMPLATES ===== */
function openSaveTemplate(dk, mk) {
  var log = getDayLog(dk), items = log.meals[mk] || [];
  if (items.length === 0) { toast("Add some foods first, furry~", "error"); return; }
  var body = '<div style="margin-bottom:10px"><label style="font-size:11px;font-weight:600;display:block;margin-bottom:3px">Template Name</label>' +
    '<input type="text" id="tpname" class="input-field" placeholder="e.g. Morning Fuel" autofocus></div>' +
    '<div style="font-size:12px;color:var(--muted);margin-bottom:12px">Saves ' + items.length + ' item' + (items.length > 1 ? 's' : '') + ' from current ' + MEAL_TYPES.find(function(m){return m.key===mk}).label + '</div>' +
    '<button onclick="saveTemplate(\'' + mk + '\')" class="btn-accent" style="width:100%">Save Template</button>';
  document.getElementById("modal-title").textContent = "Save as Template";
  document.getElementById("modal-body").innerHTML = body;
  setTimeout(function() { document.getElementById("tpname").focus(); }, 80);
}

function saveTemplate(mk) {
  var name = document.getElementById("tpname").value.trim() || "Template";
  var log = getDayLog(state.selectedDate); var items = JSON.parse(JSON.stringify(log.meals[mk] || []));
  state.mealTemplates.push({id:Date.now(), name:name, items:items}); save();
  closeModal(); toast('Template "' + name + '" saved'); render();
}

function applyTemplate(tpid, dk, mk) {
  var tp = state.mealTemplates.find(function(t) { return t.id === tpid; }); if (!tp) return;
  var log = getDayLog(dk); if (!log.meals[mk]) log.meals[mk] = [];
  log.meals[mk] = log.meals[mk].concat(JSON.parse(JSON.stringify(tp.items))); setDayLog(dk, log);
  closeModal(); toast("Template applied, nom nom~"); render();
}

/* ========================================
   RENDER: FOOD TAB
   ======================================== */
function renderFood() {
  var all = getAllFoods(), cats = ["All","Protein","Carbs","Fats","Fruits","Veggies","Dairy","Custom"];
  function catOf(f) {
    if (f.id >= 1000) return "Custom"; if (f.p > 15) return "Protein"; if (f.c > 15) return "Carbs"; if (f.f > 8) return "Fats";
    var n = f.name.toLowerCase();
    if (n.indexOf("berry") !== -1 || n.indexOf("banana") !== -1 || n.indexOf("apple") !== -1 || n.indexOf("blue") !== -1) return "Fruits";
    if (n.indexOf("broccoli") !== -1 || n.indexOf("spinach") !== -1 || n.indexOf("asparagus") !== -1) return "Veggies";
    if (n.indexOf("milk") !== -1 || n.indexOf("yogurt") !== -1 || n.indexOf("cheese") !== -1 || n.indexOf("cottage") !== -1) return "Dairy";
    return "Protein";
  }

  var el = document.getElementById("view-food");
  var html = '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">' +
    '<h2 style="font-weight:800;font-size:18px">Nom Database</h2>' +
    '<button onclick="openCustomFood(\'' + state.selectedDate + '\',\'snacks\')" class="btn-ghost btn-sm"><i class="fa-solid fa-plus" style="margin-right:3px"></i>Custom</button></div>' +
    '<div style="display:flex;gap:4px;overflow-x:auto;padding-bottom:6px;margin-bottom:8px" id="fcatpills">';
  for (var ci = 0; ci < cats.length; ci++) html += '<span class="pill' + (ci === 0 ? ' active' : '') + '" data-c="' + cats[ci] + '">' + cats[ci] + '</span>';
  html += '</div><div class="search-box" style="margin-bottom:8px"><i class="fa-solid fa-search"></i><input type="text" id="ftabsearch" class="input-field" placeholder="Search all nom-noms..."></div><div id="ftablist"></div>';
  el.innerHTML = html;

  var currentCat = "All";
  function renderList() {
    var q = (document.getElementById("ftabsearch") ? document.getElementById("ftabsearch").value : "").toLowerCase();
    var fl = all.filter(function(f) { return (currentCat === "All" || catOf(f) === currentCat) && (!q || f.name.toLowerCase().indexOf(q) !== -1); });
    var h = '';
    for (var i = 0; i < fl.length; i++) {
      var f = fl[i];
      h += '<div class="food-item" data-fid="' + f.id + '"><div style="flex:1;min-width:0"><div style="font-weight:600;font-size:13px">' + f.name + '</div><div style="font-size:11px;color:var(--muted)">' + f.serving + '</div></div>' +
        '<div style="text-align:right;margin-right:8px"><div style="font-weight:700;font-size:13px">' + f.cal + '</div><div style="font-size:9px;color:var(--muted)">cal</div></div>' +
        '<div style="display:flex;flex-direction:column;gap:1px;font-size:9px"><span style="color:var(--protein)">P' + fmt(f.p) + '</span><span style="color:var(--carbs)">C' + fmt(f.c) + '</span><span style="color:var(--fat)">F' + fmt(f.f) + '</span></div></div>';
    }
    var listEl = document.getElementById("ftablist");
    if (listEl) {
      listEl.innerHTML = h || '<div style="text-align:center;padding:20px;color:var(--muted);font-size:12px">No noms found... *sad uwu*</div>';
      listEl.querySelectorAll(".food-item").forEach(function(item) { item.addEventListener("click", function() { quickAdd(parseInt(this.dataset.fid)); }); });
    }
  }
  document.getElementById("fcatpills").addEventListener("click", function(e) {
    if (e.target.classList.contains("pill")) { currentCat = e.target.dataset.c; document.querySelectorAll("#fcatpills .pill").forEach(function(p) { p.classList.toggle("active", p.dataset.c === currentCat); }); renderList(); }
  });
  document.getElementById("ftabsearch").addEventListener("input", renderList);
  renderList();
}

function quickAdd(fid) {
  var body = '<p style="font-size:12px;color:var(--muted);margin-bottom:10px">Which meal, kitty~?</p>';
  for (var i = 0; i < MEAL_TYPES.length; i++) {
    var m = MEAL_TYPES[i];
    body += '<button class="quick-meal-btn" data-fid="' + fid + '" data-mk="' + m.key + '" style="display:flex;align-items:center;gap:8px;width:100%;padding:10px;border-radius:8px;border:1px solid var(--border);background:var(--card);cursor:pointer;margin-bottom:6px;color:var(--text);font-family:inherit;font-size:13px;font-weight:600"><i class="fa-solid ' + m.icon + '" style="width:16px;text-align:center"></i>' + m.label + '</button>';
  }
  openModal("Choose Meal", body);
  setTimeout(function() {
    document.querySelectorAll(".quick-meal-btn").forEach(function(btn) {
      btn.addEventListener("click", function() { openServing(parseInt(this.dataset.fid), state.selectedDate, this.dataset.mk); });
    });
  }, 20);
}

/* ========================================
   RENDER: TRAIN TAB
   ======================================== */
function renderTrain() {
  var dk = state.selectedDate, log = getDayLog(dk), ws = log.workouts || [];
  var html = '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">' +
    '<h2 style="font-weight:800;font-size:18px">Get Swole, Paws~</h2>' +
    '<button onclick="openNewWorkout()" class="btn-accent btn-sm"><i class="fa-solid fa-plus" style="margin-right:3px"></i>New Workout</button></div>';

  if (ws.length === 0) {
    html += '<div class="card" style="text-align:center;padding:30px"><i class="fa-solid fa-dumbbell" style="font-size:32px;color:var(--border);margin-bottom:8px"></i><div style="font-weight:600;font-size:14px;margin-bottom:2px">No workouts yet</div><div style="font-size:12px;color:var(--muted)">Time to sweat, fuzzy~</div></div>';
  } else {
    for (var wi = 0; wi < ws.length; wi++) {
      var w = ws[wi];
      html += '<div class="card"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px"><div><div style="font-weight:700;font-size:14px">' + w.name + '</div><div style="font-size:11px;color:var(--muted)">' + w.exercises.length + ' exercise' + (w.exercises.length !== 1 ? 's' : '') + '</div></div>' +
        '<div style="display:flex;gap:4px"><button class="btn-icon copy-wk-btn" data-wi="' + wi + '" title="Copy to date"><i class="fa-solid fa-copy"></i></button><button class="btn-icon add-ex-btn" data-wi="' + wi + '"><i class="fa-solid fa-plus"></i></button><button class="btn-icon del-wk-btn" data-wi="' + wi + '" style="color:var(--danger)"><i class="fa-solid fa-trash"></i></button></div></div>';
      for (var ei = 0; ei < w.exercises.length; ei++) {
        var ex = w.exercises[ei];
        html += '<div style="margin-bottom:8px;padding:8px;background:var(--card2);border-radius:6px"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px"><span style="font-weight:600;font-size:12px">' + ex.name + '</span><button class="btn-icon rm-ex-btn" data-wi="' + wi + '" data-ei="' + ei + '" style="width:22px;height:22px;font-size:9px"><i class="fa-solid fa-xmark"></i></button></div>';
        for (var si = 0; si < ex.sets.length; si++) {
          var s = ex.sets[si];
          html += '<div class="set-row"><span style="font-size:11px;color:var(--muted);text-align:center">' + (si + 1) + '</span><input type="number" value="' + (s.weight || '') + '" placeholder="kg" class="set-input" data-wi="' + wi + '" data-ei="' + ei + '" data-si="' + si + '" data-field="weight"><input type="number" value="' + (s.reps || '') + '" placeholder="reps" class="set-input" data-wi="' + wi + '" data-ei="' + ei + '" data-si="' + si + '" data-field="reps"><button class="btn-icon rm-set-btn" data-wi="' + wi + '" data-ei="' + ei + '" data-si="' + si + '" style="width:22px;height:22px;font-size:9px"><i class="fa-solid fa-minus"></i></button></div>';
        }
        html += '<button class="btn-ghost btn-sm add-set-btn" data-wi="' + wi + '" data-ei="' + ei + '" style="width:100%;padding:4px;font-size:11px">+ Set</button></div>';
      }
      html += '</div>';
    }
  }

  document.getElementById("view-train").innerHTML = html;
  var trainEl = document.getElementById("view-train");

  trainEl.querySelectorAll(".add-set-btn").forEach(function(btn) { btn.addEventListener("click", function() { var wi=parseInt(this.dataset.wi),ei=parseInt(this.dataset.ei); var log=getDayLog(state.selectedDate); if(log.workouts[wi]&&log.workouts[wi].exercises[ei]){log.workouts[wi].exercises[ei].sets.push({weight:"",reps:""});setDayLog(state.selectedDate,log);renderTrain()} }); });
  trainEl.querySelectorAll(".rm-set-btn").forEach(function(btn) { btn.addEventListener("click", function() { var wi=parseInt(this.dataset.wi),ei=parseInt(this.dataset.ei),si=parseInt(this.dataset.si); var log=getDayLog(state.selectedDate); if(log.workouts[wi]&&log.workouts[wi].exercises[ei]){log.workouts[wi].exercises[ei].sets.splice(si,1);setDayLog(state.selectedDate,log);renderTrain()} }); });
  trainEl.querySelectorAll(".rm-ex-btn").forEach(function(btn) { btn.addEventListener("click", function() { var wi=parseInt(this.dataset.wi),ei=parseInt(this.dataset.ei); var log=getDayLog(state.selectedDate); if(log.workouts[wi]){log.workouts[wi].exercises.splice(ei,1);setDayLog(state.selectedDate,log);renderTrain()} }); });
  trainEl.querySelectorAll(".del-wk-btn").forEach(function(btn) { btn.addEventListener("click", function() { var wi=parseInt(this.dataset.wi); var log=getDayLog(state.selectedDate); log.workouts.splice(wi,1);setDayLog(state.selectedDate,log);toast("Workout deleted","error");renderTrain() }); });
  trainEl.querySelectorAll(".add-ex-btn").forEach(function(btn) { btn.addEventListener("click", function() { openAddExercise(parseInt(this.dataset.wi)); }); });
  trainEl.querySelectorAll(".copy-wk-btn").forEach(function(btn) { btn.addEventListener("click", function() { openCopyWorkout(parseInt(this.dataset.wi)); }); });
  trainEl.querySelectorAll(".set-input").forEach(function(inp) { inp.addEventListener("change", function() { var wi=parseInt(this.dataset.wi),ei=parseInt(this.dataset.ei),si=parseInt(this.dataset.si); var log=getDayLog(state.selectedDate); if(log.workouts[wi]&&log.workouts[wi].exercises[ei]&&log.workouts[wi].exercises[ei].sets[si]){log.workouts[wi].exercises[ei].sets[si][this.dataset.field]=this.value;setDayLog(state.selectedDate,log)} }); });
}

function openNewWorkout() {
  openModal("New Workout", '<div style="margin-bottom:12px"><label style="font-size:11px;font-weight:600;display:block;margin-bottom:3px">Workout Name</label><input type="text" id="wkname" class="input-field" placeholder="e.g. Push Day" autofocus></div><button onclick="createWorkout()" class="btn-accent" style="width:100%">Create</button>');
  setTimeout(function() { document.getElementById("wkname").focus(); }, 80);
}

function createWorkout() {
  var n = document.getElementById("wkname").value.trim() || "Workout"; var log = getDayLog(state.selectedDate);
  if (!log.workouts) log.workouts = []; log.workouts.push({name:n, exercises:[]}); setDayLog(state.selectedDate, log);
  closeModal(); toast("Workout created, let's go~"); renderTrain();
}

function openAddExercise(wi) {
  var currentCat = "All", searchQ = "";
  var body = '<div style="display:flex;gap:4px;overflow-x:auto;padding-bottom:4px;margin-bottom:6px" id="excpills">';
  for (var i = 0; i < EX_CATS.length; i++) body += '<span class="pill' + (i === 0 ? ' active' : '') + '" data-c="' + EX_CATS[i] + '">' + EX_CATS[i] + '</span>';
  body += '</div><div class="search-box" style="margin-bottom:8px"><i class="fa-solid fa-search"></i><input type="text" id="exsearch" class="input-field" placeholder="Search exercises..."></div><div id="exresults"></div>';
  openModal("Add Exercise", body);
  setTimeout(function() {
    function doExSearch() {
      var q = searchQ.toLowerCase(); var fl = EXERCISE_DB.filter(function(e) { return (currentCat === "All" || e.cat === currentCat) && (!q || e.name.toLowerCase().indexOf(q) !== -1); });
      var h = ''; for (var i = 0; i < fl.length; i++) { var e = fl[i]; h += '<div class="exercise-item ex-add-item" data-eid="' + e.id + '"><div style="flex:1"><div style="font-weight:600;font-size:13px">' + e.name + '</div><div style="font-size:11px;color:var(--muted)">' + e.cat + '</div></div><i class="fa-solid fa-plus" style="color:var(--accent);font-size:11px"></i></div>'; }
      var resEl = document.getElementById("exresults"); if(resEl){ resEl.innerHTML = h || '<div style="text-align:center;padding:16px;color:var(--muted);font-size:12px">No exercises found</div>'; resEl.querySelectorAll(".ex-add-item").forEach(function(item) { item.addEventListener("click", function() { addExToWorkout(wi, parseInt(this.dataset.eid)); }); }); }
    }
    document.getElementById("excpills").addEventListener("click", function(e) { if(e.target.classList.contains("pill")){currentCat=e.target.dataset.c; document.querySelectorAll("#excpills .pill").forEach(function(p){p.classList.toggle("active",p.dataset.c===currentCat)}); doExSearch();} });
    document.getElementById("exsearch").addEventListener("input", function(e) { searchQ = e.target.value; doExSearch(); });
    doExSearch();
  }, 80);
}

function addExToWorkout(wi, eid) {
  var ex = EXERCISE_DB.find(function(e) { return e.id === eid; }); if (!ex) return;
  var log = getDayLog(state.selectedDate); if (log.workouts[wi]) { log.workouts[wi].exercises.push({name:ex.name, sets:[{weight:"",reps:""}]}); setDayLog(state.selectedDate, log); closeModal(); toast(ex.name + " added"); renderTrain(); }
}

function openCopyWorkout(wi) {
  openModal("Copy Workout", '<p style="font-size:12px;color:var(--muted);margin-bottom:10px">Copy this workout to another date, kitty~</p><div style="margin-bottom:12px"><label style="font-size:11px;font-weight:600;display:block;margin-bottom:3px">Target Date</label><input type="date" id="copydate" class="input-field" value="' + state.selectedDate + '"></div><button onclick="doCopyWorkout(' + wi + ')" class="btn-accent" style="width:100%">Copy Workout</button>');
}
function doCopyWorkout(wi) {
  var targetDk = document.getElementById("copydate").value; if (!targetDk) { toast("Pick a date~", "error"); return; }
  var log = getDayLog(state.selectedDate), w = log.workouts[wi]; if (!w) return;
  var targetLog = getDayLog(targetDk); if (!targetLog.workouts) targetLog.workouts = [];
  targetLog.workouts.push(JSON.parse(JSON.stringify(w))); setDayLog(targetDk, targetLog); closeModal(); toast("Workout copied to " + fmtDate(targetDk));
}

/* ========================================
   RENDER: YOU (DEN) TAB
   ======================================== */
var wChart = null;

function renderYou() {
  var pr = state.profile, wl = state.weightLog, streak = getStreak();
  var d7 = []; for (var i = 6; i >= 0; i--) { var d = new Date(); d.setDate(d.getDate() - i); d7.push(dateKey(d)); }
  var t7 = {cal:0,p:0,c:0,f:0,n:0}; d7.forEach(function(dk) { var t = dayTotals(dk); if(t.cal>0){t7.cal+=t.cal;t7.p+=t.p;t7.c+=t.c;t7.f+=t.f;t7.n++;} });

  var html = '<div class="card" style="text-align:center"><div style="width:56px;height:56px;border-radius:50%;background:var(--accent-dim);border:2px solid var(--accent);display:flex;align-items:center;justify-content:center;margin:0 auto 8px"><i class="fa-solid fa-paw" style="font-size:22px;color:var(--accent)"></i></div>' +
    '<div style="font-weight:800;font-size:16px">Your Den</div><div style="font-size:12px;color:var(--muted);margin-top:2px">Who\'s a good kitty? You are~</div>';
  if (streak > 1) html += '<div style="margin-top:6px;font-size:11px;color:var(--accent);font-weight:600"><i class="fa-solid fa-fire" style="margin-right:3px"></i>' + streak + '-day streak! Boykisser energy~</div>';
  html += '</div>';

  // Themes
  html += '<div class="card"><div style="font-weight:700;font-size:13px;margin-bottom:8px"><i class="fa-solid fa-palette" style="margin-right:4px"></i>Vibe Check</div><div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap" id="theme-dots">';
  for (var ti = 0; ti < THEMES.length; ti++) { var th = THEMES[ti]; html += '<div style="display:flex;flex-direction:column;align-items:center;gap:3px"><div class="theme-dot' + (pr.theme === th.key ? ' active' : '') + '" data-theme="' + th.key + '" style="background:' + th.color + '"></div><span style="font-size:9px;color:var(--muted)">' + th.label + '</span></div>'; }
  html += '</div></div>';

  // Targets
  html += '<div class="card"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px"><div style="font-weight:700;font-size:13px"><i class="fa-solid fa-bullseye" style="margin-right:4px"></i>Daily Targets</div><button onclick="openEditTargets()" class="btn-icon"><i class="fa-solid fa-pen"></i></button></div>' +
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px"><div class="stat-box"><div style="font-size:18px;font-weight:800">' + fmtC(pr.calorieTarget) + '</div><div style="font-size:10px;color:var(--muted)">Calories</div></div><div class="stat-box"><div style="font-size:16px;font-weight:700;color:var(--protein)">' + fmt(pr.proteinTarget) + 'g</div><div style="font-size:10px;color:var(--muted)">Protein</div></div><div class="stat-box"><div style="font-size:16px;font-weight:700;color:var(--carbs)">' + fmt(pr.carbTarget) + 'g</div><div style="font-size:10px;color:var(--muted)">Carbs</div></div><div class="stat-box"><div style="font-size:16px;font-weight:700;color:var(--fat)">' + fmt(pr.fatTarget) + 'g</div><div style="font-size:10px;color:var(--muted)">Fat</div></div></div></div>';

  // Weight
  html += '<div class="card"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px"><div style="font-weight:700;font-size:13px"><i class="fa-solid fa-weight-scale" style="margin-right:4px"></i>Floof Scale</div><button onclick="openLogWeight()" class="btn-ghost btn-sm">Log Weight</button></div>';
  if (wl.length > 0) {
    html += '<div style="height:150px;position:relative"><canvas id="wchart"></canvas></div><div style="margin-top:6px;max-height:100px;overflow-y:auto">';
    var revWl = wl.slice().reverse().slice(0, 6);
    for (var wi = 0; wi < revWl.length; wi++) { var w = revWl[wi]; html += '<div style="display:flex;align-items:center;justify-content:space-between;padding:4px 0;border-bottom:1px solid var(--border);font-size:12px"><span style="color:var(--muted)">' + w.date + '</span><span style="font-weight:600">' + w.weight + ' kg</span><button class="del-weight-btn" data-wd="' + w.date + '" style="background:none;border:none;color:var(--muted);cursor:pointer;font-size:10px"><i class="fa-solid fa-xmark"></i></button></div>'; }
    html += '</div>';
  } else { html += '<div style="text-align:center;padding:14px;color:var(--muted);font-size:12px">No weigh-ins yet... step on the scale, fuzzy~</div>'; }
  html += '</div>';

  // 7 Day Avg
  html += '<div class="card"><div style="font-weight:700;font-size:13px;margin-bottom:8px"><i class="fa-solid fa-chart-line" style="margin-right:4px"></i>7-Day Avg</div>';
  if (t7.n > 0) {
    html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px"><div class="stat-box"><div style="font-size:15px;font-weight:700">' + fmtC(t7.cal / t7.n) + '</div><div style="font-size:10px;color:var(--muted)">avg cal</div></div><div class="stat-box"><div style="font-size:14px;font-weight:700;color:var(--protein)">' + fmt(t7.p / t7.n) + 'g</div><div style="font-size:10px;color:var(--muted)">avg protein</div></div><div class="stat-box"><div style="font-size:14px;font-weight:700;color:var(--carbs)">' + fmt(t7.c / t7.n) + 'g</div><div style="font-size:10px;color:var(--muted)">avg carbs</div></div><div class="stat-box"><div style="font-size:14px;font-weight:700;color:var(--fat)">' + fmt(t7.f / t7.n) + 'g</div><div style="font-size:10px;color:var(--muted)">avg fat</div></div></div>';
  } else { html += '<div style="text-align:center;padding:10px;color:var(--muted);font-size:12px">No data this week yet</div>'; }
  html += '</div>';

  // Notifications
  html += '<div class="card"><div style="font-weight:700;font-size:13px;margin-bottom:8px"><i class="fa-solid fa-bell" style="margin-right:4px"></i>Reminders</div>' +
    '<div style="display:flex;align-items:center;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border)"><div><div style="font-size:13px;font-weight:600">Water Reminders</div><div style="font-size:11px;color:var(--muted)">Every 2 hours while app is open</div></div><button onclick="toggleNotif()" class="btn-ghost btn-sm" style="color:' + (pr.notifEnabled ? 'var(--accent)' : 'var(--muted)') + '">' + (pr.notifEnabled ? 'On' : 'Off') + '</button></div>' +
    '<div style="display:flex;align-items:center;justify-content:space-between;padding:8px 0"><div><div style="font-size:13px;font-weight:600">Weekly Weigh-In</div><div style="font-size:11px;color:var(--muted)">Sunday morning reminder</div></div><button onclick="toggleNotif()" class="btn-ghost btn-sm" style="color:' + (pr.notifEnabled ? 'var(--accent)' : 'var(--muted)') + '">' + (pr.notifEnabled ? 'On' : 'Off') + '</button></div></div>';

  document.getElementById("view-you").innerHTML = html;

  // Bind Events
  document.querySelectorAll(".theme-dot").forEach(function(dot) { dot.addEventListener("click", function() { applyTheme(this.dataset.theme); renderYou(); render(); }); });
  document.querySelectorAll(".del-weight-btn").forEach(function(btn) { btn.addEventListener("click", function() { state.weightLog = state.weightLog.filter(function(w) { return w.date !== btn.dataset.wd; }); save(); toast("Weight removed", "error"); renderYou(); }); });

  // Chart
  if (wl.length > 0) {
    setTimeout(function() {
      var ctx = document.getElementById("wchart"); if (!ctx) return; if (wChart) wChart.destroy();
      var avg = wl.map(function(w, i) { var start = Math.max(0, i - 6); var slice = wl.slice(start, i + 1); return slice.reduce(function(a, x) { return a + x.weight; }, 0) / slice.length; });
      wChart = new Chart(ctx, {
        type: "line", data: { labels: wl.map(function(w) { return w.date.slice(5); }), datasets: [
          { data: wl.map(function(w) { return w.weight; }), borderColor: "#FFFFFF", backgroundColor: "transparent", tension: 0.3, pointRadius: 3, pointBackgroundColor: "#FFFFFF", borderWidth: 1.5 },
          { data: avg, borderColor: "var(--accent)", backgroundColor: "transparent", tension: 0.4, pointRadius: 0, borderWidth: 1.5, borderDash: [4, 4] }
        ]},
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { grid: { color: "rgba(30,30,30,.5)" }, ticks: { color: "#555", font: { size: 9 } } }, y: { grid: { color: "rgba(30,30,30,.5)" }, ticks: { color: "#555", font: { size: 9 } } } } }
      });
    }, 80);
  }
}

function openEditTargets() {
  var pr = state.profile;
  openModal("Edit Targets", '<div style="margin-bottom:10px"><label style="font-size:11px;font-weight:600;display:block;margin-bottom:3px">Calories</label><input type="number" id="etcal" class="input-field" value="' + pr.calorieTarget + '" min="500"></div>' +
    '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;margin-bottom:10px"><div><label style="font-size:11px;font-weight:600;display:block;margin-bottom:3px;color:var(--protein)">Protein</label><input type="number" id="etp" class="input-field" value="' + pr.proteinTarget + '" min="0"></div><div><label style="font-size:11px;font-weight:600;display:block;margin-bottom:3px;color:var(--carbs)">Carbs</label><input type="number" id="etc" class="input-field" value="' + pr.carbTarget + '" min="0"></div><div><label style="font-size:11px;font-weight:600;display:block;margin-bottom:3px;color:var(--fat)">Fat</label><input type="number" id="etf" class="input-field" value="' + pr.fatTarget + '" min="0"></div></div>' +
    '<div style="margin-bottom:12px"><label style="font-size:11px;font-weight:600;display:block;margin-bottom:3px">Water Glasses / Day</label><input type="number" id="etw" class="input-field" value="' + pr.waterTarget + '" min="1" max="20"></div>' +
    '<button onclick="saveTargets()" class="btn-accent" style="width:100%">Save</button>');
}

function saveTargets() {
  state.profile.calorieTarget = parseInt(document.getElementById("etcal").value) || 2000;
  state.profile.proteinTarget = parseInt(document.getElementById("etp").value) || 150;
  state.profile.carbTarget = parseInt(document.getElementById("etc").value) || 250;
  state.profile.fatTarget = parseInt(document.getElementById("etf").value) || 73;
  state.profile.waterTarget = parseInt(document.getElementById("etw").value) || 8;
  save(); closeModal(); toast("Targets updated"); renderYou();
}

function openLogWeight() {
  openModal("Log Weight", '<div style="margin-bottom:10px"><label style="font-size:11px;font-weight:600;display:block;margin-bottom:3px">Weight (kg)</label><input type="number" id="winput" class="input-field" placeholder="e.g. 75.5" step="0.1" min="20" max="500" autofocus style="text-align:center;font-size:20px;font-weight:800"></div>' +
    '<div style="margin-bottom:12px"><label style="font-size:11px;font-weight:600;display:block;margin-bottom:3px">Date</label><input type="date" id="wdate" class="input-field" value="' + state.selectedDate + '"></div>' +
    '<button onclick="saveWeight()" class="btn-accent" style="width:100%">Log It</button>');
  setTimeout(function() { var inp = document.getElementById("winput"); if (inp) { inp.focus(); inp.select(); } }, 80);
}

function saveWeight() {
  var w = parseFloat(document.getElementById("winput").value), d = document.getElementById("wdate").value;
  if (!w || w < 20 || w > 500) { toast("Enter a valid weight, fuzzy~", "error"); return; }
  state.weightLog = state.weightLog.filter(function(x) { return x.date !== d; });
  state.weightLog.push({date: d, weight: w}); state.weightLog.sort(function(a, b) { return a.date.localeCompare(b.date); });
  save(); closeModal(); toast("Logged " + w + "kg"); renderYou();
}

/* ========================================
   NOTIFICATIONS
   ======================================== */
var waterInterval = null, weighInterval = null;

function toggleNotif() {
  if (state.profile.notifEnabled) {
    state.profile.notifEnabled = false; clearInterval(waterInterval); clearInterval(weighInterval); save(); toast("Notifications off"); renderYou(); return;
  }
  if (!("Notification" in window)) { toast("Notifications not supported in this browser", "error"); return; }
  Notification.requestPermission().then(function(perm) {
    if (perm === "granted") { state.profile.notifEnabled = true; save(); startReminders(); toast("Notifications on"); renderYou(); }
    else { toast("Permission denied", "error"); }
  });
}

function startReminders() {
  if (!state.profile.notifEnabled) return;
  clearInterval(waterInterval); clearInterval(weighInterval);
  waterInterval = setInterval(function() {
    var h = new Date().getHours(); if (h < 8 || h > 22) return;
    var log = getDayLog(todayKey()), w = log.water || 0;
    if (w < state.profile.waterTarget) { try { new Notification("Hydration time, fuzzy~", { body: "You've had " + w + "/" + state.profile.waterTarget + " glasses. Drink up!" }); } catch(e) {} }
  }, 2 * 60 * 60 * 1000);
  weighInterval = setInterval(function() {
    var now = new Date(); if (now.getDay() === 0 && now.getHours() === 9) { try { new Notification("Weekly Weigh-In!", { body: "Time to step on the floof scale, kitty~ Log your weight!" }); } catch(e) {} }
  }, 60 * 60 * 1000);
}

/* ========================================
   GLOBAL EVENT DELEGATION
   ======================================== */
document.getElementById("view-today").addEventListener("click", function(e) {
  var mealHeader = e.target.closest(".meal-header");
  if (mealHeader) { var dk = mealHeader.dataset.date, mk = mealHeader.dataset.meal; if (dk && mk) openAddFood(dk, mk); return; }
  var rmBtn = e.target.closest(".rm-food-btn");
  if (rmBtn) { e.stopPropagation(); rmFood(rmBtn.dataset.date, rmBtn.dataset.meal, parseInt(rmBtn.dataset.idx)); return; }
});

/* ========================================
   INIT
   ======================================== */
async function init() {
  try {
    await load();
    applyTheme(state.profile.theme || "mono");
    if (state.profile.notifEnabled && "Notification" in window && Notification.permission === "granted") startReminders();
    render();
  } catch(e) {
    console.error("Init error:", e);
    render();
  }
}
init();