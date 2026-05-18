import STRINGS from "./strings.js";


const WMO_CODES = {
  0:  "Clear sky",
  1:  "Mainly clear",
  2:  "Partly cloudy",
  3:  "Overcast",
  45: "Foggy",
  48: "Icy fog",
  51: "Light drizzle",
  53: "Drizzle",
  55: "Heavy drizzle",
  61: "Light rain",
  63: "Rain",
  65: "Heavy rain",
  71: "Light snow",
  73: "Snow",
  75: "Heavy snow",
  80: "Rain showers",
  81: "Heavy showers",
  95: "Thunderstorm",
  99: "Thunderstorm with hail",
};

function cToF(c) {
  return Math.round((c * 9) / 5 + 32);
}

function mpsToMph(mps) {
  return Math.round(mps * 2.237);
}

function mpsToKph(mps) {
  return Math.round(mps * 3.6);
}

async function fetchWeather(lat, lon) {
  const url =
    `https://api.open-meteo.com/v1/forecast` +
    `?latitude=${lat}&longitude=${lon}` +
    `&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m` +
    `&temperature_unit=celsius&wind_speed_unit=ms&timezone=auto`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

function buildCard(location, data, unit, strings) {
  const c = data.current;
  const tempC = Math.round(c.temperature_2m);
  const feelsC = Math.round(c.apparent_temperature);
  const windMps = c.wind_speed_10m;

  const temp   = unit === "F" ? `${cToF(tempC)}°F`   : `${tempC}°C`;
  const feels  = unit === "F" ? `${cToF(feelsC)}°F`  : `${feelsC}°C`;
  const wind   = unit === "F"
    ? `${mpsToMph(windMps)} mph`
    : `${mpsToKph(windMps)} km/h`;

  const condition = WMO_CODES[c.weather_code] ?? "Unknown";

  const card = document.createElement("div");
  card.className = "weather-card";
  card.innerHTML = `
    <p class="weather-card-location">${location.name}</p>
    <p class="weather-card-temp">${temp}</p>
    <p class="weather-card-condition">${condition}</p>
    <p class="weather-card-detail">${strings.feels}: ${feels}</p>
    <p class="weather-card-detail">${strings.wind}: ${wind}</p>
  `;
  return card;
}

export function initWeatherWidget(lang) {
  const widget = document.querySelector("weather-widget");
  if (!widget) return;

  let unit = "F";
  let weatherData = null;

  const strings = STRINGS[lang].weather;

  function render() {
    widget.innerHTML = "";

    // Toggle buttons
    const toggle = document.createElement("div");
    toggle.className = "weather-toggle";
    toggle.setAttribute("role", "group");
    toggle.setAttribute("aria-label", "Temperature unit");

    ["F", "C"].forEach((u) => {
      const btn = document.createElement("button");
      btn.className = "weather-toggle-btn" + (unit === u ? " is-active" : "");
      btn.textContent = `°${u}`;
      btn.setAttribute("aria-pressed", unit === u ? "true" : "false");
      btn.addEventListener("click", () => {
        unit = u;
        render();
      });
      toggle.appendChild(btn);
    });

    widget.appendChild(toggle);

    if (!weatherData) {
      const loading = document.createElement("p");
      loading.className = "weather-loading";
      loading.textContent = strings.loading;
      widget.appendChild(loading);
      return;
    }

    if (weatherData.error) {
      const err = document.createElement("p");
      err.className = "weather-error";
      err.textContent = strings.error;
      widget.appendChild(err);
      return;
    }

    const grid = document.createElement("div");
    grid.className = "weather-grid";

    strings.locations.forEach((location, i) => {
      if (weatherData.results[i]) {
        grid.appendChild(buildCard(location, weatherData.results[i], unit, strings));
      }
    });

    widget.appendChild(grid);
  }

  // Initial render with loading state
  render();

  // Fetch all three locations in parallel
  const locations = strings.locations;
  Promise.all(locations.map((loc) => fetchWeather(loc.lat, loc.lon)))
    .then((results) => {
      weatherData = { results };
      render();
    })
    .catch(() => {
      weatherData = { error: true };
      render();
    });
}