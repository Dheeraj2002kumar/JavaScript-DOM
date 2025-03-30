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

---

Awesome! Here are some **hands-on coding challenges** related to **DOM (Document Object Model) and BOM (Browser Object Model)** that will help you master these concepts for interviews and real-world projects.  

---

## 🔥 **DOM Coding Challenges**  

### **1️⃣ Create and Append Elements Dynamically**  
**Task:** Write a JavaScript function that creates a `<div>` element with some text and appends it to the `<body>` when a button is clicked.  

```html
<button id="addDivBtn">Add Div</button>
<script>
  document.getElementById("addDivBtn").addEventListener("click", function () {
    let newDiv = document.createElement("div");
    newDiv.textContent = "Hello, I was added dynamically!";
    newDiv.style.backgroundColor = "lightblue";
    document.body.appendChild(newDiv);
  });
</script>
```
✅ **Interview Tip:** This demonstrates how to manipulate the DOM dynamically.  

---

### **2️⃣ Toggle Visibility of an Element**  
**Task:** Create a button that hides and shows a paragraph when clicked.  

```html
<button id="toggleBtn">Show/Hide</button>
<p id="toggleText">This is a toggle paragraph.</p>

<script>
  document.getElementById("toggleBtn").addEventListener("click", function () {
    let para = document.getElementById("toggleText");
    para.style.display = para.style.display === "none" ? "block" : "none";
  });
</script>
```
✅ **Interview Tip:** Understanding `style.display` is key for DOM manipulation.  

---

### **3️⃣ Update Text Content in Real-Time**  
**Task:** Create an input field where users type, and the text updates live below it.  

```html
<input type="text" id="userInput" placeholder="Type something..." />
<p id="outputText">You typed: </p>

<script>
  document.getElementById("userInput").addEventListener("input", function () {
    document.getElementById("outputText").textContent = "You typed: " + this.value;
  });
</script>
```
✅ **Interview Tip:** This demonstrates event listeners and dynamic text updating.  

---

### **4️⃣ Change Background Color on Button Click**  
**Task:** Create buttons that change the page’s background color when clicked.  

```html
<button onclick="changeColor('red')">Red</button>
<button onclick="changeColor('blue')">Blue</button>

<script>
  function changeColor(color) {
    document.body.style.backgroundColor = color;
  }
</script>
```
✅ **Interview Tip:** Shows how to modify CSS properties dynamically.  

---

## 🌍 **BOM (Browser Object Model) Coding Challenges**  

### **5️⃣ Get Window Dimensions**  
**Task:** Display the width and height of the browser window dynamically.  

```html
<p id="sizeDisplay"></p>

<script>
  function updateSize() {
    document.getElementById("sizeDisplay").textContent =
      `Width: ${window.innerWidth}, Height: ${window.innerHeight}`;
  }

  window.addEventListener("resize", updateSize);
  updateSize();
</script>
```
✅ **Interview Tip:** Shows how to handle `window` object properties and events.  

---

### **6️⃣ Redirect to Another Page After a Countdown**  
**Task:** Display a countdown timer, then redirect to another page after 5 seconds.  

```html
<p id="countdown">Redirecting in 5 seconds...</p>

<script>
  let count = 5;
  let interval = setInterval(() => {
    document.getElementById("countdown").textContent = `Redirecting in ${count} seconds...`;
    count--;
    if (count < 0) {
      clearInterval(interval);
      window.location.href = "https://www.google.com";
    }
  }, 1000);
</script>
```
✅ **Interview Tip:** Demonstrates `setInterval` and `window.location`.  

---

### **7️⃣ Open and Close a New Window**  
**Task:** Create buttons to open and close a new window.  

```html
<button onclick="openNewWindow()">Open Window</button>
<button onclick="closeNewWindow()">Close Window</button>

<script>
  let myWindow;

  function openNewWindow() {
    myWindow = window.open("https://www.google.com", "_blank", "width=400,height=300");
  }

  function closeNewWindow() {
    if (myWindow) myWindow.close();
  }
</script>
```
✅ **Interview Tip:** Tests `window.open()` and `window.close()`.  

---

### **8️⃣ Detect User’s Browser and OS**  
**Task:** Display the user’s browser name and OS.  

```html
<p id="browserInfo"></p>

<script>
  let browser = navigator.userAgent;
  document.getElementById("browserInfo").textContent = `Your browser info: ${browser}`;
</script>
```
✅ **Interview Tip:** Demonstrates the `navigator` object in BOM.  

---

## 🎯 **Next Steps**  
- **Try modifying these challenges** (e.g., add animations or more features).  
- **Practice explaining the code aloud**, just like in an interview.  
- **Ask me for mock interview questions** if you want a challenge!  

Would you like **more advanced DOM/BOM tasks**, or should we go for **mock interview Q&A** next? 🚀

---
### **1️⃣ What is the DOM? How does JavaScript interact with it?**  

#### **What is the DOM?**  
- **DOM (Document Object Model)** is a programming interface that represents an HTML or XML document as a **tree-like structure** where each element is a **node**.  
- It allows JavaScript to **access, modify, and manipulate** web pages dynamically.  

#### **How does JavaScript interact with the DOM?**  
JavaScript provides various methods to interact with the DOM:  

1. **Selecting Elements:**  
   - `document.getElementById('id')` → Selects an element by ID.  
   - `document.getElementsByClassName('class')` → Selects elements by class.  
   - `document.querySelector('.selector')` → Selects the first matching element.  
   - `document.querySelectorAll('.selector')` → Selects all matching elements.  

2. **Modifying Elements:**  
   - `element.innerHTML = "New content"` → Changes HTML inside an element.  
   - `element.textContent = "Text"` → Changes only text content.  
   - `element.style.color = "red"` → Changes CSS styles dynamically.  

3. **Adding/Removing Elements:**  
   - `document.createElement('div')` → Creates a new element.  
   - `parent.appendChild(child)` → Adds an element inside another.  
   - `element.remove()` → Removes an element from the DOM.  

4. **Handling Events:**  
   - `element.addEventListener('click', function(){ ... })` → Executes a function when an event occurs.  

#### **Example Code:**  
```javascript
// Select an element by ID
let heading = document.getElementById('title');

// Modify text content
heading.textContent = "Welcome to JavaScript DOM!";

// Change style dynamically
heading.style.color = "blue";

// Add an event listener
heading.addEventListener('click', function() {
    alert("Heading Clicked!");
});
```

---

### ✅ **Interview Tip:**  
- Keep your explanation **clear and concise**.  
- Mention that the DOM **updates dynamically** when JavaScript manipulates it.  
- Be ready to write a **small code snippet** like the one above!  

---

Would you like to proceed with **Question 2: Difference between `innerHTML`, `textContent`, and `innerText`?** 🚀

---

### **2️⃣ Difference between `innerHTML`, `textContent`, and `innerText`**  

#### **1. `innerHTML`**  
- Retrieves or sets **HTML content** inside an element.  
- Parses and renders HTML tags inside the element.  
- **Vulnerable to XSS (Cross-Site Scripting) attacks** if handling user input.  

✅ **Example:**  
```html
<div id="demo">Hello <b>World</b></div>
<script>
    let element = document.getElementById('demo');
    console.log(element.innerHTML); // Output: Hello <b>World</b>
    element.innerHTML = "<h2>New Heading</h2>"; // Changes content
</script>
```
---

#### **2. `textContent`**  
- Retrieves or sets **only text content** of an element.  
- Ignores HTML tags and returns only raw text.  
- **Safer** than `innerHTML` as it prevents script injection.  

✅ **Example:**  
```html
<div id="demo">Hello <b>World</b></div>
<script>
    let element = document.getElementById('demo');
    console.log(element.textContent); // Output: Hello World
    element.textContent = "<h2>New Heading</h2>"; // Displays as plain text
</script>
```
---

#### **3. `innerText` (Similar to `textContent` with a key difference)**  
- Retrieves **only visible text**, ignoring hidden elements (e.g., `display: none`).  
- Ignores HTML but respects CSS styling.  

✅ **Example:**  
```html
<div id="demo" style="display:none">Hello <b>World</b></div>
<script>
    let element = document.getElementById('demo');
    console.log(element.textContent); // Output: Hello World (even if hidden)
    console.log(element.innerText);   // Output: (empty because it's hidden)
</script>
```
---

### **🚀 Key Differences Summary:**  

| Property     | Reads HTML? | Reads Hidden Text? | Safer from XSS? |
|-------------|------------|-------------------|-----------------|
| `innerHTML` | ✅ Yes      | ✅ Yes            | ❌ No (Unsafe)  |
| `textContent` | ❌ No   | ✅ Yes            | ✅ Yes (Safe)   |
| `innerText`  | ❌ No      | ❌ No             | ✅ Yes (Safe)   |

---

### **✅ Interview Tip:**  
- Mention that `innerHTML` is **powerful but risky** (XSS attacks).  
- Use `textContent` when you need **safe plain text manipulation**.  
- Use `innerText` when you need **only visible text**.  

---

Would you like to continue with **Question 3: What is the BOM (Browser Object Model)?** 🚀

---

## **3️⃣ What is the BOM (Browser Object Model)?**  

### **🟢 Definition:**  
The **Browser Object Model (BOM)** is a set of JavaScript objects that interact with the browser (outside the webpage content). It allows developers to control browser behavior like opening new tabs, navigating pages, and managing browser properties.  

Unlike the **DOM (Document Object Model),** which deals with **HTML elements**, the BOM interacts with the **browser itself**.

---

### **🟢 Key Components of BOM:**
#### 1️⃣ **`window` Object (Global Object)**  
- The `window` object is the top-level object in JavaScript, representing the browser window.  
- All global JavaScript functions and variables belong to `window`.  

✅ **Example:**  
```javascript
console.log(window.innerWidth); // Get the viewport width
console.log(window.innerHeight); // Get the viewport height
```

---

#### 2️⃣ **`navigator` Object (Browser Info)**  
- Provides details about the browser, OS, and user agent.  

✅ **Example:**  
```javascript
console.log(navigator.userAgent); // Get browser details
console.log(navigator.language); // Get browser language
console.log(navigator.platform); // Get OS platform
```

---

#### 3️⃣ **`location` Object (URL & Navigation Control)**  
- Provides details about the current URL and allows redirection.  

✅ **Example:**  
```javascript
console.log(location.href); // Get the full URL
console.log(location.hostname); // Get the domain name
console.log(location.pathname); // Get the current page path
location.reload(); // Reload the page
// location.href = "https://www.google.com"; // Redirect to another site
```

---

#### 4️⃣ **`history` Object (Back & Forward Navigation)**  
- Controls the browser’s history.  

✅ **Example:**  
```javascript
history.back(); // Go back one page
history.forward(); // Go forward one page
console.log(history.length); // Get the number of pages in history
```

---

#### 5️⃣ **`screen` Object (Screen Resolution Info)**  
- Provides screen size and resolution details.  

✅ **Example:**  
```javascript
console.log(screen.width); // Get screen width
console.log(screen.height); // Get screen height
console.log(screen.availWidth); // Get available width (excluding UI elements)
console.log(screen.availHeight); // Get available height
```

---

#### 6️⃣ **`alert()`, `confirm()`, and `prompt()` (User Interaction)**  
- `alert()`: Displays a message box.  
- `confirm()`: Asks the user for confirmation (OK/Cancel).  
- `prompt()`: Gets user input.  

✅ **Example:**  
```javascript
alert("Hello! Welcome to the website.");
let userResponse = confirm("Do you want to continue?");
let userName = prompt("Enter your name:", "Guest");
console.log(userResponse, userName);
```

---

### **🟢 BOM vs DOM**
| Feature | BOM | DOM |
|---------|----|----|
| Purpose | Interacts with the **browser** (e.g., URL, history, screen) | Interacts with **HTML elements** |
| Object | `window`, `navigator`, `location`, `history`, `screen` | `document` |
| Control | Controls **browser behavior** | Controls **webpage content** |

---

### **✅ Interview Tip:**  
- Clearly differentiate **BOM (browser operations)** from **DOM (HTML manipulation)**.  
- Mention that **BOM has no official standard**, but most browsers implement similar features.  
- Use real-world examples like redirecting users (`location.href`) or getting browser details (`navigator.userAgent`).  

---

Would you like to continue with **Question 4: What is the `document` object in JavaScript (DOM)?** 🚀

---

## **4️⃣ What is the `document` object in JavaScript (DOM)?**  

### **🟢 Definition:**  
The `document` object is part of the **DOM (Document Object Model)** and represents the entire HTML page. It allows JavaScript to **access, manipulate, and modify** HTML elements dynamically.  

The `document` object is a child of the `window` object:  
```javascript
console.log(window.document); // Outputs the entire HTML document
```

---

## **🟢 Key Properties of the `document` Object**
### **1️⃣ `document.title` (Get/Set Page Title)**
✅ **Example:**  
```javascript
console.log(document.title); // Get the title
document.title = "New Title"; // Change the title dynamically
```

---

### **2️⃣ `document.URL` (Get Current Page URL)**
✅ **Example:**  
```javascript
console.log(document.URL); // Outputs the full URL of the webpage
```

---

### **3️⃣ `document.body` & `document.head` (Access Body & Head Elements)**
✅ **Example:**  
```javascript
console.log(document.body); // Access the <body> tag
console.log(document.head); // Access the <head> tag
```

---

## **🟢 Methods to Select HTML Elements**
### **1️⃣ `document.getElementById()`** (Select by `id`)  
✅ **Example:**  
```javascript
let heading = document.getElementById("myHeading");
console.log(heading.innerText); // Get text of the element
heading.style.color = "blue"; // Change text color
```
🔹 *Best for unique elements like `<h1 id="myHeading">Hello</h1>`.*

---

### **2️⃣ `document.getElementsByClassName()`** (Select by `class`)  
✅ **Example:**  
```javascript
let elements = document.getElementsByClassName("myClass");
console.log(elements[0].innerText); // Access first element
```
🔹 *Returns an HTMLCollection (array-like) of matching elements.*

---

### **3️⃣ `document.getElementsByTagName()`** (Select by `tag name`)  
✅ **Example:**  
```javascript
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs[0].innerText); // Access first paragraph
```
🔹 *Returns all elements of a specific tag, like `<p>`.*

---

### **4️⃣ `document.querySelector()` & `document.querySelectorAll()`**  
✅ **Example:**  
```javascript
let firstDiv = document.querySelector("div"); // Selects the first matching <div>
let allDivs = document.querySelectorAll("div"); // Selects all <div> elements
console.log(allDivs.length); // Number of <div> elements
```
🔹 *Supports CSS selectors like `#id`, `.class`, `tagname`.*

---

## **🟢 Modifying HTML Content**
### **1️⃣ Change Text with `.innerText` and `.innerHTML`**  
✅ **Example:**  
```javascript
let myElement = document.getElementById("demo");
myElement.innerText = "New Text"; // Change text content
myElement.innerHTML = "<strong>Bold Text</strong>"; // Change with HTML tags
```

---

### **2️⃣ Change Attributes with `.setAttribute()`**
✅ **Example:**  
```javascript
let img = document.getElementById("myImage");
img.setAttribute("src", "new-image.jpg"); // Change image source
img.setAttribute("alt", "New Image Description"); // Change alt text
```

---

### **3️⃣ Change CSS with `.style`**
✅ **Example:**  
```javascript
let btn = document.getElementById("myButton");
btn.style.backgroundColor = "red"; // Change button color
btn.style.fontSize = "20px"; // Change text size
```

---

## **🟢 Creating & Deleting Elements**
### **1️⃣ Create a New Element (`document.createElement()`)**
✅ **Example:**  
```javascript
let newPara = document.createElement("p");
newPara.innerText = "This is a new paragraph!";
document.body.appendChild(newPara); // Add to the document
```

---

### **2️⃣ Remove an Element (`element.remove()`)**
✅ **Example:**  
```javascript
let unwantedDiv = document.getElementById("deleteMe");
unwantedDiv.remove(); // Remove the element from the DOM
```

---

## **🟢 Event Handling with the `document` Object**
✅ **Example:**  
```javascript
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button Clicked!");
});
```
🔹 *Adds a click event listener to a button.*

---

## **🟢 DOM vs BOM**
| Feature | DOM (`document`) | BOM (`window`) |
|---------|----------------|----------------|
| Purpose | Manipulates **HTML elements** | Controls **browser features** |
| Example | `document.getElementById()` | `window.alert()` |
| Scope | Focuses on webpage content | Focuses on browser behavior |

---

## **✅ Interview Tip:**
- **Explain that the `document` object is the entry point to DOM manipulation.**
- **Mention common use cases like modifying content, handling events, and changing styles dynamically.**
- **Use real-world examples like dynamically updating a webpage or creating interactive UI elements.**

---

Would you like to continue with **Question 5: How does the Event Loop work in JavaScript?** 🚀

---

## **5️⃣ How Does the Event Loop Work in JavaScript?**  

### **🟢 Why Do We Need the Event Loop?**  
JavaScript is **single-threaded**, meaning it can execute only one task at a time. However, modern web applications require **asynchronous operations** like API calls, timers, and user interactions without blocking the main thread.  

The **event loop** ensures that JavaScript can handle asynchronous operations efficiently without freezing the UI.  

---

## **🟢 Event Loop Explained with Call Stack & Task Queues**
JavaScript’s event loop manages execution using three main components:

1️⃣ **Call Stack**: Keeps track of function execution in LIFO (Last In, First Out) order.  
2️⃣ **Web APIs**: Handles async tasks (e.g., setTimeout, fetch, event listeners).  
3️⃣ **Task Queues**:
   - **Callback Queue (Macrotask Queue)**: Stores setTimeout, setInterval, event handlers, etc.  
   - **Microtask Queue**: Stores Promises, `process.nextTick` (executed before macrotasks).  

The **event loop** continuously checks whether the call stack is empty. If it is, it pushes tasks from the queue into the call stack.

---

## **🟢 How JavaScript Handles Asynchronous Code**
### **Example: setTimeout & Promise Execution Order**
```javascript
console.log("Start");

setTimeout(() => {
    console.log("setTimeout Callback");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise Callback");
});

console.log("End");
```

### **🟢 Execution Order:**
1️⃣ `"Start"` → Logged immediately (synchronous).  
2️⃣ `"End"` → Logged immediately (synchronous).  
3️⃣ `"Promise Callback"` → Logged next (microtask executes before macrotask).  
4️⃣ `"setTimeout Callback"` → Logged last (macrotask executes after microtasks).  

### **🟢 Output:**
```
Start
End
Promise Callback
setTimeout Callback
```

---

## **🟢 Priority of Tasks in the Event Loop**
| Priority | Task Type | Examples |
|----------|----------|----------|
| **1️⃣ First** | **Synchronous Code** | Regular function calls, loops, variable assignments |
| **2️⃣ Second** | **Microtasks (Higher Priority)** | Promises (`.then()`), `process.nextTick()` (Node.js) |
| **3️⃣ Third** | **Macrotasks (Lower Priority)** | setTimeout, setInterval, setImmediate, I/O operations |

---

## **🟢 Interview Tip**
- **Explain that the event loop enables non-blocking, asynchronous execution.**
- **Mention that microtasks (Promises) run before macrotasks (setTimeout).**
- **Use a real-world example like handling API responses in a web app.**

---

Would you like to continue with **Question 6: What is the difference between synchronous and asynchronous JavaScript?** 🚀

---

## **6️⃣ What is the Difference Between Synchronous and Asynchronous JavaScript?**  

### **🟢 Why is This Important?**  
JavaScript is **single-threaded**, meaning it executes one operation at a time. However, modern applications require handling multiple tasks, like API requests and timers, without blocking execution. This is where **synchronous** and **asynchronous** execution comes into play.  

---

## **🟢 Synchronous JavaScript**
### **Definition:**
- Synchronous code executes **line by line, in order**.
- Each operation **blocks the execution** of the next operation until it completes.

### **Example:**
```javascript
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
```

### **🟢 Output:**
```
Task 1
Task 2
Task 3
```
- Each statement executes sequentially.
- If one task takes time (e.g., a heavy calculation), the entire execution **pauses** until it's done.

### **🚨 Problem with Synchronous Execution:**
- If one task takes too long, **the UI freezes** in web applications.
- The user experience becomes poor.

---

## **🟢 Asynchronous JavaScript**
### **Definition:**
- Asynchronous code allows execution **to continue without waiting** for a task to complete.
- JavaScript uses the **Event Loop**, **Callbacks**, **Promises**, and **Async/Await** to handle async operations.

### **Example: setTimeout (Asynchronous)**
```javascript
console.log("Task 1");

setTimeout(() => {
    console.log("Task 2");
}, 2000);

console.log("Task 3");
```

### **🟢 Output:**
```
Task 1
Task 3
Task 2 (after 2 seconds)
```
- `setTimeout` is non-blocking, so JavaScript **does not wait** for it to finish before moving to the next task.
- This keeps the program **responsive**.

---

## **🟢 Key Differences Between Synchronous and Asynchronous JavaScript**
| Feature | Synchronous | Asynchronous |
|---------|------------|-------------|
| **Execution Order** | One operation at a time, sequential | Can execute multiple tasks simultaneously |
| **Blocking Behavior** | Blocks execution until the current task is finished | Non-blocking, allows other tasks to run |
| **Performance** | Can slow down the program if a task takes too long | Efficient and responsive |
| **Examples** | Normal function calls, loops, DOM updates | API calls, Timers, Promises, Fetch, Async/Await |

---

## **🟢 Interview Tip**
- **Explain the problem with synchronous execution (blocking UI).**
- **Mention how async code helps with real-world tasks like fetching data from an API.**
- **Use `setTimeout` or a simple `fetch` example to demonstrate async execution.**

---

Would you like to continue with **Question 7: Explain Callbacks, Promises, and Async/Await in JavaScript?** 🚀

---

## **7️⃣ Explain Callbacks, Promises, and Async/Await in JavaScript**  

### **🟢 Why is This Important?**  
JavaScript is **asynchronous** and uses **non-blocking** execution to handle tasks like **fetching data from APIs, reading files, or setting timers**.  

To manage async operations, JavaScript provides three main techniques:  
1️⃣ **Callbacks** (Old way)  
2️⃣ **Promises** (Modern way)  
3️⃣ **Async/Await** (Best way for readability)  

---

## **🟢 1️⃣ Callbacks (The Old Way)**
### **Definition:**  
- A **callback function** is a function passed as an argument to another function, which gets executed later.  
- It helps in **handling async operations** like API calls, but can lead to **"callback hell"** (nested callbacks).

### **Example: Callback Function**
```javascript
function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 2000);
}

fetchData((data) => {
    console.log(data);  // Output after 2 seconds: "Data received"
});
```
🔹 **Problem:** Callbacks get **deeply nested**, making code **hard to read** and **maintain**.

---

## **🟢 2️⃣ Promises (ES6 - Modern Approach)**
### **Definition:**
- A **Promise** is an object that represents a value which may be available **now, later, or never**.  
- It has **three states:**
  - **Pending** → Initial state, operation not completed yet  
  - **Resolved (Fulfilled)** → Operation completed successfully  
  - **Rejected** → Operation failed  

### **Example: Using a Promise**
```javascript
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

fetchData()
    .then((data) => console.log(data))  // Output after 2 seconds: "Data received"
    .catch((error) => console.log(error));
```
✅ **Advantage:** **No deep nesting, better readability** than callbacks.  

---

## **🟢 3️⃣ Async/Await (ES7 - Best Approach)**
### **Definition:**
- **async** → Declares a function that returns a **Promise**.  
- **await** → Pauses execution until the Promise **resolves**.  
- **Async/Await makes code look synchronous and more readable.**  

### **Example: Using Async/Await**
```javascript
async function fetchData() {
    return "Data received"; // Returns a resolved Promise
}

async function getData() {
    const data = await fetchData();
    console.log(data);  // Output: "Data received"
}

getData();
```
✅ **Advantage:** **Best readability, avoids promise chaining.**

---

## **🟢 Comparison: Callbacks vs. Promises vs. Async/Await**
| Feature       | Callbacks  | Promises  | Async/Await  |
|--------------|-----------|-----------|-------------|
| **Readability** | Hard to read | Better | Best |
| **Error Handling** | Difficult | `.catch()` | `try/catch` |
| **Chaining** | Callback Hell | `.then()` chaining | Easy, looks synchronous |
| **Best Use Case** | Older codebases | API calls, async tasks | Modern applications |

---

## **🟢 Interview Tip**
- First, explain **why async handling is needed** in JavaScript.  
- Use **a simple real-world analogy** (e.g., ordering food in a restaurant while waiting for a table).  
- Show **how each method improves upon the previous one**.  
- **Use an example** with API fetching (`fetch` or `setTimeout`).  

---

Would you like to continue with **Question 8: Explain JavaScript DOM and BOM?** 🚀

---

## **8️⃣ Explain JavaScript DOM and BOM in Detail**  

### **🔹 Why is This Important?**  
JavaScript interacts with the webpage using **DOM (Document Object Model)** and **BOM (Browser Object Model)**. These concepts are crucial for **manipulating web pages dynamically** and are commonly asked in interviews.

---

## **🟢 1️⃣ What is DOM (Document Object Model)?**  
- The **DOM is a tree-like representation** of the HTML document.  
- JavaScript can **access, modify, add, and delete elements** in the DOM.  
- **Every HTML element becomes a node** in the DOM.  

### **🟡 Example of an HTML Structure**
```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Example</title>
</head>
<body>
    <h1 id="heading">Hello, DOM!</h1>
    <p class="text">This is a paragraph.</p>
    <button onclick="changeText()">Click Me</button>

    <script>
        function changeText() {
            document.getElementById("heading").innerText = "DOM Manipulated!";
        }
    </script>
</body>
</html>
```
✅ **When the button is clicked, the text of `<h1>` changes dynamically!**  

---

### **🟢 2️⃣ Important DOM Methods**
| Method | Description |
|--------|------------|
| `document.getElementById(id)` | Selects an element by its `id`. |
| `document.getElementsByClassName(className)` | Selects elements by class name. |
| `document.getElementsByTagName(tagName)` | Selects elements by tag name. |
| `document.querySelector(selector)` | Selects the first element that matches the CSS selector. |
| `document.querySelectorAll(selector)` | Selects all elements that match the CSS selector. |
| `element.innerHTML` | Gets or sets the HTML inside an element. |
| `element.innerText` | Gets or sets only the text inside an element. |
| `element.style.property` | Changes CSS properties dynamically. |
| `element.setAttribute(attr, value)` | Adds or modifies an attribute. |
| `element.removeAttribute(attr)` | Removes an attribute. |

---

### **🟢 3️⃣ What is BOM (Browser Object Model)?**
- The **BOM represents the browser itself**, allowing JavaScript to interact with **window, location, history, and navigator**.
- It enables **control over browser functionality** (e.g., opening new tabs, getting the URL, and controlling browser history).

---

### **🟡 Key BOM Objects**
| Object | Description |
|--------|------------|
| `window` | The global object that represents the browser window. |
| `document` | Represents the HTML document (part of DOM but accessible via BOM). |
| `location` | Gets or sets the URL of the current page. |
| `history` | Allows navigation through the browser’s history. |
| `navigator` | Provides information about the browser and device. |

---

### **🟢 4️⃣ Important BOM Methods**
| Method | Description |
|--------|------------|
| `window.alert("Hello")` | Shows an alert box. |
| `window.confirm("Are you sure?")` | Displays a confirmation box (OK/Cancel). |
| `window.prompt("Enter your name")` | Asks for user input. |
| `window.open(url, target)` | Opens a new window/tab. |
| `window.close()` | Closes the current window. |
| `window.setTimeout(func, ms)` | Runs a function after a delay. |
| `window.setInterval(func, ms)` | Repeats a function at intervals. |
| `console.log("Debug message")` | Prints messages in the console. |

---

### **🟢 5️⃣ Example: Using BOM Methods**
```javascript
// Alert, Confirm, and Prompt
alert("Welcome to the website!");  
let confirmation = confirm("Do you want to proceed?");
let name = prompt("Enter your name:");

// Open a new tab
window.open("https://google.com", "_blank");

// Get Current URL
console.log("Current URL:", window.location.href);

// Reload the page
window.location.reload();
```
---

## **🟢 6️⃣ DOM vs. BOM Comparison**
| Feature | DOM (Document Object Model) | BOM (Browser Object Model) |
|---------|-----------------------------|-----------------------------|
| Definition | Represents the HTML structure | Represents the browser itself |
| Interaction | Allows JavaScript to manipulate webpage elements | Allows JavaScript to control browser features |
| Example | `document.getElementById("id")` | `window.alert("Hello!")` |
| Focus | Handles **HTML elements** | Handles **browser behavior** |

---

## **🟢 7️⃣ Interview Tip**
- Explain **DOM as the structure of a webpage** and **BOM as the browser functionalities**.
- Give a **real-world analogy**:  
  🔹 **DOM = The blueprint of a house (HTML structure)**  
  🔹 **BOM = The house control panel (window, location, history)**  
- Show practical **examples** like dynamically changing text (`innerText`), opening a new tab (`window.open`), or getting the URL (`window.location.href`).  

---

Would you like to continue with **Question 9: Explain JavaScript Events and Event Listeners?** 🚀

---

## **9️⃣ JavaScript Events and Event Listeners**  

### **🔹 Why is This Important?**  
Events and event listeners allow JavaScript to respond to user interactions, making web applications dynamic and interactive. They are a crucial concept in frontend development and a common interview topic.

---

## **🟢 1️⃣ What is an Event in JavaScript?**  
An **event** is an action or occurrence detected by JavaScript, such as:  
✅ Clicking a button (`click`)  
✅ Typing in an input field (`input`)  
✅ Hovering over an element (`mouseover`)  
✅ Submitting a form (`submit`)  

---

## **🟢 2️⃣ What is an Event Listener?**  
An **event listener** is a function that waits for a specific event to occur on an element and executes code in response.

### **🟡 Example: Adding an Event Listener**
```html
<button id="btn">Click Me</button>

<script>
    document.getElementById("btn").addEventListener("click", function() {
        alert("Button Clicked!");
    });
</script>
```
✅ When the button is clicked, an alert box appears.  

---

## **🟢 3️⃣ Ways to Handle Events in JavaScript**
### **1️⃣ Inline Event Handler (Not Recommended)**
```html
<button onclick="alert('Clicked!')">Click Me</button>
```
🚨 **Downside:** Makes the HTML messy and harder to maintain.  

---

### **2️⃣ JavaScript Property Event Handler**
```html
<button id="btn">Click Me</button>

<script>
    document.getElementById("btn").onclick = function() {
        alert("Clicked!");
    };
</script>
```
🚨 **Downside:** Only **one** event handler can be assigned per element.  

---

### **3️⃣ addEventListener (Recommended)**
```javascript
document.getElementById("btn").addEventListener("click", function() {
    alert("Clicked using addEventListener!");
});
```
✅ **Allows multiple event listeners on the same element.**  
✅ **More flexible and maintainable.**  

---

## **🟢 4️⃣ Commonly Used JavaScript Events**
| Event | Description |
|-------|-------------|
| `click` | Fires when an element is clicked. |
| `mouseover` | Fires when the mouse enters an element. |
| `mouseout` | Fires when the mouse leaves an element. |
| `keydown` | Fires when a key is pressed. |
| `keyup` | Fires when a key is released. |
| `change` | Fires when an input value changes. |
| `submit` | Fires when a form is submitted. |
| `load` | Fires when a page or image loads. |

---

## **🟢 5️⃣ Event Object (`event`)**
The event object provides **details about the event** that occurred.  

### **🟡 Example: Using `event` Object**
```javascript
document.getElementById("btn").addEventListener("click", function(event) {
    console.log("Event Type:", event.type);
    console.log("Target Element:", event.target);
});
```
✅ **`event.type`** → Shows the type of event (e.g., "click")  
✅ **`event.target`** → Returns the element that triggered the event  

---

## **🟢 6️⃣ Event Propagation (Bubbling vs. Capturing)**
### **🟡 Bubbling (Default)**
- The event **starts from the target element and moves up** to the parent elements.  
- Happens **by default** in JavaScript.

### **🟡 Capturing (Trickling Down)**
- The event **starts from the root element and moves down** to the target.  
- Enabled by setting `true` as the third parameter in `addEventListener()`.

### **🟡 Example: Event Bubbling vs. Capturing**
```html
<div id="parent">
    <button id="child">Click Me</button>
</div>

<script>
    document.getElementById("parent").addEventListener("click", function() {
        console.log("Parent Clicked!");
    }, true);  // Capturing Phase

    document.getElementById("child").addEventListener("click", function() {
        console.log("Child Clicked!");
    });
</script>
```
🟢 **Clicking the button prints:**  
```
Parent Clicked!
Child Clicked!
```
🔵 **If `true` is removed, the output is:**  
```
Child Clicked!
Parent Clicked!
```
✅ **Bubbling: Child → Parent** (default)  
✅ **Capturing: Parent → Child** (when `true` is passed)  

---

## **🟢 7️⃣ Preventing Default Actions**
Some events trigger default browser behaviors (e.g., form submission, link navigation). We can prevent them using `event.preventDefault()`.  

### **🟡 Example: Preventing Form Submission**
```html
<form id="myForm">
    <input type="text" placeholder="Enter something">
    <button type="submit">Submit</button>
</form>

<script>
    document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault();  // Prevents form from submitting
        alert("Form submission prevented!");
    });
</script>
```
✅ **Prevents the form from refreshing the page.**  

---

## **🟢 8️⃣ Removing Event Listeners**
Event listeners can be removed using `removeEventListener()`.

### **🟡 Example: Removing an Event Listener**
```javascript
function showAlert() {
    alert("Clicked!");
    document.getElementById("btn").removeEventListener("click", showAlert);
}

document.getElementById("btn").addEventListener("click", showAlert);
```
✅ **The event listener is removed after the first click.**  

---

## **🟢 9️⃣ Interview Tip**
- Explain events as **triggers for user interactions** and event listeners as **functions that respond to events**.  
- Show practical examples like **button clicks, form submissions, and keypress events**.  
- Discuss **bubbling, capturing, and event delegation** when asked about advanced event handling.  

---

Would you like to continue with **Question 10: Explain Event Delegation in JavaScript?** 🚀

---

## **🔟 Event Delegation in JavaScript**  

### **🔹 Why is This Important?**  
Event delegation is a powerful JavaScript technique used to **efficiently handle events on multiple elements**, especially when elements are dynamically added to the DOM. It improves performance and reduces memory usage.  

---

## **🟢 1️⃣ What is Event Delegation?**  
Instead of adding event listeners to individual child elements, **we attach a single event listener to a parent element**. This works because of **event bubbling** (where events propagate from the target element up to the parent elements).  

---

## **🟢 2️⃣ Why Use Event Delegation?**
✅ **Improves Performance** → Reduces the number of event listeners.  
✅ **Handles Dynamic Elements** → Works even if new elements are added later.  
✅ **Simplifies Code** → Avoids multiple event bindings.  

---

## **🟢 3️⃣ Example Without Event Delegation (Bad Approach)**
```html
<button class="item">Item 1</button>
<button class="item">Item 2</button>
<button class="item">Item 3</button>

<script>
    document.querySelectorAll(".item").forEach(button => {
        button.addEventListener("click", function() {
            alert("Button clicked: " + this.innerText);
        });
    });
</script>
```
🚨 **Problems:**
- Adds multiple event listeners (**one per button**), increasing memory usage.
- If new buttons are added dynamically, they **won’t have event listeners**.

---

## **🟢 4️⃣ Example With Event Delegation (Better Approach)**
```html
<div id="parent">
    <button class="item">Item 1</button>
    <button class="item">Item 2</button>
    <button class="item">Item 3</button>
</div>

<script>
    document.getElementById("parent").addEventListener("click", function(event) {
        if (event.target.classList.contains("item")) {
            alert("Button clicked: " + event.target.innerText);
        }
    });
</script>
```
✅ **Advantages:**
- Uses **only one event listener** (on the parent).  
- Works even if new buttons are added dynamically.  

---

## **🟢 5️⃣ Handling Dynamically Added Elements**
```html
<div id="parent">
    <button class="item">Item 1</button>
    <button class="item">Item 2</button>
</div>
<button id="addBtn">Add New Button</button>

<script>
    document.getElementById("parent").addEventListener("click", function(event) {
        if (event.target.classList.contains("item")) {
            alert("Clicked: " + event.target.innerText);
        }
    });

    document.getElementById("addBtn").addEventListener("click", function() {
        let newButton = document.createElement("button");
        newButton.className = "item";
        newButton.innerText = "New Item";
        document.getElementById("parent").appendChild(newButton);
    });
</script>
```
✅ **Newly added buttons will still trigger the event listener!**  

---

## **🟢 6️⃣ When to Use Event Delegation?**
✅ When handling events on **multiple similar elements** (e.g., list items, buttons).  
✅ When elements **are added dynamically**.  
✅ When optimizing performance by **reducing event listeners**.  

🚨 **Avoid Event Delegation if:**  
- The event **does not bubble** (e.g., `blur`, `focus`).  
- Performance is **not an issue** (e.g., handling only 2-3 elements).  

---

## **🟢 7️⃣ Interview Tip**
- **Explain bubbling**: Events move **from child to parent**, allowing delegation.  
- **Give real-world examples**: E.g., click events on dynamically generated menu items.  
- **Demonstrate efficiency**: One event listener instead of many saves memory.  

---

Would you like to continue with **Question 11: What is the difference between Synchronous and Asynchronous JavaScript?** 🚀

---

## **1️⃣ Synchronous vs. Asynchronous JavaScript**  

### **🔹 Why is This Important?**  
Understanding **synchronous vs. asynchronous behavior** is crucial for handling operations like **API calls, file reading, or timers** efficiently in JavaScript.  

---

## **🟢 2️⃣ What is Synchronous JavaScript?**  
📌 **Definition:**  
- Synchronous JavaScript **executes code line by line** in a **blocking manner**.  
- If a task takes time (e.g., a network request), it **halts execution** until the task completes.  

📌 **Example:**  
```js
console.log("Start");
for (let i = 0; i < 1e9; i++) {}  // A long-running task (blocking the code)
console.log("End");
```
**Output:**  
```
Start
(Delay occurs)
End
```
🚨 **Problem:** The entire script is **blocked** until the loop finishes.  

---

## **🟢 3️⃣ What is Asynchronous JavaScript?**  
📌 **Definition:**  
- Asynchronous JavaScript allows the program to continue executing **without waiting** for a task to finish.  
- Uses techniques like **callbacks, promises, and async/await**.  

📌 **Example (Using setTimeout):**  
```js
console.log("Start");
setTimeout(() => console.log("Inside Timeout"), 2000);
console.log("End");
```
**Output:**  
```
Start
End
(After 2 seconds) Inside Timeout
```
✅ **Non-blocking** → Execution continues while waiting for the timeout.  

---

## **🟢 4️⃣ How JavaScript Handles Asynchronous Code?**  
JavaScript uses the **Event Loop** to manage async tasks via:  
1️⃣ **Callback Functions** → Used in older asynchronous programming.  
2️⃣ **Promises** → More structured alternative to callbacks.  
3️⃣ **Async/Await** → Syntactic sugar over Promises for cleaner code.  

---

## **🟢 5️⃣ Techniques for Handling Asynchronous Code**  

### **1️⃣ Callbacks (Old Approach, Causes Callback Hell)**  
```js
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data Fetched");
        callback();
    }, 2000);
}
fetchData(() => console.log("Processing Data"));
```
🚨 **Issue:** Nested callbacks lead to **callback hell**, making the code hard to maintain.  

---

### **2️⃣ Promises (Modern Approach)**
```js
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data Fetched"), 2000);
    });
}

fetchData()
    .then((data) => console.log(data))
    .catch((error) => console.log("Error:", error));
```
✅ **Advantages:**  
- Avoids callback hell with **chaining**.  
- Uses `.then()` for handling results and `.catch()` for errors.  

---

### **3️⃣ Async/Await (Best Approach)**
```js
async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data Fetched"), 2000);
    });
}

async function getData() {
    console.log("Fetching...");
    let data = await fetchData();
    console.log(data);
}
getData();
```
✅ **Advantages:**  
- **Looks synchronous but is asynchronous.**  
- **Easier to read and maintain** than promises.  
- Handles errors using `try/catch`.  

---

## **🟢 6️⃣ When to Use Each Approach?**  
| Approach | Use Case | Drawbacks |  
|-----------|-----------|-----------|  
| **Callbacks** | Simple async tasks | Leads to callback hell |  
| **Promises** | Handling multiple async operations | Can still be complex in some cases |  
| **Async/Await** | Readable & maintainable async code | Requires modern browsers |  

---

## **🟢 7️⃣ Interview Tips**  
✅ **Explain blocking vs. non-blocking code.**  
✅ **Mention the event loop.**  
✅ **Give real-world examples** like API requests, database calls, or timers.  
✅ **Show preference for async/await** for cleaner code.  

---

Would you like to continue with **Question 12: What is the difference between setTimeout and setInterval?** 🚀

---

## **🟢 1️⃣ setTimeout vs. setInterval in JavaScript**  

### **🔹 Why is This Important?**  
Understanding **setTimeout** and **setInterval** is crucial for handling **delayed and repetitive tasks** in JavaScript, especially in **animations, polling requests, or scheduled executions**.

---

## **🟢 2️⃣ What is `setTimeout`?**  
📌 **Definition:**  
- `setTimeout()` executes a function **once** after a specified delay (in milliseconds).  
- It does **not block execution**—other code continues to run while waiting for the timeout.  

📌 **Syntax:**  
```js
setTimeout(function, delay, param1, param2, ...);
```
  
📌 **Example (Delayed Execution):**  
```js
console.log("Start");
setTimeout(() => console.log("Executed after 3 seconds"), 3000);
console.log("End");
```
**Output:**  
```
Start
End
(After 3 seconds) Executed after 3 seconds
```
✅ **Use Case:**  
- Delaying execution (e.g., showing a popup after some time).  

---

## **🟢 3️⃣ What is `setInterval`?**  
📌 **Definition:**  
- `setInterval()` executes a function **repeatedly** at a specified interval.  
- It continues running until **cleared using `clearInterval()`**.  

📌 **Syntax:**  
```js
setInterval(function, interval, param1, param2, ...);
```
  
📌 **Example (Repeated Execution Every 2 Seconds):**  
```js
let count = 0;
let intervalId = setInterval(() => {
    count++;
    console.log(`Execution count: ${count}`);
    if (count === 5) clearInterval(intervalId);  // Stops after 5 executions
}, 2000);
```
**Output:**  
```
(After 2 sec) Execution count: 1
(After 4 sec) Execution count: 2
(After 6 sec) Execution count: 3
(After 8 sec) Execution count: 4
(After 10 sec) Execution count: 5
```
✅ **Use Case:**  
- Updating UI elements (e.g., digital clocks, progress bars).  
- Fetching data repeatedly at intervals (e.g., polling an API).  

---

## **🟢 4️⃣ Key Differences Between `setTimeout` and `setInterval`**  

| Feature | `setTimeout` | `setInterval` |  
|---------|-------------|--------------|  
| **Execution** | Runs once after a delay | Runs repeatedly at intervals |  
| **Blocking** | Non-blocking | Non-blocking |  
| **Clearing** | `clearTimeout(timeoutID)` | `clearInterval(intervalID)` |  
| **Use Cases** | Delayed execution (e.g., popups) | Repetitive tasks (e.g., clock updates) |  

---

## **🟢 5️⃣ How to Stop `setTimeout` and `setInterval`?**  
- `clearTimeout(timeoutID)` → Cancels a scheduled timeout.  
- `clearInterval(intervalID)` → Stops repeated execution.  

📌 **Example (Clearing `setTimeout`)**  
```js
let timeoutID = setTimeout(() => console.log("This won't run"), 5000);
clearTimeout(timeoutID);  // Cancels the timeout before it executes
```

📌 **Example (Clearing `setInterval`)**  
```js
let counter = 0;
let intervalID = setInterval(() => {
    console.log(`Count: ${++counter}`);
    if (counter === 3) clearInterval(intervalID);  // Stops after 3 executions
}, 1000);
```

---

## **🟢 6️⃣ When to Use `setTimeout` vs. `setInterval`?**  
| **Scenario** | **Use** |  
|-------------|--------|  
| Execute a function **once after a delay** | ✅ `setTimeout()` |  
| Execute a function **at fixed intervals** | ✅ `setInterval()` |  
| Need to **schedule a delayed API call** | ✅ `setTimeout()` |  
| Need to **update UI periodically** | ✅ `setInterval()` |  

---

## **🟢 7️⃣ Interview Tips**  
✅ **Mention the event loop**—JavaScript does not block execution while waiting for `setTimeout` or `setInterval`.  
✅ **Explain how to clear intervals** to prevent memory leaks.  
✅ **Discuss use cases**—e.g., `setTimeout` for animations, `setInterval` for clocks.  
✅ **Show practical examples** of using `clearTimeout` and `clearInterval`.  

---

Would you like to continue with **Question 13: What is Debouncing and Throttling in JavaScript?** 🚀

---

## **🟢 1️⃣ Debouncing and Throttling in JavaScript**  

### **🔹 Why is This Important?**  
Debouncing and throttling are **performance optimization techniques** used in JavaScript to control **frequent function calls** in scenarios like:  
- **Typing in a search bar (API calls should not be made on every keystroke).**  
- **Resizing the browser window (expensive computations should be controlled).**  
- **Scrolling events (prevent excessive execution of event listeners).**  

---

## **🟢 2️⃣ What is Debouncing?**  
📌 **Definition:**  
- **Delays function execution until after a specified time has passed since the last event trigger.**  
- **If the event keeps firing, the timer resets.**  
- Used to **prevent multiple rapid executions** of an expensive function (e.g., making API calls).  

📌 **Example (Debouncing Search Input - API Call Optimization)**  
```js
function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

// Function to simulate API call
function searchAPI(query) {
    console.log(`Searching for: ${query}`);
}

// Debounced function
const optimizedSearch = debounce(searchAPI, 500);

// Simulating fast user typing
optimizedSearch("H");
optimizedSearch("He");
optimizedSearch("Hel");
optimizedSearch("Hell");
optimizedSearch("Hello");  // Only this API call will execute after 500ms
```
✅ **Use Case:**  
- Reducing unnecessary API requests when typing in a search bar.  

---

## **🟢 3️⃣ What is Throttling?**  
📌 **Definition:**  
- **Limits function execution to at most once in a given time interval, even if the event occurs multiple times.**  
- **Ensures a function runs at a consistent rate.**  
- Useful for scenarios like **scrolling, resizing, and button click events**.  

📌 **Example (Throttling Scroll Event - Performance Optimization)**  
```js
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Function to handle scrolling
function handleScroll() {
    console.log("Scroll event triggered!");
}

// Throttled function
const optimizedScroll = throttle(handleScroll, 1000);

// Attaching throttled function to scroll event
window.addEventListener("scroll", optimizedScroll);
```
✅ **Use Case:**  
- Preventing excessive execution of a function during high-frequency events (e.g., window resizing, infinite scrolling).  

---

## **🟢 4️⃣ Key Differences Between Debouncing and Throttling**  

| Feature | Debouncing | Throttling |  
|---------|-----------|-----------|  
| **Execution** | Runs **only after a delay** once the event stops | Runs at **regular intervals**, even if the event keeps firing |  
| **Prevention Mechanism** | **Delays execution** and resets timer if the event fires again | **Limits execution** to one call per interval |  
| **Use Case** | API calls while typing, button click events | Scroll event handling, window resizing |  

---

## **🟢 5️⃣ When to Use Debouncing vs. Throttling?**  

| **Scenario** | **Use** |  
|-------------|--------|  
| **Typing in a search bar** (avoid making multiple API calls on each keystroke) | ✅ **Debouncing** |  
| **Button click event** (prevent multiple form submissions) | ✅ **Debouncing** |  
| **Window resize event** (adjust UI layout only once in a while) | ✅ **Throttling** |  
| **Scroll event for infinite scrolling** (fetch new data at regular intervals) | ✅ **Throttling** |  

---

## **🟢 6️⃣ Interview Tips**  
✅ **Explain when to use debouncing vs. throttling** using real-world examples.  
✅ **Mention performance improvements**—helps reduce unnecessary computations and API calls.  
✅ **Show code examples**—implementing custom debounce/throttle functions demonstrates a deep understanding.  
✅ **Discuss event listeners**—commonly used in `scroll`, `resize`, and `input` events.  

---

Would you like to continue with **Question 14: Explain JavaScript Promises and Async/Await?** 🚀

---

## **🟢 1️⃣ JavaScript Promises and Async/Await**  

### **🔹 Why is This Important?**  
In JavaScript, handling **asynchronous operations** efficiently is **crucial** for:  
✅ Fetching data from APIs (AJAX calls).  
✅ Performing database queries.  
✅ Handling time-based operations (setTimeout, setInterval).  
✅ Ensuring non-blocking execution of code.  

---

## **🟢 2️⃣ What is a Promise?**  
📌 **Definition:**  
A **Promise** is an **object** that represents the **eventual completion (or failure)** of an asynchronous operation. It helps **avoid callback hell** and provides a cleaner way to handle async operations.  

📌 **States of a Promise:**  
A Promise can be in one of three states:  
1️⃣ **Pending** → Initial state (async operation is still in progress).  
2️⃣ **Fulfilled** → Operation was successful.  
3️⃣ **Rejected** → Operation failed.  

📌 **Basic Syntax:**  
```js
const myPromise = new Promise((resolve, reject) => {
    let success = true; // Simulating success or failure
    setTimeout(() => {
        if (success) {
            resolve("Promise Resolved! ✅");
        } else {
            reject("Promise Rejected ❌");
        }
    }, 2000);
});

// Handling the Promise
myPromise
    .then(response => console.log(response)) // Runs if resolved
    .catch(error => console.log(error))     // Runs if rejected
    .finally(() => console.log("Operation Complete")); // Always runs
```
✅ **Output (After 2 Seconds)**  
```js
Promise Resolved! ✅
Operation Complete
```

---

## **🟢 3️⃣ What is Async/Await?**  
📌 **Definition:**  
**Async/Await** is a cleaner and more readable way to work with Promises in JavaScript.  
✅ **Async functions always return a Promise.**  
✅ **Await pauses execution until the Promise is resolved or rejected.**  
✅ **It makes asynchronous code look synchronous.**  

📌 **Example (Fetching API Data with Async/Await)**  
```js
async function fetchData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let data = await response.json(); // Parsing JSON response
        console.log(data); // Output: API Data
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchData();
```
✅ **Advantages of Async/Await over Promises:**  
- **Code Readability:** Looks like synchronous code.  
- **Error Handling:** Uses try/catch instead of `.catch()`.  
- **Less Nesting:** No need for multiple `.then()` chaining.  

---

## **🟢 4️⃣ Differences Between Promises and Async/Await**  

| Feature | Promises (`.then() & .catch()`) | Async/Await |
|---------|----------------------|------------|
| **Code Style** | Uses `.then()` and `.catch()` | Uses `await` inside `async` functions |
| **Readability** | More nested, harder to read | Cleaner, looks synchronous |
| **Error Handling** | Uses `.catch()` | Uses `try/catch` |
| **Execution Control** | Executes `.then()` on fulfillment | `await` pauses execution until resolved |
| **Use Case** | Good for simple async chains | Better for complex async logic |

---

## **🟢 5️⃣ Real-World Use Cases of Promises & Async/Await**  

| **Scenario** | **Use** |
|-------------|--------|
| Fetching data from an API | ✅ **Async/Await** |
| Reading a file in Node.js | ✅ **Promise-based FS module** |
| Processing multiple API requests in parallel | ✅ **Promise.all()** |
| Handling dependent async operations | ✅ **Async/Await** |
| Handling time-based operations | ✅ **setTimeout() inside a Promise** |

---

## **🟢 6️⃣ Handling Multiple Promises with `Promise.all()`**  
📌 **Use Case:** Fetch multiple APIs in parallel to improve performance.  
```js
async function fetchMultipleData() {
    try {
        let [user, posts] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users/1").then(res => res.json()),
            fetch("https://jsonplaceholder.typicode.com/posts?userId=1").then(res => res.json())
        ]);

        console.log("User:", user);
        console.log("Posts:", posts);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchMultipleData();
```
✅ **Benefit:** Fetches both APIs **simultaneously** instead of waiting for one to complete before starting the next.  

---

## **🟢 7️⃣ Common Interview Questions on Promises & Async/Await**  
**1️⃣ What is the difference between a Callback, a Promise, and Async/Await?**  
**2️⃣ How does error handling work in Promises vs. Async/Await?**  
**3️⃣ What happens if an API call inside `async` function fails?**  
**4️⃣ What is `Promise.all()`, `Promise.race()`, and `Promise.allSettled()`?**  
**5️⃣ How does the Event Loop handle Promises in JavaScript?**  

---

## **🟢 8️⃣ Interview Tips**  
✅ Explain **how Promises help avoid callback hell** and why they are better than traditional callbacks.  
✅ Discuss **how the event loop prioritizes microtasks** (Promises) over regular tasks.  
✅ Demonstrate **code examples** using both `.then()` and `async/await`.  
✅ **Use real-world scenarios** like fetching API data, file reading, or handling multiple requests.  

---

Would you like to continue with **Question 15: Explain JavaScript Closures with Examples?** 🚀

---

