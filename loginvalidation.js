function validatesignup()
{
    console.log('Inside fucn');
    var array=[checkname(),checkemail(),checkpassword(), checksame()]
    console.log(array)
    if (!array.includes(false))
    {
         console.log(true);
        alert('Form Submitted Successfully!')
        return true;
    } 
    else
    {
      console.log(false);
      return false;
    }
    
} 
function checkCardOwner(event)
{
    let code=event.which;
            if(code>47 && code<58)
            return false
            else
            return true;
}
function checkname()
{
  var name=document.getElementById('name').value;
  if(name=="")
  {
    alert('Please enter a name!');
    document.getElementById('name').style.borderColor="red";
    document.getElementById('name').style.borderWidth="thick";
    return false;
  }
  else{
    return true;
  }
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
           document.getElementById('Email').style.borderColor="red";
           document.getElementById('Email').style.borderWidth="thick";
           return false;
       }
}

function checkpassword()
{
    var password= document.getElementById('password').value; 
    if(password=="")
    {
        alert('Password cannot be blank!')
        document.getElementById('password').style.borderColor="red";
        document.getElementById('password').style.borderWidth="thick";
        return false;
    }
    else if(password.length < 5)
    {
        alert('Password is too short!')
        document.getElementById('password').style.borderColor="red";
        document.getElementById('password').style.borderWidth="thick";
        return false;
    }
    re = /[0-9]/;
    if(!re.test(password)) {
      alert("Error: password must contain at least one number (0-9)!");
      document.getElementById('password').style.borderColor="red";
      document.getElementById('password').style.borderWidth="thick";
      return false;
    }
    re = /[a-z]/;
    if(!re.test(password)) {
      alert("Error: password must contain at least one lowercase letter (a-z)!");
      document.getElementById('password').style.borderColor="red";
      document.getElementById('password').style.borderWidth="thick";
      return false;
    }
    re = /[A-Z]/;
    if(!re.test(password)) {
      alert("Error: password must contain at least one uppercase letter (A-Z)!");
      document.getElementById('password').style.borderColor="red";
      document.getElementById('password').style.borderWidth="thick";
      return false;
    }
    re= /[ ~`!@#$%^&*()-_+={}[\]\?\;:"<>,.]/
    if (!re.test(password))
    {
        alert("Error: password must contain at least one special character!");
        document.getElementById('password').style.borderColor="red";
        document.getElementById('password').style.borderWidth="thick";
        return false;
    }
    re=/([A-Za-z0-9~`!@#$%^&*()-_+={}[\]|;:"<>,./\\?])+/
    if (!re.test(password))
    {
        alert("Error: password must contain at least one special character in the middle!");
        document.getElementById('password').style.borderColor="red";
        document.getElementById('password').style.borderWidth="thick";
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
        document.getElementById('repassword').style.borderColor="red";
        document.getElementById('repassword').style.borderWidth="thick";
        return false;
    }
    else
    return true;
}