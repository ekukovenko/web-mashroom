document.addEventListener('DOMContentLoaded', () => {
    const mushroom = JSON.parse(localStorage.getItem('currentMushroom'));

    if (!mushroom || !mushroom.images) {
        alert('Нет данных для отображения слайдера.');
        window.location.href = 'gallery.html';
        return;
    }

    const swiperWrapper = document.querySelector('.swiper-wrapper');

    mushroom.images.forEach((image) => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        slide.innerHTML = `<img src="${image}" alt="${mushroom.name}">`;
        swiperWrapper.appendChild(slide);
    });

    new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 1,
        spaceBetween: 10,
        loop: false,
    });

    const backButton = document.querySelector('.back-button');
    backButton.addEventListener('click', (e) => {
        window.history.back();
    })
});
