let index;



// for(index=0;index<10;index++){
//     console.log("Merhaba"+index)
// }

index=50;

// while(index<10){
//   index++;
//   console.log("Merhaba  ."+index);

// }

// en az bir işlemin çalıştırılması istendiği durumda while yerine do  while döngüsü kullanılır
do{
  console.log("Merhaba "+index);
  index++;


}while(index<10);


// index=0;

// while(index<10){
//     console.log(index);
//     // index--; // sonsuz döngü olur
// }


// let i=0;
// while(i<10){
   

//     if(i==5){
//         break;// break çağrıldığı yerde sonlandırır
//     }
//     console.log(i);
//   i++;
// }


// let k=0;
// while(k<10){
  
//     k++;
//     console.log("Merhaba"+k);
//     // if(k==5){
//     //     continue;// continue 
//     // }

  
// }


// const langs=["HTML","CSS","Bootstrap","Javascript","MVC"];

// let i=0;

// while(i<langs.length){ //length eleman sayısıdır

// console.log(langs[i]);

// i++;


// }


//forEach kullanımı 

const langs=["HTML","CSS","Bootstrap","Javascript","MVC"];

langs.forEach(function(lang) // döngü ismi . forEach( function ....)
{
    console.log(lang);
});





// const programmers=[
//     {name:"Zeynep" , age:"24",email:"zeynep@email.com"},
//     {name:"Zehra",age:"26",email:"zehra@email.com"}//ikinci obje
// ];

const users=[  
   {  name:"Mustafa",
    lastname:"Yaşar",
    score:50},

    {  name:"Zehra",
    lastname:"Gümüş",
    score:80}
];

users.forEach(function(user) 
{
    console.log(user.score); 
    console.log(user.name)
    console.log(user.lastname); //Birden fazla objeli dizilerde referans verilerek istenilen değerler çağrılabilir ve listelenebilir
});



// for in döngüsü

for(let key in users) {
    console.log(users[key].score,users[key].name);
}



// Personels - dizi ismi
// FirstName://3 kayıt girilecek
// LastName:
// department:
// City:
// Salayr:/

const personels=[  
    {  firstname:"Mustafa",
     lastname:"Yaşar",
     department:"IT",
     city:"İstanbul",
    salary:27890,
    },
 
    {  firstname:"Efrun",
     lastname:"Evdi",
     department:"Siber",
     city:"Kırklareli",
    salary:50000,
    },

    {  firstname:"Ali Ramazan",
    lastname:"Savran",
    department:"Web Developer",
    city:"Kayseri",
   salary:75000,
   }
 ];

 for(let i in personels){
    console.log(personels[i].firstname,personels[i].lastname,personels[i].city,personels[i].department,personels[i].salary)
 }
 
personels.forEach(function(i){

console.log(i.firstname,i.lastname,i.city,i.department,i.salary);

});











