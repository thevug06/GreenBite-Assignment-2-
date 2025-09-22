// Easy Grocery List JS
const form = document.getElementById("grocery-form");
const input = document.getElementById("grocery-item");
const list = document.getElementById("grocery-list");

// Load saved items from localStorage
let groceryItems = JSON.parse(localStorage.getItem("groceryItems")) || [];

function displayItems() {
    list.innerHTML = "";
    groceryItems.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = item;
        // add simple remove on click
        li.addEventListener("click", () => {
            groceryItems.splice(index, 1);
            saveAndDisplay();
        });
        list.appendChild(li);
    });
}

function saveAndDisplay() {
    localStorage.setItem("groceryItems", JSON.stringify(groceryItems));
    displayItems();
}

// Add item
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value.trim();
    if (value !== "") {
        groceryItems.push(value);
        saveAndDisplay();
        input.value = "";
    }
});

// Initial display
displayItems();
