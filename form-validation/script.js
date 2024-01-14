

var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var msgError = document.getElementById('msg-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('fullName').value;
    if(name.length == 0){
        nameError.innerHTML = 'Name is required!';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Enter Valid Name!';
        return false;
    }

    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true;
}

function validatePhone(){
     var phone  = document.getElementById("phoneNo").value;

     if(phone.length == 0){
        phoneError.innerHTML = 'Phone no is required!';
        return false;
     }
     if(phone.length !== 10){
        phoneError.innerHTML = 'Phone No should be 10 digits!';
        return false;
     }
     if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digits please!';
        return false;
     }
     phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
     return true;
}

function validateEmail(){
    var email = document.getElementById('emailId').value;
    
    if(email.length == 0){
        emailError.innerHTML = 'Email id is required!';
        return false;
     }
     if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Invalid email id';
        return false;
     }
     emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
     return true;
}
function validateMsg(){
    var Msg = document.getElementById('msg').value;
    var required = 30;
    var left = required - Msg.length;
    
    if(left > 0 ){
        msgError.innerHTML = left + ' more characters required';
        return false;
    }
    msgError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMsg() ){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please Fix the error first!';
        setTimeout(function(){
        submitError.style.display = 'none';

         }, 3000);
         return false;
    }
}