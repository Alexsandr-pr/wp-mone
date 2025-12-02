import "@/styles/styles.scss"


window.addEventListener("DOMContentLoaded", () => {

    function initHomeHeroImage() {
        const homeHero = document.querySelector('.home-hero');
        if (!homeHero) return;
        setTimeout(() => {
            document.querySelector('.block').classList.add('animate');
        }, 1000);
    }
    initHomeHeroImage();

    function initMenu() {
        const header = document.querySelector('.header');
        const navOpenBtn = document.querySelector('.header-right__menu-button');
        const navCloseBtn = document.querySelector('.header-nav__close');

        navOpenBtn.addEventListener('click', () => {
            header.classList.add('_active');
        });

        navCloseBtn.addEventListener('click', () => {
            header.classList.remove('_active');
        });
    }

    initMenu();

    function initTestimonialsV1() {
        const testimonials = document.querySelector(".testimonials");

        if (testimonials) {
            new Swiper(".testimonials__swiper", {
                loop: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                grabCursor: true,
                speed: 800,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            })
        }
    }

    initTestimonialsV1();

    function initImageAnims() {
        const imageAnimContainers = document.querySelectorAll("[data-image-anims]");
        if (imageAnimContainers.length === 0) return;

        imageAnimContainers.forEach(container => {
            const images = [...container.querySelectorAll("img[data-image-anim]")];
            let current = Number(container.dataset.imageAnimsActive) || 1;
            let timer = null;
            const delay = 700;

            function applyActive(index) {
                images.forEach(img => {
                    img.classList.toggle("active", Number(img.dataset.imageAnim) === index);
                });
                container.dataset.imageAnimsActive = index;
                current = index;
            }

            applyActive(current);

            function nextImage() {
                const next = current + 1 > images.length ? 1 : current + 1;
                applyActive(next);
            }

            function startCycle() {
                stopCycle();

                const firstDelay = 200;

                timer = setTimeout(() => {
                    nextImage();
                    timer = setInterval(nextImage, delay);
                }, firstDelay);
            }

            function stopCycle() {
                if (timer) {
                    clearInterval(timer);
                    timer = null;
                }
            }

            container.addEventListener("mouseenter", () => {
                startCycle();
            });

            container.addEventListener("mouseleave", () => {
                stopCycle();
                applyActive(current);
            });
        });
    }

    initImageAnims();

    function initSMDesignHeroImageAnim() {
        const oldImg = document.querySelector(".social-media-design-hero__image");
        const newImg = document.querySelector(".social-media-design-hero__image-anim");


        if (!oldImg || !newImg) return;

        setTimeout(() => {

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    oldImg.classList.add("is-hidden");
                    newImg.classList.add("is-active");
                });
            });
        }, 1000);
    }

    initSMDesignHeroImageAnim();


    function initFooterReveal() {

        const footer = document.querySelector(".footer");
        const footerWrapper= document.querySelector(".footer-wrapper");

        if (!footer) return;
        if (!footerWrapper) return;


        const footerHeight = footer.offsetHeight;
        footerWrapper.style.height = `${footerHeight}px`;
    }

    initFooterReveal();

    window.addEventListener("resize", () => {
        initFooterReveal();
    });
})




