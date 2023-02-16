const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", function(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  if (username === "" || password === "") {
    alert("Username or Password cannot be empty");
  } else {
    alert(`Username: ${username}\nPassword: ${password}`);
  }
});
