
function mesaj(name,age){
console.log(`isim:${name} yaş:${age}`);

}

mesaj("Merve",36); //function call 
mesaj("Berke",28);

mesaj();
mesaj("Deniz");


function square(x){
    return x*x;
}

function cube(y){
    return y*y*y;
}

let value=square(10);


let value1=cube(5);
console.log(value1);


console.log(cube(7)); //fonksiyonlar doğrudan kullanılabilir


// Function Expression
// bir değeri fonksiyon ile eşitleyebiliriz
const mesaj2=function(name){
    console.log("Merhaba" +name);
};

mesaj2("Tarık");

//immediately invoked function expression(iife)
//Tanımlandığı yerde çalışan fonksiyon türü

(function(name,name2,name3){
     console.log("Merhaba --"+name+name2+name3);
   }   ("Zeynep","Lale","Ayşe") )  ;




   const database={ 

    host: "localhost", 
    add:function(){
        console.log("Eklendi");
    } ,
    update:function(id){
        // console.log("Güncellendi");

        console.log(`${id} .kayıt Güncellendi`);
    },

    delete:function(){
        console.log("Silindi");
    }


   }

//    console.log(database);
//    database.update();
   
   console.log(database.host);

   database.update(5);
