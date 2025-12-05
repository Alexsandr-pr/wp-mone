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
        const navOverlay = document.querySelector('.header-nav__overlay');

        const scrollBarWidth = window.innerWidth - document.body.offsetWidth + "px";

        const open = () => {
            header.classList.add('_active');
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = scrollBarWidth;
        }

        const close = () => {
            header.classList.remove('_active');
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }

        navOpenBtn.addEventListener('click', open);
        navCloseBtn.addEventListener('click', close);

        navOverlay.addEventListener('click', close);
    }

    initMenu();

    function initTestimonialsV1() {
        const testimonials = document.querySelector(".testimonials");

        if (testimonials) {
            new Swiper(".testimonials__swiper", {
                loop: true,
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
        const footerWrapper = document.querySelector(".footer-wrapper");

        if (!footer) return;
        if (!footerWrapper) return;


        const footerHeight = footer.offsetHeight;
        footerWrapper.style.height = `${footerHeight}px`;
    }

    initFooterReveal();

    window.addEventListener("resize", () => {
        initFooterReveal();
    });



    const container = document.querySelector(".home-animation__block");

    if (container) {
        gsap.registerPlugin(ScrollTrigger);

        const runAnimation = (useScroll, loop = true) => {
            const el1 = document.querySelector('.item-1');
            const el2 = document.querySelector('.item-2');
            const el2Copy = document.querySelector('.item-12');
            const el3 = document.querySelector('.item-3');
            const el4 = document.querySelector('.item-4');
            const el5 = document.querySelector('.item-5');
            const el6 = document.querySelector('.item-6');
            const el7 = document.querySelector('.item-7');
            const el8 = document.querySelector('.item-8');
            const el9 = document.querySelector('.item-9');
            const el10 = document.querySelector('.item-10');
            const el11 = document.querySelector('.item-11');

            const containerHeight = container.offsetHeight;
            const containerWidth = container.offsetWidth;

            const DESIGN_WIDTH = 1347;
            const DESIGN_HEIGHT = 858;

            const H = (px) => containerHeight * (px / DESIGN_HEIGHT);
            const W = (px) => containerWidth * (px / DESIGN_WIDTH);

            const STEP = 1;

            const timeline = gsap.timeline(
                useScroll
                    ? {
                        scrollTrigger: {
                            trigger: ".home-animation",
                            start: "top top",
                            end: "+=" + containerHeight * 4,
                            scrub: true,
                            pin: true,
                        }
                    }
                    : {
                        paused: true,
                        repeat: loop ? -1 : 0,
                        repeatDelay: 0,
                        defaults: { ease: "none" }
                    }
            );

            gsap.set(el1, { y: containerHeight + 120 });
            gsap.set(el2, { y: containerHeight, x: W(362) });
            gsap.set(el2Copy, { y: containerHeight + 180, x: W(904), opacity: 0.5, scale: 0.8 });
            gsap.set(el3, { y: containerHeight + 16, x: W(944) });
            gsap.set(el4, { y: containerHeight + 123, x: W(191), opacity: 0, scale: 0.5 });
            gsap.set(el5, { y: containerHeight + 63, x: W(1086), opacity: 0 });
            gsap.set(el6, { y: containerHeight + 304, x: W(474), opacity: 0 });
            gsap.set(el7, { y: containerHeight + 120, x: W(723), opacity: 0 });
            gsap.set(el8, { y: containerHeight + 248, x: W(1197), opacity: 0 });
            gsap.set(el9, { y: containerHeight + 76, x: W(261), opacity: 0 });
            gsap.set(el10, { y: containerHeight + 123, x: W(723), opacity: 0 });
            gsap.set(el11, { y: containerHeight + 160, x: W(904), opacity: 0 });

            timeline.addLabel("step1", 0 * STEP);
            timeline.addLabel("pre2", 1.1 * STEP);
            timeline.addLabel("step2", 1 * STEP);
            timeline.addLabel("step3", 2 * STEP);
            timeline.addLabel("step4", 3 * STEP);
            timeline.addLabel("step5", 4 * STEP);


            timeline.to(el1, { y: H(126), ease: "none", duration: STEP }, "step1");
            timeline.to(el2, { y: H(333), ease: "none", duration: STEP }, "step1");
            timeline.to(el3, { y: H(450), ease: "none", duration: STEP }, "step1");

            timeline.to(el2, {
                y: containerHeight + 180,
                x: W(162),
                ease: "none",
                duration: 1,
                scale: 0.8,
                opacity: 0.5
            }, "pre2");

            timeline.to(el2Copy, { y: H(333), x: W(362), ease: "none", duration: STEP, opacity: 1, scale: 1 }, "step2");
            timeline.to(el4, { y: H(525), opacity: 1, ease: "none", duration: STEP, scale: 1 }, "step2");
            timeline.to(el5, { y: H(465), opacity: 1, ease: "none", duration: STEP }, "step2");

            timeline.to(el6, { y: H(271), opacity: 1, ease: "none", duration: STEP }, "step3");
            timeline.to(el7, { y: H(88), opacity: 1, ease: "none", duration: STEP }, "step3");
            timeline.to(el8, { y: H(377), opacity: 1, ease: "none", duration: STEP }, "step3");

            timeline.to(el3, { y: H(370), ease: "none", duration: STEP }, "step4");
            timeline.to(el5, { y: H(385), ease: "none", duration: STEP }, "step4");
            timeline.to(el7, { y: H(9), ease: "none", duration: STEP }, "step4");
            timeline.to(el8, { y: H(297), ease: "none", duration: STEP }, "step4");
            timeline.to(el9, { y: H(465), opacity: 1, ease: "none", duration: STEP, x: W(231) }, "step4");
            timeline.to(el10, { y: H(415), opacity: 1, ease: "none", duration: STEP, x: W(799) }, "step4");
            timeline.to(el11, { y: H(499), opacity: 1, ease: "none", duration: STEP, x: W(651) }, "step4");

            timeline.to(
                [el1, el2, el2Copy, el3, el4, el5, el6, el7, el8, el9, el10, el11],
                {
                    y: containerHeight + 100,
                    opacity: 0,
                    ease: "none",
                    duration: STEP
                },
                "step5"
            );

            if (!useScroll) {
                timeline.play();
            }
        };

        ScrollTrigger.matchMedia({
            "(min-width: 1124px)": function () {
                runAnimation(true)
            },

            "(max-width: 1123px)": function () {
                runAnimation(false);
            }
        });

        let resizeTimeout;
        let lastWidth = window.innerWidth;

        window.addEventListener("resize", () => {
            clearTimeout(resizeTimeout);

            resizeTimeout = setTimeout(() => {
                if (window.innerWidth !== lastWidth) {
                    location.reload();
                }
            }, 50);
        });

    }
})
