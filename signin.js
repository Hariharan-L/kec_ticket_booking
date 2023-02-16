const submitBtn = document.querySelector(".signin-btn");

submitBtn.addEventListener("click", function(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const password2 = document.getElementById("password2").value;
  let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

  if (username === "" || password === "") {
    alert("Username or Password cannot be empty");
  } else if (!username.endsWith("@kongu.edu")) {
    alert("Invalid email address. Please enter a valid email address ending with '@kongu.edu'");
  } 
  else if (!strongRegex.test(password)) {
    alert("Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character.");
  }
  else if (password !== password2) {
    alert("Passwords do not match. Please enter the same password entered above");
  } else {
    alert(`Username: ${username}\nPassword: ${password}`);
  }
});
