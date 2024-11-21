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
                mushroomClone.querySelector('.mushroom-image').src = mushroom.image;
                mushroomClone.querySelector('.mushroom-image').alt = mushroom.name;
                const deleteButton = mushroomClone.querySelector('.delete-button');
                deleteButton.dataset.index = index;
                galleryContainer.appendChild(mushroomClone);
            });
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
