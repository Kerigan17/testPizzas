new WOW({
    animateClass: 'animate__animated'
}).init();

$('.product-image').magnificPopup({
    type: 'image'
});

document.getElementById('choose-pizza').onclick = function () {
    document.getElementsByClassName('products')[0].scrollIntoView({behavior: "smooth"});
}

let nameInput = document.getElementById('name-input');
let phoneInput = document.getElementById('phone-input');
let popup = document.getElementById('popup');
let popupBtn = document.getElementById('popup-btn')

nameInput.onkeydown = (e) => {
    if (e.key === '.') return false;
}

phoneInput.onkeydown = (e) => {
    if (e.key !== 'Backspace') {
        let num = parseInt(e.key);
        if (isNaN(num)) {
            return false;
        }
    }
}

popupBtn.onclick = () => {
    popup.style.display = 'none';
}

document.getElementById('create-order').onclick = function (e) {
    e.preventDefault();
    let addressInput = document.getElementById('address-input');
    if (!nameInput.value) {
        alert('Заполните Имя');
        return;
    }
    if (!addressInput.value) {
        alert('Заполните адрес');
        return;
    }
    if (!phoneInput.value) {
        alert('Заполните телефон');
        return;
    }

    popup.style.display = 'flex';

    let url = 'http://localhost:3000/users';

    $.ajax({
        method: 'POST',
        url: url,
        data: {name: nameInput.value, phone: phoneInput.value, address: addressInput.value}
    })
        .done(function (message){
            alert('Data')
        })

    addressInput.value = '';
    phoneInput.value = '';
    nameInput.value = '';
}