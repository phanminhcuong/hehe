const registerbtn=document.querySelector('.js-register')
const loginbtn=document.querySelector('.js-login')
const back=document.querySelectorAll('.auth-form__controls-back')
const modal=document.querySelector('.modal')
const form=document.querySelector('.auth-form.hide')
const forms=document.querySelector('.auth-form.on')
const btn=document.querySelectorAll('.auth-form__swich-btn ')
const length=btn.length
const products=document.querySelectorAll('.home-product-item')
const detail=document.querySelector('.detail')
const detailBack=document.querySelector(".btn__back")

function showModal(){
    modal.classList.add('open')
    form.classList.add('hide')
    forms.classList.remove('on')
    

}
function login(){
   modal.classList.add('open')
   form.classList.remove('hide')
   forms.classList.add('on')


   
}
function removeModal(){
    modal.classList.remove('open')
}
function removeDetail(){
    detail.classList.remove('opening')
}

for(const backs of back){
    backs.addEventListener('click',removeModal)
}
for(var i=0 ;i<length;i++){
    
    btn[0].addEventListener('click',login)
    btn[1].addEventListener('click',showModal)


    
}

function showproduct(){
    detail.classList.add('opening')
}
for(const product of products){
    product.addEventListener('click',showproduct)
}


registerbtn.addEventListener('click',showModal)
detailBack.addEventListener('click',removeDetail)
loginbtn.addEventListener('click',login)

