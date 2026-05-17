import STRINGS, { SUPPORTED_LANGS } from "./strings.js";

let currentLang = "en";

function getString(lang, path) {
  const keys = path.split(".");
  let val = STRINGS[lang];
  for (const key of keys) {
    if (val === undefined) return path;
    val = val[key];
  }
  return val ?? path;
}

function applyStrings(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-string]").forEach((el) => {
    const path = el.dataset.string;
    el.textContent = getString(lang, path);
  });
}

function setActiveLangButton(lang) {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-current", isActive ? "true" : "false");
  });
}

function switchLang(lang) {
  if (!STRINGS[lang]) return;
  currentLang = lang;
  applyStrings(lang);
  setActiveLangButton(lang);
}

// Wire up lang buttons
document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => switchLang(btn.dataset.lang));
});

// Run on load with default language
switchLang(currentLang);