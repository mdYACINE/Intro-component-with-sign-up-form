let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');
let email = document.getElementById('email');
let password = document.getElementById('password');
let btn = document.getElementById('btn');

let inp = document.querySelectorAll('.inp')
let error = document.querySelectorAll('.error')

 

for(let i=0 ; i<error.length ; i++){
    error[i].classList.add('hide')
}

let a=['First Name cannot be empty','Last Name cannot be empty','Looks like this is not an email','Password cannot be empty']

btn.onclick = function(){
   
    for( i=0 ; i<inp.length ; i++){
        if(inp[i].value == ''){
            showMess(i)
           
        }else{
            hideMess(i)
            
        }
    }
 
}


function showMess(x){
    error[x].classList.remove('hide')
    inp[x].style.border='2px solid red'
    inp[x].style.outline= 'none';
    inp[x].nextElementSibling.textContent =a[x]
}
function hideMess(y){
    error[y].classList.add('hide')
    inp[y].style.border='1px solid hsl(246, 25%, 77%)'
     inp[y].nextElementSibling.textContent = ``
}

