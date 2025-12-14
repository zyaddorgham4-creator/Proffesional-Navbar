const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navButtons = document.getElementById("nav-buttons");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  navButtons.classList.toggle("show");
});

window.addEventListener('click',function(e){
  if(e.target.classList.contains('plus'))
  {
    let parent = e.target.closest('.parent');

    let operation = parent.querySelector('.operation');

    let hiddens = parent.querySelector('.hiddens');
    hiddens.style.display = 'block'; 
    operation.innerText = (+operation.innerText+1);

  }else if(e.target.classList.contains('minous'))
  {
    let parent = e.target.closest('.parent');

    let operation = parent.querySelector('.operation');

    let hiddens = parent.querySelector('.hiddens');

    hiddens.style.display = 'block'; 

    operation.innerText = (+operation.innerText-1);

  }
})

let sign_in = document.getElementById('sign_in');

let hidden_temporary  =document.getElementById('hidden_temporary');

sign_in.addEventListener('click',function(){
hidden_temporary.style.display  ='block';
})

let hidden_all = document.getElementById('hidden_all');

hidden_all.addEventListener('click',_=>{
  hidden_temporary.style.display = 'none';
})

let hidden_all_log_in = document.getElementById('hidden_all_log_in');

hidden_all_log_in.addEventListener('click',_=>{
  hidden_temporary.style.display = 'none';
})

let log_in = document.getElementById('log_in');

let hidden_sign_in = document.getElementById('hidden_sign_in');

let hidden_log_in = document.getElementById('hidden_log_in');

log_in.addEventListener('click',function(){
hidden_sign_in.style.display  ='none';
hidden_log_in.style.display ='block';
})

let new_account = document.getElementById('new_account');

new_account.addEventListener('click',function(){
hidden_sign_in.style.display  ='block';
hidden_log_in.style.display ='none';
})

let noodels_icon = document.getElementById('noodels_icon');

let salad = document.getElementById('salad'); // salad div
let salad_icon = document.getElementById('salad_icon'); //salad_icon

let rolls = document.getElementById('rolls'); // rolls div
let rolls_icon = document.getElementById('rolls_icon'); //rolls_icon

let desert = document.getElementById('desert'); // desert div
let desert_icon = document.getElementById('desert_icon'); //desert_icon

let sandwitch = document.getElementById('sandwitch'); // sandwitch div
let sandwitch_icon = document.getElementById('sandwitch_icon'); //sandwitch_icon

let cake = document.getElementById('cake'); // cake div
let cake_icon = document.getElementById('cake_icon'); //cake_icon

let pure_veg = document.getElementById('pure_veg'); // pure veg div
let pure_veg_icon = document.getElementById('pure_veg_icon'); //pure_veg_icon

let pasta_icon =document.getElementById('pasta_icon');
let pasta  =document.getElementById('pasta')

function showsallsections()
{
  let arr = [salad,sandwitch,cake,desert,rolls,pure_veg];
  arr.forEach(s=>s.style.display='');
}

noodels_icon.addEventListener('click',()=>showsallsections())

function showSection(section)
{
    let arr = [salad,sandwitch,cake,desert,rolls,pure_veg,pasta];
     arr.forEach(s=>s.style.display ='none');
     section.style.display ='';
}

pasta_icon.addEventListener('click',()=>showSection(pasta))
salad_icon.addEventListener('click',()=>showSection(salad))
rolls_icon.addEventListener('click',()=>showSection(rolls))
desert_icon.addEventListener('click',()=>showSection(desert))
sandwitch_icon.addEventListener('click',()=>showSection(sandwitch))
cake_icon.addEventListener('click',()=>showSection(cake))
pure_veg_icon.addEventListener('click',()=>showSection(pure_veg))
