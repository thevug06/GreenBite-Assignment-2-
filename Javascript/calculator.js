document.getElementById("calorie-form").addEventListener("submit", function(event) {
  event.preventDefault();

  var age = parseInt(document.getElementById("age").value);
  var gender = document.getElementById("gender").value;
  var height = parseInt(document.getElementById("height").value);
  var weight = parseInt(document.getElementById("weight").value);
  var activity = parseFloat(document.getElementById("activity").value);

  var bmr = 0;
  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  var bmrWithActivity = Math.round(bmr * activity);

  document.getElementById("result").textContent =
    "Your daily BMR with activity is: " + bmrWithActivity + " kcal";
});
