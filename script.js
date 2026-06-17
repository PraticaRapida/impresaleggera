(function () {
    'use strict';

    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    const revealCandidates = document.querySelectorAll(
        '.hero-inner, .section-inner, .closing-inner'
    );
    revealCandidates.forEach((el) => el.classList.add('reveal'));

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
        );
        revealCandidates.forEach((el) => observer.observe(el));
    } else {
        revealCandidates.forEach((el) => el.classList.add('is-visible'));
    }

    const header = document.querySelector('.site-header');
    if (header) {
        const onScroll = () => {
            if (window.scrollY > 24) {
                header.style.background = 'rgba(250, 247, 242, 0.95)';
                header.style.boxShadow = '0 1px 0 rgba(26, 29, 36, 0.06)';
            } else {
                header.style.background = 'rgba(250, 247, 242, 0.85)';
                header.style.boxShadow = 'none';
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }
})();
