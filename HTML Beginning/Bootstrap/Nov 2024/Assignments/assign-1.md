### Task 1: Change the Main Heading Color

**Objective**: Change the color of the main heading using JavaScript.

**Description:** Imagine you are the boss of a paint shop. Your job is to change the color of the main heading on your webpage using JavaScript. This means you will write some code that tells the heading to change its color, like changing a paint color on a wall. For example, if the heading is “Welcome to My Page” in black, you can change it to blue or red or any color you like. This task will help you learn how to control and change the colors of text on a webpage.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Task 1</title>
</head>
<body>
    <h1 id="main-heading">Main Heading</h1>
    <script>
        document.getElementById('main-heading').style.color = 'blue'; // Change color to blue
    </script>
</body>
</html>
```

---

# Task 2: Apply Alternate Colors to List Items

**Objective**: Apply alternating colors to list items.

**Description:** Think of a list of your favorite snacks, like “Chips,” “Biscuits,” “Chocolates,” and “Juice.” Now, your task is to paint these items in alternating colors using JavaScript, just like how we use different colors in a Rangoli design. So, the first item will be one color, the second item will be another color, and this pattern will continue. This will help you learn how to make lists look colorful and interesting by changing the background color of each item.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Task 2</title>
    <style>
        .even {
            background-color: lightgray;
        }
        .odd {
            background-color: white;
        }
    </style>
</head>
<body>
    <ul id="list">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
    </ul>
    <script>
        let items = document.querySelectorAll('#list li');
        items.forEach((item, index) => {
            if (index % 2 === 0) {
                item.classList.add('even');
            } else {
                item.classList.add('odd');
            }
        });
    </script>
</body>
</html>
```

---

### Task 3: Change Font Size and Style of a Paragraph

**Objective**: Use JavaScript to change the font size and font style of a paragraph.

**Description:** Imagine your paragraph is like a piece of text in your notebook. Now, you need to dress up this paragraph using JavaScript. Just like you write with different pens and styles in your notebook, you’ll change the font size (how big or small the text is) and the font style (like handwriting style) of the paragraph on your webpage. This will make your text look more attractive and stylish.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Task 3</title>
</head>
<body>
    <p id="paragraph">This is a paragraph.</p>
    <script>
        let para = document.getElementById('paragraph');
        para.style.fontSize = '20px'; // Change font size
        para.style.fontFamily = 'Arial'; // Change font style
    </script>
</body>
</html>
```

---

### Task 4: Hide and Show Elements

**Objective**: Create buttons that hide and show elements when clicked.

**Description:** Think of this task like a magic trick. Your job is to create buttons that can hide and show parts of your webpage when you click them, like a disappearing act in a magic show. When you click one button, a piece of content will vanish. When you click another button, the content will come back. This will teach you how to make parts of your webpage disappear and reappear, making your webpage more interactive and fun.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Task 4</title>
</head>
<body>
    <div id="content">This content can be hidden or shown.</div>
    <button onclick="hideContent()">Hide</button>
    <button onclick="showContent()">Show</button>
    <script>
        function hideContent() {
            document.getElementById('content').style.display = 'none';
        }
        function showContent() {
            document.getElementById('content').style.display = 'block';
        }
    </script>
</body>
</html>
```

---

### Task 5: Dynamic Background Color Change

**Objective**: Change the background color of the page based on user input.

**Description:** Imagine you are an artist with a blank canvas. In this task, you’ll create a tool that lets users pick any color they like to change the background color of the entire webpage. When the user selects a color, the background of the page will change to that color instantly. This will show you how to make your webpage look vibrant and lively based on user choices, just like changing the colors of a painting.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Task 5</title>
</head>
<body>
    <input type="color" id="colorPicker" value="#ffffff">
    <script>
        document.getElementById('colorPicker').addEventListener('input', (event) => {
            document.body.style.backgroundColor = event.target.value;
        });
    </script>
</body>
</html>
```
