function validateform() {
  console.log('Inside fucn');
  var array = [checkname(), checkaddress(), checkemail(), checkpassword(), checksame()]
  console.log(array)
  if (!array.includes(false)) {
    console.log(true);
    return true;
  }
  else
    return false;
}

function check_name(event) {
  let code = event.which;
  if (code > 47 && code < 58)
    return false;
  else
    return true;
}

function checkname() {
  var name = document.getElementById('name').value;
  if (name == "") {
    alert('Please enter a name!');
    document.getElementById('name').style.borderColor = "red";
    document.getElementById('name').style.borderWidth = "thick";
    return false;
  }
  else {
    return true;
  }
}
function checkemail() {
  var email = document.getElementById('Email').value;
  const regex1 = /^([a-z0-9\.-]+)@christschool.in$/;
  //console.log(email);
  if (regex1.test(email)) {
    return true;

  }
  else {
    alert('Email is not valid!')
    document.getElementById('Email').style.borderColor = "red";
    document.getElementById('Email').style.borderWidth = "thick";
    return false;
  }
}

function checkpassword() {
  var password = document.getElementById('password').value;
  if (password == "") {
    alert('Password cannot be blank!')
    document.getElementById('password').style.borderColor = "red";
    document.getElementById('password').style.borderWidth = "thick";
    return false;
  }
  else if (password.length < 5) {
    alert('Password is too short!')
    document.getElementById('password').style.borderColor = "red";
    document.getElementById('password').style.borderWidth = "thick";
    return false;
  }
  re = /[0-9]/;
  if (!re.test(password)) {
    alert("Error: password must contain at least one number (0-9)!");
    document.getElementById('password').style.borderColor = "red";
    document.getElementById('password').style.borderWidth = "thick";
    return false;
  }
  re = /[a-z]/;
  if (!re.test(password)) {
    alert("Error: password must contain at least one lowercase letter (a-z)!");
    document.getElementById('password').style.borderColor = "red";
    document.getElementById('password').style.borderWidth = "thick";

    return false;
  }
  re = /[A-Z]/;
  if (!re.test(password)) {
    alert("Error: password must contain at least one uppercase letter (A-Z)!");
    document.getElementById('password').style.borderColor = "red";
    document.getElementById('password').style.borderWidth = "thick";

    return false;
  }
  re = /[ ~`!@#$%^&*()-_+={}[\]\?\;:"<>,.]/
  if (!re.test(password)) {
    alert("Error: password must contain at least one special character!");
    document.getElementById('password').style.borderColor = "red";
    document.getElementById('password').style.borderWidth = "thick";
    return false;
  }
  re = /([A-Za-z0-9~`!@#$%^&*()-_+={}[\]|;:"<>,./\\?])+/
  if (!re.test(password)) {
    alert("Error: password must contain at least one special character in the middle!");
    document.getElementById('password').style.borderColor = "red";
    document.getElementById('password').style.borderWidth = "thick";
    return false;
  }
  else {
    return true;
  }
}
function checksame() {
  var password = document.getElementById('password').value;
  var repassword = document.getElementById('repassword').value;
  if (password != repassword) {
    alert('Passwords dont match!')
    return false;
  }
  else
    return true;
}
function checkaddress() {
  if (document.getElementById('address').value == "") {
    alert('Address cannot be blank!')
    document.getElementById('address').style.borderColor = "red";
    document.getElementById('address').style.borderWidth = "thick";
    return false;
  }
  else
    return true;
}

function check() {
  var password = document.getElementById('password').value;
  var flag=1;
  console.log(document.getElementById('password').value);
  if (password == "") {
    document.getElementById('password').style.borderColor = "red";
    document.getElementById('password').style.borderWidth = "thick";
    document.getElementById('message').textContent = "Password cannot be blank";
    document.getElementById('message').style.color="red";
    flag=0;
    //return false;
  }
  else if (password.length < 5) {
    document.getElementById('password').style.borderColor = "red";
    document.getElementById('password').style.borderWidth = "thick";
    document.getElementById('message').textContent = "Password is too small ";
    document.getElementById('message').style.color="red";
    flag=0;
    //return false;
  }
  re = /[0-9]/;
  if (!re.test(password)) {
    document.getElementById('password').style.borderColor = "red";
    document.getElementById('password').style.borderWidth = "thick";
    document.getElementById('message').textContent = "Number is missing";
    document.getElementById('message').style.color="red";
    flag=0;
    //return false;
  }
  re = /[a-z]/;
  if (!re.test(password)) {
    document.getElementById('password').style.borderColor = "red";
    document.getElementById('password').style.borderWidth = "thick";
    document.getElementById('message').textContent = "Small letters are missing";
    document.getElementById('message').style.color="red";
    flag=0;
    //return false;
  }
  re = /[A-Z]/;
  if (!re.test(password)) {
    document.getElementById('password').style.borderColor = "red";
    document.getElementById('password').style.borderWidth = "thick";
    document.getElementById('message').textContent = "Password must contain at least one uppercase letter (A-Z)!";
    document.getElementById('message').style.color="red";
    flag=0;
    //return false;
  }
  re = /[ ~`!@#$%^&*()-_+={}[\]\?\;:"<>,.]/
  if (!re.test(password)) {
    document.getElementById('password').style.borderColor = "red";
    document.getElementById('password').style.borderWidth = "thick";
    document.getElementById('message').textContent = "Password must contain at least one special character!";
    document.getElementById('message').style.color="red";
    flag=0;
    //return false;
  }
  re = /([A-Za-z0-9~`!@#$%^&*()-_+={}[\]|;:"<>,./\\?])+/
  if (!re.test(password)) {
    document.getElementById('password').style.borderColor = "red";
    document.getElementById('password').style.borderWidth = "thick";
    document.getElementById('message').textContent = " Password must contain at least one special character in the middle!";
    document.getElementById('message').style.color="red";
    flag=0;
    //return false;
  }
  if(flag) {
    document.getElementById('message').textContent = "";
    document.getElementById('password').style.borderColor = "green";
    document.getElementById('password').style.borderWidth = "thick";
    return true;
  }
}