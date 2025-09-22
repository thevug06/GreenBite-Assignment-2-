// Login

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name = "" || email == "") {
      alert("Please fill in all fields.");
      return;
    }

    // Save user info in localStorage
    localStorage.setItem("greenbiteUser", JSON.stringify({ name, email }));

    alert("Login successful!");
    window.location.href = "profile.html"; // This allows the system to redirect to profile
  });
});
