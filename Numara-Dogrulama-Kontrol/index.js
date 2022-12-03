//! Checking Number Start

let check = document.querySelector('.check');
let number = document.querySelector('.number');
let text = document.querySelector('.text');

let regex = /^[\d, \s, \+, \-]{5,20}/;

check.addEventListener('click', function(){
    if(number.value == ""){
        text.innerHTML = "Lütfen boş bırakmayınız! ⛔";
        text.style.color = '#fff';
    }
    else if(number.value.match(regex)){
        text.innerHTML = "Tebrikler! Geçerli bir telefon numarası giriyorsunuz. ✅";
        text.style.color = 'rgba(4,125,9,1)';
    }
    else{
        text.innerHTML = 'Oops! Telefon numaran geçersiz 🤔';
        text.style.color = '#da3400';
    }
})



//! Checking Number End