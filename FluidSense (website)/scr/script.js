const formSubmit = () =>{
    var a = document.getElementById('password1').value;
    var b = document.getElementById('password2').value;
    if(a !=b){
      
       
        document.getElementById('error').innerHTML = "Password doesn't match"
        document.getElementById('error').style.color = "red";
      
    }
    else{
        alert("Account created ")
    }
    return false
    
}