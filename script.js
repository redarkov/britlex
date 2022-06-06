/*jshint esversion: 6 */
const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

if(menuIcon) {
    menuIcon.addEventListener("click", function() {
        document.body.classList.toggle('_lock');
        menuIcon.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
menuBody.addEventListener("click", function(){
    if(menuBody.classList.contains('_active')) {
    document.body.classList.remove('_lock');
    menuIcon.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    }
});

//NAV SCROLL
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
}
function onMenuLinkClick(e) {
    const menuLink = e.target;
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset - document.querySelector('header').offsetHeight;
        if(menuIcon.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            menuIcon.classList.remove('_active');
            menuBody.classList.remove('_active');
        }

        window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
        });
        e.preventDefault();
    }
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.menu__link[data-goto]');
window.onscroll = () =>{
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset - 20 - document.querySelector('header').offsetHeight && top < offset - 20 - document.querySelector('header').offsetHeight + height) {
            navLinks.forEach(links => {
                links.classList.remove('link-active');
                document.querySelector('.menu__link[data-goto*=' + id +']').classList.add('link-active');
            });
        }
    });
};