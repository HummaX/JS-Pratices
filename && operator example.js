let password = prompt("Enter Your password");
if (password.length >= 8 && password.indexOf(' ') === -1) {
      console.log("Good Password")
} else {
    console.log("Not correct Format")
}