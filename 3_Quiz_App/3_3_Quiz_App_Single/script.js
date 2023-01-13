
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
   if (cevap===this.dogruCevap){
    return true;
   }
   else
   {return false;}
    
   
   
    // return cevap===this.dogruCevap;
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
    new Soru("1- Hangisi .javascript paket yönetim uygulamasıdır?",{a:"Node.js",b:"Typescript",c:"Npm",d:"Nuget"},
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

document.querySelector(".btn_start").addEventListener("click",function()
{
    
      
            document.querySelector(".quiz_box").classList.add("active");
            let soru=quiz.soruGetir();
            
            soruGoster(soru);
          soruSayisiniGoster(quiz.soruIndex+1,quiz.sorular.length);

       document.querySelector(".next_btn").classList.remove("show");
       
       
        // document.querySelector(".quiz_box").classList.add("active"); //butona basıldığında quiz_box ın görünür
        // //olması için quiz_box a active isimli bir class
        // //ekleriz , active clasındaki opacity:1 değeri
        // //quiz box u tekrar görünür ve kullanılır yapar
        // let soru=quiz.soruGetir();
        // // let soru=(quiz.soruGetir()); //sorular soru değişkenine atıldı---- bu dosyadan sonra----
        // // soruGoster(quiz.soruGetir())
        // soruGoster(soru);
        // quiz.soruIndex+=1; 
     }
)


document.querySelector(".next_btn").addEventListener("click",function(){
    if(quiz.sorular.length != quiz.soruIndex+1){
        quiz.soruIndex+=1; 
        let soru=quiz.soruGetir();
        
        soruGoster(soru);
        soruSayisiniGoster(quiz.soruIndex+1,quiz.sorular.length);
        document.querySelector(".next_btn").classList.remove("show");  
      
}

else {
console.log("quiz bitti!");
}


});

const option_list=document.querySelector(".option-list");
//option-list isimli klası option_list değişkenine attık

//  option_list.innerHTML=options;

//fonksiyon - goster  e gönderildi
// const option=option_list.querySelectorAll(".option");

//  for(let opt of option){
//     opt.setAttribute("onclick","optionSelected(this)")
//  }




function soruGoster(soru){
    let question=`<span> ${soru.soruMetni} </span>`;

    let options='';

    for(let cevap in soru.cevapSecenekleri){
      
        options+=
        `  
         <div class="option">  
         <span> <b>${cevap}</b>${soru.cevapSecenekleri[cevap]}</span>
         </div>`;
  }

   
   document.querySelector(".question_text").innerHTML=question;
   option_list.innerHTML=options;
//    document.querySelector(".option-list").innerHTML=options;
   
   const option=option_list.querySelectorAll(".option"); //seçenekleri option isimli değişkene attık

   for(let opt of option){
      opt.setAttribute("onclick","optionSelected(this)")
   }
   //option isimli class taki seçeneğin bulunduğu listte 
   //seçim yaptırıp, seçildi olarak alınmasını sağlar
}


//alt kısma alındı
function optionSelected(option){
    let cevap=option.querySelector("span b").textContent;
    //cevap isimli değişkene span b etiketi ile gelen içerik atandı
    let soru=quiz.soruGetir();

    if(soru.cevabiKontrolEt(cevap)){
        option.classList.add("correct");
    }else{
        option.classList.add("incorrect");
    }

    for(let i=0;i<option_list.children.length;i++){
        option_list.children[i].classList.add("disabled");
    }  //Hangi option seçiliyse o disable yapılır sonra seçim yapılmaz

    document.querySelector(".next_btn").classList.add("show");

}

function soruSayisiniGoster(soruSirasi,toplamSoru){
  let tag=`<span class="badge bg-warning">${soruSirasi}/${toplamSoru} </span>`;

  document.querySelector(".quiz_box .question_index").innerHTML=tag;
}



// console.log(cevabiKontrolEt(cevap));

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