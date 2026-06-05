//тригеры бургер и для формы

const triggers = document.querySelectorAll('.menu__trigger');

triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
        const expanded =
            trigger.getAttribute('aria-expanded') === 'true';

        trigger.setAttribute(
            'aria-expanded',
            !expanded
        );
    });
});

const button = document.getElementById('monitoringToggle');

const tableWrapper = document.querySelector(
    '.monitoring__table-wrapper'
);

button.addEventListener('click', () => {

    tableWrapper.classList.toggle('active');

    const arrow = button.querySelector(
        '.menu__arrow--monitoring'
    );

    arrow.classList.toggle('active');

    if (tableWrapper.classList.contains('active')) {
        button.firstChild.textContent = 'Свернуть все';
    } else {
        button.firstChild.textContent = 'Показать больше';
    }

});

document.querySelectorAll(".modal__form").forEach((form) => {
    const submitButton = form.querySelector('button[type="submit"]');

    const validateForm = () => {
        const requiredInputs = form.querySelectorAll(
            "input[required], textarea[required], select[required]"
        );

        let isValid = true;

        requiredInputs.forEach((input) => {
            if (input.type === "radio") {
                const radioGroup = form.querySelectorAll(
                    `input[name="${input.name}"]`
                );

                const checked = [...radioGroup].some(
                    (radio) => radio.checked
                );

                if (!checked) {
                    isValid = false;
                }
            } else if (input.type === "checkbox") {
                if (!input.checked) {
                    isValid = false;
                }
            } else {
                if (input.value.trim() === "") {
                    isValid = false;
                }
            }
        });

        submitButton.disabled = !isValid;

        submitButton.classList.toggle(
            "button--disabled",
            !isValid
        );
    };

    form.addEventListener("input", validateForm);
    form.addEventListener("change", validateForm);

    validateForm();
});



document.querySelectorAll(".input__number").forEach((input) => {

    input.addEventListener("focus", () => {
        input.placeholder = "+7 (999) 999-99-99";
    });

    input.addEventListener("blur", () => {
        if (input.value === "") {
            input.placeholder = "Телефон*";
        }
    });

});

const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
    mobileMenu.classList.toggle('active');
});


//сами формы+проверка


function buyForm() {
    const modal = document.getElementById('buyModal');
    modal.classList.add('active');
    openForm()
}

function testForm() {
    const modal = document.getElementById('testModal');
    modal.classList.add('active');
    openForm()
}
function knowForm() {
    const modal = document.getElementById('knowModal');
    modal.classList.add('active');
    openForm()
}
function becomeBestForm() {
    const modal = document.getElementById('becomeBestModal');
    modal.classList.add('active');
    openForm()
}

function closeForm(button) {
    const modal = button.closest('.modal');
    modal.classList.remove('active');

    document
        .querySelector('.main__header')
        .classList.remove('modal-open');
}

function openForm() {
    const modal = document.querySelector('.main__header')
    modal.classList.add('modal-open');
}

 function trust() {
const phoneInputs = document.querySelectorAll('.input__number');

phoneInputs.forEach((input) => {

    input.addEventListener('focus', () => {
        input.placeholder = '+7 (999) 999-99-99';
    });

    input.addEventListener('blur', () => {

        if (input.value === '') {
            input.placeholder = 'Телефон*';
        }

    });

});

phoneInputs.forEach((input) => {

    input.addEventListener('input', () => {

        let value = input.value.replace(/\D/g, '');

        if (value.startsWith('7')) {
            value = value.substring(1);
        }

        let formatted = '+7';

        if (value.length > 0) {
            formatted += ' (' + value.substring(0, 3);
        }

        if (value.length >= 4) {
            formatted += ') ' + value.substring(3, 6);
        }

        if (value.length >= 7) {
            formatted += '-' + value.substring(6, 8);
        }

        if (value.length >= 9) {
            formatted += '-' + value.substring(8, 10);
        }

        input.value = formatted;

    });

});
}

//карусель

const track = document.querySelector('.carousel__track');
const slides = document.querySelectorAll('.carousel__slide');
const nextButton =
    document.querySelector('.carousel__button--next');
const prevButton =
    document.querySelector('.carousel__button--prev');
const paginationFill =
    document.querySelector('.carousel__pagination-fill');
let currentSlide = 0;
const totalSlides = slides.length;
function updateCarousel() {
    track.style.transform =
        `translateX(-${currentSlide * 100}%)`;
    const progress =
        ((currentSlide + 1) / totalSlides) * 100;
    paginationFill.style.width = `${progress}%`;

    if (currentSlide === 0) {
        prevButton.classList.add('hidden');
    } else {
        prevButton.classList.remove('hidden');
    }

    if (currentSlide === totalSlides - 1) {
        nextButton.classList.add('hidden');
    } else {
        nextButton.classList.remove('hidden');
    }
}

nextButton.addEventListener('click', () => {

    if (currentSlide < totalSlides - 1) {

        currentSlide++;

        updateCarousel();
    }
});

prevButton.addEventListener('click', () => {

    if (currentSlide > 0) {

        currentSlide--;

        updateCarousel();
    }
});

updateCarousel();

//плюсики

const image1 = document.querySelector('.carousel-image-1');
const defaultImage1 = '../img/phon/bd_1.png';
const image2 = document.querySelector('.carousel-image-2');
const defaultImage2 = '../img/phon/bd_2.png';
const image3 = document.querySelector('.carousel-image-3');
const defaultImage3 = '../img/phon/bd_3.png';

[
    ['.plus--change__period', '../img/carusel/change_period_new.png'],
    ['.plus--interective__grafics', '../img/carusel/interective__grafics.png'],
    ['.plus--detail__static', '../img/carusel/detail_static.png']
].forEach(([selector, hoverImage]) => {
    const hotspot = document.querySelector(selector);

    hotspot?.addEventListener('mouseenter', () => {
        image1.src = hoverImage;
    });

    hotspot?.addEventListener('mouseleave', () => {
        image1.src = defaultImage1;
    });
});

[
    ['.plus--settings__top-and-metric', '../img/carusel/settings__top-and-metric.png'],
    ['.plus--formation__mode', '../img/carusel/formation__mode.png'],
    ['.plus--detail_request', '../img/carusel/detail_request.png'],
].forEach(([selector, hoverImage]) => {
    const hotspot = document.querySelector(selector);

    hotspot?.addEventListener('mouseenter', () => {
        image2.src = hoverImage;
    });

    hotspot?.addEventListener('mouseleave', () => {
        image2.src = defaultImage2;
    });
});

[
    ['.plus--execution__analysis', '../img/carusel/execution__analysis.png'],
    ['.plus--dynamics__of__changes', '../img/carusel/dynamics__of__changes.png'],
].forEach(([selector, hoverImage]) => {
    const hotspot = document.querySelector(selector);

    hotspot?.addEventListener('mouseenter', () => {
        image3.src = hoverImage;
    });

    hotspot?.addEventListener('mouseleave', () => {
        image3.src = defaultImage3;
    });
});


const pluses = document.querySelectorAll('.plus');

pluses.forEach(currentPlus => {
    currentPlus.addEventListener('mouseenter', () => {

        pluses.forEach(plus => {
            if (plus !== currentPlus) {
                plus.classList.add('is-hidden');
            }
        });

    });

    currentPlus.addEventListener('mouseleave', () => {

        pluses.forEach(plus => {
            plus.classList.remove('is-hidden');
        });

    });
});

//таблица 450

const imageLink = document.querySelector('.monitoring__image-link');
const imageModal = document.querySelector('#imageModal');
const imageClose = document.querySelector('.image-modal__close');

if (imageLink && imageModal && imageClose) {

    imageLink.addEventListener('click', (e) => {
        e.preventDefault();
        imageModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    imageClose.addEventListener('click', () => {
        imageModal.classList.remove('active');
        document.body.style.overflow = '';
    });

    imageModal.addEventListener('click', (e) => {
        if (e.target === imageModal) {
            imageModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            imageModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

//small carusel 450
const carouselImages = document.querySelectorAll('.zoomable-image');

const carouselModal = document.getElementById('carouselModal');
const carouselModalImg = document.getElementById('carouselModalImg');

const carouselClose =
    document.querySelector('.carousel-modal__close');

const carouselPrev =
    document.querySelector('.carousel-modal__nav--prev');

const carouselNext =
    document.querySelector('.carousel-modal__nav--next');



if (
    carouselImages.length &&
    carouselModal &&
    carouselModalImg
) {

    let currentIndex = 0;

    function openModal(index) {

    currentIndex = index;

    carouselModalImg.src =
        carouselImages[index].dataset.full ||
        carouselImages[index].src;

    updateButtons();

    carouselModal.classList.add('active');

    document.body.style.overflow = 'hidden';
}
    function updateButtons() {

    carouselPrev.disabled = currentIndex === 0;

    carouselNext.disabled =
        currentIndex === carouselImages.length - 1;
}

    function closeModal() {

        carouselModal.classList.remove('active');

        document.body.style.overflow = '';
    }

    function showImage(index) {

    if (index < 0 || index >= carouselImages.length) {
        return;
    }

    currentIndex = index;

    carouselModalImg.src =
        carouselImages[index].dataset.full ||
        carouselImages[index].src;

    updateButtons();
}

    carouselImages.forEach((img, index) => {

        img.addEventListener('click', () => {

            if (window.innerWidth > 450) {
                return;
            }

            openModal(index);
        });
    });

    carouselClose.addEventListener('click', closeModal);

    carouselPrev.addEventListener('click', () => {
        showImage(currentIndex - 1);
    });

    carouselNext.addEventListener('click', () => {
        showImage(currentIndex + 1);
    });

    carouselModal.addEventListener('click', (e) => {

        if (e.target === carouselModal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {

        if (!carouselModal.classList.contains('active')) {
            return;
        }

        if (e.key === 'Escape') {
            closeModal();
        }

        if (e.key === 'ArrowLeft') {
            showImage(currentIndex - 1);
        }

        if (e.key === 'ArrowRight') {
            showImage(currentIndex + 1);
        }
    });
}

