document.addEventListener("DOMContentLoaded", function() {
    var unlockBtn = document.getElementById("unlock-theme");
    var rewardMsg = document.getElementById("reward-message");

    // get points from localStorage (0 if not set)
    var points = parseInt(localStorage.getItem("points")) || 0;
    var themeUnlocked = localStorage.getItem("pastelTheme") === "true";

    // if already unlocked, apply theme immediately
    if(themeUnlocked) {
        document.body.classList.add("pastel-theme");
        rewardMsg.textContent = "Theme already unlocked!";
    }

    unlockBtn.addEventListener("click", function() {
        if(points >= 1000) {
            document.body.classList.add("pastel-theme");
            localStorage.setItem("pastelTheme", "true");
            rewardMsg.textContent = "You unlocked the Cute Pastel Theme!";
        } else {
            rewardMsg.textContent = "You need 1000 points to unlock this theme. Keep going!";
        }
    });
});
