
document.addEventListener('DOMContentLoaded', function () {
    // HEADER ESCONDER AO ROLAR
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    function handleHeaderScroll() {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            header.classList.add('header--is-hidden');
        } else {
            header.classList.remove('header--is-hidden');
        }
        lastScrollY = window.scrollY;
    }

    window.addEventListener('scroll', handleHeaderScroll);

    // FAQ ACCORDION
    const faqItems = document.querySelectorAll('.faq__questions__item');

    function toggleFaqItem(item) {
        item.classList.toggle('faq__questions__item--is-open');
    }

    faqItems.forEach(item => {
        const question = item.querySelector('.faq__questions__item__question');
        question.addEventListener('click', () => toggleFaqItem(item));
    });

    // SMOOTH SCROLL PARA LINKS DO HEADER
    const navLinks = document.querySelectorAll('.header__nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ANIMAÇÃO DE ENTRADA DOS ELEMENTOS
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
        '.hero__content, .sinopse__text, .sinopse__image, .watch-content, .watch-image'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
});