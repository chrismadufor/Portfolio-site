const navBtn = document.getElementById('nav-btn');
const mobileNav = document.getElementById('mobile-nav');




navBtn.addEventListener('click', () => {
    document.body.classList.toggle('lock-scroll');
    mobileNav.classList.toggle ('open')
    document.querySelector('main').addEventListener('click', () => {
        if (mobileNav.classList.contains ('open')) {
            mobileNav.classList.remove ('open')
            document.body.classList.remove('lock-scroll');
        }
    })
})

