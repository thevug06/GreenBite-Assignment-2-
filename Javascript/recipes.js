//recipes
document.addEventListener("DOMContentLoaded", function() {
  
    var container = document.getElementById("recipes-container");
    var modal = document.getElementById("recipe-modal");
    var modalContent = document.getElementById("modal-content");
    var closeBtn = modal.querySelector(".close-btn");

    // Function to show modal 
    function showRecipe(title, ingredients, steps) {
        var content = "<h2>" + title + "</h2>";

        content += "<h4>Ingredients:</h4><ul>";
        for (var i = 0; i < ingredients.length; i++) {
            content += "<li>" + ingredients[i] + "</li>";
        }
        content += "</ul>";

        content += "<h4>Steps:</h4><ol>";
        for (var j = 0; j < steps.length; j++) {
            content += "<li>" + steps[j] + "</li>";
        }
        content += "</ol>";

        modalContent.innerHTML = content;
        modal.style.display = "flex";
    }

 
    var cards = document.querySelectorAll(".recipe-card");
    for (var k = 0; k < cards.length; k++) {
        cards[k].onclick = function() {
            var title = this.getAttribute("data-title");
            var ingredients = this.getAttribute("data-ingredients").split(",");
            var steps = this.getAttribute("data-steps").split(",");
            showRecipe(title, ingredients, steps);
        };
    }

   
    closeBtn.onclick = function() {
        modal.style.display = "none";
    };

    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});
