
const container = document.getElementById("container");
const backbody = document.getElementById("backbody");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");

function rm(){
    container.classList.remove("color1");
    backbody.classList.remove("color1");
    container.classList.remove("color2");
    backbody.classList.remove("color2");
    container.classList.remove("color3");
    backbody.classList.remove("color3");
    container.classList.remove("color4");
    backbody.classList.remove("color4");
    container.classList.remove("color5");
    backbody.classList.remove("color5");
}
btn1.addEventListener("click",()=>{
    rm();
    container.classList.add("color1");
    backbody.classList.add("color1");    
})
btn2.addEventListener("click",()=>{
    rm();
    container.classList.add("color2");
    backbody.classList.add("color2");
})

btn3.addEventListener("click",()=>{
    rm();    
    container.classList.add("color3");
    backbody.classList.add("color3");
})

btn4.addEventListener("click",()=>{
    rm();
    container.classList.add("color4");
    backbody.classList.add("color4");
})

btn5.addEventListener("click",()=>{
    rm();
    container.classList.add("color5");
    backbody.classList.add("color5");
})

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

setInterval(function(){
    const time = new Date();
    txt1.innerHTML=time.getDate();
    txt2.innerHTML=month[time.getMonth()];
    txt3.innerHTML=time.getFullYear();
    txt4.innerHTML = time.toLocaleTimeString();
},1000);
