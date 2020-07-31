document.addEventListener("DOMContentLoaded", () => {
  transactionForm();
  getUsers();
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
      let trans = new Transaction(transaction.amount, transaction.transaction_type, transaction.institution)
      trans.renderTransaction();
    }
  })
}

//new transaction form
function transactionForm() {
  let form = document.getElementById("transactionForm");

  form.innerHTML +=
  `<form>
    <label for="amount">Amount:</label>
    <input type="text" id="amount" name="amount"><br>
    <label for="t_type">Type:</label>
    <input type="text" id="t_type" name="t_type"><br>
    <label for="store">Store:</label>
    <input type="text" id="store" name="store"><br>
    <input type="submit" id="submit" value="Create Transaction">
  </form>`
}
