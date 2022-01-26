function setCookie()
       {
           var name=document.getElementById("name").value;
           var email=document.getElementById("Email").value;
           document.cookie="username="+name+";expires=Fri,29 Jan 2022 04:00:00 UTC;"
           document.cookie="emailId="+email+";expires=Fri,28 Jan 2022 01:00:00 UTC;";
       }
function getCookie()
       {
           if(document.cookie.length!=0)
           {
               alert(document.cookie);
           }
           else{
               alert("No cookies");
           }
       }
function show()
       {
           var value=document.getElementById("demo").value;
           if(value!="Select Color")
           {
               document.bgColor=value;
               document.cookie="color="+value+";expires=Fri,2 Feb 2022 01:00:00 UTC;";
           }
       }
window.onload=function()
       {
           if(document.cookie.length!=0)
           {
               var color=document.cookie.split("=");
               document.getElementById("demo").value=color[1];
               document.bgColor=color[1];
           }
       }

function remove(){
    if(document.cookie.length!=0)
    {
        var arr=document.cookie.split("=");
        console.log(arr)
        document.cookie = arr[0] +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        alert('Cookie deleted!')
    }
}