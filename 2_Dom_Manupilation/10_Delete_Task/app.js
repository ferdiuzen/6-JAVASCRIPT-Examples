

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

//görev listesi içinde tarama yapar
//eleman sayısı kadar döngü oluşturur
//belirtilen elementleri satır satır alır
//daha sonra tanımlanan gorev isimli değişken üzerinden
// $ ile belirtilen referansa ekler
TaskGoster(); // en başta fonksiyon çağrılmazsa boş olur


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
    <li><a class="dropdown-item" href="#"> <i class="fa-solid fa-pen"></i> Güncelle   </a></li>
    
  </ul>
</div>  


         </li>
         `;
        
         ul.insertAdjacentHTML("beforeend",li);
        }
        

}

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
    let taskInput=document.querySelector("#txtTaskName");
    // console.log(taskInput.value)

    if(taskInput.value==""){
        alert("Bir görev yazmalısınız");
    }
    else
    {   //görev listesine yeni bir değer atadık
        //değer textten yukarıda alındı ve taskInput ta
        gorevListesi.push({"id":gorevListesi.length+1,"gorevAdi":taskInput.value});
   //fonksiyon çağrılarak eklenmiş haliyle ekranda gösterilir
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