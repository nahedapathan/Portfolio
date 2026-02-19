function toggleMode() {
  document.body.classList.toggle("dark");
  localStorage.setItem("darkTheme", document.body.classList.contains("dark"));
}
if (localStorage.getItem("darkTheme") === "true")
  document.body.classList.add("dark");

function scrollToFooter() {
  const footer = document.getElementById("footerContact");
  footer.scrollIntoView({ behavior: "smooth" });
  // subtle highlight on the email pill
  const emailPill = document.querySelector(".footer-email-large");
  if (emailPill) {
    emailPill.style.transition = "background 0.2s";
    emailPill.style.background = "rgba(255,215,0,0.25)";
    setTimeout(() => (emailPill.style.background = ""), 250);
  }
}

function openMail() {
  window.open(
    "https://mail.google.com/mail/?view=cm&fs=1&to=pathannaheda.ltr@gmail.com&su=Hiring%20Inquiry&body=Hello%20Naheda,%20I%20want%20to%20hire%20you",
    "_blank",
  );
}

/* ===== YOUR SKILLS (UPDATED WITH MORE ITEMS) ===== */
const skills = [
  {
    title: "Programming",
    items: [
      "Core Java",
      "OOPs",
      "Collections",
      "Exception Handling",
      "Multithreading",
      "Java 8",
    ],
  },
  {
    title: "Backend",
    items: [
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "Hibernate",
      "JPA",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    title: "Frontend",
    items: [
      "Angular",
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "Bootstrap",
      "Responsive UI",
    ],
  },
  {
    title: "Database",
    items: [
      "MySQL",
      "JDBC",
      "Query Optimization",
      "Transactions",
      "MongoDB (basic)",
    ],
  },
  {
    title: "Tools & DevOps",
    items: [
      "Git & GitHub",
      "Docker (Basic)",
      "CI/CD (Basic)",
      "Postman",
      "Maven",
      "VS Code",
    ],
  },
];

/* ===== GENERATE CARDS WITH ANIMATION ===== */
const container = document.getElementById("skillsBox");
container.innerHTML = ""; // clear if any

skills.forEach((skill, index) => {
  let li = "";
  skill.items.forEach((item) => {
    li += `<li><i class="fas fa-check-circle"></i>${item}</li>`;
  });

  // add card with a tiny delay for staggered animation (CSS handles it via nth-child)
  container.innerHTML += `
    <div class="card" style="animation-delay: ${0.1 + index * 0.1}s">
      <h3>${skill.title}</h3>
      <ul>${li}</ul>
    </div>
  `;
});

/****************************************** project */
(function () {
  const track = document.getElementById("projectTrack");
  const leftBtn = document.getElementById("scrollLeft");
  const rightBtn = document.getElementById("scrollRight");
  const statusSpan = document.getElementById("autoStatus");
  const dot = document.getElementById("playPauseDot");

  // dynamic step calculation
  function getStep() {
    const firstCard = track.querySelector(".project-card");
    if (!firstCard) return 305; // fallback
    const gap = parseFloat(getComputedStyle(track).gap) || 25;
    return firstCard.offsetWidth + gap;
  }

  // scroll handlers
  leftBtn.addEventListener("click", () => {
    track.scrollBy({ left: -getStep(), behavior: "smooth" });
  });

  rightBtn.addEventListener("click", () => {
    track.scrollBy({ left: getStep(), behavior: "smooth" });
  });

  // ---------- AUTO SCROLL with smart pause/resume ----------
  let autoInterval;
  let isHovering = false;
  let isPaused = false; // for manual pause (via clicking on dot later? we keep simple)
  const AUTO_DELAY = 2800; // ms

  function startAutoScroll() {
    if (autoInterval) clearInterval(autoInterval);
    autoInterval = setInterval(() => {
      // only scroll if not hovering and not paused
      if (!isHovering && !isPaused) {
        track.scrollBy({ left: getStep(), behavior: "smooth" });
      }
    }, AUTO_DELAY);
    updateStatusText();
  }

  function updateStatusText() {
    if (isPaused) {
      statusSpan.innerText = "paused";
      dot.style.background = "#ef4444";
    } else if (isHovering) {
      statusSpan.innerText = "hover (paused)";
      dot.style.background = "#f59e0b";
    } else {
      statusSpan.innerText = "auto-scrolling";
      dot.style.background = "#10b981";
    }
  }

  // hover on track
  track.addEventListener("mouseenter", () => {
    isHovering = true;
    updateStatusText();
  });
  track.addEventListener("mouseleave", () => {
    isHovering = false;
    updateStatusText();
  });

  // optional: click on dot toggles manual pause (extra interactivity)
  dot.addEventListener("click", () => {
    isPaused = !isPaused;
    updateStatusText();
  });

  // keyboard navigation (already present, but ensure arrows don't conflict)
  track.setAttribute("tabindex", "0");
  track.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      track.scrollBy({ left: -getStep(), behavior: "smooth" });
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      track.scrollBy({ left: getStep(), behavior: "smooth" });
    }
  });

  // start auto scrolling
  startAutoScroll();

  // clean up on page hide (optional)
  window.addEventListener("beforeunload", () => {
    if (autoInterval) clearInterval(autoInterval);
  });

  // recalc step on resize (cards width may change due to media queries)
  window.addEventListener("resize", () => {
    // no need to clear anything, getStep() recalc each time
  });

  
})();

///********************************************** */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

/* Animate progress bars */

const bars = document.querySelectorAll(".edu-bar");

function animateBars() {
  bars.forEach((bar) => {
    const top = bar.getBoundingClientRect().top;
    if (top < window.innerHeight) {
      bar.style.width = bar.dataset.width;
    }
  });
}

window.addEventListener("scroll", animateBars);
window.addEventListener("load", animateBars);


function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}

