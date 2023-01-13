//İki tip değişken tanımlanabilir

// 1 - Primitive
// 2 -Referans


let length=50;
let price=2000;
let lastName="Parlak";
const a=["first","second","third"];

let x={firstName:"Merve",lastName:"Kara"};

console.log(x);
console.log(typeof x);

var b;
console.log(b); //undefined yani tanımlanmamış bir değişken

console.log(typeof b);



var sayi1=10;
var sayi2=sayi1;




sayi1=20; //pritive değişken olduğu için sayi2 değişmez


//Referans Tipi Değişkenler

console.log(sayi1,sayi2);


var d1=[10,20,30];
var b1=d1;

d1.push(40);
console.log(b1);

//Burada d1 dizi olduğu için ve değerleri adres içinde tuttuğu için sonrasında d1 içine atılan yeni değerler referans olarak b1 içerisine de atılır. 



console.log(d1[2]); //d2 in 3. değerine erişiriz

//Object tanımlaması
let personel ={
    firstName:"Sefa",
    lastName:"Kağıt",
    department:"IT",
    address:"Zeytinburnu"
}

console.log(personel);
//Objectler de referans tipidir

console.log(typeof personel);

var date=new Date();
console.log(date);















