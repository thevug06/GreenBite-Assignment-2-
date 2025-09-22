// Profile
document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const pointsDisplay = document.getElementById("points-display");
    const waterGoal = document.getElementById("water-goal");
    const stepsGoal = document.getElementById("steps-goal");
    const sleepGoal = document.getElementById("sleep-goal");
    const workoutGoal = document.getElementById("workout-goal");
    const saveBtn = document.getElementById("save-goals");
    const userName = document.getElementById("user-name");
    const userEmail = document.getElementById("user-email");

    // Load points
    let points = parseInt(localStorage.getItem("points")) || 0;
    pointsDisplay.textContent = "Points:" + points;

    // Load saved mini-goals
    waterGoal.checked = JSON.parse(localStorage.getItem("waterGoal")) || false;
    stepsGoal.checked = JSON.parse(localStorage.getItem("stepsGoal")) || false;
    sleepGoal.checked = JSON.parse(localStorage.getItem("sleepGoal")) || false;
    workoutGoal.checked = JSON.parse(localStorage.getItem("workoutGoal")) || false;

    // Save button click
    saveBtn.addEventListener("click", () => {
        let earnedPoints = 0;
        if (waterGoal.checked) earnedPoints += 10;
        if (stepsGoal.checked) earnedPoints += 15;
        if (sleepGoal.checked) earnedPoints += 20;
        if (workoutGoal.checked) earnedPoints += 25;

        points += earnedPoints;
        localStorage.setItem("points", points);
        pointsDisplay.textContent = "Points:" + points;

        // Save goals state
        localStorage.setItem("waterGoal", waterGoal.checked);
        localStorage.setItem("stepsGoal", stepsGoal.checked);
        localStorage.setItem("sleepGoal", sleepGoal.checked);
        localStorage.setItem("workoutGoal", workoutGoal.checked);

        alert("Progress saved! You earned " + earnedPoints + " points.");
    });

    // Display dummy user info
    userName.textContent = localStorage.getItem("username") || "Guest";
    userEmail.textContent = localStorage.getItem("useremail") || "Not Logged In";
});
