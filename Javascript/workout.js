document.getElementById("workout-form").addEventListener("submit", function(e) {
  e.preventDefault();

  var goal = document.getElementById("goal").value;
  var bodyPart = document.getElementById("body-part").value;
  var equipment = document.getElementById("equipment").value;
  var planContainer = document.getElementById("workout-plan");

 
  planContainer.innerHTML = "";

  var workouts = {
    "weight-loss": [
      "Jumping Jacks - 3 sets of 30 sec",
      "Burpees - 3 sets of 10",
      "Squats - 3 sets of 15"
    ],
    "muscle-gain": [
      "Push-ups - 3 sets of 12",
      "Bicep Curls - 3 sets of 15",
      "Lunges - 3 sets of 12"
    ],
    "endurance": [
      "Running in Place - 10 min",
      "Mountain Climbers - 3 sets of 30 sec",
      "Plank - 3 sets of 60 sec"
    ]
  };

  var selectedWorkouts = workouts[goal];

 
  for (var i = 0; i < selectedWorkouts.length; i++) {
    var card = document.createElement("div");
    card.className = "workout-card";
    card.innerHTML = "<h3>Exercise " + (i+1) + "</h3><ul><li>" + selectedWorkouts[i] + "</li></ul>";
    planContainer.appendChild(card);
  }
});
