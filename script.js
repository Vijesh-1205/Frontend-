function get() {
    var res=document.getElementById('text')
    var nameValue=document.getElementById('name').value
    var passwordValue=document.getElementById('password').value 

    if (nameValue ==='' || passwordValue === ''){
        res.innerHTML= "Username or password cannot be empty"
    }
    else if(nameValue.length<4){
       res.innerHTML= "Username must contain minimum 4 characters"
    }
    else if(passwordValue.length<6 || passwordValue.length>12){
        res.innerHTML= "Password must contain 6 to 12 characters"
    }
    else{
        res.innerHTML="Successful"
    }
}