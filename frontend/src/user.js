class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  renderUser() {
    let ul = document.getElementById("users");
    let li = document.createElement("li");
    li.innerHTML = `Name: ${this.name} | Email: ${this.email}`
    ul.appendChild(li);
  }
}
