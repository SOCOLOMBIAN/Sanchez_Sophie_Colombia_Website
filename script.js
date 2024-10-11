document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const menuBtns = document.querySelectorAll('.menu-btn');

    // Subtle parallax effect for header background
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        header.style.backgroundPositionY = scrollTop * 0.3 + 'px'; // Reduced parallax effect
    });

    // Add click effect to menu buttons
    menuBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            let ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;
            
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });
    });
});