function validateform() {
    console.log('Inside fucn');
    if (checkname1()) {
        if (checkaddress1()) {
            if (checkemail1()) {
                if (checkbranch1()) {
                    if (checkcollege1()) {
                        if (check_age1()) {
                            if (checkphn1()) {
                                if (checkpassword1())
                                    return true;
                            }
                        }
                    }
                }
            }
        }
    }
    return false;

}
function check_name(event) {
    let code = event.which;
    if (code > 47 && code < 58)
        return false
    else
        return true;
}
function checkname1() {
    if (!checkname()) {
        document.getElementById("address").disabled = true;
        document.getElementById("Email").disabled = true;
        document.getElementById("branch").disabled = true;
        document.getElementById("college").disabled = true;
        document.getElementById("Age").disabled = true;
        document.getElementById("phonenumber").disabled = true;
        document.getElementById("uname").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("repassword").disabled = true;
        return false;
    }
    if (checkname()) {
        document.getElementById("address").disabled = false;
        
        return true;
    }
}
function checkaddress1() {
    if (!checkaddress()) {
        document.getElementById("Email").disabled = true;
        document.getElementById("branch").disabled = true;
        document.getElementById("college").disabled = true;
        document.getElementById("Age").disabled = true;
        document.getElementById("phonenumber").disabled = true;
        document.getElementById("uname").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("repassword").disabled = true;
        return false;
    }
    if (checkaddress()) {
        document.getElementById("Email").disabled = false;
        
        return true;
    }
}
function checkemail1() {
    if (!checkemail()) {
        
        document.getElementById("branch").disabled = true;
        document.getElementById("college").disabled = true;
        document.getElementById("Age").disabled = true;
        document.getElementById("phonenumber").disabled = true;
        document.getElementById("uname").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("repassword").disabled = true;
        return false;
    }
    if (checkemail()) {
        document.getElementById("branch").disabled = false;
        return true;
    }
}
function checkbranch1() {
    if (!checkbranch()) {
        
        document.getElementById("college").disabled = true;
        document.getElementById("Age").disabled = true;
        document.getElementById("phonenumber").disabled = true;
        document.getElementById("uname").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("repassword").disabled = true;
        return false;
    }
    if (checkbranch()) {
        document.getElementById("college").disabled = false;
        return true;
    }
}
function checkcollege1() {
    if (!checkcollege()) {
        
        
        document.getElementById("Age").disabled = true;
        document.getElementById("phonenumber").disabled = true;
        document.getElementById("uname").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("repassword").disabled = true;
        return false;
    }
    if (checkcollege()) {
        document.getElementById("Age").disabled = false;
        return true;
    }
}
function check_age1() {
    if (!check_age()) {
        
        document.getElementById("phonenumber").disabled = true;
        document.getElementById("uname").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("repassword").disabled = true;
        return false;
    }
    if (check_age()) {
        document.getElementById("phonenumber").disabled = false;
        return true;
    }
}
function checkphn1() {
    if (!checkphn()) {
        
        document.getElementById("uname").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("repassword").disabled = true;
        return false;
    }
    if (checkphn()) {
        document.getElementById("uname").disabled = false;
        document.getElementById("uname").disabled = false;
        document.getElementById("uname").disabled = false;
        return true;
    }
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
        document.getElementById('name').style.borderColor = "green";
        document.getElementById('name').style.borderWidth = "thick";
        return true;
    }
}
function checkemail() {
    var email = document.getElementById('Email').value;
    const regex1 = /^([a-z0-9\.-]+)@university.in$/;
    //console.log(email);
    if (regex1.test(email)) {
        document.getElementById('Email').style.borderColor = "green";
        document.getElementById('Email').style.borderWidth = "thick";
        return true;

    }
    else {
        
        document.getElementById('Email').style.borderColor = "red";
        document.getElementById('Email').style.borderWidth = "thick";
        return false;
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
        document.getElementById('address').style.borderColor = "green";
        return true;
}
function check() {
    var password = document.getElementById('password').value;
    var flag = 1;
    console.log(document.getElementById('password').value);
    if (password == "") {
        document.getElementById('password').style.borderColor = "red";
        document.getElementById('password').style.borderWidth = "thick";
        document.getElementById('message').textContent = "Password cannot be blank";
        document.getElementById('message').style.color = "red";
        flag = 0;
        return false;
    }
    else if (password.length < 5) {
        document.getElementById('password').style.borderColor = "red";
        document.getElementById('password').style.borderWidth = "thick";
        document.getElementById('message').textContent = "Password is too small ";
        document.getElementById('message').style.color = "red";
        flag = 0;
        return false;
    }
    re = /[0-9]/;
    if (!re.test(password)) {
        document.getElementById('password').style.borderColor = "red";
        document.getElementById('password').style.borderWidth = "thick";
        document.getElementById('message').textContent = "Number is missing";
        document.getElementById('message').style.color = "red";
        flag = 0;
        return false;
    }
    re = /[a-z]/;
    if (!re.test(password)) {
        document.getElementById('password').style.borderColor = "red";
        document.getElementById('password').style.borderWidth = "thick";
        document.getElementById('message').textContent = "Small letters are missing";
        document.getElementById('message').style.color = "red";
        flag = 0;
        return false;
    }
    re = /[A-Z]/;
    if (!re.test(password)) {
        document.getElementById('password').style.borderColor = "red";
        document.getElementById('password').style.borderWidth = "thick";
        document.getElementById('message').textContent = "Password must contain at least one uppercase letter (A-Z)!";
        document.getElementById('message').style.color = "red";
        flag = 0;
        return false;
    }
    re = /[ ~`!@#$%^&*()-_+={}[\]\?\;:"<>,.]/
    if (!re.test(password)) {
        document.getElementById('password').style.borderColor = "red";
        document.getElementById('password').style.borderWidth = "thick";
        document.getElementById('message').textContent = "Password must contain at least one special character!";
        document.getElementById('message').style.color = "red";
        flag = 0;
        return false;
    }
    re = /([A-Za-z0-9~`!@#$%^&*()-_+={}[\]|;:"<>,./\\?])+/
    if (!re.test(password)) {
        document.getElementById('password').style.borderColor = "red";
        document.getElementById('password').style.borderWidth = "thick";
        document.getElementById('message').textContent = " Password must contain at least one special character in the middle!";
        document.getElementById('message').style.color = "red";
        flag = 0;
        return false;
    }
    if (flag) {
        document.getElementById('message').textContent = "";
        document.getElementById('password').style.borderColor = "green";
        document.getElementById('password').style.borderWidth = "thick";
        return true;
    }
}

function checkphn() {
    var phn = document.getElementById('phonenumber').value;
    const regex1 = /^\d{10}$/;
    if (regex1.test(phn)) {
        document.getElementById('phonenumber').style.borderColor = "green";
        document.getElementById('phonenumber').style.borderWidth = "thick";
        return true;

    }
    else {
        
        document.getElementById('phonenumber').style.borderColor = "red";
        document.getElementById('phonenumber').style.borderWidth = "thick";
        return false;
    }
}
function check_age() {
    var age = document.getElementById('Age').value;
    if (age < 0) {
        alert('Age cannot be negative!')
        document.getElementById('Age').style.borderColor = "red";
        document.getElementById('Age').style.borderWidth = "thick";
        return false;
    }
    else
    {
        document.getElementById('Age').style.borderColor = "green";
        document.getElementById('Age').style.borderWidth = "thick";
        return true;
    }
}

function checkuname() {
    if (document.getElementById('uname').value == "") {
        alert('Username cannot be blank!')
        document.getElementById('uname').style.borderColor = "red";
        document.getElementById('uname').style.borderWidth = "thick";
        return false;
    }
    else
    {
        document.getElementById('uname').style.borderColor = "green";
        document.getElementById('uname').style.borderWidth = "thick";
        document.getElementById("password").disabled = false;
        document.getElementById("repassword").disabled = false;
        return true;
    }
        
}
function setCookie() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("Email").value;
    alert('Cookies accepted!!!')
    document.cookie = "username=" + name + ";expires=Fri,9 Feb 2022 04:00:00 UTC;"
    document.cookie = "emailId=" + email + ";expires=Fri,10 Feb 2022 01:00:00 UTC;";
}
window.onload = function () {
    if (document.cookie.length != 0) {
        var color, i, img;
        var arr = document.cookie.split(";");
        console.log(arr)
        for (i = 0; i < arr.length; i++) {
            if (arr[i].includes("username=")) {
                username = arr[i].split("=")[1];
            }
            if (arr[i].includes("emailId")) {
                email = arr[i].split("=")[1];
            }
        }
        document.getElementById("name").value = username;
        document.getElementById("email").value = email;
    }
}

function checkbranch() {
    if (document.getElementById('branch').value == "") {
        alert('Branch cannot be blank!')
        document.getElementById('branch').style.borderColor = "red";
        document.getElementById('branch').style.borderWidth = "thick";
        return false;
    }
    else
    {
        document.getElementById('branch').style.borderColor = "green";
        document.getElementById('branch').style.borderWidth = "thick";
        return true;
    }
        
}
function checkcollege() {
    if (document.getElementById('college').value == "") {
        alert('College cannot be blank!')
        document.getElementById('college').style.borderColor = "red";
        document.getElementById('college').style.borderWidth = "thick";
        return false;
    }
    else
    {
        document.getElementById('college').style.borderColor = "green";
        document.getElementById('college').style.borderWidth = "thick";
        return true;
    }
        
}