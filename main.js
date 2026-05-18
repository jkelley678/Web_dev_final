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
    el.textContent = getString(lang, el.dataset.string);
  });
  document.querySelectorAll("[data-placeholder-string]").forEach((el) => {
    el.placeholder = getString(lang, el.dataset.placeholderString);
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

document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => switchLang(btn.dataset.lang));
  });

  const yearEl = document.getElementById("footer-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const form   = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = {
      name:    form.elements["name"].value.trim(),
      email:   form.elements["email"].value.trim(),
      message: form.elements["message"].value.trim(),
    };

    console.log("Sending data:", data);

    try {
      const res = await fetch("https://formspree.io/f/meedqkyj", {
        method:  "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body:    JSON.stringify(data),
      });

      console.log("Response status:", res.status);
      console.log("Response ok:", res.ok);

      const responseBody = await res.json();
      console.log("Response body:", responseBody);

      if (res.ok) {
        status.hidden = false;
        status.textContent = getString(currentLang, "contact.form.successMessage");
        form.reset();
      } else {
        throw new Error("Non-OK response");
      }
    } catch (err) {
      console.error("Error:", err);
      status.hidden = false;
      status.textContent = getString(currentLang, "contact.form.errorMessage");
    }
  });

  switchLang(currentLang);

});