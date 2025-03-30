### **JavaScript DOM & BOM – Complete Guide for Projects & Interviews**  

The **Document Object Model (DOM)** and **Browser Object Model (BOM)** are essential in JavaScript for interacting with web pages and the browser itself. Understanding these concepts is **crucial for frontend development** and **commonly asked in interviews**.  

---

## **1️⃣ What is the DOM (Document Object Model)?**  
### **Definition:**  
The **DOM** is a programming interface that represents an HTML document as a tree structure. It allows JavaScript to manipulate HTML elements dynamically.  

### **Why is DOM Important?**  
- Allows JavaScript to **read, modify, and update** web pages dynamically.  
- Enables **event handling** (e.g., clicks, inputs, form submissions).  
- Helps create **interactive and dynamic** web applications.  

### **DOM Structure:**  
A simple HTML page:  
```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Example</title>
</head>
<body>
    <h1 id="title">Hello, DOM!</h1>
    <p class="description">This is a paragraph.</p>
    <button onclick="changeText()">Click Me</button>
</body>
</html>
```
The **DOM tree** represents the structure like this:  
```
Document
 ├── <html>
 │   ├── <head>
 │   │   ├── <title>DOM Example</title>
 │   ├── <body>
 │       ├── <h1 id="title">Hello, DOM!</h1>
 │       ├── <p class="description">This is a paragraph.</p>
 │       ├── <button onclick="changeText()">Click Me</button>
```

---

## **2️⃣ How to Access and Manipulate the DOM in JavaScript?**  
### **1. Selecting Elements**  
#### **Methods to Select Elements**  
| Method | Description | Example |
|---------|------------|----------|
| `document.getElementById(id)` | Selects an element by its `id` | `document.getElementById("title")` |
| `document.getElementsByClassName(className)` | Returns a collection of elements with the same class | `document.getElementsByClassName("description")[0]` |
| `document.getElementsByTagName(tagName)` | Returns all elements with the specified tag | `document.getElementsByTagName("p")` |
| `document.querySelector(cssSelector)` | Selects the **first** matching element | `document.querySelector("#title")` |
| `document.querySelectorAll(cssSelector)` | Selects **all** matching elements (NodeList) | `document.querySelectorAll("p")` |

✅ **Example: Changing Text with JavaScript**  
```js
function changeText() {
    document.getElementById("title").innerText = "DOM Updated!";
}
```

---

### **2. Changing Content**  
| Property | Description | Example |
|-----------|------------|---------|
| `innerHTML` | Changes the **HTML content** of an element | `element.innerHTML = "<strong>New Content</strong>";` |
| `innerText` | Changes the **text content** of an element | `element.innerText = "New Text";` |
| `textContent` | Similar to `innerText`, but includes hidden elements | `element.textContent = "New Text";` |

✅ **Example: Update Content Dynamically**  
```js
document.getElementById("title").innerText = "Welcome to JavaScript DOM!";
```

---

### **3. Changing Attributes**  
| Method | Description | Example |
|---------|------------|---------|
| `setAttribute(name, value)` | Sets an attribute | `element.setAttribute("class", "new-class")` |
| `getAttribute(name)` | Gets an attribute value | `element.getAttribute("class")` |
| `removeAttribute(name)` | Removes an attribute | `element.removeAttribute("class")` |

✅ **Example: Change Image Source**  
```js
document.querySelector("img").setAttribute("src", "new-image.jpg");
```

---

### **4. Changing Styles**  
| Property | Description | Example |
|---------|------------|---------|
| `style.property` | Changes an element's style | `element.style.color = "red";` |
| `classList.add("class")` | Adds a class to an element | `element.classList.add("active")` |
| `classList.remove("class")` | Removes a class | `element.classList.remove("active")` |
| `classList.toggle("class")` | Toggles a class | `element.classList.toggle("dark-mode")` |

✅ **Example: Dark Mode Toggle**  
```js
document.body.classList.toggle("dark-mode");
```

---

## **3️⃣ Handling Events in DOM**  
| Event Type | Description | Example |
|------------|------------|---------|
| `click` | Triggered when an element is clicked | `element.addEventListener("click", function)` |
| `mouseover` | Triggered when the mouse enters an element | `element.addEventListener("mouseover", function)` |
| `keydown` | Triggered when a key is pressed | `element.addEventListener("keydown", function)` |

✅ **Example: Add Event Listener**  
```js
document.getElementById("title").addEventListener("click", function() {
    alert("Title Clicked!");
});
```

---

## **4️⃣ What is the BOM (Browser Object Model)?**  
### **Definition:**  
The **Browser Object Model (BOM)** allows JavaScript to interact with the browser (not just the webpage). It includes objects like `window`, `navigator`, `location`, `history`, and `screen`.  

### **1. The `window` Object**  
The `window` object is the **global object** representing the browser window.  
```js
console.log(window.innerWidth); // Browser width
console.log(window.innerHeight); // Browser height
```

### **2. The `navigator` Object** (Detect Browser Info)  
```js
console.log(navigator.userAgent);  // Get browser details
console.log(navigator.language);   // Get user's language
```

### **3. The `location` Object** (Get & Change URL)  
```js
console.log(location.href); // Get current URL
// location.href = "https://google.com"; // Redirect to another page
```

### **4. The `history` Object** (Navigation History)  
```js
history.back();  // Go to the previous page
history.forward(); // Go to the next page
```

### **5. The `screen` Object** (Get Screen Size)  
```js
console.log(screen.width); // Screen width
console.log(screen.height); // Screen height
```

---

## **5️⃣ Interview Questions & Answers on DOM & BOM**  
### **Q1: What is the difference between `innerText`, `textContent`, and `innerHTML`?**  
✅ **Answer:**  
- `innerText` → Gets/sets text **visible** on the page.  
- `textContent` → Gets/sets all text, including hidden elements.  
- `innerHTML` → Gets/sets text **including** HTML tags.  

### **Q2: What are the different ways to select elements in the DOM?**  
✅ **Answer:**  
- `document.getElementById(id)`  
- `document.getElementsByClassName(className)`  
- `document.querySelector(cssSelector)`  
- `document.querySelectorAll(cssSelector)`

### **Q3: How do you dynamically create and append an element to the DOM?**  
✅ **Example:**  
```js
let newElement = document.createElement("div");
newElement.innerText = "New Element";
document.body.appendChild(newElement);
```

---

## **Conclusion**  
### **DOM** → Controls the webpage structure (HTML elements).  
### **BOM** → Controls the browser behavior (window, location, history).  

Mastering **DOM & BOM** will help you build interactive websites and **ace JavaScript interviews**! 🚀 