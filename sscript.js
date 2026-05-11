/* ══════════════════════════════════════
   WARREN CELIS · E-PORTFOLIO
   script.js
══════════════════════════════════════ */

/* ══════════════════════════════════════
   LOADER
══════════════════════════════════════ */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("out");
  }, 1800);
});

/* ══════════════════════════════════════
   NAVBAR SCROLL EFFECT
══════════════════════════════════════ */
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* ══════════════════════════════════════
   MOBILE MENU
══════════════════════════════════════ */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});

/* Close menu when clicking nav link */
document.querySelectorAll(".nav-a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

/* ══════════════════════════════════════
   ACTIVE NAVIGATION LINK
══════════════════════════════════════ */
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 140;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

/* ══════════════════════════════════════
   BACK TO TOP BUTTON
══════════════════════════════════════ */
const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backTop.classList.add("visible");
  } else {
    backTop.classList.remove("visible");
  }
});

backTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/* ══════════════════════════════════════
   SCROLL REVEAL ANIMATION
══════════════════════════════════════ */
const revealElements = document.querySelectorAll(".reveal-fade, .reveal-up");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in");
    }
  });
}, {
  threshold: 0.15
});

revealElements.forEach(el => {
  revealObserver.observe(el);
});

/* ══════════════════════════════════════
   SKILL BAR ANIMATION
══════════════════════════════════════ */
const skillCards = document.querySelectorAll(".skill-card");

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
}, {
  threshold: 0.4
});

skillCards.forEach(card => {
  skillObserver.observe(card);
});

/* ══════════════════════════════════════
   PROJECT DATA
══════════════════════════════════════ */

const prelimProjects = [
  { title: "Assignment No. 1", desc: "DDL Creating and Modifying", img: "projects/prelims/img.png" },
  { title: "Seatwork No. 1", desc: "Creating Table with Constraints", img: "projects/prelims/img2.png" },
  { title: "Activity No. 2", desc: "CREATE AND MODIFYING DATABASE", img: "projects/prelims/img3.png" },
  { title: "QUIZ 2", desc: "DDL COMMANDS", img: "projects/prelims/img4.png" },
  { title: "Seatwork", desc: "INSERT, SELECT, AND WHERE CLAUSE", img: "projects/prelims/img5.png" },
  { title: "Activity No. 4", desc: "SQL SERVER Operators", img: "projects/prelims/img6.png" },
  { title: "Seatwork No. 1", desc: "Creating Table with Constraints", img: "projects/prelims/img7.png" },
  { title: "QUIZ 2", desc: "SQL COMMANDS", img: "projects/prelims/img8.png" },
  { title: "EXAMINATION", desc: "PRELIM EXAM ITC C502 ADVANCED DATABASE", img: "projects/prelims/img9.png" }
];

const midtermProjects = [
  { title: "ACTIVITY NO.1", desc: "UPDATING AND SORTING RECORDS", img: "projects/midterm/img10.png" },
  { title: "Activity No.2", desc: "AGGREGATE FUNCTIONS", img: "projects/midterm/img11.png" },
  { title: "Quiz 1", desc: "MIDTERM QUIZ WRITTEN", img: "projects/midterm/midquiz.jpg" },
  { title: "MIDTERM EXAMINATION SY2526", desc: "MIDTERM EXAM WRITTEN", img: "projects/midterm/midexam.jpg" },
];


const finalsProjects = [
  { title: "Activity No.1", desc: "GMETRIX TEST MODE PRACTICE EXAM 1, 2, 3", img: "projects/final/img12.png" },
  { title: "Seatwork No. 1", desc: "User Defined Function", img: "projects/final/img13.png" },
  { title: "ACTIVITY NO.1", desc: "STORE PROCEDURE", img: "projects/final/img14.png" },
  { title: "ACTIVITY", desc: "SQL GRANT AND REVOKE PRIVILEGES", img: "projects/final/img15.png" },
  { title: "Review Question", desc: "DATABASE CERTIFICATION EXAM ADDITIONAL QUESTIONS REVIEW", img: "projects/final/img16.png" },
  { title: "CERTIFICATION RESULT", desc: "DATABASE CERTIFICATION EXAM ANALYSIS RESULT", img: "projects/final/img17.png" },
    { title: "Quiz", desc: "", img: "projects/final/img18.png" }
];

/* ══════════════════════════════════════
   PAGINATION VARIABLES
══════════════════════════════════════ */
const ITEMS_PER_PAGE = 3;

let prelimPage = 1;
let midtermPage = 1;
let finalsPage = 1;

/* ══════════════════════════════════════
   CREATE PROJECT CARD
══════════════════════════════════════ */
function createProjectCard(project) {
  return `
    <div class="glass-card reveal-fade in">

      <img 
        src="${project.img}" 
        class="card-img"
        alt="${project.title}"
      >

      <div class="card-body">
        <div class="card-title">
          ${project.title}
        </div>

        <div class="card-desc">
          ${project.desc}
        </div>
      </div>

    </div>
  `;
}

/* ══════════════════════════════════════
   RENDER PROJECTS
══════════════════════════════════════ */
function renderProjects(data, containerId, page, dotsId, prevBtnId, nextBtnId) {

  const container = document.getElementById(containerId);
  const dotsContainer = document.getElementById(dotsId);

  const prevBtn = document.getElementById(prevBtnId);
  const nextBtn = document.getElementById(nextBtnId);

  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;

  const paginatedItems = data.slice(start, end);

  container.innerHTML = paginatedItems.map(createProjectCard).join("");

  /* Buttons */
  prevBtn.disabled = page === 1;
  nextBtn.disabled = end >= data.length;

  /* Dots */
  const pageCount = Math.ceil(data.length / ITEMS_PER_PAGE);

  dotsContainer.innerHTML = "";

  for (let i = 1; i <= pageCount; i++) {
    const dot = document.createElement("div");

    dot.classList.add("pager-dot");

    if (i === page) {
      dot.classList.add("active");
    }

    dot.addEventListener("click", () => {
      if (containerId === "projectContainer") {
        prelimPage = i;
        renderPrelims();
      }

      if (containerId === "midtermContainer") {
        midtermPage = i;
        renderMidterms();
      }

      if (containerId === "finalsContainer") {
        finalsPage = i;
        renderFinals();
      }
    });

    dotsContainer.appendChild(dot);
  }
}

/* ══════════════════════════════════════
   PRELIMS
══════════════════════════════════════ */
function renderPrelims() {
  renderProjects(
    prelimProjects,
    "projectContainer",
    prelimPage,
    "pagerDots",
    "prevBtn",
    "nextBtn"
  );
}

function nextPage() {
  prelimPage++;
  renderPrelims();
}

function prevPage() {
  prelimPage--;
  renderPrelims();
}

/* ══════════════════════════════════════
   MIDTERMS
══════════════════════════════════════ */
function renderMidterms() {
  renderProjects(
    midtermProjects,
    "midtermContainer",
    midtermPage,
    "midPagerDots",
    "midPrevBtn",
    "midNextBtn"
  );
}

function midNextPage() {
  midtermPage++;
  renderMidterms();
}

function midPrevPage() {
  midtermPage--;
  renderMidterms();
}

/* ══════════════════════════════════════
   FINALS
══════════════════════════════════════ */
function renderFinals() {
  renderProjects(
    finalsProjects,
    "finalsContainer",
    finalsPage,
    "finPagerDots",
    "finPrevBtn",
    "finNextBtn"
  );
}

function finNextPage() {
  finalsPage++;
  renderFinals();
}

function finPrevPage() {
  finalsPage--;
  renderFinals();
}

/* Initial render */
renderPrelims();
renderMidterms();
renderFinals();

/* ══════════════════════════════════════
   REFLECTION TOGGLES
══════════════════════════════════════ */
function toggleReflection() {
  document.getElementById("reflectionWrap")
    .classList.toggle("open");
}

function toggleMidReflection() {
  document.getElementById("midReflectionWrap")
    .classList.toggle("open");
}

function toggleFinReflection() {
  document.getElementById("finReflectionWrap")
    .classList.toggle("open");
}

/* ══════════════════════════════════════
   GALLERY
══════════════════════════════════════ */
const galleryGrid = document.getElementById("galleryGrid");

const allGalleryItems = [
  ...prelimProjects.map(item => ({ ...item, type: "prelim" })),
  ...midtermProjects.map(item => ({ ...item, type: "midterm" })),
  ...finalsProjects.map(item => ({ ...item, type: "finals" }))
];

function renderGallery(filter = "all") {

  galleryGrid.innerHTML = "";

  const filteredItems = filter === "all"
    ? allGalleryItems
    : allGalleryItems.filter(item => item.type === filter);

  filteredItems.forEach(item => {

    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery-item");

    galleryItem.innerHTML = `
      <img 
        src="${item.img}" 
        alt="${item.title}"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
      >

      <div class="gi-placeholder"></div>

      <div class="gi-overlay">
        <div class="gi-label">${item.title}</div>
      </div>
    `;

    galleryItem.addEventListener("click", () => {
      openModal(item.img, item.title);
    });

    galleryGrid.appendChild(galleryItem);
  });
}

renderGallery();

/* Gallery Filters */
const filterButtons = document.querySelectorAll(".gf-btn");

filterButtons.forEach(btn => {

  btn.addEventListener("click", () => {

    filterButtons.forEach(button => {
      button.classList.remove("active");
    });

    btn.classList.add("active");

    const filter = btn.dataset.filter;

    renderGallery(filter);
  });

});

/* ══════════════════════════════════════
   IMAGE MODAL
══════════════════════════════════════ */
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const modalCaption = document.getElementById("modalCaption");

function openModal(img, caption) {
  modal.classList.add("open");
  modalImg.src = img;
  modalCaption.textContent = caption;

  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");

  document.body.style.overflow = "auto";
}

/* ESC CLOSE */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

/* ══════════════════════════════════════
   CONTACT FORM
══════════════════════════════════════ */
function handleSubmit(e) {
  e.preventDefault();

  const success = document.getElementById("formSuccess");

  success.classList.add("visible");

  e.target.reset();

  setTimeout(() => {
    success.classList.remove("visible");
  }, 4000);
}

/* ══════════════════════════════════════
   PARALLAX HERO EFFECT
══════════════════════════════════════ */
const orb1 = document.querySelector(".hero-orb-1");
const orb2 = document.querySelector(".hero-orb-2");

window.addEventListener("mousemove", (e) => {

  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  orb1.style.transform = `
    translate(${x * 30}px, ${y * 30}px)
  `;

  orb2.style.transform = `
    translate(${x * -20}px, ${y * -20}px)
  `;
});