// cursor design using gsap
const crsr = document.querySelector("#cursor");
const crsrblur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (e) {
  gsap.to(crsr, {
    duration: 0.4,
    left: e.x - 18,
    top: e.y - 22,
  });
  gsap.to(crsrblur, {
    duration: 1.5,
    left: e.x - 200,
    top: e.y - 225,
  });
});

// navigation bar scroll using gsap
gsap.to("#nav", {
  backgroundColor: "black",
  height: "90px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 0.8,
  },
});

// color changing from page 1 to other (GSAP)
gsap.to(["#page1", "#page2"], {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#page1",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

// linking the nav
document.querySelectorAll("#nav .navlinks").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetElement = document.querySelector(this.getAttribute("href"));
    targetElement.scrollIntoView({
      behavior: "smooth",
    });
  });
});
// linking the down arrow
document.querySelectorAll("#arr a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetElement = document.querySelector(this.getAttribute("href"));
    targetElement.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Set the width of the skill bars
const skillBars = document.querySelectorAll(".skill-bar");
skillBars.forEach((skillBar) => {
  const skillLevel = skillBar.querySelector(".skill-level");
  const width = skillLevel.getAttribute("data-width");
  skillBar.style.width = width;
});

// cursor selection animation using scroll trigger (gsap)
const nava = document.querySelectorAll("#nav a");
nava.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    crsr.style.transform = "scale(2) translateY(5px) translateX(-12px)";
    crsr.style.border = "1px solid white";
    crsr.style.backgroundColor = "transparent";
    crsr.style.transition =
      "transform 0.5s, border 0.5s, background-color 0.5s";
  });
  e.addEventListener("mouseleave", function () {
    crsr.style.transform = "scale(1) translate(0px)";
    crsr.style.border = "0px solid #addc2f";
    crsr.style.backgroundColor = "#addc2f";
    crsr.style.transition =
      "transform 0.5s, border 0.5s, background-color 0.5s";
  });
});
const arrow = document.querySelectorAll("#arrow");
arrow.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    crsr.style.transform = "scale(0)";
    crsr.style.backgroundColor = "transparent";
    crsr.style.transition =
      "transform 0.5s, border 0.5s, background-color 0.5s";
  });
  e.addEventListener("mouseleave", function () {
    crsr.style.transform = "scale(1) translate(0px)";
    crsr.style.border = "0px solid #addc2f";
    crsr.style.backgroundColor = "#addc2f";
    crsr.style.transition =
      "transform 0.5s, border 0.5s, background-color 0.5s";
  });
});
const cards = document.querySelectorAll(".card");
cards.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    crsr.style.transform = "scale(3) translateY(-10px) translateX(0px)";
    crsr.style.border = "1px solid white";
    crsr.style.backgroundColor = "transparent";
    crsr.style.transition =
      "transform 0.5s, border 0.5s, background-color 0.5s";
  });
  e.addEventListener("mouseleave", function () {
    crsr.style.transform = "scale(1) translate(0px)";
    crsr.style.border = "0px solid #addc2f";
    crsr.style.backgroundColor = "#addc2f";
    crsr.style.transition =
      "transform 0.5s, border 0.5s, background-color 0.5s";
  });
});
const footer = document.querySelectorAll("#footer h3,#footer a");
footer.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    crsr.style.transform = "scale(3) translateY(-10px) translateX(0px)";
    crsr.style.border = "1px solid #bfff11";
    crsr.style.backgroundColor = "transparent";
    crsr.style.transition =
      "transform 0.5s, border 0.5s, background-color 0.5s";
  });
  e.addEventListener("mouseleave", function () {
    crsr.style.transform = "scale(1) translate(0px)";
    crsr.style.border = "0px solid #addc2f";
    crsr.style.backgroundColor = "#addc2f";
    crsr.style.transition =
      "transform 0.5s, border 0.5s, background-color 0.5s";
  });
});

// scroll trigger in other pages
gsap.from("#aboutin", {
  scale: 0.6,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-me",
    scroller: "body",
    start: "top 60%",
    end: "top 55%",
    scrub: 3,
  },
});

gsap.from(".skill-level", {
  scaleX: 0,
  opacity: 1,
  transformOrigin: "left",
  scrollTrigger: {
    trigger: ".skills",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 12,
  },
});

gsap.from("#college, #school", {
  y: 400,
  opacity: 0,
  scrollTrigger: {
    trigger: "#education",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 3,
  },
});

gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 80%",
    end: "top 75%",
    scrub: 1,
  },
});

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 60%",
    end: "top 55%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 60%",
    end: "top 55%",
    scrub: 4,
  },
});
