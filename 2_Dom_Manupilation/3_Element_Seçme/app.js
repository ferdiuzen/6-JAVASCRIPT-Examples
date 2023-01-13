// // let element;

// // //elementler id, class name, name , tagName e göre seçilebilir



// // element=document.getElementById("todo-form"); //todo-form id si seçilir varsa gelir

// // //id ye göre seçim
// // element=document.getElementById("tasks-title");


// // //Class Class Name e göre seçim
// // element=document.getElementsByClassName("delete-item")[0];


// // //tag e göre seçim

// // element=document.getElementsByTagName("div")[7];


// // // name e göre seçim

// // element=document.getElementsByName("filter")[1];

// // element=document.getElementById("todo-form"); 
// // element=document.getElementsByName("filter")[1];
// // console.log(element);


// // // query selector - css selector

// // element =document.querySelector("#todo-form");

// // element=document.querySelector(".card-header");

// // element=document.querySelector(".card-body");// yazılan  nesneden birden fazla varsa  sayfadaki ilki seçilir

// // // element=document.querySelector("li"); //sayfada bulduğu ilk li elemanı seçer

// // // querySelectorAll node list getirir Array yapısına benzer
// // // element=document.querySelectorAll(".list-group-item");

// // // element.forEach(function(element1){
// // //     console.log(element1);
// // // });

// // // console.clear();



// const element=document.querySelector(".clear-todos");


// console.log(element.id);

// console.log(element.className);

// console.log(element.classList); //elemente tanımlı tüm class lar listelenir


// // console.log(element.textContent);//sadece text içeriği alınır

// console.log(element.innerHTML); // aynı görünsede içeriği html kısmı ile beraber seçer

// console.log(element.style); //tüm css özellikleri gelir


// // STYLE VE ELEMENT ÖZELLİKLERİNİ DEĞİŞTİRME

// element.className="btn btn-danger";

// element.style.color="white";

// element.style.marginLeft="3rem";

// element.href="https:\\www.youtube.com";

// element.textContent="You Tobe Giriş";

// element.innerHTML="<span style='color:white'> You Tube </span>"; //innerHTML'de içerik ile beraber HTML özelliklerde eklenerek işlem yapılabilir


// // li

// let element2=document.querySelector("li:last-child"); //listteki son eleman seçildi

// console.clear();

// const elements=document.querySelectorAll(".list-group-item"); //Node List Gelir

// elements.forEach(function(element_list_gr){
//     element_list_gr.style.background="black";
//     element_list_gr.style.color="yellow";
 
// });

// console.log(elements);

// // li:nth-child(1)    li'nin 1.child
// // li:nth-child(odd) tekli sayılar  1 - 3- 5 -7 ...sırasıyla seçilir
// // li:nth-child(even) çiftli sayılar 2-4-6-8.... elementler seçilir


element3=document.querySelectorAll("li:nth-child(1)");

element3=document.querySelectorAll("li:nth-child(odd)");//sadece tek olan elementlerin rengi değişir

element3.forEach(function(element_list_gr){
        element_list_gr.style.background="lightgray";
       element_list_gr.style.color="black";
     
     });

console.log(element3);









