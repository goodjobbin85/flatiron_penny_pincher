class Transaction {
  constructor(amount, transaction_type, institution) {
    this.amount = amount;
    this.transaction_type = transaction_type;
    this.institution = institution
  }

  //render transaction instance method that renders transaction
  renderTransaction() {
    let table = document.getElementById("transactionsTable");
    let row = document.createElement("tr");

    let td = document.createElement("td");
    td.innerText = this.amount;

    let td2 = document.createElement("td");
    td2.innerText = this.transaction_type;

    let td3 = document.createElement("td");
    td3.innerText = this.institution;

    row.appendChild(td);
    row.appendChild(td2);
    row.appendChild(td3);
    table.appendChild(row);
  }
}
