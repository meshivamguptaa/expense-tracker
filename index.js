// Expense Tracker Application
let expenses= [

]

const titleInput = document.getElementById("title")
const amountInput = document.getElementById("amount")
const addBtn = document.getElementById("addBtn")
const expenseList = document.getElementById("expenseList")

addBtn.addEventListener("click", () => {
    const title = titleInput.value 
    const amount = Number(amountInput.value)

    const result = addExpense(title,amount)

    if(result==="Invalid amount"){
        alert("invalid input")
        return
    }

    render()
    titleInput.value= ""
    amountInput.value=""
})
    
function renderExpenses() {
    expenseList.innerHTML = ""

    expenses.forEach(exp => {
        const li = document.createElement("li")
        li.textContent = `${exp.title} - ₹${exp.amount}`
        expenseList.appendChild(li)
    })
}

// Function to add an expense
function addExpense(title,amount){
    if(typeof amount!== "number" || amount<=0 || isNaN(amount)){
        return "Invalid amount"
    } 
    expenses.push({title, amount})
    
        
}

const totalExpenses= document.getElementById("totalExpenses")
// Function to get total expenses
function getTotal(){
    return expenses.reduce((sum, item) => sum+item.amount, 0)
}

function renderTotal(){
    
    totalExpenses.textContent=`Total: ${getTotal()}`
}

function render() {
    renderExpenses()
    renderTotal()
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

const dltBtn = document.getElementById("dltBtn")
//  Function to delete an expense by title
function deleteExpense(title){
    expenses= expenses.filter(item => item.title.toLowerCase()!==title.toLowerCase())
    console.log("Expense Deleted")
}
dltBtn.addEventListener("click", () => {
    
})


console.log(expenses)
console.log(getTotal())
console.log(filterByTitle("food"))
console.log(getTotalByTitle("food"))
console.log(getTitles())
deleteExpense("Travel")
