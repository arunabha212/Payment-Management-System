function checkCardNumber(event)
{
    let code=event.which;
            if(!(code>47 && code<58))
            return false;
            else
            return true;
}
function checkCardOwner(event)
{
    let code=event.which;
            if(code>47 && code<58)
            return false
            else
            return true;
}

function validatefields()
{
    var a=checkcardname()
    var b=checkcardno()
    var c=checkexpdate()
    var d=checkCVV()
    
    var array=[a,b,c,d]
    console.log(array)
    if (!array.includes(false))
    {
         console.log(true);
                    return true;
    } 
    else
    return false;
}

function checkcardname()
{
    var name=document.getElementById("name");
    if(name.value.trim()=="")
           {
               alert("Blank Username");
               
               return false;
           }
    else
    {
        localStorage.setItem("username", name);    
        return true;
    }
    

}

function checkcardno()
{
    var num=document.getElementById("cardno").value;
    var regex = new RegExp("[0-9]{13,19}$");
    if (!regex.test(num))
    {
        alert('Not a Valid Card Number')
        document.getElementById("cardno").style.borderColor="red";
        document.getElementById("cardno").style.borderWidth="thick";
        return false;
    }
        

    if (!Checkluhn(num))
    {
        alert('Invalid Card Number')
        return false;
    }
    else
    {
        sessionStorage.setItem("Card-Number", num);    
        return true;
    }
}
function Checkluhn(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}

function checkexpdate()
{
   
    var month=document.getElementById("month").value;
    var year=document.getElementById("year").value;
    
    var expdate=new Date(year + '-'+ month+'-01');
    if(expdate<new Date())
    {
        alert('The Expiry date is less than current date');
        return false;
    }
    else
    return true;
}

function checkCVV()
{
    var num=document.getElementById("CVV").value;
    var regex = new RegExp("[0-9]{3}$");
    if (!regex.test(num))
    {
        alert('Invalid CVV')
        return false;
    }
    else
    return true;
}