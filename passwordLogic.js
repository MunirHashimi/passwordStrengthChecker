let password = document.getElementById('password');
let message = document.getElementById('message');
let strenght = document.getElementById('strenght')

password.addEventListener('input',()=>{
    if(password.value.length>0){
        message.style.display = "block";
    }
    else{
        message.style.display = "none";
    }
    if(password.value.length < 4){
        strenght.textContent = "Weak";
        password.style.borderColor = "#blue";
        message.style.color="blue";
    }
    else  if(password.value.length >=4 && password.value.length <= 8){
        strenght.textContent = "medium";
        password.style.borderColor = "red";
        message.style.color="red";
    }
    else  if(password.value.length >=8){
        strenght.textContent = "strong";
        password.style.borderColor = "green";
        message.style.color="green";
    }
})
    
