function validatesignup()
{
    console.log('Inside fucn');
    var array=[checkemail(),checkpassword()]
    console.log(array)
    if (array.includes(false))
    {
         console.log(true);
                    return true;
    } 
    else
    return false;
} 
function checkCardOwner(event)
{
    let code=event.which;
            if(code>47 && code<58)
            return false
            else
            return true;
}

function checkemail()
{
    var email= document.getElementById('Email').value; 
    const regex1=/^([a-z0-9\.-]+)@([a-z0-9]+)\.([a-z]{1,8})$/;
       const regex2= /^([a-z0-9\.-]+)@([a-z0-9]+)\.([a-z]{1,8})(.[a-z]{1,8})$/;
       if(regex1.test(email)||regex2.test(email))
       {
         return true; 
       }
       else{
           alert('Email is not valid!')
           return false;
       }
}

function checkpassword()
{
    var password= document.getElementById('password').value; 
    if(password=="")
    {
        alert('Password cannot be blank!')
        return false;
    }
    else if(password.length < 5)
    {
        alert('Password is too short!')
        return false;
    }
    re = /[0-9]/;
    if(!re.test(password)) {
      alert("Error: password must contain at least one number (0-9)!");
      return false;
    }
    re = /[a-z]/;
    if(!re.test(password)) {
      alert("Error: password must contain at least one lowercase letter (a-z)!");
      
      return false;
    }
    re = /[A-Z]/;
    if(!re.test(password)) {
      alert("Error: password must contain at least one uppercase letter (A-Z)!");

      return false;
    }
    re= /[~`!@#$%^&*()-_+={}[]\|\;:"<>,.\/\?]/
    if (!re.test(password))
    {
        alert("Error: password must contain at least one special character!");
        return false;
    }
  else {
    alert("Error: Please check that you've entered and confirmed your password!");
    return false;
  }
}
