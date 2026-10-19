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
    option.classList.remove("active");
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

const classname = document.querySelector("#classname");
const section = document.querySelector("#section");
const subject = document.querySelector("#subject");
const room = document.querySelector("#room");
const createClassBtn = document.querySelector("#createBtn");
const cancelClassBtn = document.querySelector("#cancelBtn");
let classes =[];
const classcards = document.querySelector("#classcards");
createClassBtn.addEventListener("click",()=>{
        const classnamevalue=classname.value;
        const sectionvalue = section.value;
        const subjectvalue = subject.value;
        const roomvalue = room.value;
        console.log(classnamevalue);
        console.log(sectionvalue);
        console.log(subjectvalue);
        console.log(roomvalue);
       const classcode=genrateclasscode();
       console.log(classcode);
       const newclass={
        classname: classnamevalue,
        section: sectionvalue,
        subject: subjectvalue,
        room: roomvalue,
        classcode: classcode
       };
       classes.push(newclass);
       console.log(classes);
       const card = document.createElement("div");
       card.classList.add("class-card");
       const cardtitle = document.createElement("h3");
       cardtitle.textContent=newclass.classname;
       card.appendChild(cardtitle);
       classcards.appendChild(card);
       const cardsections = document.createElement("p");
       cardsections.textContent=newclass.section;
       card.appendChild(cardsections);
       const cardsubject = document.createElement("p");
       cardsubject.textContent= "Subject" +newclass.subject;
       card.appendChild(cardsubject);
       const cardRoom = document.createElement("p");
       cardRoom.textContent=newclass.room;
       card.appendChild(cardRoom);
       const cardclasscode = document.createElement("p");
       cardclasscode.textContent="ClassCode "+ newclass.classcode;
       card.appendChild(cardclasscode);
       classname.value="";
       section.value="";
       subject.value="";
       room.value="";
       createclassmodel.classList.remove("active");


});

function genrateclasscode()
{
    const character = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
   
    let code=""
    for(let i=0;i<6;i++)
    {
        const randomindex = Math.floor(Math.random()*character.length);
        const randomcharecter = character[randomindex];
        code+=randomcharecter;
        
    }
    return code;
}