const TE_LOCATIONS = {
  "pandu-house": { te: "పండు ఇల్లు", kindTe: "ఇల్లు", timeTe: "తెల్లవారుజాము · సాయంత్రం", scentTe: "పసుపు, మామిడి, కట్టెల పొగ" },
  school: { te: "బడి", kindTe: "చదువు", timeTe: "ఉదయం గంట", scentTe: "సుద్ద, మట్టి, చింతపండు" },
  library: { te: "గ్రంథాలయం", kindTe: "పుస్తకాలు", timeTe: "బడి తర్వాత", scentTe: "పాత కాగితం, చందనం" },
  temple: { te: "గుడి", kindTe: "భక్తి", timeTe: "ఉదయం · హారతి వేళ", scentTe: "కర్పూరం, మల్లెపూలు, నెయ్యి దీపం" },
  "banyan-tree": { te: "మర్రి చెట్టు", kindTe: "కూడలి", timeTe: "మధ్యాహ్నం నీడ · రాత్రి కబుర్లు", scentTe: "ఆకుల వాసన, టీ" },
  cheruvu: { te: "చెరువు", kindTe: "నీరు", timeTe: "తామరల ఉదయం", scentTe: "తడి మట్టి, తామర" },
  fields: { te: "పొలాలు", kindTe: "వ్యవసాయం", timeTe: "నాట్లు · కోతలు", scentTe: "తడి వరి, గడ్డి" }
};

const TE_LAYERS = {
  native: "దేశ్య తెలుగు",
  daily: "వాడుక తెలుగు",
  literary: "సాహిత్య తెలుగు",
  sanskrit: "సంస్కృత తెలుగు",
  balanced: "సమతుల్య తెలుగు",
  "modern-spoken": "వాడుక తెలుగు",
  traditional: "సంప్రదాయ తెలుగు"
};

const TE_SEASONS = {
  summer: "వేసవి (గ్రీష్మం)",
  monsoon: "వర్షాకాలం",
  winter: "శీతాకాలం",
  spring: "వసంత కాలం",
  autumn: "శరత్కాలం"
};

const FALLBACK_FESTIVALS = [
  {
    telugu: "సంక్రాంతి",
    season: "winter",
    teluguDescription: "వరి కోత ముగిసిన తర్వాత వచ్చే ఊరి పెద్ద పండుగ. భోగి మంటలు, వాకిళ్లలో ముగ్గులు, కొత్త బియ్యంతో పొంగలి, కనుమ రోజు పశువుల పూజ.",
    foods: [{ telugu: "పొంగలి" }, { telugu: "అరిసెలు" }, { telugu: "సకినాలు" }, { telugu: "బొబ్బట్లు" }],
    vocabulary: [{ te: "భోగి మంట" }, { te: "ముగ్గు" }, { te: "గొబ్బెమ్మ" }, { te: "పొంగలి" }]
  },
  {
    telugu: "ఉగాది",
    season: "spring",
    teluguDescription: "తెలుగు నూతన సంవత్సరం. వేపపువ్వు, మామిడి, బెల్లం, చింతపండుతో ఉగాది పచ్చడి, పంచాంగ శ్రవణం.",
    foods: [{ telugu: "ఉగాది పచ్చడి" }, { telugu: "బొబ్బట్లు" }, { telugu: "పులిహోర" }],
    vocabulary: [{ te: "పంచాంగం" }, { te: "వేపపువ్వు" }, { te: "షడ్రుచులు" }]
  },
  {
    telugu: "శ్రీరామ నవమి",
    season: "summer",
    teluguDescription: "ఊరి గుడిలో పందిరి వేసి పానకం, వడపప్పు పంచే వేసవి పండుగ.",
    foods: [{ telugu: "పానకం" }, { telugu: "వడపప్పు" }, { telugu: "చలిమిడి" }],
    vocabulary: [{ te: "పందిరి" }, { te: "పానకం" }, { te: "కల్యాణం" }]
  },
  {
    telugu: "వినాయక చవితి",
    season: "monsoon",
    teluguDescription: "మట్టి వినాయకుడికి ఇరవై ఒక్క ఆకులతో పూజ, ఉండ్రాళ్లు మరియు కుడుములు నివేదన.",
    foods: [{ telugu: "ఉండ్రాళ్లు" }, { telugu: "కుడుములు" }],
    vocabulary: [{ te: "పత్రి" }, { te: "మట్టి ప్రతిమ" }, { te: "నైవేద్యం" }]
  },
  {
    telugu: "దసరా",
    season: "autumn",
    teluguDescription: "శరన్నవరాత్రులు, బతుకమ్మ ఆటలు, జమ్మి చెట్టు పూజ మరియు పెద్దల ఆశీర్వాదం.",
    foods: [{ telugu: "పులిహోర" }, { telugu: "పాయసం" }, { telugu: "గారెలు" }],
    vocabulary: [{ te: "జమ్మి చెట్టు" }, { te: "బతుకమ్మ" }, { te: "విజయదశమి" }]
  },
  {
    telugu: "దీపావళి",
    season: "autumn",
    teluguDescription: "ఇంటి వాకిళ్లలో మట్టి ప్రమిదలతో దీపాల వరుసలు వెలిగించే వెలుగుల పండుగ.",
    foods: [{ telugu: "లడ్డు" }, { telugu: "కజ్జికాయలు" }],
    vocabulary: [{ te: "ప్రమిద" }, { te: "దీపం" }, { te: "వెలుగు" }]
  },
  {
    telugu: "కార్తీక పౌర్ణమి",
    season: "winter",
    teluguDescription: "చెరువు గట్టున, గుడిలో కార్తీక దీపాలు వెలిగించి, ఉసిరి చెట్టు నీడన వనభోజనం.",
    foods: [{ telugu: "పులిహోర" }, { telugu: "పాయసం" }],
    vocabulary: [{ te: "కార్తీక దీపం" }, { te: "వనభోజనం" }, { te: "ఉసిరి" }]
  }
];

const AUDIO_MAP = {
  "pandu-house": "assets/audio/birds.mp3",
  school: "assets/audio/birds.mp3",
  library: "assets/audio/summer-wind.mp3",
  temple: "assets/audio/temple-bell.mp3",
  "banyan-tree": "assets/audio/village-evening.mp3",
  cheruvu: "assets/audio/frogs.mp3",
  fields: "assets/audio/rain.mp3"
};

const state = {
  locations: [],
  stories: [],
  vocabulary: [],
  vocabByWord: new Map(),
  characters: [],
  charById: new Map(),
  households: [],
  festivals: FALLBACK_FESTIVALS,
  seasons: [],
  storyLocFilter: "all",
  wordLayerFilter: "all",
  wordSearch: "",
  wordLimit: 40,
  quizMode: "sanskrit",
  cultureSub: "family",
  audioEnabled: false,
  currentAudio: null,
  currentAudioSrc: ""
};

const world = document.getElementById("world");
const mapViewport = document.getElementById("map-viewport");
const panel = document.getElementById("panel");
const panelBody = document.getElementById("panel-body");
const panelTitle = document.getElementById("panel-title");
const panelKicker = document.getElementById("panel-kicker");
const closePanelBtn = document.getElementById("close-panel");
const scrim = document.getElementById("scrim");
const audioToggle = document.getElementById("audio-toggle");
const places = Array.from(document.querySelectorAll(".place"));
const navBtns = Array.from(document.querySelectorAll(".nav-btn"));
const views = {
  map: document.getElementById("view-map"),
  stories: document.getElementById("view-stories"),
  words: document.getElementById("view-words"),
  quiz: document.getElementById("view-quiz"),
  culture: document.getElementById("view-culture")
};

const wordModal = document.getElementById("word-modal");
const wmLayer = document.getElementById("wm-layer");
const wmWord = document.getElementById("wm-word");
const wmEquivs = document.getElementById("wm-equivs");
const wmEx = document.getElementById("wm-ex");
const wmRevealBtn = document.getElementById("wm-reveal-btn");
const wmMeaning = document.getElementById("wm-meaning");

function esc(v) {
  return String(v || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function extractVocabItem(v) {
  if (v && typeof v === "object") {
    return {
      te: v.te || v.word || v.telugu || "",
      en: v.en || v.meaning || v.simpleMeaning || ""
    };
  }
  const parts = String(v || "").split("=");
  return { te: parts[0].trim(), en: (parts[1] || "").trim() };
}

async function fetchJsonSafe(path) {
  try {
    const res = await fetch(path);
    if (!res.ok) return null;
    const raw = await res.text();
    const idxObj = raw.indexOf("{");
    const idxArr = raw.indexOf("[");
    let start = -1;
    if (idxObj !== -1 && idxArr !== -1) start = Math.min(idxObj, idxArr);
    else start = Math.max(idxObj, idxArr);
    if (start === -1) return null;
    return JSON.parse(raw.slice(start));
  } catch {
    return null;
  }
}

function playAmbient(src) {
  if (!state.audioEnabled || !src) return;
  if (state.currentAudio && state.currentAudioSrc === src) {
    if (state.currentAudio.paused) state.currentAudio.play().catch(() => {});
    return;
  }
  if (state.currentAudio) state.currentAudio.pause();
  state.currentAudioSrc = src;
  state.currentAudio = new Audio(src);
  state.currentAudio.loop = true;
  state.currentAudio.volume = 0.35;
  state.currentAudio.play().catch(() => {});
}

function switchTab(tabName) {
  Object.entries(views).forEach(([name, el]) => {
    el.hidden = name !== tabName;
  });
  navBtns.forEach((btn) => btn.classList.toggle("is-active", btn.dataset.tab === tabName));
}

function zoomToLocation(id) {
  const button = places.find((p) => p.dataset.id === id);
  if (!button) return;
  const x = Number(button.dataset.x || 50);
  const y = Number(button.dataset.y || 50);
  places.forEach((p) => p.classList.toggle("is-active", p === button));
  const maxScroll = mapViewport.scrollWidth - mapViewport.clientWidth;
  if (maxScroll > 0) {
    mapViewport.scrollTo({ left: (x / 100) * maxScroll, behavior: "smooth" });
  }
  world.style.transformOrigin = `${x}% ${y}%`;
  world.classList.add("is-zoomed");
}

function resetZoom() {
  places.forEach((p) => p.classList.remove("is-active"));
  world.classList.remove("is-zoomed");
}

function showWordModal(wordText, fallbackMeaning = "") {
  const clean = String(wordText).split("=")[0].trim();
  const entry = state.vocabByWord.get(clean);
  if (entry) {
    wmLayer.textContent = TE_LAYERS[entry.languageLayer] || "తెలుగు పదం";
    wmWord.textContent = entry.word;
    const eqs = [];
    if (entry.literaryEquivalent) eqs.push(`<div><strong>సాహిత్య తెలుగు:</strong> ${esc(entry.literaryEquivalent)}</div>`);
    if (entry.sanskritEquivalent) eqs.push(`<div><strong>సంస్కృత తెలుగు:</strong> ${esc(entry.sanskritEquivalent)}</div>`);
    if (Array.isArray(entry.relatedWords) && entry.relatedWords.length) {
      eqs.push(`<div><strong>పద కుటుంబం:</strong> ${esc(entry.relatedWords.slice(0, 5).join(", "))}</div>`);
    }
    wmEquivs.innerHTML = eqs.join("") || "<div><strong>మూల పదం</strong></div>";
    wmEx.textContent = entry.exampleSentence || "";
    wmMeaning.textContent = [entry.simpleMeaning, entry.english].filter(Boolean).join(" — ");
  } else {
    wmLayer.textContent = "తెలుగు పదం";
    wmWord.textContent = clean;
    wmEquivs.innerHTML = "<div><strong>పాఠ్య పదం</strong></div>";
    wmEx.textContent = "";
    wmMeaning.textContent = fallbackMeaning || "ఈ పదానికి అదనపు వివరం లేదు.";
  }
  wmMeaning.hidden = true;
  wmRevealBtn.hidden = false;
  wordModal.hidden = false;
}

function openLocationPanel(id) {
  const loc = state.locations.find((l) => l.id === id) || { id, telugu: TE_LOCATIONS[id]?.te || id, words: [] };
  const meta = TE_LOCATIONS[id] || {};
  zoomToLocation(id);
  playAmbient(AUDIO_MAP[id] || "assets/audio/village-evening.mp3");

  const locStories = state.stories.filter((s) => Array.isArray(s.locations) && s.locations.includes(id)).slice(0, 5);
  const locWords = state.vocabulary.filter((v) => Array.isArray(v.locationUsage) && v.locationUsage.includes(id)).slice(0, 8);

  panelKicker.textContent = meta.kindTe || "";
  panelTitle.textContent = loc.telugu || meta.te || id;
  panelBody.innerHTML = `
    <img class="panel-hero" src="assets/images/${esc(id)}.webp" alt="${esc(panelTitle.textContent)}" />
    <p class="card-meta"><strong>సమయం:</strong> ${esc(meta.timeTe || "")} · <strong>వాసన:</strong> ${esc(meta.scentTe || "")}</p>
    <h3 class="section-title">ఈ చోటు మాటలు (తాకితే వివరం వస్తుంది)</h3>
    <div class="word-chip-row">
      ${(locWords.length ? locWords.map((w) => ({ te: w.word, en: w.simpleMeaning || w.english })) : (loc.words || []).map(extractVocabItem))
        .map((w) => `<button class="word-chip" data-word="${esc(w.te)}" data-en="${esc(w.en)}" type="button" lang="te">${esc(w.te)}</button>`)
        .join("")}
    </div>
    <h3 class="section-title">ఈ చోటు కథలు</h3>
    ${locStories.length
      ? locStories
          .map(
            (s, i) => `<div class="card" style="margin-bottom:8px; --i:${i};">
              <p class="card-title" lang="te">${esc(s.teluguTitle)}</p>
              <p class="card-meta">${esc(TE_SEASONS[s.season] || s.season)} · స్థాయి ${esc(s.difficulty)}</p>
            </div>`
          )
          .join("")
      : `<p class="card-meta">కథలు త్వరలో...</p>`}
  `;

  panelBody.querySelectorAll(".word-chip").forEach((btn) => {
    btn.addEventListener("click", () => showWordModal(btn.dataset.word, btn.dataset.en));
  });

  panel.hidden = false;
  scrim.hidden = false;
}

function closePanel() {
  panel.hidden = true;
  scrim.hidden = true;
  resetZoom();
}

function renderStoryFilters() {
  const box = document.getElementById("story-filters");
  const items = [{ id: "all", label: "అన్నీ" }].concat(
    Object.entries(TE_LOCATIONS).map(([id, v]) => ({ id, label: v.te }))
  );
  box.innerHTML = items
    .map(
      (it) =>
        `<button class="pill ${state.storyLocFilter === it.id ? "is-active" : ""}" data-loc="${esc(it.id)}" type="button">${esc(it.label)}</button>`
    )
    .join("");
  box.querySelectorAll(".pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.storyLocFilter = btn.dataset.loc;
      renderStoryFilters();
      renderStories();
    });
  });
}

function renderStories() {
  const list = document.getElementById("story-list");
  const filtered =
    state.storyLocFilter === "all"
      ? state.stories
      : state.stories.filter((s) => Array.isArray(s.locations) && s.locations.includes(state.storyLocFilter));
  const slice = filtered.slice(0, 40);

  list.innerHTML = slice
    .map((s, i) => {
      const charNames = (s.characters || [])
        .map((cid) => state.charById.get(cid)?.telugu || cid)
        .slice(0, 4)
        .join(", ");
      const locId = (s.locations || [])[0] || "pandu-house";
      const locTe = TE_LOCATIONS[locId]?.te || locId;
      const vocabChips = (s.vocabulary || [])
        .map(extractVocabItem)
        .filter((v) => v.te)
        .map((v) => `<button class="word-chip" data-word="${esc(v.te)}" data-en="${esc(v.en)}" type="button" lang="te">${esc(v.te)}</button>`)
        .join("");
      return `
        <article class="card" style="--i:${Math.min(i, 12)};">
          <div class="card-head">
            <h3 class="card-title" lang="te">${esc(s.teluguTitle)}</h3>
            <span class="badge">స్థాయి ${esc(s.difficulty)}</span>
          </div>
          <p class="card-meta">${esc(locTe)} · ${esc(TE_SEASONS[s.season] || s.season)} · ${esc(charNames)}</p>
          <div class="word-chip-row">${vocabChips}</div>
          <button class="action-link" data-jump="${esc(locId)}" type="button">ఊరిలో చూడు (${esc(locTe)}) →</button>
        </article>
      `;
    })
    .join("");

  list.querySelectorAll(".word-chip").forEach((btn) => {
    btn.addEventListener("click", () => showWordModal(btn.dataset.word, btn.dataset.en));
  });
  list.querySelectorAll(".action-link").forEach((btn) => {
    btn.addEventListener("click", () => {
      switchTab("map");
      openLocationPanel(btn.dataset.jump);
    });
  });
}

function renderWords() {
  const list = document.getElementById("word-list");
  const q = state.wordSearch.trim().toLowerCase();
  const filtered = state.vocabulary.filter((w) => {
    if (state.wordLayerFilter !== "all" && w.languageLayer !== state.wordLayerFilter) return false;
    if (!q) return true;
    return [
      w.word,
      w.english,
      w.simpleMeaning,
      w.meaning,
      w.literaryEquivalent,
      w.sanskritEquivalent,
      w.category
    ].some((field) => field && String(field).toLowerCase().includes(q));
  });

  const shown = filtered.slice(0, state.wordLimit);
  list.innerHTML =
    shown
      .map(
        (w, i) => `
      <article class="card" style="--i:${Math.min(i, 12)};">
        <div class="card-head">
          <h3 class="card-title" lang="te">${esc(w.word)}</h3>
          <span class="badge">${esc(TE_LAYERS[w.languageLayer] || w.languageLayer)}</span>
        </div>
        <p class="card-meta">
          ${w.literaryEquivalent ? `సాహిత్యం: ${esc(w.literaryEquivalent)} ` : ""}
          ${w.sanskritEquivalent ? `· సంస్కృతం: ${esc(w.sanskritEquivalent)}` : ""}
        </p>
        ${Array.isArray(w.relatedWords) && w.relatedWords.length ? `<p class="card-meta" lang="te"><strong>పద కుటుంబం:</strong> ${esc(w.relatedWords.slice(0, 4).join(", "))}</p>` : ""}
        ${w.exampleSentence ? `<p class="card-body" lang="te">${esc(w.exampleSentence)}</p>` : ""}
        <button class="action-link word-open" data-word="${esc(w.word)}" type="button">పద వంశవృక్షం · అర్థం →</button>
      </article>`
      )
      .join("") +
    (filtered.length > state.wordLimit
      ? `<button class="load-more" id="load-more-words" type="button">మరిన్ని పదాలు (${filtered.length - state.wordLimit})</button>`
      : "");

  list.querySelectorAll(".word-open").forEach((btn) => {
    btn.addEventListener("click", () => showWordModal(btn.dataset.word));
  });
  const moreBtn = document.getElementById("load-more-words");
  if (moreBtn) {
    moreBtn.addEventListener("click", () => {
      state.wordLimit += 40;
      renderWords();
    });
  }
}

function renderQuiz() {
  const box = document.getElementById("quiz-box");
  let pool = [];
  let promptLabel = "";
  let getQuestion = null;
  let getAnswer = null;

  if (state.quizMode === "sanskrit") {
    pool = state.vocabulary.filter((w) => w.sanskritEquivalent && w.sanskritEquivalent !== w.word);
    promptLabel = "ఈ దేశ్య తెలుగు పదానికి సంస్కృత సమాన పదం ఏది?";
    getQuestion = (w) => w.word;
    getAnswer = (w) => w.sanskritEquivalent;
  } else if (state.quizMode === "literary") {
    pool = state.vocabulary.filter((w) => w.literaryEquivalent && w.literaryEquivalent !== w.word);
    promptLabel = "ఈ పదానికి సాహిత్య తెలుగు రూపం ఏది?";
    getQuestion = (w) => w.word;
    getAnswer = (w) => w.literaryEquivalent;
  } else if (state.quizMode === "festival") {
    pool = state.festivals.filter((f) => f.telugu && Array.isArray(f.foods) && f.foods.length);
    promptLabel = "ఈ వంటకం ఏ పండుగకు సంబంధించినది?";
    getQuestion = (f) => f.foods[0].telugu;
    getAnswer = (f) => f.telugu;
  } else {
    pool = state.vocabulary.filter((w) => Array.isArray(w.relatedWords) && w.relatedWords.length);
    promptLabel = "ఈ పదానికి సంబంధించిన పదం ఏది?";
    getQuestion = (w) => w.word;
    getAnswer = (w) => w.relatedWords[0];
  }

  if (pool.length < 4) {
    box.innerHTML = `<p class="card">ప్రశ్నలు సిద్ధమవుతున్నాయి...</p>`;
    return;
  }

  const target = pool[Math.floor(Math.random() * pool.length)];
  const correct = getAnswer(target);
  const options = [correct];
  let guard = 0;
  while (options.length < 4 && guard < 120) {
    guard++;
    const cand = getAnswer(pool[Math.floor(Math.random() * pool.length)]);
    if (cand && !options.includes(cand)) options.push(cand);
  }
  options.sort(() => Math.random() - 0.5);

  box.innerHTML = `
    <div class="quiz-card">
      <p class="quiz-prompt">${esc(promptLabel)}</p>
      <h3 class="quiz-word" lang="te">${esc(getQuestion(target))}</h3>
      <div class="quiz-options">
        ${options
          .map(
            (opt) =>
              `<button class="quiz-opt" data-opt="${esc(opt)}" type="button" lang="te">
                <span>${esc(opt)}</span>
                <span class="opt-dot" aria-hidden="true"></span>
              </button>`
          )
          .join("")}
      </div>
      <p class="quiz-feedback" id="quiz-feedback" hidden></p>
      <button class="next-btn" id="quiz-next" type="button" hidden>మరొక మాట →</button>
    </div>
  `;

  const fb = document.getElementById("quiz-feedback");
  const nextBtn = document.getElementById("quiz-next");
  let attempts = 0;
  let finished = false;

  box.querySelectorAll(".quiz-opt").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (finished || btn.disabled) return;
      const picked = btn.dataset.opt;
      const dot = btn.querySelector(".opt-dot");

      if (picked === correct) {
        finished = true;
        btn.classList.add("is-right");
        dot.textContent = "✓";
        fb.className = "quiz-feedback is-right";
        fb.textContent = "భళా! సరైన మాట.";
        fb.hidden = false;
        nextBtn.hidden = false;
        return;
      }

      attempts += 1;
      btn.classList.add("is-wrong");
      btn.disabled = true;
      dot.textContent = "✕";

      if (attempts < 2) {
        fb.className = "quiz-feedback is-wrong";
        fb.textContent = "మరో అవకాశం ఉంది — ఇంకొక మాట ఎంచుకోండి.";
        fb.hidden = false;
      } else {
        finished = true;
        box.querySelectorAll(".quiz-opt").forEach((b) => {
          if (b.dataset.opt === correct) {
            b.classList.add("is-right");
            b.querySelector(".opt-dot").textContent = "✓";
          }
          b.disabled = true;
        });
        fb.className = "quiz-feedback is-wrong";
        fb.textContent = `సరైన మాట: ${correct}`;
        fb.hidden = false;
        nextBtn.hidden = false;
      }
    });
  });

  nextBtn.addEventListener("click", renderQuiz);
}

function renderCulture() {
  const list = document.getElementById("culture-list");
  if (state.cultureSub === "family") {
    list.innerHTML = state.households
      .map((h, i) => {
        const memberLines = (h.members || []).map((id) => {
          const ch = state.charById.get(id);
          if (!ch) return `<div>• ${esc(id)}</div>`;
          const occ = ch.occupationTelugu ? ` — ${esc(ch.occupationTelugu)}` : "";
          const nick = ch.teluguNickname ? ` (${esc(ch.teluguNickname)})` : "";
          return `<div>• <strong>${esc(ch.telugu)}</strong>${nick}${occ}</div>`;
        });
        return `
          <article class="card" style="--i:${Math.min(i, 12)};">
            <div class="card-head">
              <h3 class="card-title" lang="te">${esc(h.telugu)}</h3>
              <span class="badge">${esc((h.members || []).length)} మంది</span>
            </div>
            <div class="tree-branch" lang="te">${memberLines.join("")}</div>
          </article>
        `;
      })
      .join("");
  } else if (state.cultureSub === "festivals") {
    list.innerHTML = state.festivals
      .map(
        (f, i) => `
      <article class="card" style="--i:${Math.min(i, 12)};">
        <div class="card-head">
          <h3 class="card-title" lang="te">${esc(f.telugu)}</h3>
          <span class="badge">${esc(TE_SEASONS[f.season] || f.season)}</span>
        </div>
        <p class="card-body" lang="te">${esc(f.teluguDescription || "")}</p>
        ${
          Array.isArray(f.foods)
            ? `<p class="card-meta" lang="te"><strong>వంటకాలు:</strong> ${esc(f.foods.map((x) => x.telugu).join(", "))}</p>`
            : ""
        }
        <div class="word-chip-row">
          ${(f.vocabulary || [])
            .slice(0, 6)
            .map(extractVocabItem)
            .filter((v) => v.te)
            .map((v) => `<button class="word-chip" data-word="${esc(v.te)}" data-en="${esc(v.en)}" type="button" lang="te">${esc(v.te)}</button>`)
            .join("")}
        </div>
      </article>`
      )
      .join("");
  } else if (state.cultureSub === "seasons") {
    list.innerHTML = state.seasons
      .map(
        (s, i) => `
      <article class="card" style="--i:${Math.min(i, 12)};">
        <div class="card-head">
          <h3 class="card-title" lang="te">${esc(s.telugu)}</h3>
          <span class="badge" lang="te">${esc(s.teluguLiterary || "")}</span>
        </div>
        <p class="card-meta" lang="te">మాసాలు: ${esc((s.teluguMonths || []).join(", "))}</p>
        <div class="word-chip-row">
          ${(s.vocabulary || [])
            .slice(0, 8)
            .map(extractVocabItem)
            .filter((v) => v.te)
            .map((v) => `<button class="word-chip" data-word="${esc(v.te)}" data-en="${esc(v.en)}" type="button" lang="te">${esc(v.te)}</button>`)
            .join("")}
        </div>
      </article>`
      )
      .join("");
  } else {
    list.innerHTML = state.characters
      .slice(0, 60)
      .map(
        (c, i) => `
      <article class="card" style="--i:${Math.min(i, 12)};">
        <div class="card-head">
          <h3 class="card-title" lang="te">${esc(c.telugu)}</h3>
          <span class="badge">${esc(TE_LAYERS[c.speechLayer] || "వాడుక తెలుగు")}</span>
        </div>
        <p class="card-meta" lang="te">${esc(c.occupationTelugu || "")} ${c.teluguNickname ? `· పిలుపు: ${esc(c.teluguNickname)}` : ""}</p>
      </article>`
      )
      .join("");
  }

  list.querySelectorAll(".word-chip").forEach((btn) => {
    btn.addEventListener("click", () => showWordModal(btn.dataset.word, btn.dataset.en));
  });
}

function enableMapDragPan() {
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  mapViewport.addEventListener("mousedown", (e) => {
    if (e.target.closest(".place")) return;
    isDown = true;
    startX = e.pageX - mapViewport.offsetLeft;
    scrollLeft = mapViewport.scrollLeft;
  });
  window.addEventListener("mouseup", () => {
    isDown = false;
  });
  mapViewport.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - mapViewport.offsetLeft;
    mapViewport.scrollLeft = scrollLeft - (x - startX);
  });
}

function bindEvents() {
  enableMapDragPan();

  navBtns.forEach((btn) => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
  });

  places.forEach((btn) => {
    btn.addEventListener("click", () => openLocationPanel(btn.dataset.id));
  });

  closePanelBtn.addEventListener("click", closePanel);
  scrim.addEventListener("click", closePanel);

  document.getElementById("close-word-modal").addEventListener("click", () => {
    wordModal.hidden = true;
  });
  wordModal.addEventListener("click", (e) => {
    if (e.target === wordModal) wordModal.hidden = true;
  });
  wmRevealBtn.addEventListener("click", () => {
    wmMeaning.hidden = false;
    wmRevealBtn.hidden = true;
  });

  document.getElementById("word-search").addEventListener("input", (e) => {
    state.wordSearch = e.target.value;
    state.wordLimit = 40;
    renderWords();
  });

  document.getElementById("word-layer-filters").querySelectorAll(".pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.wordLayerFilter = btn.dataset.layer;
      state.wordLimit = 40;
      document.getElementById("word-layer-filters").querySelectorAll(".pill").forEach((p) => p.classList.toggle("is-active", p === btn));
      renderWords();
    });
  });

  document.getElementById("quiz-modes").querySelectorAll(".pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.quizMode = btn.dataset.mode;
      document.getElementById("quiz-modes").querySelectorAll(".pill").forEach((p) => p.classList.toggle("is-active", p === btn));
      renderQuiz();
    });
  });

  document.getElementById("culture-tabs").querySelectorAll(".pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.cultureSub = btn.dataset.sub;
      document.getElementById("culture-tabs").querySelectorAll(".pill").forEach((p) => p.classList.toggle("is-active", p === btn));
      renderCulture();
    });
  });

  audioToggle.addEventListener("click", () => {
    state.audioEnabled = !state.audioEnabled;
    audioToggle.setAttribute("aria-pressed", String(state.audioEnabled));
    audioToggle.textContent = state.audioEnabled ? "ధ్వని: ఆన్" : "ధ్వని: ఆఫ్";
    if (state.audioEnabled) {
      playAmbient(state.currentAudioSrc || "assets/audio/village-evening.mp3");
    } else if (state.currentAudio) {
      state.currentAudio.pause();
    }
  });
}

async function init() {
  bindEvents();
  const [locData, storyData, vocabData, charData, famData, festData, seasonData] = await Promise.all([
    fetchJsonSafe("data/locations.json"),
    fetchJsonSafe("data/stories.json"),
    fetchJsonSafe("data/vocabulary.json"),
    fetchJsonSafe("data/characters.json"),
    fetchJsonSafe("data/family.json"),
    fetchJsonSafe("data/festivals.json"),
    fetchJsonSafe("data/seasons.json")
  ]);

  state.locations = locData?.locations || [];
  state.stories = Array.isArray(storyData) ? storyData : storyData?.stories || [];
  state.vocabulary = Array.isArray(vocabData) ? vocabData : vocabData?.vocabulary || [];
  state.vocabulary.forEach((v) => {
    if (v.word && !state.vocabByWord.has(v.word)) state.vocabByWord.set(v.word, v);
  });
  state.characters = charData?.characters || [];
  state.characters.forEach((c) => state.charById.set(c.id, c));
  state.households = famData?.households || [];
  if (festData?.festivals?.length) {
    state.festivals = festData.festivals;
  }
  state.seasons = seasonData?.seasons || [];

  renderStoryFilters();
  renderStories();
  renderWords();
  renderQuiz();
  renderCulture();

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  }
}

init();
