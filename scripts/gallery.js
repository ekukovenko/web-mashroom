document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('gallery-container');

    const mushrooms = JSON.parse(localStorage.getItem('mushrooms')) || [];

    if (mushrooms.length === 0) {
        galleryContainer.innerHTML = '<p>Нет добавленных грибов.</p>';
    } else {
        mushrooms.forEach((mushroom) => {
            const mushroomCard = document.createElement('div');
            mushroomCard.classList.add('mushroom-card');
            mushroomCard.innerHTML = `
                <h3>${mushroom.name}</h3>
                <img src="${mushroom.image}" alt="${mushroom.name}">
                <p><strong>Тип:</strong> ${mushroom.type}</p>
                <p><strong>Комментарий:</strong> ${mushroom.comment}</p>
            `;
            galleryContainer.appendChild(mushroomCard);
        });
    }
});
