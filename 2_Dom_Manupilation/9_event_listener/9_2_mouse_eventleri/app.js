// const filter=document.getElementById("filter");

// console.log(filter);

// filter.addEventListener("focus",run);


// filter.addEventListener("blur",run);

// filter.addEventListener("copy",run);
// filter.addEventListener("paste",run);


//keypress   - Tuşa basılınca meydana gelen olay

// document.addEventListener("keypress",run);








//KeyDown --  tuşa basıldığında

// document.addEventListener("keydown",run);

// function run(event){

//     console.log(event.key);
//     console.log(event.which);
// }


//KeyUp -- tuş bırakıldığında

//KeyDown --  tuşa basıldığında

// document.addEventListener("keyup",run);

// function run(event){

//     console.log(event.key);
//     console.log(event.which);
// }


// const header=document.querySelector(".card-header");
// const taskInput=document.querySelector("#filter");

// taskInput.addEventListener("keyup",textDegistir);

// function textDegistir(e){
//     header.textContent=e.target.value;
//     console.log(e.target.value);
// }

// click event
const cardBody=document.querySelectorAll(".card-body");
const title=document.querySelector("#tasks-title");

// title.addEventListener("click",run);


// double click

// title.addEventListener("dblclick",run);

//mouseDown   Farede herhangi bir tuşa basınca

// title.addEventListener("mousedown",run);
// function run(event){
//     console.log(event.type);
// }


// Mouse Up fare tuşunu bırakınca
// title.addEventListener("mouseup",run);
// function run(event){
//     console.log(event.type);
// }

//Mouse Over üzerine gelindiğinde
// title.addEventListener("mouseover",run);
// function run(event){
//     console.log(event.type);
// }

//Mouse Out  elementin üzerinden çıkıldığında
title.addEventListener("mouseout",run);
function run(event){
    console.log(event.type);
}