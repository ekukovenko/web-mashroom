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

               const imageElement = mushroomClone.querySelector('.mushroom-image');
                if (Array.isArray(mushroom.images) && mushroom.images.length > 0) {
                    imageElement.src = mushroom.images[0];
                    imageElement.alt = mushroom.name;

                    imageElement.addEventListener('click', () => {
                        localStorage.setItem('currentMushroom', JSON.stringify(mushroom));
                        window.location.href = 'slider.html';
                    });
                } else {
                    imageElement.src = 'https://elitas.ru/images/no-image-large.jpg';
                    imageElement.alt = 'Изображение отсутствует';
                }

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
