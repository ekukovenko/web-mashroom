document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('mushroom-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const newMushroom = {
            name: document.getElementById('name').value,
            type: document.getElementById('type').value,
            comment: document.getElementById('comment').value,
            image: document.getElementById('image').value,
        };

        const mushrooms = JSON.parse(localStorage.getItem('mushrooms')) || [];
        mushrooms.push(newMushroom);

        localStorage.setItem('mushrooms', JSON.stringify(mushrooms));

        alert('Гриб успешно добавлен!');
        form.reset();
    });
});
