
document.querySelector(".items");
let item5 = document.querySelector(".item5");
item5.remove();

let button = document.querySelector(".btn");
button.addEventListener("click",(e) =>
                        {
    console.log("click");
e.preventDefault();
});

let item = document.querySelector(".item2");
item.innerHTML="<h1>Hello</h1>";

document.querySelector("h1").style.color="Brown";

document.querySelector(".studentname").style.color="blue";
document.querySelector(".seatnumber").style.color="red";

document.querySelector("h2").style.color="grey";


let nameInput = document.querySelector('#name');
let myForm = document.querySelector('#my-form');
let seatnoInput = document.querySelector('#seatno');
let msg = document.querySelector('.msg');

nameInput.addEventListener('input', e => {
  document.querySelector('.container').append(nameInput.value);
});

seatnoInput.addEventListener('input', e => {
  document.querySelector('.container').append(seatnoInput.value);
});

function onSubmit(e) {
    e.preventDefault();
  }
 




let userList = document.querySelector('#users');

if(nameInput.value === '' || seatnoInput.value === '')
{
  msg.classList.add('error');
  msg.innerHTML = 'Please enter all the fields'; 
  setTimeout(() => msg.remove(), 3000);
}
else
{
  let li =document.createElement('li');

  li.appendChild(document.createTextNode('${nameInput.value}: ${seatnoInput.value}'));


  userList.appendChild(li);
  nameInput.value = '';
  seatnoInput.value = '';

}