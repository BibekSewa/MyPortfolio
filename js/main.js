const menuButton = document.querySelector('.menu-btn');
const menuitems = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav')
const branding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.items');
const burger = document.querySelectorAll('.btn-line');

let showMenu = false;

menuButton.addEventListener("click", toggle);
function toggle(){
    if (!showMenu){
        menuButton.classList.add('close');
        menuitems.classList.add('show');
        menuNav.classList.add('show');
        branding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        burger.forEach(item => item.classList.add('turn'));
        showMenu = true;
    }else{
        menuButton.classList.remove('close');
        menuitems.classList.remove('show');
        menuNav.classList.remove('show');
        branding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        burger.forEach(item => item.classList.remove('turn'))
        showMenu = false;
    }
}