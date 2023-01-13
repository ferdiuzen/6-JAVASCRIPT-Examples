//REPLACE - Değiştirme

// {/* <h5 class="card-title" id="tasks-title"> Görevler</h5> */}

//card-body divi içindeki ilk eleman seçilir
const cardbody=document.querySelectorAll(".card-body")[0];

//önce ekleme metoduyla h3 etiketi oluşturuldu
const newElement=document.createElement("h3");
newElement.id="tasks-title";
newElement.className="card-title";
newElement.textContent="Bu görev yeni";

// console.log(cardbody);

const oldElement=document.querySelector("#tasks-title");

// console.log(old);

cardbody.replaceChild(newElement,oldElement);

// console.log(newElement);
// console.log(cardbody);