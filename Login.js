let email=document.querySelector("#email");
let pass=document.querySelector("#pass");
let loginbtn=document.getElementById("btn1");
let msgbox1=document.getElementById("msg1");
let msgbox2=document.getElementById("msg");
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit",(event)=>{
    event.preventDefault();
     const emailValue = email.value.trim();
     const passValue = pass.value.trim();
    if(emailValue==="")
    {
         msgbox1.textContent="Email is required";
         return ;
    }
   msgbox1.textContent="";
   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(emailValue))
    {
        msgbox1.textContent="Please enter valid email address"
        return ;
    }
    msgbox1.textContent="";


    if(passValue==="")
    {
        msgbox2.textContent="Password is required";
        return;
    }
    msgbox2.textContent="";
    if(passValue.length<8)
    {
        msgbox2.textContent="Please enter password atleast 8 charecters";
        return ;
    }
    msgbox2.textContent="";
    if(!/[A-Z]/.test(passValue))
    {
        msgbox2.textContent="Password must contain atleast one UpperCase letter";
        return;
    }
    msgbox2.textContent="";
   if(!/[a-z]/.test(passValue))
   {
        msgbox2.textContent="Password must contain atleast one LowerCase letter";
        return;
   }
   msgbox2.textContent="";
   if(!/[0-9]/.test(passValue))
   {
    msgbox2.textContent="Password must contain atleast one Numeric Value";
    return;
   }
   msgbox2.textContent="";
   if(!/[~!@#$%^&*]/.test(passValue))
   {
    msgbox2.textContent="Password must contain atleast one Special Symbol";
    return;
   }
   msgbox2.textContent="";
   window.location.href="Dashboard.html";
})
 
