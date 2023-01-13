
// let soru={
//  soruMetni:"Hangisi javascript paket yönetim uygulamasıdır?",
//  cevapSecenekleri:{
//     a:"Node.js",
//     b:"Typescript",
//     c:"Npm"

//  },
//  dogruCevap:"c",
//  cevabiKontrolEt: function(cevap){
//         return cevap===this.dogruCevap
//  }
// }



// // let soru2={
// //     soruMetni:"Hangisi .net paket yönetim uygulamasıdır?",
// //     cevapSecenekleri:{
// //        a:"Node.js",
// //        b:"Nuget",
// //        c:"Npm"
   
// //     },
// //     dogruCevap:"b",
// //     cevabiKontrolEt: function(cevap){
// //            return cevap===this.dogruCevap
// //     }
// //    }
   

// console.log(soru.soruMetni);
// // console.log(soru.dogruCevap);
// console.log(soru.cevabiKontrolEt("c"));//cevabıKontrol et fonksiyonuna cevap referansı üzerinden a şıkkı gönderildi
// console.log(soru2.soruMetni);
// // console.log(soru.dogruCevap);
// console.log(soru2.cevabiKontrolEt("a"));

//Yukarıda data object ile soru oluşturuldu
//soruların kopyala yapıştır yöntemiyle ayrı ayrı oluşturulması yerine;
//Constructure - Intences metodu ile 
//fonksiyon ile soru yapısı oluşturulur ve diğer sorular instance olarak bu fonksiyondan üretilir
function Soru(soruMetni,cevapSecenekleri,dogruCevap){
    this.soruMetni=soruMetni; //fonksiyondaki soruMetni ni (soru nesnelerinden gelecek) , this kullanarak konsola gönderiririz
    this.cevapSecenekleri=cevapSecenekleri;
    this.dogruCevap=dogruCevap;
  
}

Soru.prototype.cevabiKontrolEt=function(cevap){
    return cevap===this.dogruCevap
}
//Konstructure içinde prototype yapısı kullanılarak, cevabı kontrolEt işlemi karşılaştırılır
//Prototype belgede kendinden tanımlı yapıdır



// let soru1=new Soru("Hangisi javascript paket yönetim uygulamasıdır?",{a:"Node.js",b:"Typescript",c:"Npm"},
// "c"
// );


// let soru2=new Soru("Hangisi .net paket yönetim uygulamasıdır?",{a:"Node.js",b:"Typescript",c:"Npm"},
// "b"
// );

let sorular=[
    new Soru("1- Hangisi .javascript paket yönetim uygulamasıdır?",{a:"Node.js",b:"Typescript",c:"Npm"},
    "b"
    ),

    new Soru("2- Hangisi .Net paket yönetim uygulamasıdır?",{a:"Node.js",b:"Typescript",c:"Npm"},
    "b"
    ),

    new Soru("3- Hangisi .javascript paket yönetim uygulamasıdır?",{a:"Node.js",b:"Typescript",c:"Npm"},
    "b"
    ),

    new Soru("4- Hangisi .Net paket yönetim uygulamasıdır?",{a:"Node.js",b:"Typescript",c:"Npm"},
    "b"
    )

]

// QUIZ CONSTRUCTURE YAPISININ OLUŞTURULMASI


function Quiz(sorular){
    this.sorular=sorular;//sorular dizisindeki sorular fonksiyonda this ile implement edildi
    this.soruIndex=0; //Başlangıç olarak ilk soru belirlendi
}
//Bu bölüm dizideki soruları , göstermek istediğimiz yere 
// göndermek için aracı görevi yapan fonksiyondur
Quiz.prototype.soruGetir=function(){
    return this.sorular[this.soruIndex];
}

const quiz=new Quiz(sorular); //quiz isimli yeni bir soru nesnesi oluşuruldu -Quiz(sorular)'dan üretildi

document.querySelector(".btn-start").addEventListener("click",function()
{
     if(quiz.sorular.length > quiz.soruIndex){
        console.log(quiz.soruGetir());
        quiz.soruIndex+=1; 
     }
     else {
        console.log("quiz bitti!");
     }
 

})



// console.log(quiz.soruGetir());

// quiz.soruIndex+=1; 

// console.log(quiz.soruGetir());

// quiz.soruIndex+=1; 

// console.log(quiz.soruGetir());

// console.log(sorular[0].soruMetni);
// console.log(sorular[0].dogruCevap);

// console.log(sorular[0].cevabiKontrolEt("a"));

//sorular dizisi oluşturularak fonksiyon kullanılarak soru nesneleri oluşturuldu...

// console.log(soru1.soruMetni);
// console.log(soru1.dogruCevap);
// console.log(soru2.soruMetni);
// console.log(soru2.dogruCevap);

// console.log(this);