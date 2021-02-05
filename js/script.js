const burgerButton = document.querySelector('.burger'),
      burgerMenu   = document.querySelector('.burger__menu'),
      menuItem = document.querySelectorAll('.burger__nav_item');
      

burgerMenu.classList.add('hide');

burgerButton.addEventListener('click', ()=> {
    toggleMenu();
})

function toggleMenu(e) {
    burgerMenu.classList.toggle('show');
    burgerMenu.classList.toggle('hide');

}
menuItem.forEach(i=>{
    i.addEventListener('click', toggleMenu);
})