var tapButton = document.getElementsByTagName('button')[0];
var logout=document.querySelector('.left-4')

tapButton.addEventListener("click", function() {
    var nameValue = document.getElementById('mail').value;
    var passwordValue = document.getElementById('pass').value;
    var result=document.getElementById('result')

    if (nameValue === "Vijesh1205@gmail.com" && passwordValue === "Vijesh@123") {
        window.location.href="home.html";
    } else {
       alert("Username or password does not match")
    }
});
