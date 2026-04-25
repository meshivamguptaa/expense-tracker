# Expense Tracker (JavaScript)

A simple console-based expense tracker built using core JavaScript concepts.

---

## 🚀 Features

* Add expenses
* Calculate total expenses
* Filter expenses by title (case-insensitive)
* Get total for a specific category
* List all expense titles
* Delete expenses by title

---

## 🧠 Concepts Used

* Arrays
* Objects
* Functions
* `map()`
* `filter()`
* `reduce()`
* Basic validation

---

## 📂 Project Structure

```
expense-tracker/
 ├── index.js
 └── README.md
```

---

## ▶️ How to Run

1. Open `index.js`
2. Run using:

   * Browser console OR
   * Node.js

```
node index.js
```

---

## 💻 Example Usage

```javascript
addExpense("Food", 200)
addExpense("Travel", 600)
addExpense("Food", 400)

console.log(getTotal()) // 1200

console.log(filterByTitle("food"))
// [{ title: "Food", amount: 200 }, { title: "Food", amount: 400 }]

console.log(getTotalByTitle("food")) // 600

console.log(getTitles())
// ["Food", "Travel", "Food"]

deleteExpense("Travel")
```

---

## ⚠️ Limitations

* No user interface (console-based)
* Deletion removes all matching titles
* No persistent storage

---

## 🔮 Future Improvements

* Add UI using DOM
* Add unique IDs for each expense
* Store data using localStorage or database
* Edit/update expenses

---

## 📌 Author

Shivam Gupta
