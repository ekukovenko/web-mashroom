document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('gallery-container');
    const mushroomTemplate = document.getElementById('mushroom-template');

    const loadMushrooms = () => JSON.parse(localStorage.getItem('mushrooms')) || [];

    saveMushrooms = (mushrooms) => localStorage.setItem('mushrooms', JSON.stringify(mushrooms));

    const update = () => {

        const mushrooms = loadMushrooms();
        galleryContainer.innerHTML = '';

        if (mushrooms.length === 0) {
            galleryContainer.innerHTML = '<p>Нет добавленных грибов.</p>';
        } else {
            mushrooms.forEach((mushroom, index) => {
                const mushroomClone = mushroomTemplate.content.cloneNode(true);
                mushroomClone.querySelector('.mushroom-name').textContent = mushroom.name;
                mushroomClone.querySelector('.mushroom-type').textContent = mushroom.type;
                mushroomClone.querySelector('.mushroom-comment').textContent = mushroom.comment;

                const sliderContainer = mushroomClone.querySelector('.swiper-wrapper');
                mushroom.images.forEach(image => {
                    const slide = document.createElement('div');
                    slide.classList.add('swiper-slide');
                    slide.innerHTML = `<img src="${image}" alt="${mushroom.name}">`;
                    sliderContainer.appendChild(slide);
                })

                const deleteButton = mushroomClone.querySelector('.delete-button');
                deleteButton.dataset.index = index;
                galleryContainer.appendChild(mushroomClone);
            });
            new Swiper('.swiper-container', {
                pagination: {
                    el: '.swiper-pagination',
                },
                slidesPerView: 1,
                spaceBetween: 0,
                loop: true,
            })
        }
    };
    galleryContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-button')) {
            const mushrooms = loadMushrooms();
            const index = e.target.dataset.index;
            mushrooms.splice(index, 1);
            saveMushrooms(mushrooms);
            update();
        }
    });
    update();
});
