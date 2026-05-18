

export const SUPPORTED_LANGS = [
  { code: "en", label: "EN", fullLabel: "English"  },
  { code: "es", label: "ES", fullLabel: "Español"  },
  { code: "de", label: "DE", fullLabel: "Deutsch"  },
];

const STRINGS = {
  en: {
    meta: {
      siteTitle:       "Jackson Kelley",
      siteDescription: "Personal site for Jackson Kelley — developer, builder, creator.",
      lang:            "en",
    },
    nav: {
      logo:         "JK",
      home:         "Home",
      about:        "About",
      resume:       "Résumé",
      interests:     "Interests",
      contact:      "Contact",
      langSwitcher: "Language",
    },
    hero: {
    greeting:     "Hi, I'm",
    name:         "Jackson Kelley",
    tagline:      "Placeholder Placeholder Placeholder",
    ctaPrimary:   "View My Work",
    ctaSecondary: "Get in Touch",
    },
    about: {
      sectionLabel: "About",
      heading:      "A little about me",
      paragraphs: [
        "Placeholder paragraph one — describe who you are, where you're from, and what drives you.",
        "Placeholder paragraph two — talk about your background, education, or journey into your field.",
        "Placeholder paragraph three — mention interests, side projects, or anything that makes you you.",
      ],
    },
    resume: {
      sectionLabel:  "Résumé",
      heading:       "Experience & Education",
      downloadLabel: "Download PDF",
      downloadHref:  "Resume.pdf",
      PI: {
        heading: "Personal Interests",
        items: [
          {
            role:    "Volleyball",
            company: "Placeholder Company",
            period:  "2021 – Current",
            bullets: [
              "Fist sport I truly loved",
              "Played middle blocker the entire time, although would love to be a rightside hitter",
              "Ball is Life",
            ],
          },
          {
            role:    "Fishing",
            company: "Placeholder Company",
            period:  "2018 – Current",
            bullets: [
              "Taught me patience, happiness, dissapointment, and many other emotions",
              "Biggest fish I ever caugh was a 47 inch lingcod. The biggest fish I lost was a 70-80lb halibut.",
            ],
          },
        ],
      },
      albums: {
        heading: "Favorite Albums",
        items: [
          { title: "To Pimp A Butterfly",   artist: "Kendrick Lamar", img: "TPAB.webp" },
          { title: "Mushroom Sex Death Bummer Party",   artist: "Wine Lips", img: "MSDBP.jpg" },
          { title: "Flee", artist: "The Jeremy Spencer Band", img: "Flee.jpg" },
        ],
      },
    },
    contact: {
      sectionLabel: "Contact",
      heading:      "Let's talk",
      subheading:   "Have a question, opportunity, or just want to say hello? Send me a message.",
      form: {
        nameLabel:          "Name",
        namePlaceholder:    "Your name",
        emailLabel:         "Email",
        emailPlaceholder:   "your@email.com",
        messageLabel:       "Message",
        messagePlaceholder: "Your message…",
        submitLabel:        "Send Message",
        successMessage:     "Thanks! Your message has been sent.",
        errorMessage:       "Something went wrong. Please try again or email me directly.",
      },
    },
    footer: {
      copy:         "© {2026} Jackson Kelley. All rights reserved.",
      githubUrl:    "https://github.com/jkelley678",
      linkedinUrl:  "https://www.linkedin.com/in/jackson-kelley-880a4a255/",
      githubLabel:  "GitHub",
      linkedinLabel:"LinkedIn",
    },
  },
  es: {
    meta: {
      siteTitle:       "Jackson Kelley",
      siteDescription: "Sitio personal de Jackson Kelley — desarrollador, creador.",
      lang:            "es",
    },
    nav: {
      logo:         "JK",
      home:         "Inicio",
      about:        "Sobre mí",
      resume:       "Currículum",
      projects:     "Proyectos",
      contact:      "Contacto",
      langSwitcher: "Idioma",
    },
    hero: {
    greeting:     "Hola, soy",
    name:         "Jackson Kelley",
    tagline:      "Marcador Marcador Marcador",
    ctaPrimary:   "Ver mi trabajo",
    ctaSecondary: "Contáctame",
    },
    about: {
      sectionLabel: "Sobre mí",
      heading:      "Un poco sobre mí",
      paragraphs: [
        "Párrafo de marcador uno — describe quién eres, de dónde eres y qué te motiva.",
        "Párrafo de marcador dos — habla de tu trayectoria, educación o camino en tu campo.",
        "Párrafo de marcador tres — menciona intereses, proyectos paralelos o lo que te hace único.",
      ],
    },
    resume: {
      sectionLabel:  "Currículum",
      heading:       "Experiencia y educación",
      downloadLabel: "Descargar PDF",
      downloadHref:  "Resume.pdf",
      experience: {
        heading: "Experiencia",
        items: [
          {
            role:    "Puesto de marcador",
            company: "Empresa de marcador",
            period:  "Mes Año – Mes Año",
            bullets: [
              "Responsabilidad o logro de marcador uno.",
              "Responsabilidad o logro de marcador dos.",
              "Responsabilidad o logro de marcador tres.",
            ],
          },
          {
            role:    "Puesto de marcador",
            company: "Empresa de marcador",
            period:  "Mes Año – Mes Año",
            bullets: [
              "Responsabilidad o logro de marcador uno.",
              "Responsabilidad o logro de marcador dos.",
            ],
          },
        ],
      },
      albums: {
        heading: "Álbumes favoritos",
        items: [
          { title: "Album Title One",   artist: "Artist Name", img: "/assets/album_1.jpeg" },
          { title: "Album Title Two",   artist: "Artist Name", img: "/assets/album_2.jpeg" },
          { title: "Album Title Three", artist: "Artist Name", img: "/assets/album_3.jpeg" },
        ],
      },
    },
  },
  de: {
    meta: {
      siteTitle:       "Jackson Kelley",
      siteDescription: "Persönliche Website von Jackson Kelley — Entwickler, Gestalter, Macher.",
      lang:            "de",
    },
    nav: {
      logo:         "JK",
      home:         "Start",
      about:        "Über mich",
      resume:       "Lebenslauf",
      projects:     "Projekte",
      contact:      "Kontakt",
      langSwitcher: "Sprache",
    },
    hero: {
    greeting:     "Hallo, ich bin",
    name:         "Jackson Kelley",
    tagline:      "Platzhalter Platzhalter Platzhalter",
    ctaPrimary:   "Meine Arbeit ansehen",
    ctaSecondary: "Kontakt aufnehmen",
    },
    about: {
      sectionLabel: "Über mich",
      heading:      "Ein bisschen über mich",
      paragraphs: [
        "Platzhalter-Absatz eins — beschreibe, wer du bist, woher du kommst und was dich antreibt.",
        "Platzhalter-Absatz zwei — erzähle von deinem Hintergrund, deiner Ausbildung oder deinem Weg in dein Fachgebiet.",
        "Platzhalter-Absatz drei — erwähne Interessen, Nebenprojekte oder das, was dich einzigartig macht.",
      ],
    },
    resume: {
      sectionLabel:  "Lebenslauf",
      heading:       "Erfahrung & Ausbildung",
      downloadLabel: "PDF herunterladen",
      downloadHref:  "Resume.pdf",
      experience: {
        heading: "Erfahrung",
        items: [
          {
            role:    "Platzhalter-Position",
            company: "Platzhalter-Unternehmen",
            period:  "Monat Jahr – Monat Jahr",
            bullets: [
              "Platzhalter Verantwortung oder Leistung eins.",
              "Platzhalter Verantwortung oder Leistung zwei.",
              "Platzhalter Verantwortung oder Leistung drei.",
            ],
          },
          {
            role:    "Platzhalter-Position",
            company: "Platzhalter-Unternehmen",
            period:  "Monat Jahr – Monat Jahr",
            bullets: [
              "Platzhalter Verantwortung oder Leistung eins.",
              "Platzhalter Verantwortung oder Leistung zwei.",
            ],
          },
        ],
      },
      albums: {
        heading: "Lieblingsalben",
        items: [
          { title: "Album Title One",   artist: "Artist Name", img: "/assets/album_1.jpeg" },
          { title: "Album Title Two",   artist: "Artist Name", img: "/assets/album_2.jpeg" },
          { title: "Album Title Three", artist: "Artist Name", img: "/assets/album_3.jpeg" },
        ],
      },
    },
  },
};

export default STRINGS;