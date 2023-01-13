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


const header=document.querySelector(".card-header");
const taskInput=document.querySelector("#filter");

taskInput.addEventListener("keyup",textDegistir);

function textDegistir(e){
    header.textContent=e.target.value;
    console.log(e.target.value);
}

