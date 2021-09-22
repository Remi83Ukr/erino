window.addEventListener('DOMContentLoaded', () => {

    // burger
    const burger = document.querySelector('#nav-toggle');
    const menu = document.querySelector('#nav');

    burger.addEventListener('click', (event) => {
        event.preventDefault();
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    })

    // tabs

    const tabs = document.querySelectorAll('.room__tabs-link'),
          tabsContent = document.querySelectorAll('.room__cards-row'),
          tabsParrent = document.querySelector('.room__tabs'),
          dividers = document.querySelectorAll('.divider__small');

    function hideTabsContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
            item.classList.remove('fade');
        });
        tabs.forEach(item => {
            item.classList.remove('room__tabs-link-active');
        });
        dividers.forEach(item => {
            item.classList.remove('divider__small-active');
        });
    };

    function showTabsContent (i = 0) {
        tabsContent[i].style.display = 'flex';
        tabsContent[i].classList.add('fade');
        tabs[i].classList.add('room__tabs-link-active');
        dividers[i].classList.add('divider__small-active');

    };

    hideTabsContent();
    showTabsContent();

    tabsParrent.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target;

        if (target && target.classList.contains('room__tabs-link')) {
            tabs.forEach((item, i) => {
                if(target == item) {
                    hideTabsContent();
                    showTabsContent(i);
                }
            });
        }
    });

    // slider
    const slides = document.querySelectorAll('.room__cards-row'),
        prev = document.querySelector('.slider__prev'),
        next = document.querySelector('.slider__next');
    let slideIndex = 1;

    showSlides(slideIndex);

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(item => {
            item.style.display = 'none';
             item.classList.remove('fade');
        });

        slides[slideIndex - 1].style.display = 'flex';
        slides[slideIndex - 1].classList.add('fade');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    prev.addEventListener('click', () => {
        plusSlides(-1);
    });
    next.addEventListener('click', () => {
        plusSlides(1);
    });

    // slider-carousele
    //  const slide = document.querySelectorAll('.slider__img'),
    //     slidesWrapper = document.querySelectorAll('.slider__wrapper'),
    //     slidesFields = document.querySelectorAll('.slider__inner'),
    //     slideWrap = document.querySelector('.slider__wrapper'),
    //     width = window.getComputedStyle(slideWrap).width,
    //     dots = document.querySelectorAll('.cards__dots li');

    // let sliderIndex = 1,
    //     offset = 0;

    // slidesFields.forEach(item => {
    //     item.style.width = 100 * slides.length + '%';
    //     item.style.display = 'flex';
    //     item.style.transition = '0.5s all';
        
    // });

    // slidesWrapper.forEach(item => {
    //     item.style.overflow = 'hidden';
    //     dots.forEach(dot => dot.style.opacity = '.5');
    //     dots[sliderIndex - 1].style.opacity = 1;
    // });
    

    

    // dots.forEach(dot => {
    //     dot.addEventListener('click', (e) => {
    //         const slideTo = e.target.getAttribute('data-slide-to');
    //         sliderIndex = slideTo;
    //         offset = +width.slice(0, width.length - 2) * (slideTo - 1);
    //         console.log(offset);
    //         slidesFields[slideTo - 1].style.transform = `translateX(-${offset}px)`;
    //         dots.forEach(dot => dot.style.opacity = '.5');
    //         dots[sliderIndex - 1].style.opacity = 1;
    //     });
    // });

    // More

    const btn = document.querySelectorAll('.cards__link a'),
        more = document.querySelectorAll('.cards__description');

        btn.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const targetCard = e.target.getAttribute('data-card');
                more[targetCard - 1].classList.toggle('cards__description-full');
                if (more[targetCard - 1].classList.contains('cards__description-full')) {
                   btn[targetCard - 1].textContent = 'Свернуть'; 
                } else {
                    btn[targetCard - 1].textContent = 'Подробнее'; 
                }
            })
        })
});