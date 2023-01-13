

//  <li class="task list-group-item">
//  <div class="form-check">
//      <input type="checkbox" id="1" class="form-check-input">
//      <label for="1" class="form-check-label"> Görev 1</label>
//  </div>

// </li>      



let gorevListesi=[
    {"id":1,"gorevAdi":"Görev 1"},
    {"id":2,"gorevAdi":"Görev 2"},
    {"id":3,"gorevAdi":"Görev 3"},
    {"id":4,"gorevAdi":"Görev 4"},
];

let editId;
let isEditTask=false;
// sayfamızda ekleme fonksiyonunu hem ekleme için
//hem de güncelleme için kullanacağız , güncelleme işlemi 
//yaparken eklediğimiz yeni değerin son satıra eklenmemesi için
//isEditTask isimli değişken oluşturduk , true olduğunda 
//güncelleme yaparız yani aynı satıra ekleme yapılacak
//false olduğunda normal ekleme işlemi yapılacaktır


//görev listesi içinde tarama yapar
//eleman sayısı kadar döngü oluşturur
//belirtilen elementleri satır satır alır
//daha sonra tanımlanan gorev isimli değişken üzerinden
// $ ile belirtilen referansa ekler
TaskGoster(); // en başta fonksiyon çağrılmazsa boş olur

let taskInput=document.querySelector("#txtTaskName");
function TaskGoster(){
    ul=document.getElementById("task-list"); //ekleme süreci buradan başlıyor
    ul.innerHTML=""; //eğer bu kod yazılmazsa sürekli eski kayıtlarla birlikte ekleme yapılır- her sayfa yenilemesinde sıfırlama yapılır


    for(let gorev of gorevListesi) { 

        let li=  ` 
         <li class="task list-group-item">  <div         class="form-check">
              <input type="checkbox" id="${gorev.id}" class="form-check-input">
              <label for="${gorev.id}" class="form-check-label"> ${gorev.gorevAdi} </label>
          </div>
        
          <div class="dropdown">
  <button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
 <i class="fa-solid fa-ellipsis"></i>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a onclick="deleteTask(${gorev.id})  " class="dropdown-item" href="#"> <i class="fa-solid fa-trash-can"></i>  Sil </a></li>
    <li><a onclick='editTask(${gorev.id},"${gorev.gorevAdi}")' class="dropdown-item" href="#"> <i class="fa-solid fa-pen"></i> Güncelle   </a></li>
    
  </ul>
</div>  


         </li>
         `;
        
         ul.insertAdjacentHTML("beforeend",li);
        }
        

}
// yukarıda - editTask  için kullanılan ' sayısal değer gönderimi sağlama amacıyla konuldu
//string ifadelerde "" yeterli


 // insertAdjacentHTML Html sayfasında belirtilen etiketten  sonra içerik eklenmesini sağlar 
 // afterend son satırdan sonra before end son satırdan önce ekler


//  document.querySelector("#btnAddNewTask").addEventListener("click",newTask);
//  document.querySelector("#btn-clear").addEventListener("click",newTask);

//  function newTask(event){
//     // console.log(event.target);
//     event.target.classList.add("btn-lg");
   
//     event.preventDefault();
//  }
//butona basıldığında yeni görev eklenecek
document.querySelector("#btnAddNewTask").addEventListener("click",newTask);


function newTask(event) {
    //text içindeki değeri seçtik taskInput a attık
   
    // console.log(taskInput.value)

    if(taskInput.value==""){
        alert("Bir görev yazmalısınız");
    }
    else
    {  
        if(!isEditTask){ //eğer ekleme modunda isek yani !isEditTask false ise;
            //görev listesine yeni bir değer atadık
        //değer textten yukarıda alındı ve taskInput ta
        gorevListesi.push({"id":gorevListesi.length+1,"gorevAdi":taskInput.value});
        //fonksiyon çağrılarak eklenmiş haliyle ekranda gösterilir
       
        } else{   //güncelleme : 

            for(let gorev of gorevListesi){
               if(gorev.id==editId)
                   {
                      gorev.gorevAdi=taskInput.value;
                   } 
                  isEditTask=false; //güncelleme işlemi yapıldıktan sonra ekleme işlemi yapılmaya devam edilsin o nedenle false yapıldı!
                }
       

    }
        
        
        TaskGoster();

        
    }

    event.preventDefault();

}


///////// Silme İşlemi   ////////

// id ye göre seçip - sileceğiz

//id gönderdiğimiz için deleteTask de id ile oluşturuldu
function deleteTask(id){
 let deletedId;  

 // for döngüsü index i 0 dan başlar görevlistesindeki id kadar döngü oluşturur
 //görev listesindeki id ile sil butonunda basılan ve fonksiyon içine gönderilen id eşit olduğunda yani bizim silmek istediğimiz elementin id si görev listesinde bulunduğunda ;
 // index değeri dışarıda silinmek üzere deletedId ye atanır
    for(let index in gorevListesi){
            if(gorevListesi[index].id==id)
                {
                    deletedId=index;
                }

    }


    //silme satırı:
    //splice silme işlemi : deletedId ile başlar ve yanındaki
    //belirtilen sayı kadar satır siler
    gorevListesi.splice(deletedId,1);
    TaskGoster();
    // console.log(deletedId);
}



function editTask(taskId,taskName)
{
    editId=taskId;//   onclick ile fonksiyona onclickten gönderilen id, task id üzerinden editId ye atandı
    isEditTask=true;

    taskInput.value=taskName; //ekleme işleminde oluşturduğumuz taskInput elementine fonksiyona onclick ten gönderilen gorev.gorev Adi - taskName aracılığıyla atandı

   taskInput.focus(); // imleç texte konumlanır

   console.log("edit id:",editId);
   

}

//tüm kayıtları silmek için:

btnClear.addEventListener("click",function(){

gorevListesi.splice(0,gorevListesi.length);
TaskGoster();
})

