const navBtn = document.getElementById('nav-btn');
const mobileNav = document.getElementById('mobile-nav');


navBtn.addEventListener('click', () => {
    document.body.classList.toggle('lock-scroll');
    mobileNav.classList.toggle ('open')
})
