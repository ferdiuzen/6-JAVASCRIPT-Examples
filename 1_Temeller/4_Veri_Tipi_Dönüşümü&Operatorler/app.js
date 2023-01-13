let value;
//Veri Tiplerini Stringe Dönüştürme

value=123;

// value+=100; 

value=String(123);
value=3.14;

value=String(true);

value=String(function(){console.log()});
//Fonksiyon stringe dönüştürüldü

value=String([1,2,2,7]);
//dizilerde dönüştürülebilir




//2.Yol   toString metodu kullanılabilir
value=(50).toString();
value=(3.14).toString();



// Veritiplerini Sayıya Dönüştürme

value=Number("123"); //123 stringi sayıya dönüştürüldü

value=Number("Tahsin");
//Alfanümerik karakterler sayı olarak kullanılamaz

value=Number([1,2,3,4]);
//diziler sayı olarak kullanılamaz


value=parseFloat("3.14");







const sayi1="Merhaba"+21;

//sayı ve string birleştirildiğinde string olur

// console.log(sayi1);
// console.log(typeof sayi1);


value=Number("34")+35;


// console.log(value);
// console.log(typeof value);


// OPERATORLER

const value1=100;
const value2=200;

value=value1+value2
value=value1-value2
value=value1*value2
value=value1/value2


// console.log(value);
// console.log(typeof value);



//Math Objesi  - Matematiksel işlemler için kullanılan hazır fonksiyondur


value=Number(Math.PI.toFixed(2));// kaç küsürat basamağı gösterileceğini belirleriz  (stringe dönüştürürüz)


// value=Math.round(Math.PI);//round sayıyı yuvarlar 

// value=Math.round(5.89);
// value=Math.round(5.21);

value=Math.ceil(3.2);//Yukarı yuvarlar
value=Math.ceil(3.8);


value=Math.floor(3.2); //Aşağı yuvarlar
value=Math.floor(3.8);

value=Math.max(27,56,43,88,11);//en yüksek değeri verir

value=Math.min(27,56,43,88,11);

value=Math.random();//0-1 arası rasgele sayı üretir

value=Math.ceil(Math.random()*100);

value=Math.floor(Math.random()*100+1);                     


console.log(value);
console.log(typeof value);


