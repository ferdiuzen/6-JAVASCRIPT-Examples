const numbers=[22,33,89,11,12];


//2. yöntem ancak çok kullanılmaz
const numbers2=new Array(65,87,98,12);

const langs=["HTML","CSS","MVC Core",22,"React"];



numbers[3]=1000;

value=numbers.indexOf(1000);

console.log(value);

numbers.push(6622);




//dizinin ilk elemanına ekleme

numbers.unshift(2332);

//Dizinin sonundan değer atma
numbers.pop(); 




//belirlenen sayıda eleman gösterme
numbers.splice(3);


//istediğimiz indisteki değeri silme
delete numbers[2];


console.log(numbers);