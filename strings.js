

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
    tagline:      "",
    ctaPrimary:   "View My Work",
    ctaSecondary: "Get in Touch",
    },
    about: {
      sectionLabel: "About",
      heading:      "A little about me",
      paragraphs: [
        "I am a software developer student from Seattle, Washington. While I have been studying Computer Science for the past few years, I have only recently found my enjoyment for Web Development. I hope to be able to add more projects to this site, demonstrating what I have to offer. But that will come with time. ",
        "My true love is the outdoors. Coming from the Pacific Northwest, I grew accuustomed to spending my free time hiking, camping, swimming, skiing, fishing, crabbing, shrimping; pretty much anything that has to do with nature. I am a recriational photographer, emphasis on recreational, but I hope to include some of my photos on this site in the future.",
        "",
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
              "First sport I truly loved",
              "Played middle blocker the entire time, although would love to be a rightside hitter",
              "Ball is Life",
            ],
          },
          {
            role:    "Fishing",
            company: "Placeholder Company",
            period:  "2018 – Current",
            bullets: [
              "Taught me patience, happiness, disappointment, and many other emotions",
              "Biggest fish I ever caught was a 47 inch lingcod. The biggest fish I lost was a 70-80lb halibut.",
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
    interests:    "Intereses",
    contact:      "Contacto",
    langSwitcher: "Idioma",
  },
  hero: {
    greeting:     "Hola, soy",
    name:         "Jackson Kelley",
    tagline:      "",
    ctaPrimary:   "Ver mi trabajo",
    ctaSecondary: "Contáctame",
  },
  about: {
    sectionLabel: "Sobre mí",
    heading:      "Un poco sobre mí",
    paragraphs: [
      "Soy un estudiante de desarrollo de software de Seattle, Washington. Aunque llevo varios años estudiando Ciencias de la Computación, solo recientemente descubrí mi pasión por el Desarrollo Web. Espero poder agregar más proyectos a este sitio para demostrar lo que tengo para ofrecer. Pero eso llegará con el tiempo.",
      "Mi verdadero amor es el aire libre. Siendo del Noroeste del Pacífico, me acostumbré a pasar mi tiempo libre haciendo senderismo, acampando, nadando, esquiando, pescando, cazando cangrejos y camarones; prácticamente cualquier cosa relacionada con la naturaleza. Soy fotógrafo recreativo, énfasis en recreativo, pero espero incluir algunas de mis fotos en este sitio en el futuro.",
      "",
    ],
  },
  resume: {
    sectionLabel:  "Currículum",
    heading:       "Experiencia y Educación",
    downloadLabel: "Descargar PDF",
    downloadHref:  "Resume.pdf",
    PI: {
      heading: "Intereses Personales",
      items: [
        {
          role:    "Voleibol",
          company: "",
          period:  "2021 – Actualidad",
          bullets: [
            "El primer deporte que realmente amé",
            "Jugué de bloqueador central todo el tiempo, aunque me encantaría ser atacante derecho",
            "El balón es la vida",
          ],
        },
        {
          role:    "Pesca",
          company: "",
          period:  "2018 – Actualidad",
          bullets: [
            "Me enseñó paciencia, felicidad, decepción y muchas otras emociones",
            "El pez más grande que pesqué fue un lingcod de 47 pulgadas. El pez más grande que perdí fue un halibut de 70-80 libras.",
          ],
        },
      ],
    },
    albums: {
      heading: "Álbumes Favoritos",
      items: [
        { title: "To Pimp A Butterfly",              artist: "Kendrick Lamar",          img: "TPAB.webp"  },
        { title: "Mushroom Sex Death Bummer Party",  artist: "Wine Lips",               img: "MSDBP.jpg"  },
        { title: "Flee",                             artist: "The Jeremy Spencer Band", img: "Flee.jpg"   },
      ],
    },
  },
  contact: {
    sectionLabel: "Contacto",
    heading:      "Hablemos",
    subheading:   "¿Tienes una pregunta, oportunidad o simplemente quieres saludar? Envíame un mensaje.",
    form: {
      nameLabel:          "Nombre",
      namePlaceholder:    "Tu nombre",
      emailLabel:         "Correo electrónico",
      emailPlaceholder:   "tu@correo.com",
      messageLabel:       "Mensaje",
      messagePlaceholder: "Tu mensaje…",
      submitLabel:        "Enviar mensaje",
      successMessage:     "¡Gracias! Tu mensaje ha sido enviado.",
      errorMessage:       "Algo salió mal. Por favor inténtalo de nuevo o escríbeme directamente.",
    },
  },
  footer: {
    copy:         "© {2026} Jackson Kelley. Todos los derechos reservados.",
    githubUrl:    "https://github.com/jkelley678",
    linkedinUrl:  "https://www.linkedin.com/in/jackson-kelley-880a4a255/",
    githubLabel:  "GitHub",
    linkedinLabel:"LinkedIn",
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
    interests:    "Interessen",
    contact:      "Kontakt",
    langSwitcher: "Sprache",
  },
  hero: {
    greeting:     "Hallo, ich bin",
    name:         "Jackson Kelley",
    tagline:      "",
    ctaPrimary:   "Meine Arbeit ansehen",
    ctaSecondary: "Kontakt aufnehmen",
  },
  about: {
    sectionLabel: "Über mich",
    heading:      "Ein bisschen über mich",
    paragraphs: [
      "Ich bin ein Softwareentwicklungsstudent aus Seattle, Washington. Obwohl ich seit einigen Jahren Informatik studiere, habe ich erst kürzlich meine Begeisterung für Webentwicklung entdeckt. Ich hoffe, diesem Projekt weitere Projekte hinzufügen zu können, um zu zeigen, was ich zu bieten habe. Aber das kommt mit der Zeit.",
      "Meine wahre Leidenschaft ist die Natur. Da ich aus dem pazifischen Nordwesten komme, bin ich es gewohnt, meine Freizeit beim Wandern, Campen, Schwimmen, Skifahren, Angeln, Krabbenfangen und Garnelenfischen zu verbringen — im Grunde allem, was mit der Natur zu tun hat. Ich bin Freizeitfotograf, mit Betonung auf Freizeit, aber ich hoffe, in Zukunft einige meiner Fotos auf dieser Seite zu zeigen.",
      "",
    ],
  },
  resume: {
    sectionLabel:  "Lebenslauf",
    heading:       "Erfahrung & Ausbildung",
    downloadLabel: "PDF herunterladen",
    downloadHref:  "Resume.pdf",
    PI: {
      heading: "Persönliche Interessen",
      items: [
        {
          role:    "Volleyball",
          company: "",
          period:  "2021 – Heute",
          bullets: [
            "Der erste Sport, den ich wirklich liebte",
            "Ich spielte die ganze Zeit als Mittelblocker, wäre aber gerne Rechtshänderangreifer",
            "Der Ball ist das Leben",
          ],
        },
        {
          role:    "Angeln",
          company: "",
          period:  "2018 – Heute",
          bullets: [
            "Es lehrte mich Geduld, Freude, Enttäuschung und viele andere Gefühle",
            "Der größte Fisch, den ich je gefangen habe, war ein 47 Zoll langer Lingcod. Der größte Fisch, den ich verloren habe, war ein Heilbutt von 70-80 Pfund.",
          ],
        },
      ],
    },
    albums: {
      heading: "Lieblingsalben",
      items: [
        { title: "To Pimp A Butterfly",              artist: "Kendrick Lamar",          img: "TPAB.webp"  },
        { title: "Mushroom Sex Death Bummer Party",  artist: "Wine Lips",               img: "MSDBP.jpg"  },
        { title: "Flee",                             artist: "The Jeremy Spencer Band", img: "Flee.jpg"   },
      ],
    },
  },
  contact: {
    sectionLabel: "Kontakt",
    heading:      "Lass uns reden",
    subheading:   "Hast du eine Frage, eine Gelegenheit oder möchtest einfach Hallo sagen? Schreib mir.",
    form: {
      nameLabel:          "Name",
      namePlaceholder:    "Dein Name",
      emailLabel:         "E-Mail",
      emailPlaceholder:   "deine@email.de",
      messageLabel:       "Nachricht",
      messagePlaceholder: "Deine Nachricht…",
      submitLabel:        "Nachricht senden",
      successMessage:     "Danke! Deine Nachricht wurde gesendet.",
      errorMessage:       "Etwas ist schiefgelaufen. Bitte versuche es erneut oder schreib mir direkt.",
    },
  },
  footer: {
    copy:         "© {2026} Jackson Kelley. Alle Rechte vorbehalten.",
    githubUrl:    "https://github.com/jkelley678",
    linkedinUrl:  "https://www.linkedin.com/in/jackson-kelley-880a4a255/",
    githubLabel:  "GitHub",
    linkedinLabel:"LinkedIn",
  },
},
};

export default STRINGS;