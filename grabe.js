let navbar = document.querySelector('.navbar');

document.querySelectorAll('#menu-button').onclick = () =>{
    navbar.classList.toggle('active');
}



let searchform = document.querySelectorAll('.search-form');

document.querySelector('#search-button').onclick = () =>{
    searchform.classList.toggle('active');
    navbar.classList.remove('active')
    cartItem.classList.remove('active');
}

let cartItem = document.querySelectorAll('.cart-item-container');

document.querySelector('#shopping-button').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active')
    searchform.classList.remove('active');
}

window.onscroll =>{
    navbar.classList.remove('active');
    searchform.classList.remove('active');
    cartItem.classList.remove('active');
}