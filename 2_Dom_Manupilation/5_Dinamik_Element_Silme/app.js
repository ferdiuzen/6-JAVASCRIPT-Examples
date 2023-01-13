//Dinamik Element Silme

// {/* <ul class="list-group">  */}


//ul lerden class ı list-group olanı seçiyoruz
const todoList=document.querySelector("ul.list-group");


const todos=document.querySelectorAll("li.list-group-item");


// todos[1].remove();
// todos[2].remove();



//remove child

// todoList.removeChild(todoList.lastElementChild);


//todoList içerisindeki todos referansı ile çağrılan 
//list-group-item   2. element silinir
todoList.removeChild(todos[1]);



console.log(todos);

console.log(todoList);