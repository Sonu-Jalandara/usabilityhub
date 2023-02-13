function clearerrors(){
    errors=document.getElementsByClassName('formerror')
    for(let item of errors){
        item.innerHTML=""
    }
}
function seterror(id,error){
    
    let printerror=document.getElementById(id)
    printerror.getElementsByClassName('formerror')[0].innerHTML=error
}
function validateForm(){
    var returnval=true;
    clearerrors()
    var name=document.forms['myForm']["user_name"].value
    if(name.length<3){
        seterror("name","name should be atleast 4 characters long.")
        return returnval =false
    }
    var email=document.forms['myForm']['user_email'].value
    if(email.length>34){
        seterror('email',"email is too long.")
        return returnval =false
    }
    var password=document.forms['myForm']['user_password'].value
    if(password.length<6){
        seterror('password',"password should be atleast 6 characters long.")
         return returnval =false
    }
    return returnval
}
