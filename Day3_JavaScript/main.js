
document.querySelector(".items");
let item5 = document.querySelector(".item5");
item5.remove();

document.getElementsByTagName("li")[1].style.color="red";
document.getElementsByTagName("li")[2].style.color="cyan";
document.getElementsByTagName("li")[3].style.color="purple";


const ul = document.querySelector('.items');

ul.firstElementChild.textContent = "Student 1: Present"
ul.children[1].textContent = "Student 1: Absent"

const btn = document.querySelector('.btn');

btn.style.background = 'blue';




const nameInput = document.querySelector('sname');
const seatnoInput = document.querySelector('#seatno');
const msg = document.querySelector('.msg');


function onSubmit(e){
  e.preventDefault();
}



let myForm = document.querySelector("#my-form");

myForm.addEventListener('submit', onSubmit);
if(nameInput.value  === '' || seatnoInput.value === '' )
{
  
 alert('Enter all fields');
}
else{
  console.log('success');
}
