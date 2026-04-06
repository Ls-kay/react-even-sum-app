# 📘 Even Number Sum Calculator (React)

This is a small React project I built to practice working with user input, state, and basic logic in JavaScript.

The app allows a user to enter a list of numbers, and it calculates the **sum of all even numbers** from that list.

---

## 🚀 How It Works

The user types numbers into an input field like this:

```
1, 2, 3, 4, 5, 6
```

When the **Calculate** button is clicked:

* The input is converted into an array of numbers
* The app checks which numbers are even
* It adds them together
* Then displays the result on the screen

Example:

```
Even numbers: 2, 4, 6
Sum: 12
```


## Function Logic

The main function used in this project is:

```js
function sumOfEvenNumbers(arr) {
  let sum = 0;

  for (let num of arr) {
    if (num % 2 === 0) {
      sum += num;
    }
  }

  return sum;
}
```

### What this does:

* Loops through each number in the array
* Checks if the number is even using `% 2 === 0`
* Adds it to the total if it is even
* Returns the final sum

---

## React Concepts Used

This project helped me practice:

* `useState` → to store user input and result
* Event handling → button click (`onClick`)
* Controlled inputs → updating input with state
* Conditional rendering → only showing result when available


## Styling

The styling is done using plain CSS.

Some design choices:

* A gradient background to make the app visually appealing
* A centered card layout for focus
* Rounded inputs and buttons for a modern look
* Hover effects on the button to improve interactivity
* A simple fade-in animation when the app loads

The goal was to keep it **clean, simple, and user-friendly**.


## About the Comments in the Code

I added comments throughout the code to make it easier to understand, especially as a beginner or if you have never coded before.

For example:

```js
// FUNCTION: Sum of even numbers
```

This tells you what the function is responsible for.

```js
// HANDLE CLICK
```

This shows where the button logic starts.

```js
// Validate input
```

his explains why we are checking for invalid values.

### Why comments are important:

* They help you (and others) understand the code later
* They make debugging easier
* They show recruiters that you write clean, readable code

---

## roject Goal

This project is part of my journey learning **React and JavaScript**.
The focus was on:

* Understanding logic
* Writing clean code
* Building something functional with a simple UI

---

## Future Improvements

Some things I can add later:

* Input validation with better error messages
* A history of previous calculations
* Dark/light mode toggle
* Breaking the app into smaller reusable components

## Final Thoughts

This is a beginner-friendly project, but it helped understand how React works in a practical way.
It’s simple, but it shows the basics of building interactive web apps.
