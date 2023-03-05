let menueBtn = $(".hamburger-btn");
let navOverlay = $(".nav-overlay");
function openMenue() {
  menueBtn.toggleClass("clicked");
  if (navOverlay.hasClass("open")) {
    navOverlay.removeClass("open");
    navOverlay.addClass("close");
  } else if (navOverlay.hasClass("close")) {
    navOverlay.removeClass("close");
    navOverlay.addClass("open");
  } else {
    navOverlay.addClass("open");
  }
  $(".navlinks-container").toggleClass("appear");
}
menueBtn.click(openMenue);
navOverlay.click(openMenue);
// initially hide all elements

$("section").addClass("disappear");
$("footer").addClass("disappear");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.replace("disappear", "appear");
      } else {
        entry.target.classList.remove("appear");
      }
    });
  },
  { threshold: [0.3, 0.5] }
);
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});
let footer = document.querySelector("footer");
observer.observe(footer);
