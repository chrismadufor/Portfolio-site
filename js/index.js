const navBtn = document.getElementById('nav-btn');
const mobileNav = document.getElementById('mobile-nav');


navBtn.addEventListener('click', () => {
    if (mobileNav.classList.contains ('open')) {
        mobileNav.classList.remove ('open')
        document.body.classList.remove('lock-scroll');
    }
    else {
        mobileNav.classList.add('open')
        document.body.classList.add('lock-scroll')
    }
})


