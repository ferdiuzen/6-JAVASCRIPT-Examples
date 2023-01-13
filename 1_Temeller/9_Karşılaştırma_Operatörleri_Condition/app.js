// Karşılaştırma Operatörleri

// > < == === != !== >= <=


console.log(2==2);


console.log("java"=="js");


console.log(2=="2"); //bu eşitlikte veri tipine bakılmaz o nedenle tavsiye edilmez
console.log(2==="2"); // veri tipine bakılır , kullanılır!

console.log(2!=2);

console.log(4>"2");

// Mantıksal Bağlaçlar

console.log(4>2&&4===2); //ve bağlacı kullanıldı her iki şartın sağlaması gerekir

console.log(4===2||2<4); //veya bağlacında bir şartın sağlanması yeterlidir


const error=false;


 if(error==true){
     console.log("Hata Oluştur");
 }
 else
    console.log("Herşey yolunda")


    const process=2;

    if (process===1)
     console.log("işlem1");
    else if(process===2)
     console.log("işlem2");
     else if(process===3)
     console.log("işlem3");
     else { 
     console.log("Geçersiz işlem");
     }

     const process1=10;

     switch(process1){
        case 1:
            console.log("işlem1");
            break;

        case 2:
            console.log("işlem2");
        break;

        case 3:
            console.log("işlem3");
        break;

        default:
            console.log("Geçersiz işlem");

     }


     const ogr_notu=90;

     switch(ogr_notu){
      

        case  (ogr_notu<50)&&ogr_notu:
            console.log("FF");
        break;

        case  (ogr_notu>=50&&ogr_notu<75)&&ogr_notu:
            console.log("EE");
        break;
   
        case  (ogr_notu>=75&&ogr_notu<85)&&ogr_notu:
            console.log("BB");
        break;
   
        case  (ogr_notu>=85&&ogr_notu<=100)&&ogr_notu:
            console.log("AA");
        break;
   

        default:
            console.log("Geçersiz Not");

     }

    // const ogr_notu=60;

    // if(ogr_notu<50)
    //     console.log("FF");
    // else if(ogr_notu>=50 && ogr_notu<75)
    //    console.log("EE");
    // else if(ogr_notu>=75 && ogr_notu<85)
    //    console.log("BB");
    // else if(ogr_notu>=85 && ogr_notu<=100)
    //   console.log("AA");
    //   else
    //   console.log("Geçersiz Not");



     // 0-50  FF
     //50-75 EE
     //75-85 BB
     //85-100 AA

     //Geçersiz




