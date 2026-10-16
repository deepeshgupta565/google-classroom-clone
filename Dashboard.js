function hide()
{   
    
    const dashboard = document.querySelector(".dashboard");
   
         dashboard.style.display="none";
   
}
function show()
{   
    
    const dashboard = document.querySelector(".dashboard");
    
         dashboard.style.display="flex"; 
}

function showclasses()
{
    const options=document.querySelector(".options");
    options.style.display="block";
}
function hideclasses()
{
    const options=document.querySelector(".options");
    options.style.display="none";
}
const createclassmodel=document.querySelector("#createClassModal");
const closemodel=document.querySelector("#closeModal");
const cancelBtn = document.querySelector("#cancelBtn");
const createclassForm=document.querySelector(".createClassForm");
document.querySelector("#createclass").addEventListener("click",()=>{
    createclassmodel.classList.add("active");
})
closemodel.addEventListener("click",()=>{
    createclassmodel.classList.remove("active");
})
cancelBtn.addEventListener("click",()=>{
    createclassmodel.classList.remove("active");
})