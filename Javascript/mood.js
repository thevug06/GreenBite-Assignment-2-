// Simple Mood Tracker JS
const moodForm = document.getElementById("mood-form");
const moodSelect = document.getElementById("mood-select");
const moodHistoryDiv = document.getElementById("mood-history");

// Load moods from localStorage
let moods = JSON.parse(localStorage.getItem("moodHistory")) || [];

function displayMoods() {
    moodHistoryDiv.innerHTML = "";
    moods.forEach((entry) => {
        const p = document.createElement("p");
        p.textContent = `${entry.date}: ${entry.mood}`;
        moodHistoryDiv.appendChild(p);
    });
}

function saveMood(mood) {
    const today = new Date().toLocaleDateString();
    moods.push({ date: today, mood });
    localStorage.setItem("moodHistory", JSON.stringify(moods));
    displayMoods();
}

moodForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const selectedMood = moodSelect.value;
    if (selectedMood) {
        saveMood(selectedMood);
        moodSelect.value = "";
    }
});

// Initial display
displayMoods();
