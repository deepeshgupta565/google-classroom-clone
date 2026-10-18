const dashboards=document.querySelector("#Dashboards");
const openBtn = document.querySelector("#bars")
openBtn.addEventListener("click",()=>{
    dashboards.classList.toggle("active");
})
const option = document.querySelector("#option")
const add = document.querySelector("#adds");
add.addEventListener("click",()=>{
    option.classList.toggle("active");
})
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
const joinClassmodel = document.querySelector("#joinClassModel");
const joinBtn = document.querySelector("#JoinBtn");
const cancelBtns = document.querySelector("#cancelBtns")
const closemodels = document.querySelector("#closeModals");
document.querySelector("#joinclass").addEventListener("click",()=>{
    joinClassmodel.classList.add("active");

});
closemodels.addEventListener("click",()=>{
    joinClassmodel.classList.remove("active");
})
cancelBtns.addEventListener("click",()=>{
    joinClassmodel.classList.remove("active");
})
const showcalender=document.querySelector("#showcalender");
const calenderbtn=document.querySelector("#Calender");
calenderbtn.addEventListener("click",()=>{
    showcalender.classList.toggle("active");
})
const calender = document.querySelector("#calenders");
const monthyear = document.querySelector("#monthyear");
const prevBtn = document.querySelector("#prevmonth");
const nextBtn=document.querySelector("#nextmonth");
let currentdate = new Date();

function genratecalender()
{
     calender.innerHTML = `
        <div class="day">Sun</div>
        <div class="day">Mon</div>
        <div class="day">Tue</div>
        <div class="day">Wed</div>
        <div class="day">Thu</div>
        <div class="day">Fri</div>
        <div class="day">Sat</div>
    `;
    const currentyear = currentdate.getFullYear();
    const currentmonth = currentdate.getMonth();
    const monthname = currentdate.toLocaleString("default",{
        month:"long"

    });
    monthyear.textContent=`${monthname},${currentyear}`;
    const firstday=new Date(currentyear,currentmonth,1).getDay();
    const totalday = new Date(currentyear, currentmonth + 1, 0).getDate();
    for (let i = 0; i <firstday; i++) {

    const emptyDate = document.createElement("div");

    emptyDate.classList.add("date");

    calender.appendChild(emptyDate);
}
    for(let day=1; day<=totalday;day++)
    {
        const dateElement = document.createElement("div");
        dateElement.classList.add("date");
        dateElement.textContent=day;
        if(day===new Date().getDate() &&
            currentmonth=== new Date().getMonth()&&
            currentyear===new Date().getFullYear()
        )
        {
            dateElement.classList.add("today");
        }
        calender.appendChild(dateElement);
    }
}
genratecalender();
prevBtn.addEventListener("click",()=>{
    currentdate.setMonth(currentdate.getMonth()-1);
    genratecalender();
});
nextBtn.addEventListener("click",()=>{
    currentdate.setMonth(currentdate.getMonth()+1);
    genratecalender();
})