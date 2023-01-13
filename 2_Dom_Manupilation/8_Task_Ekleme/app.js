

//  <li class="task list-group-item">
//  <div class="form-check">
//      <input type="checkbox" id="1" class="form-check-input">
//      <label for="1" class="form-check-label"> Görev 1</label>
//  </div>

// </li>      

ul=document.getElementById("task-list");

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

for(let gorev of gorevListesi) { 

let li=  ` 
 <li class="task list-group-item">  <div         class="form-check">
      <input type="checkbox" id="${gorev.id}" class="form-check-input">
      <label for="${gorev.id}" class="form-check-label"> ${gorev.gorevAdi} </label>
  </div>

 </li>
 `;

 ul.insertAdjacentHTML("beforeend",li);
}

 // insertAdjacentHTML Html sayfasında belirtilen etiketten  sonra içerik eklenmesini sağlar 
 // afterend son satırdan sonra before end son satırdan önce ekler

