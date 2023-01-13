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

];