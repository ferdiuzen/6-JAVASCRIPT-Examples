const name="Hamza Murat Yılmaz";
const department="Siber";
const salary="20000";

//Klasik Yöntem
const array="İsim: "+ name+ "\n"+"Çalıştığı Departman:"+department+"\n"+"Maaşı:"+salary;

console.log(array);

//Template Literal:

const array1=`İsim:${name} Departman:${department} Maaş:${salary}`;


console.log(array);




//Klasik yöntemle diziyi html kodu içerisine gömme
const html="<ul>"+
"<li>" + name + "</li>"+
"<li>" + department + "</li>"+
"<li>" + department + "</li>"+
"<li>" + department + "</li>"+
"<li>" + salary + "</li>"+
"</ul>";

document.body.innerHTML=html;






//Template Literal ile yazım:


const html1=`<ul>
            <li>  ${name} </li>
            <li>  ${department}  </li>
            <li>  ${salary}  </li>
            <li>  ${salary}  </li>
            </ul>`

        document.body.innerHTML=html1;

        


