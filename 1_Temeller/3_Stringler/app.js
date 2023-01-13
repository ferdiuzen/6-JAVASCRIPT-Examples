let value;


const firstName="Burcu";
const lastName="Şahin";

const langs="HTML,CSS,Javascript, C#";

value=firstName+lastName;


// console.log(langs);
// console.log(typeof langs);
console.log(typeof value);

value=firstName.length; //karakter uzunluğu alınır


value=firstName.concat("  ", lastName,"  " ," Yeşil"); //birden fazla stringi birleştirir ve ilk tanımlandığı değişkene atar(firstName)

value=firstName.toLocaleLowerCase();

value=firstName.toLocaleUpperCase();//tüm karakterleri büyük harfe dönüştürür


value=firstName[0];
value=firstName[1];//ikinci karakteri console'a yazar

value=firstName[firstName.length-1]; //son karakteri verir 


// indexOf

value=firstName.indexOf("c"); //karakterin kaçıncı indeks olduğunu verir   c harfi 3. karakter


value=firstName.indexOf("p"); 
//eğer olmayan bir karakterse -1 verir

//charAt aynı işlemi yapar

value=lastName.charAt(0); //1. karakteri verir indexOf ile aynı işlevi vardır


//Split

value=langs.split(",");

// belirtilen karakterer göre parçalar
// bu örnekte , öncesi ve sonrasını teker teker ayrı olarak dizi oluşturur

//Replace  

value=langs.replace("CSS","DotNet");

//yer değiştirir CSS yerine DotNet koyar 








console.log(value);


