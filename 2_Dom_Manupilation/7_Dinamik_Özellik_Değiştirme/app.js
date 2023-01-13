// {/* <input type="text" name="task" id="task" placeholder="Bir Görev Ekleyin" class="form-control"> */}

// id si task olan element seçilir - 'id ye göre'
const taskInput= document.getElementById("task");

let element=taskInput;


element=taskInput.classList; // task input içindeki klassları atarız

taskInput.classList.add("newClass");
taskInput.classList.add("newClass2");
taskInput.classList.remove("form-control");
taskInput.removeAttribute("name");


element=taskInput;
// element=taskInput.placeholder;

//setAttribute soldaki elemente sağdaki içerik ekler
taskInput.setAttribute("placeholder","İçerik Ekleyebilirsin");
//hasAttribute bir elementin olup olmadığına bakar
//varsa true yoksa false döner
element=taskInput.hasAttribute("name");

console.log(element);


