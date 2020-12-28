'use strict'

const name=document.getElementById('name');
const email=document.getElementById('email');
const password=document.getElementById('password');
const passwordConfirm=document.getElementById('passwordTwo');

const form=document.getElementById('form');

form.addEventListener('submit',function(e){
    e.preventDefault();
    
    isEmptyInput(name,email,password);
    isPassworMatch(passwordConfirm,password);
});

function isEmptyInput(...inputs){
    inputs.forEach(input=>{
       
        if(input.value==='')
            setMessageError(input,`${getInputId(input)} has not been specified`);
        else    
            setMessageError(input,null);
    });
}

function isPassworMatch(passwordConfirm,password){
   const passwordOne=password.value;
   const passwordTwo=passwordConfirm.value;
   if(passwordTwo.localeCompare(passwordOne)||passwordTwo==='')
        setMessageError(passwordConfirm,'Passwords are not equal');
    else
        setMessageError(passwordConfirm,null);
}

function getInputId(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}

function setMessageError(input,message){
    const labelError=input.parentElement;
    if(message===null)
        labelError.className='form-control success';
    else
        labelError.className='form-control error';

    const error=labelError.querySelector('small');
    error.innerText=message;
}