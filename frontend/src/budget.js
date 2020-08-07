class Budget {
  constructor(id, balance) {
    this.id = id;
    this.balance = balance;
  }

  renderBudget() {
    
    let budgetH2 = document.getElementById("budgetAmount");
    budgetH2.setAttribute(`data-id`, this.id)
    budgetH2.innerHTML = `${this.balance}`;
  }
}
