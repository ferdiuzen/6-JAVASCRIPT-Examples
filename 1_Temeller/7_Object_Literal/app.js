// Object Literal - Obje Oluşturma

let value;

const programmer={
name:"Hamza Murat Yılmaz",
age:28,
email:"hamzamurat@gmail.com",
langs:["C#","React","Mvc","Flutter"],
address:{
    city:"Fatih",
    street:"Ayvansaray Cd"
},
 
 work:function(){ 
    console.log("Elementler çalışıyor");
 }

}


value=programmer;


value=programmer.name;

value=programmer.email;

value=programmer.work();

value=programmer.langs;

value=programmer.address.street;

console.log(value);

//iki özelliği olan bir obje oluşturuldu
const programmers=[
    {name:"Zeynep" , age:"24",email:"zeynep@email.com"},
    {name:"Zehra",age:"26",email:"zehra@email.com"}//ikinci obje
];

value=programmers;

value=programmers[1]; //2.kayıt görüntülenir

value=programmers[1].email;

console.log(value);