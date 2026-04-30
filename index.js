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

    expenses.forEach((exp, index) => {
        const li = document.createElement("li")
        li.textContent = `${exp.title} - ₹${exp.amount}`

        const btn= document.createElement("button")
        btn.textContent = "Delete"

        btn.addEventListener("click", () => {
            deleteExpense(index)

        })
        li.appendChild(document.createTextNode(" "))
        li.appendChild(btn)
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
    
    totalExpenses.textContent=`Total: ₹${getTotal()}`
}

function render() {
    renderExpenses()
    renderTotal()
}
// Function to filter expenses by title

function filterByTitle(title){
    return expenses.filter(item => item.title.toLowerCase()===title.toLowerCase())

}


const searchInput= document.getElementById("search")
const searchBtn= document.getElementById("searchBtn")
// Function to get total amount by title
function getTotalByTitle(title){
    return expenses.filter(item => item.title.toLowerCase()===title.toLowerCase())
    .reduce((sum, item) => sum+item.amount, 0)
}

searchInput.addEventListener("input", () => {
    const title= searchInput.value
    const filtered = filterByTitle(title)
    renderfilter(filtered)
    const total = getTotalByTitle(title)
    totalExpenses.textContent=`Total for ${title}: ${total}`

})

function renderfilter(list){
    expenseList.innerHTML=""
    
    list.forEach((exp, index) => {
        const li = document.createElement("li")
        li.textContent= `${exp.title} - ${exp.amount}`
        const btn = document.createElement("button")
        btn.textContent= "Delete"

        btn.addEventListener("click", () => {
            deleteExpense(index)
        })

        li.appendChild(document.createTextNode(""))
        li.appendChild(btn)
        
        expenseList.appendChild(li)
    })
}

// Function to get all unique titles
function getTitles(){
    return expenses.map(t=>t.title)
}

//  Function to delete an expense by title
function deleteExpense(index){
    expenses.splice(index, 1)
    render()
}



console.log(expenses)
console.log(getTotal())
console.log(filterByTitle("food"))
console.log(getTotalByTitle("food"))
console.log(getTitles())
deleteExpense("Travel")
