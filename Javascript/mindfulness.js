// Simple Mindfulness JS
const breathEl = document.getElementById("breath");
const startBtn = document.getElementById("start-meditation");
const timerInput = document.getElementById("meditation-time");
const sessionLog = document.getElementById("session-log");

// Function to animate breathing
function doBreathingAnimation(duration) {
    let inhale = true;
    breathEl.textContent = "Inhale...";
    const interval = setInterval(() => {
        if (inhale) {
            breathEl.textContent = "Exhale...";
        } else {
            breathEl.textContent = "Inhale...";
        }
        inhale = !inhale;
    }, 4000); // 4 seconds inhale/exhale

    // Stop after duration
    setTimeout(() => {
        clearInterval(interval);
        breathEl.textContent = "Session Complete!";
        logSession(duration);
    }, duration * 60 * 1000);
}

// Function to log completed sessions
function logSession(duration) {
    let sessions = JSON.parse(localStorage.getItem("mindSessions")) || [];
    const now = new Date().toLocaleString();
    sessions.push({ duration: duration, date: now });
    localStorage.setItem("mindSessions", JSON.stringify(sessions));
    displaySessions();
}

// Function to display history
function displaySessions() {
    const sessions = JSON.parse(localStorage.getItem("mindSessions")) || [];
    sessionLog.innerHTML = "<h4>Completed Sessions:</h4>";
    if (sessions.length === 0) {
        sessionLog.innerHTML += "<p>No sessions yet.</p>";
    } else {
        const ul = document.createElement("ul");
        sessions.forEach(s => {
            const li = document.createElement("li");
            li.textContent = `${s.duration} min - ${s.date}`;
            ul.appendChild(li);
        });
        sessionLog.appendChild(ul);
    }
}

// Start button event
startBtn.addEventListener("click", () => {
    const time = parseInt(timerInput.value);
    if (time > 0) {
        doBreathingAnimation(time);
    } else {
        alert("Enter a valid number of minutes");
    }
});

// Display sessions on page load
displaySessions();
