document.addEventListener('DOMContentLoaded', function () {

    // --- Mobile Navigation Toggle ---
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('open');
        });

        // Close mobile nav when a link is clicked
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navToggle.classList.remove('active');
                navLinks.classList.remove('open');
            });
        });
    }

    // --- Scroll-based Nav Styling ---
    const mainNav = document.getElementById('mainNav');
    if (mainNav) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                mainNav.classList.add('scrolled');
            } else {
                mainNav.classList.remove('scrolled');
            }
        });
    }

    // --- Gallery Swiper ---
    var gallerySwiper = new Swiper('.gallerySwiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.gallerySwiper .swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.gallerySwiper .swiper-button-next',
            prevEl: '.gallerySwiper .swiper-button-prev'
        },
        breakpoints: {
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        },
        keyboard: { enabled: true },
        a11y: {
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide'
        }
    });

    // --- Testimonials Swiper ---
    var testimonialSwiper = new Swiper('.testimonialSwiper', {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.testimonialSwiper .swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.testimonialSwiper .swiper-button-next',
            prevEl: '.testimonialSwiper .swiper-button-prev'
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                centeredSlides: false
            },
            1024: {
                slidesPerView: 3,
                centeredSlides: false
            }
        }
    });

    // --- Treatment Card Read More ---
    document.querySelectorAll('.treatment-card').forEach(function (card) {
        var btn = card.querySelector('.read-more-btn');
        if (btn) {
            btn.addEventListener('click', function () {
                card.classList.toggle('expanded');
                btn.textContent = card.classList.contains('expanded') ? 'Read less' : 'Read more';
            });
        }
    });

    // --- Gallery Category Filtering ---
    document.querySelectorAll('.category-btn').forEach(function (button) {
        button.addEventListener('click', function () {
            document.querySelectorAll('.category-btn').forEach(function (btn) {
                btn.classList.remove('active');
            });
            button.classList.add('active');
        });
    });

    // --- Gallery Modal ---
    var modal = document.getElementById('gallery-modal');
    var modalImg = document.getElementById('modal-img');
    var modalCaption = document.getElementById('modal-caption');
    var closeModal = document.querySelector('.close-modal');

    if (modal && modalImg && closeModal) {
        document.querySelectorAll('.gallery-image').forEach(function (img) {
            img.addEventListener('click', function () {
                modal.style.display = 'flex';
                modalImg.src = img.src;
                modalCaption.textContent = img.alt;
            });
        });

        closeModal.addEventListener('click', function () {
            modal.style.display = 'none';
        });

        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && modal.style.display === 'flex') {
                modal.style.display = 'none';
            }
        });
    }

    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;
            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

});
