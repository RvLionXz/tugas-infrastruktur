// This function will be called from auth.js after the main content is loaded.
function initializeMainScript() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuIcon = mobileMenuButton ? mobileMenuButton.querySelector('i') : null;

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            const isActive = mobileMenu.classList.toggle('active');
            if (isActive) {
                mobileMenuIcon.classList.remove('fa-bars');
                mobileMenuIcon.classList.add('fa-times', 'rotate-90'); 
            } else {
                mobileMenuIcon.classList.remove('fa-times', 'rotate-90');
                mobileMenuIcon.classList.add('fa-bars');
            }
        });
    }

    const topicButtons = document.querySelectorAll('.topic-btn');
    const topicContent = document.getElementById('topic-content');
    const topicSections = document.querySelectorAll('.topic-section');
    const closeTopicButton = document.getElementById('close-topic');

    topicButtons.forEach(button => {
        button.addEventListener('click', () => {
            const topic = button.getAttribute('data-topic');
            
            topicSections.forEach(section => {
                section.classList.add('hidden');
            });
            
            document.getElementById(`${topic}-content`).classList.remove('hidden');
            topicContent.classList.remove('hidden');
            topicContent.classList.add('animated'); 
            
            topicContent.scrollIntoView({ behavior: 'smooth' });
        });
    });

    if (closeTopicButton) { 
        closeTopicButton.addEventListener('click', () => {
            topicContent.classList.remove('animated');
            setTimeout(() => {
                topicContent.classList.add('hidden');
            }, 500); 
        });
    }

    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const targetWidth = bar.getAttribute('data-target');
        bar.style.width = `${targetWidth}%`;
    });

    document.querySelectorAll('#main-content a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                if (mobileMenu && mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    if (mobileMenuIcon) {
                        mobileMenuIcon.classList.remove('fa-times', 'rotate-90');
                        mobileMenuIcon.classList.add('fa-bars');
                    }
                }
            }
        });
    });

    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.');
            contactForm.reset();
        });
    }

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' 
    });

    animateElements.forEach(element => {
        const delay = element.getAttribute('data-delay');
        if (delay) {
            element.style.transitionDelay = delay;
        }
        observer.observe(element);
    });
}