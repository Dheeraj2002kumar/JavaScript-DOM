// Example 1

document.getElementById('changeTextButton').addEventListener("click", function(){
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "The paragraph changed.";
})

// Example 2

document.getElementById("highlightFirstCity").addEventListener("click", function(){
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("first-list");
})

// Example 3

document.getElementById("changeOrder").addEventListener("click", function(){
    let coffeeType = document.getElementById("coffeeType");
    coffeeType.textContent = "Espresso";
    coffeeType.style.backgroundColor = "red";
    coffeeType.style.padding = "10px";
})

// Example 4

document.getElementById("addNewItem").addEventListener("click", function(){
    let newItem = document.createElement("li");
    newItem.textContent = "Eggs";

    document.getElementById("shoppingList").appendChild(newItem);
})