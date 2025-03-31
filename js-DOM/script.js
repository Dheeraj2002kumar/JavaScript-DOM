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