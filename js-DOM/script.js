// Example 1

document.getElementById('changeTextButton').addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "The paragraph changed.";
})

// Example 2

document.getElementById("highlightFirstCity").addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("first-list");
})

// Example 3

document.getElementById("changeOrder").addEventListener("click", function () {
    let coffeeType = document.getElementById("coffeeType");
    coffeeType.textContent = "Espresso";
    coffeeType.style.backgroundColor = "red";
    coffeeType.style.padding = "10px";
})

// Example 4

document.getElementById("addNewItem").addEventListener("click", function () {
    let newItem = document.createElement("li");
    newItem.textContent = "Eggs";

    document.getElementById("shoppingList").appendChild(newItem);
})

// Example 5
document.getElementById("removeListTask").addEventListener("click", function () {
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
})

// Example 6 

document.getElementById("clickMeButton").addEventListener("click", function () {
    alert("Tech Code_");
})

// Example 7

document.getElementById("teaList").addEventListener("click", function(event){
    if (event.target && event.target.matches(".teaItem")){
        alert("🧑‍💻You selected: " + event.target.textContent);
    }
})

// Exaple 8

document.getElementById("feedbackForm").addEventListener("submit", function(event){
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);

    document.getElementById("feedbackDisplay").textContent = `Feedback is: ${feedback}`;
});

// Example 9

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("domStatus").textContent = "DOM fully loaded";
});

document.getElementById("toggleHighlight").addEventListener("click", function(){
    let descriptionText = document.getElementById("descriptionText");
    let changeColor = descriptionText.style.backgroundColor = "yellow";
    descriptionText.classList.toggle(changeColor);
})