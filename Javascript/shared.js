
// Hero Image Rotation
const heroImages = [
  "images/hero1.jpg",
  "images/hero2.jpg",
  "images/hero3.jpg"
];

let heroIndex = 0;
const heroImg = document.querySelector(".hero-img");

function rotateHero() {
    if (!heroImg) return; // safety check
    heroIndex = (heroIndex + 1) % heroImages.length;
    heroImg.src = heroImages[heroIndex];
}
setInterval(rotateHero, 4000);


// Daily Health Tips

const tips = [
    "Drink 8 glasses of water daily.",
    "Take a 10-minute walk after meals.",
    "Replace sugary drinks with water or tea.",
    "Stretch for 5 minutes every morning.",
    "Eat at least 2 servings of fruits a day."
];

function showDailyTip() {
    const tipEl = document.getElementById("daily-tip");
    if (!tipEl) return;
    const today = new Date().getDate();
    tipEl.textContent = tips[today % tips.length];
}

window.addEventListener("load", showDailyTip);


// Points Tracker (simple, reusable)
function getPoints() {
    return parseInt(localStorage.getItem("points")) || 0;
}

function setPoints(value) {
    localStorage.setItem("points", value);
    const display = document.getElementById("points-display");
    if (display) display.textContent = "Points:" + value;
}

// Initialize points display on page load
document.addEventListener("DOMContentLoaded", () => {
    setPoints(getPoints());
});
