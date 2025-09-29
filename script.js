document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Mobile Navigation
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
        });
    }

    // Close mobile nav when clicking a link
    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navLinksContainer.classList.contains('active')) {
                    navLinksContainer.classList.remove('active');
                }
            });
        });
    }

    // Active Navigation Link on Scroll
    function setActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            if (section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (section.id && link.getAttribute('href') === `#${section.id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // PDF Modal Functionality
    const modalOverlay = document.getElementById('pdfModalOverlay');
    const pdfModal = document.getElementById('pdfModal');
    const modalCloseBtn = pdfModal ? pdfModal.querySelector('.modal-close-btn') : null;
    const pdfIframe = pdfModal ? pdfModal.querySelector('.modal-body iframe') : null;
    const modalTitleEl = pdfModal ? pdfModal.querySelector('.modal-title') : null;
    const pdfLinks = document.querySelectorAll('a.open-pdf-modal');

    if (modalOverlay && pdfModal && modalCloseBtn && pdfIframe) {
        const openModal = (pdfUrl, title) => {
            if (pdfUrl) {
                pdfIframe.setAttribute('src', pdfUrl);
                if (modalTitleEl) modalTitleEl.textContent = title || 'Document Preview';
                modalOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        };
        const closeModal = () => {
            modalOverlay.classList.remove('active');
            pdfIframe.setAttribute('src', '');
            document.body.style.overflow = '';
        };
        pdfLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const pdfUrl = link.getAttribute('href');
                const title = link.getAttribute('data-modal-title') || link.textContent.trim();
                if (pdfUrl && pdfUrl !== '#') openModal(pdfUrl, title);
                else console.warn('PDF link href is missing or invalid:', link);
            });
        });
        modalCloseBtn.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
        document.addEventListener('keydown', e => { if (e.key === 'Escape' && modalOverlay.classList.contains('active')) closeModal(); });
    } else {
        console.warn('Modal elements not found. PDF Modal functionality will not work.');
    }

    // Intersection Observer for animations
    function setupIntersectionObserver() {
        const options = { root: null, rootMargin: '0px', threshold: 0.1 };
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, options);
        document.querySelectorAll('section, .timeline-item').forEach(el => observer.observe(el));
    }

    // Initialize Functions
    setupIntersectionObserver();

    // Event Listeners
    window.addEventListener('scroll', () => {
        setActiveLink();
    });

    setActiveLink();
});
