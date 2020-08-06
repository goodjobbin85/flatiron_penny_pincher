document.addEventListener("DOMContentLoaded", () => {
  budgetForm();
  transactionForm();
  //getUsers();
  getTransactions();
})

const BASE_URL = "http://localhost:3000"

//render all users
function getUsers() {
  fetch(`${BASE_URL}/users`)
  .then(resp => resp.json())
  .then(users => {
    for (const user of users) {
      let li = new User(user.id, user.name, user.email);
      li.renderUser();
    }
  })
}

//render all transactions
function getTransactions() {
  fetch(`${BASE_URL}/transactions`)
  .then(resp => resp.json())
  .then(transactions => {
    for (const transaction of transactions) {
      let trans = new Transaction(transaction.id, transaction.amount, transaction.transaction_type, transaction.institution)
      trans.renderTransaction();
    }
  })
}
//render new budget form

function budgetForm() {
  let form = document.getElementById("budgetForm");
  form.innerHTML +=
  `
    <form id="bForm">
      <label for="balance">Balance:</label>
      <input type="text" id="balance" name="balance">
      <input type="submit" id="submit">
    </form>
  `

  form.addEventListener("submit", budgetFormSubmission);
}

function budgetFormSubmission() {
  event.preventDefault();

  let form = document.getElementById("bForm");
  let balance = document.getElementById("balance").value;

  let budget = {
    balance: balance
  }

  fetch(`${BASE_URL}/budgets`, {
    method: "POST",
    headers: {
      "Acccept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(budget)
  })
  .then(resp => resp.json())
  .then(budget => {
    let budg = new Budget(budget.id, budget.balance);
    budg.renderBudget();
  })
  form.reset();
}

//render new transaction form
function transactionForm() {
  let form = document.getElementById("transactionForm");


  form.innerHTML +=
  `<form id="transForm">
    <label for="amount">Amount:</label>
    <input type="text" id="amount" name="amount"><br>
    <label for="t_type">Type:</label>
    <input type="text" id="t_type" name="t_type"><br>
    <label for="store">Store:</label>
    <input type="text" id="store" name="store"><br>
    <input type="submit" id="submit" value="Create Transaction">
  </form>`

  form.addEventListener('submit', transactionFormSubmission);
}

function transactionFormSubmission() {

  event.preventDefault();


  let transForm = document.getElementById("transForm");
  let amount = document.getElementById("amount").value;
  let t_type = document.getElementById("t_type").value;
  let store = document.getElementById("store").value;

  let transaction = {
    amount: amount,
    transaction_type: t_type,
    institution: store
  }

  fetch(`${BASE_URL}/transactions`, {
    method: "POST",
    headers: {
      "Acccept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(transaction)
  })
  .then(resp => resp.json())
  .then(transaction => {
    let trans = new Transaction(transaction.id, transaction.amount, transaction.transaction_type, transaction.institution)
    trans.renderTransaction();
    console.log(trans.amount);
    let balance = parseInt(document.getElementById("budgetAmount").innerText);
    console.log(balance);
    balance = balance - trans.amount;
    console.log(balance);
    document.getElementById("budgetAmount").innerText = balance;
  })
  transForm.reset();
}

function deleteTransaction() {

  let transId = parseInt(event.target.dataset.id)

    fetch(`${BASE_URL}/transactions/${transId}`, {
        method: 'DELETE'
    })
    event.target.parentElement.parentElement.remove();
}
