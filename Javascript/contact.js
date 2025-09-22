document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contact-form");
    var responseDiv = document.getElementById("form-response");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); 

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

       
        console.log("Contact form submitted:", name, email, message);

        responseDiv.textContent = "Thanks, " + name + "! Your message has been received.";
        responseDiv.style.color = "#4CAF50";

        
        form.reset();
    });
});

//This doesnt actually send an email for servers..it's just a simple validation to show that the user's concern has been taken to notice and we will reach them via email or mobile