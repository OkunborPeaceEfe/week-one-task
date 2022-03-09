let FullName = document.getElementById('myFullName');
let Email = document.getElementById('myEmail');
let ActivToken = document.getElementById('activationToken');
let Ticked = document.getElementById('accept');
let submit = document.querySelector(".submit");

submit.addEventListener('click', validate);

function validate(e){
    e.preventDefault();
    if(FullName.value == ""){
       document.getElementById('screen').innerText='USERNAME CANNOT BE EMPTY!';
       return;
    } if (Email.value == ""){
        document.getElementById('screen').innerText='EMAIL REQUIRED!';
        return;
    } if(ActivToken.value == ""){
       document.getElementById('screen').innerText='PLEASE INPUT ACTIVATION TOKEN!';
       return;
    }   if(Ticked.checked == false){
        document.getElementById('screen').innerText='PLEASE TICK THE CHECKBOX!';
        return;
    }
}



