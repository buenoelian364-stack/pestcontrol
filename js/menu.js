        // Mobile menu toggle
        const burgerMenu = document.getElementById('burgerMenu');
        const mobileMenu = document.getElementById('mobileMenu');

        if (burgerMenu) {
            burgerMenu.addEventListener('click', function() {
                mobileMenu.classList.toggle('active');
                burgerMenu.classList.toggle('active');
            });
        }

        // Close mobile menu when clicking on a link
        const mobileLinks = document.querySelectorAll('.mobile-nav-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                burgerMenu.classList.remove('active');
            });
        });