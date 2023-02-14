function checkPassword(){
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    console.log(password, confirmPassword);

    let message = document.getElementById("message")

    if(password.lenth !=0){
        if(password == confirmPassword){
            message.textContent = "";
        }
        else {
            message.textContent  = "*Passwords don't match!";

            message.style.color = "red";
            message.style.fontSize ="12px";
        }
    }
}