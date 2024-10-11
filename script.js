document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.nav-menu');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
        
        if (scrollTop === 0) {
            nav.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        } else {
            nav.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        }
        
        lastScrollTop = scrollTop;
    });
});