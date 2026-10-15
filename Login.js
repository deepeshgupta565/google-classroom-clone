let email=document.querySelector("#email").value;
let pass=document.querySelector("#pass").value;
let loginbtn=document.getElementById("btn1");
let msgbox1=document.getElementById("msg1");
let msgbox2=document.getElementById("msg");
loginbtn.addEventListener("submit",function (event) {
        if (email== ' ') {
            alert("Plese Enter Email");
        }
    });