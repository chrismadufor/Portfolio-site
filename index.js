const navBtn = document.getElementById('nav-btn');
const mobileNav = document.getElementById('mobile-nav');


navBtn.addEventListener('click', () => {
    mobileNav.classList.toggle ('open')
})