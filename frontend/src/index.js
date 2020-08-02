document.addEventListener("DOMContentLoaded", () => {
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
    id: this.id,
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
  })
  transForm.reset;
}

function deleteTransaction() {
  let transId = parseInt(event.target.dataset.id)

    fetch(`${BASE_URL}/transactions/${transId}`, {
        method: 'DELETE'
    })

    this.location.reload()
}
