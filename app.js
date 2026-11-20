const app = document.querySelector("#app");
const dialog = document.querySelector("#site-dialog");
const dialogTitle = document.querySelector("#dialog-title");
const dialogMessage = document.querySelector("#dialog-message");

const programs = {
  medical: {
    title: "Medical Help",
    image: "assets/medical-card.png",
    cardTitle: "Medical Emergencies",
    description:
      "Help patients and families facing urgent medical expenses get the care they need, when they need it most.",
    cards: 5,
  },
  pets: {
    title: "Pets Help",
    image: "assets/pets-card.png",
    cardTitle: "Pets Help",
    description:
      "Support rescue, treatment, and shelter for pets in need. Every donation helps save a life.",
    cards: 4,
  },
  scholarship: {
    title: "Scholarship Help",
    image: "assets/scholarship-card.png",
    formImage: "assets/scholarship-form.png",
    cardTitle: "Empowering Students Through Education",
    description:
      "Access scholarships designed to support those who need financial help the most.",
    cards: 6,
  },
};

const services = [
  { title: "Medical Help", href: "#/medical", icon: "medical" },
  { title: "Pets Help", href: "#/pets", icon: "pets" },
  { title: "Scholarship Help", href: "#/scholarship", icon: "scholarship" },
  { title: "Donations", href: "#/donations", icon: "donations" },
];

function iconSvg(name) {
  const icons = {
    medical:
      '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M32 29.5s-14-8.3-14-17.1C18 4 28 3 32 10c4-7 14-6 14 2.4 0 8.8-14 17.1-14 17.1Z"/><path d="M32 8v10m-5-5h10M8 40c7-1 13 0 18 4l4 3h16c4 0 5 5 1 7l-14 6H18l-8-4"/><path d="m8 39-4 14 14 7m17-13 9-7c4-3 8 1 5 5"/></svg>',
    pets:
      '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M32 57S8 44 8 27c0-9 10-13 17-7 3 2 5 6 7 9 2-3 4-7 7-9 7-6 17-2 17 7 0 17-24 30-24 30Z"/><ellipse cx="16" cy="14" rx="4" ry="6"/><ellipse cx="27" cy="8" rx="4" ry="6"/><ellipse cx="39" cy="8" rx="4" ry="6"/><ellipse cx="49" cy="14" rx="4" ry="6"/></svg>',
    scholarship:
      '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="m5 21 27-12 27 12-27 12L5 21Z"/><path d="M17 27v15c9 7 23 7 32 0V27M59 22v18"/><circle cx="59" cy="43" r="3"/><path d="M27 27v7m10-7v7"/></svg>',
    donations:
      '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M13 26h38l-4 30H17l-4-30Z"/><path d="M8 26h48v-6H8v6Zm12 0c-7-10 5-15 12 0 7-15 19-10 12 0"/><path d="M28 42c0-3 4-4 4-1 0-3 4-2 4 1 0 3-4 6-4 6s-4-3-4-6Z"/></svg>',
  };
  return icons[name] || "";
}

function header(isHome = false, activePage = "") {
  const links = [
    { label: "Home", href: "#/home", key: "home" },
    { label: "About", href: "#/about", key: "about" },
    { label: "Our Services", href: "#/home#services", key: "services" },
    { label: "Gallery", href: "#/gallery", key: "gallery" },
    { label: "Contact Us", href: "#/contact", key: "contact" },
  ];

  return `
    <header class="site-header${isHome ? " site-header--overlay" : ""}">
      <div class="header-inner">
        <a class="brand" href="#/home" aria-label="ServeLove Organisation home">
          <img src="assets/logo.png" alt="ServeLove Organisation logo" />
        </a>
        <nav class="primary-nav" aria-label="Main navigation">
          ${links
            .map(
              (link) =>
                `<a href="${link.href}"${activePage === link.key ? ' aria-current="page"' : ""}>${link.label}</a>`,
            )
            .join("")}
        </nav>
        <button
          class="login-button"
          type="button"
          data-dialog-title="Member sign in"
          data-dialog-message="Member accounts are not connected in this frontend preview."
        >Log In/Sign Up</button>
      </div>
    </header>`;
}

function footer() {
  return `
    <footer class="site-footer" id="contact">
      <div class="footer-inner">
        <a class="footer-brand" href="#/home" aria-label="ServeLove Organisation home">
          <img src="assets/logo.png" alt="" />
        </a>
        <nav class="footer-links" aria-label="Footer navigation">
          <a href="#/about">About</a>
          <a href="#/home#services">Our Services</a>
          <a href="#/gallery">Gallery</a>
          <a href="#/contact">Contact Us</a>
          <a href="#/privacy">Privacy Policy</a>
        </nav>
      </div>
      <p class="footer-copy">ServeLove Organisation · Serving Humanity. Spreading Love.</p>
    </footer>`;
}

function homePage() {
  const tiles = services
    .map(
      (service) => `
        <a class="service-tile" href="${service.href}">
          ${iconSvg(service.icon)}
          <span>${service.title.toUpperCase()}</span>
        </a>`,
    )
    .join("");

  return `
    ${header(true, "home")}
    <main class="home-content">
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-content">
          <h1 id="hero-title">Serving Humanity. Spreading Love.</h1>
          <p>We believe a better world begins with simple acts of kindness. Serve Love is a movement dedicated to selfless service, compassion, and building trust within communities.</p>
          <a class="outline-button" href="#/donations">Donate Now</a>
        </div>
      </section>
      <section class="mission-section" id="about">
        <div>
          <h2>OUR VISION</h2>
          <p>To us, kindness isn’t measured by money. Even a small act — a helping hand, a listening ear, or a moment of time — can change a life. We believe every life, human no matter how small, deserves love and care.</p>
        </div>
        <div>
          <h2>OUR MISSION</h2>
          <p>Our mission is to bridge gaps in society by offering unwavering support to those in need. Every act of service we perform stems from a deep commitment to making a positive impact, guided by empathy and fuelled by collective generosity.</p>
        </div>
      </section>
      <section class="services-section" id="services">
        <h2>OUR SERVICES</h2>
        <div class="service-tiles">${tiles}</div>
      </section>
      <section class="join-section">
        <h2>Join Our Mission to Make a Difference</h2>
        <p>At Serve Love Organisation, we believe in the power of compassion and community. We’re always looking for dedicated individuals to grow our impact together. If you’re passionate about helping others, join our team today.</p>
        <a class="outline-button" href="#/contact">Join Now</a>
      </section>
    </main>
    ${footer()}`;
}

function servicePage(programKey) {
  const program = programs[programKey];
  const cards = Array.from({ length: program.cards }, (_, index) => {
    const image =
      programKey === "scholarship" && index === 0
        ? program.formImage
        : program.image;
    const imageAlt =
      programKey === "scholarship" && index === 0
        ? "Scholarship application form preview"
        : program.cardTitle;
    return `
      <article class="story-card">
        <img src="${image}" alt="${imageAlt}" />
        <div class="story-card-copy">
          <h2>${program.cardTitle}</h2>
          <p>${program.description}</p>
        </div>
        <a class="card-arrow" href="#/contact" aria-label="Learn more about ${program.cardTitle}">→</a>
      </article>`;
  }).join("");

  return `
    ${header(false, programKey)}
    <main class="page-main">
      <div class="page-heading">
        <h1>${program.title}</h1>
        ${
          programKey === "scholarship"
            ? `<button class="outline-button" type="button" data-dialog-title="Scholarship applications" data-dialog-message="The application form is shown as a design preview. Online applications are not connected in this frontend.">Apply Now</button>`
            : ""
        }
      </div>
      <section class="catalog-grid" aria-label="${program.title} opportunities">
        ${cards}
      </section>
    </main>
    ${footer()}`;
}

function donationsPage() {
  const cards = Array.from(
    { length: 6 },
    (_, index) => `
      <button
        class="donate-card"
        type="button"
        aria-label="Donate, option ${index + 1}"
        data-dialog-title="Thank you for supporting ServeLove"
        data-dialog-message="Online donations are not connected in this frontend preview."
      >
        <img src="assets/donation-card.png" alt="" />
      </button>`,
  ).join("");

  return `
    ${header(false, "donations")}
    <main class="page-main">
      <div class="page-heading"><h1>Donations</h1></div>
      <section class="donation-grid" aria-label="Donation options">${cards}</section>
    </main>
    ${footer()}`;
}

function aboutPage() {
  return `
    ${header(false, "about")}
    <main class="simple-page">
      <h1>About ServeLove</h1>
      <section class="about-block">
        <h2>Who We Are</h2>
        <p>ServeLove Organisation is a community-led nonprofit dedicated to compassion, service, and building trust. We bring people together to support individuals and families through medical help, education, and care for animals.</p>
      </section>
      <section class="about-block">
        <h2>Our Mission</h2>
        <p>We bridge gaps in society by offering support to those in need. Every act of service begins with empathy and grows through collective generosity.</p>
      </section>
      <section class="about-block">
        <h2>How We Help</h2>
        <p>Our programs focus on medical emergencies, scholarships, and rescue and treatment for pets. We believe every act of kindness can make a meaningful difference.</p>
      </section>
    </main>
    ${footer()}`;
}

function galleryPage() {
  const items = [
    { label: "Medical Help", href: "#/medical", image: programs.medical.image },
    { label: "Pets Help", href: "#/pets", image: programs.pets.image },
    {
      label: "Scholarship Help",
      href: "#/scholarship",
      image: programs.scholarship.image,
    },
  ];
  return `
    ${header(false, "gallery")}
    <main class="simple-page">
      <h1>Gallery</h1>
      <section class="gallery-grid" aria-label="ServeLove programs">
        ${items
          .map(
            (item) => `
              <a class="gallery-item" href="${item.href}">
                <img src="${item.image}" alt="" />
                <span>${item.label}</span>
              </a>`,
          )
          .join("")}
      </section>
    </main>
    ${footer()}`;
}

function contactPage() {
  return `
    ${header(false, "contact")}
    <main class="simple-page">
      <h1>Contact Us</h1>
      <section class="contact-card">
        <h2>Let’s make a difference together</h2>
        <p>Interested in volunteering, supporting a program, or learning more about ServeLove? Choose a service below to explore how you can help.</p>
        <a class="outline-button" href="#/home#services">Explore Our Services</a>
      </section>
    </main>
    ${footer()}`;
}

function privacyPage() {
  return `
    ${header(false)}
    <main class="simple-page">
      <h1>Privacy Policy</h1>
      <section class="about-block">
        <p>This frontend preview does not collect, store, or send personal information. Sign-in, donation, and application features are visual previews and are not connected to a backend.</p>
      </section>
    </main>
    ${footer()}`;
}

function render() {
  const hash = window.location.hash || "#/home";
  const [route, anchor] = hash.slice(2).split("#");
  const page = route || "home";

  if (page in programs) {
    app.innerHTML = servicePage(page);
  } else if (page === "donations") {
    app.innerHTML = donationsPage();
  } else if (page === "about") {
    app.innerHTML = aboutPage();
  } else if (page === "gallery") {
    app.innerHTML = galleryPage();
  } else if (page === "contact") {
    app.innerHTML = contactPage();
  } else if (page === "privacy") {
    app.innerHTML = privacyPage();
  } else {
    app.innerHTML = homePage();
  }

  if (anchor) {
    requestAnimationFrame(() => {
      document.getElementById(anchor)?.scrollIntoView();
    });
  } else {
    window.scrollTo(0, 0);
  }
}

app.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-dialog-title]");
  if (!trigger) return;

  dialogTitle.textContent = trigger.dataset.dialogTitle;
  dialogMessage.textContent = trigger.dataset.dialogMessage;
  dialog.showModal();
});

window.addEventListener("hashchange", render);
render();
