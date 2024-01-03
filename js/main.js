let elInput = document.querySelector('.input');
let elBtn = document.querySelector('.btn');
let elResult = document.querySelector('.result');
let elBox = document.querySelector('.box');
let elTitle = document.querySelector('.title');
console.log(elBox);
// ==============BOX===========
document.body.style.backgroundColor = 'rgb(47, 47, 236)';
elBox.style.width = '430px';
elBox.style.height = '300px';
elBox.style.borderRadius = '10px';
elBox.style.backgroundColor = 'white';

// ==============TITLE===========


elTitle.style.textAlign = 'center';
elTitle.style.paddingTop = '50px';
elTitle.style.marginBottom = '20px';

// ==============INPUT===========


elInput.style.width = '100px';
elInput.style.height = '30px';
elInput.style.display = 'flex';
elInput.style.marginBottom = '10px';
elInput.style.marginLeft = '160px';

// ==============BTN===========


elBtn.style.marginLeft = '170px';
elBtn.style.marginBottom = '10px';
elBtn.style.padding = '5px';
elBtn.style.width = '80px';
elBtn.style.height = '40px';
elBtn.style.backgroundColor = 'green';
elBtn.style.border = 'none';
elBtn.style.color = 'white';
elBtn.style.borderRadius = '5px';

// ==============RESULT===========


elResult.style.marginLeft = '100px';
elResult.style.width = '250px';
elResult.style.height = '40px';
elResult.style.padding = '8px 0 0 10px';
elResult.style.backgroundColor = 'rgb(242, 236, 236)';
elResult.style.color = 'black';
elResult.style.borderRadius = '7px';
elResult.style.border = 'none';


elBtn.addEventListener('click', function (evt) {
    evt.preventDefault()
    let inputValue = elInput.value

    if (inputValue == 1) {
        elResult.textContent = 'Dushanba';
    }else  if (inputValue == 2) {
        elResult.textContent = 'Seshanba';
    }else  if (inputValue == 3) {
        elResult.textContent = 'Chorshanba';
    }else  if (inputValue == 4) {
        elResult.textContent = 'Payshanba';
    }else  if (inputValue == 5) {
        elResult.textContent = 'Juma';
    }else  if (inputValue == 6) {
        elResult.textContent = 'Shanba';
    }else if (inputValue == 7) {
        elResult.textContent = 'Yakshanba';
    } else if(inputValue >=8) {
        elResult.textContent = '1 dan 7 gacha raqam kiriting 😊';
    }
    

})