function clearError(){
    errors=document.getElementsByClassName('form-error');

    for(let item of errors){
        item.innerHTML="";
    }
}
function validate(){

    clearError();
    var name=document.getElementById("name").value;
    var regno=document.getElementById("regno").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var cpassword=document.getElementById("cpassword").value;
    var phone=document.getElementById("phone").value;
    var addr=document.getElementById("addr").value;

    //name validation
    if(name==""){
        document.getElementById("name-error").innerHTML="** please enter the name";
        return false;
    }
    if(name.length<3){
        document.getElementById("name-error").innerHTML="** name should be greater than 3 and less than 10";
        return false;
    }
    if(!isNaN(name)){
        document.getElementById("name-error").innerHTML="** number not allowed";
        return false;
    }

    //regno validation
    if(regno==""){
        document.getElementById("regno-error").innerHTML="** please enter the registration number";
        return false;
    }
    if(regno.length!=10){
        document.getElementById("regno-error").innerHTML="** registration number should be 10 digits";
        return false;
    }
    if(isNaN(regno)==true){
        document.getElementById("regno-error").innerHTML="** please enter numbers only";
        return false;
    }

    let atPos=email.indexOf('@');
    let dotPos=email.indexOf('.');

    //email validation
    if(email==""){
        document.getElementById("email-error").innerHTML="** please enter the email id";
        return false;
    }
   
    if(atPos<=0 || atPos<=0 || dotPos-atPos<4 || atPos==email.length-1 || dotPos==email.length-1 ){
        document.getElementById("email-error").innerHTML="** please enter valid email";
        return false;
    }
   


    //password validation
    if(password==""){
        document.getElementById("password-error").innerHTML="** please enter the password";
        return false;
    }
    if(password.length<5 || password.length>12){
        document.getElementById("password-error").innerHTML="** password must be greater than 5 an less than 12";
        return false;
    }
    if(cpassword==""){
        document.getElementById("cpassword-error").innerHTML="** please enter the confirm password";
        return false;
    }
    if(password!=cpassword){
        document.getElementById("cpassword-error").innerHTML="** password not matched";
        return false;
    }

    //phone validation
    if(phone==""){
        document.getElementById("phone-error").innerHTML="** please enter the mobile number";
        return false;
    }
    if(isNaN(phone)){
        document.getElementById("phone-error").innerHTML="** number allowed only";
        return false;
    }
    if(phone.length!=10){
        document.getElementById("phone-error").innerHTML="** please enter 10 digit mobile number";
        return false;
    }

    //address validation
    if(addr==""){
        document.getElementById("addr-error").innerHTML="** please enter the address";
        return false;
    }
}
