document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('gallery-container');

    const loadMushrooms = () => JSON.parse(localStorage.getItem('mushrooms')) || [];

    saveMushrooms = (mushrooms) => localStorage.setItem('mushrooms', JSON.stringify(mushrooms));

    const update = () => {

        const mushrooms = loadMushrooms();
        galleryContainer.innerHTML = '';

        if (mushrooms.length === 0) {
            galleryContainer.innerHTML = '<p>Нет добавленных грибов.</p>';
        } else {
            mushrooms.forEach((mushroom, index) => {
                const mushroomCard = document.createElement('div');
                mushroomCard.classList.add('mushroom-card');
                mushroomCard.innerHTML = `
                <h3>${mushroom.name}</h3>
                <img src="${mushroom.image}" alt="${mushroom.name}">
                <p><strong>Тип:</strong> ${mushroom.type}</p>
                <p><strong>Комментарий:</strong> ${mushroom.comment}</p>
                <button class="delete-button" data-index=${index}>Удалить</button>
            `;
                galleryContainer.appendChild(mushroomCard);
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
