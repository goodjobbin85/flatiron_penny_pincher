document.addEventListener("DOMContentLoaded", () => {
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
