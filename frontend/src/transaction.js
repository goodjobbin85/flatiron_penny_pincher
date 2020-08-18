class Transaction {
  constructor(id, amount, transaction_type, institution, budget_id) {
    this.id = id;
    this.amount = amount;
    this.transaction_type = transaction_type;
    this.institution = institution;
    this.budget_id = budget_id;
  }

  //render transaction instance method that renders transaction
  renderTransaction(budgetId) {
    //let transDiv = document.querySelector(`div#transaction-div[data-id="${budgetId}"]`)
    let table = document.getElementById("transactionsTable");

    table.innerHTML +=
    `
      <tr>
        <td>${this.id}</td>
        <td>${this.amount}</td>
        <td>${this.transaction_type}</td>
        <td>${this.institution}</td>
        <td><button class="delete-button" data-id=${this.id} onclick="deleteTransaction()">Delete</button></td>
      </tr>
    `
  }
}
