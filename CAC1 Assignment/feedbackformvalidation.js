function validateform()
{
    console.log('Inside fucn');
    var array=[checkname(),checkaddress(),checkemail(),checkpassword(), checksame()]
    console.log(array)
    if (!array.includes(false))
    {
         console.log(true);
                    return true;
    } 
    else
    return false;
} 

function check_name(event)
{
    let code=event.which;
            if(code>47 && code<58)
            return false;
            else
            return true;
}

function checkname()
{
  var name=document.getElementById('name').value;
  if(name=="")
  {
    alert('Please enter a name!');
    return false;
  }
  else{
    return true;
  }
}
function checkemail()
{
    var email= document.getElementById('Email').value; 
    const regex1=/^([a-z0-9\.-]+)@christschool.in$/;
    //console.log(email);
       if(regex1.test(email))
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
    re= /[ ~`!@#$%^&*()-_+={}[\]\?\;:"<>,.]/
    if (!re.test(password))
    {
        alert("Error: password must contain at least one special character!");
        return false;
    }
    re=/([A-Za-z0-9~`!@#$%^&*()-_+={}[\]|;:"<>,./\\?])+/
    if (!re.test(password))
    {
        alert("Error: password must contain at least one special character in the middle!");
        return false;
    }
  else {
    return true;
  }
}
function checksame()
{
    var password= document.getElementById('password').value; 
    var repassword= document.getElementById('repassword').value; 
    if(password!=repassword)
    {
        alert('Passwords dont match!')
        return false;
    }
    else
    return true;
}
function checkaddress(){
  if(document.getElementById('address').value=="")
  {
    alert('Address cannot be blank!')
    return false;
  }
  else
  return true;
}