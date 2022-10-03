window.onload = pageLoad;
var passWordChecked = false;
function pageLoad(){	
    
    var registering = document.getElementById("register");
    registering.onclick = validateForm;
    
}

function validateForm() {
    
    var firstName = document.forms["registerForm"]["firstname"];
    var lastName = document.forms["registerForm"]["lastname"];
    var gender = document.forms["registerForm"]["gender"];
    var date = document.forms["registerForm"]["bday"];
    var email = document.forms["registerForm"]["email"];
    var username = document.forms["registerForm"]["username"];
    var password = document.forms["registerForm"]["password"];
    var repassword = document.forms["registerForm"]["repassword"];
    var errormsg = document.getElementById("errormsg");
    // alert(errormsg.textContent);
    // alert(password.value);
    // alert(repassword.value);

    if(password.value == repassword.value){

        if(password.value == "" || repassword.value == ""){
            errormsg.textContent = "Please fill the password form!";
            window.scroll(0,0);
            return false;
        }else
        { 
            passWordChecked = true;
        }
    }
    else{
        errormsg.textContent = "Password doesn't match , please check again!";
        window.scroll(0,0);
        return false;
    }
    
    if(firstName.value != "" && lastName.value != "" && gender.value != "" && 
    date.value != "" && email.value != "" && username.value != ""  && passWordChecked == true){   
        alert("Register completed , Welcome to the website");
         return true;
    }
    else {
        errormsg.textContent = "Please fill validate form!";
        window.scroll(0,0);
        return false;
    }
        
}

