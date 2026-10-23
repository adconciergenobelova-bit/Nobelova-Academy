
// Place this in your script.js or inside a <script> tag at the end of your body
        document.getElementById('mobile-menu-button').onclick = function() {
            var menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
};
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const mobileMenu = document.getElementById('mobile-menu');
                    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                }
            });
        });
        
        // Add shadow to header on scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 10) {
                header.classList.add('shadow-md');
                header.classList.remove('shadow-sm');
            } else {
                header.classList.remove('shadow-md');
                header.classList.add('shadow-sm');
            }
        });

        const bookingForm = document.getElementById('training-booking-form');
        if (bookingForm) {
            bookingForm.addEventListener('submit', function (event) {
                event.preventDefault();
                const data = new FormData(bookingForm);
                const message = [
                    'Hello Nobelova Gradani, I would like to book a training programme.',
                    `Name: ${data.get('name')}`,
                    `Phone: ${data.get('phone')}`,
                    `Programme: ${data.get('programme')}`,
                    `Preferred start date: ${data.get('date')}`,
                    `Notes: ${data.get('notes') || 'None'}`
                ].join('\n');
                window.location.href = `https://wa.me/2348081959392?text=${encodeURIComponent(message)}`;
            });
        }
