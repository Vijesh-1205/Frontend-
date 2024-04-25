function get() {

    var res=document.getElementById('text')
    var nameValue=document.getElementById('name').value
    var passwordValue=document.getElementById('password') .value
    var border1=document.getElementById('name')
    var border2=document.getElementById('password')

    if (nameValue ==='' || passwordValue === ''){
        res.innerHTML= "Username or password cannot be empty";
        res.className="empty";
        border1.className="border-emp"
        border2.className="border-emp"
    }
    else if(nameValue.length<4){
       res.innerHTML= "Username must contain minimum 4 characters";
       res.className="user" ;
       border1.className="border-user"
    }
    else if(passwordValue.length<6 || passwordValue.length>12){
        res.innerHTML= "Password must contain 6 to 12 characters";
        res.className="pass";
        border2.className="border-pass"
    }
    else{
        res.innerHTML="Successful";
        res.className="success";
        border1.className="border-success"
        border2.className="border-success"
    }
}
