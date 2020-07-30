document.addEventListener("DOMContentLoaded", () => {
  getUsers();
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
