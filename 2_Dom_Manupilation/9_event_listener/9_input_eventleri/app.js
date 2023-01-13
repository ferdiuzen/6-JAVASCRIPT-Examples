const filter=document.getElementById("filter");

console.log(filter);

filter.addEventListener("focus",run);


filter.addEventListener("blur",run);

filter.addEventListener("copy",run);
filter.addEventListener("paste",run);

function run(event){
    console.log(event.type);
   
}

