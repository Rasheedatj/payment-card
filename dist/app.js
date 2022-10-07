let openBtn = document.querySelector('.btn')
let closeBtn = document.querySelector('.closeModal')
let modal = document.querySelector('.modal-container')


openBtn.addEventListener('click', function(e){
    modal.style.display = 'flex'
    e.preventDefault()
})

closeBtn.addEventListener('click', function(e){
    modal.style.display = 'none'
})

// FORM VALIDATION
let form = document.querySelector('form')

function validation(){   
// variables
let cardNumber = document.querySelector('#card-input').value
let numberText = document.querySelector('.card-error-message')

// pattern
const numPattern = /^[0-9]{3}[0-9]{3}[0-9]{3}[0-9]{3}/

    if(cardNumber.match(numPattern)){
        form.classList.add('valid')
        form.classList.remove('invalid')
        numberText.innerText = ''
   
    }else{
        form.classList.remove('valid')
        form.classList.add('invalid')
        numberText.innerText = 'Wrong format. numbers only'
    }  
}

function dateVaidation(){
    let blankMessage = document.querySelector('.date-error-message')
    let expiryDate = document.querySelector('#date-input').value
    const pattern = /^[0-9]{1}$/
    if(expiryDate.match(pattern)){
        form.classList.add('MMvalid')
        form.classList.remove('MMinvalid')
        blankMessage.innerText = ''
    }else{
        form.classList.remove('MMvalid')
        form.classList.add('MMinvalid')
        blankMessage.innerText =`can't be blank`
    }
}

function yearVaidation(){
    let blankMessage = document.querySelector('.date-error-message')
    let expiryDate = document.querySelector('#year-input').value
    const pattern = /^[0-9]{1}$/
    if(expiryDate.match(pattern)){
        form.classList.add('MMvalid')
        form.classList.remove('MMinvalid')
        blankMessage.innerText = ''
    }else if(expiryDate === ''){
        form.classList.remove('MMvalid')
        form.classList.add('MMinvalid')
        blankMessage.innerText = `can't be blank`
    }
}


function cvcValidation(){
    let blankMessage = document.querySelector('.cvc-error-message')
    let cvc = document.querySelector('#cvc-input').value
    const pattern = /^[0-9]{2}$/
    if(cvc.match(pattern)){
        form.classList.add('cvcvalid')
        form.classList.remove('cvcinvalid')
        blankMessage.innerText = ''
    }else {
        form.classList.remove('cvcvalid')
        form.classList.add('cvcinvalid')
        blankMessage.innerText = `can't be blank`
    }
}
