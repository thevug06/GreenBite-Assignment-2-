//Image rotator for homepage
const heroImages = [
  "images/hero1.jpg",
  "images/hero2.jpg",
  "images/hero3.jpg"
];

let heroIndex = 0;
const heroImgElement = document.querySelector(".hero-img");

function rotateHero() {
  heroIndex = (heroIndex + 1) % heroImages.length;
  heroImgElement.src = heroImages[heroIndex];
}
setInterval(rotateHero, 4000); // every 4 seconds


// Daily Health Tips
const tips = [
  "Drink 8 glasses of water daily.",
  "Take a 10-minute walk after meals.",
  "Replace sugary drinks with water or tea.",
  "Stretch for 5 minutes every morning.",
  "Eat at least 2 servings of fruits a day."
];

function showDailyTip() {
  const today = new Date().getDate(); // day of the month
  const tip = tips[today % tips.length];
  document.getElementById("daily-tip").textContent = tip;
}

window.addEventListener("load", showDailyTip);
