// Expense Tracker Application
let expenses= [

]

// Function to add an expense
function addExpense(title,amount){
    if(typeof amount!== "number" || amount<=0 || isNaN(amount)){
        return "Invalid amount"
    } 
    else{
        expenses.push({title, amount})
    }
        
}

// Function to get total expenses
function getTotal(){
    return expenses.reduce((sum, item) => sum+item.amount, 0)
}

// Function to filter expenses by title

function filterByTitle(title){
    return expenses.filter(item => item.title.toLowerCase()===title.toLowerCase())

}

// Function to get total amount by title
function getTotalByTitle(title){
    return expenses.filter(item => item.title.toLowerCase()===title.toLowerCase())
    .reduce((sum, item) => sum+item.amount, 0)
}

// Function to get all unique titles
function getTitles(){
    return expenses.map(t=>t.title)
}

//  Function to delete an expense by title
function deleteExpense(title){
    expenses= expenses.filter(item => item.title.toLowerCase()!==title.toLowerCase())
    console.log("Expense Deleted")
}

addExpense("food", 200)
addExpense("Travel", 600)
addExpense("food", "abc")
addExpense("food", 400)

console.log(expenses)
console.log(getTotal())
console.log(filterByTitle("food"))
console.log(getTotalByTitle("food"))
console.log(getTitles())
deleteExpense("Travel")



