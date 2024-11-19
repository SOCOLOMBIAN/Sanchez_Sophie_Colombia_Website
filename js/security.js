document.addEventListener('DOMContentLoaded', () => {
    const accordionButtons = document.querySelectorAll('.accordion-btn');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tipContent = button.nextElementSibling;
            const chevronIcon = button.querySelector('.fa-chevron-down');

            // Toggle content visibility
            tipContent.style.display = tipContent.style.display === 'block' ? 'none' : 'block';

            // Rotate chevron icon
            chevronIcon.classList.toggle('fa-rotate-180');
        });
    });
});