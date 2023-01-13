
// console.log(document);

let value;

value=document.all;// tüm html sayfa elementleri gelir

value=document.all.length; //element sayısını verir

value=document.all[16]; // id de yazılı indexli elementi verir

value=document.all[document.all.length-1];// saydaki son elementi verir

value=document.body;

value=document.location;

value=document.URL;

value=document.head;




const elements=document.all; 

const collections=Array.from(elements); //Html collection verir  - dizi olarak collections'a gönderdik
//tüm elementleri forEach ile görüntülemek için array oluşturmamız gerekir



collections.forEach(function(collection){
    console.log(collection);
});  //collections içindeki elementleri consolda görüntüledik

console.clear();

// linklerle çalışma
value=document.links; //sayfadaki link elementlerini seçeriz

value=document.links[1];

value=document.links[0].getAttribute("href");

value=document.links[0].getAttribute("class");//link içerisindeki özellikler seçilir(class) 

value=document.links[0].className; // aynı işlemi yapar


//scriptlerle çalışma

value=document.scripts;

value=document.scripts.length;// script sayısı
value=document.scripts[1];




//formlarla çalışma

value=document.forms;

value=document.forms.length;

value=document.forms[0];

value=document.forms[0].getAttribute("id");

value=document.forms[0].id; //form id si alınır 

value=document.forms[0].name;

value=document.forms[0].action;
console.log(value); 
