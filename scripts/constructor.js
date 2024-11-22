document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('mushroom-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name  = document.getElementById('name').value.trim()
        const type = document.getElementById('type').value.trim()
        const comment = document.getElementById('comment').value.trim()
        const imagesInput = document.getElementById('images').value.trim()

        if (!name || !type || !comment || !imagesInput) {
            alert('Все поля должны быть заполнены!');
            return;
        }

        const images = imagesInput.split(",").map(url => url.trim())

        const newMushroom = {name, type, comment, images};

        const mushrooms = JSON.parse(localStorage.getItem('mushrooms')) || [];
        mushrooms.push(newMushroom);

        localStorage.setItem('mushrooms', JSON.stringify(mushrooms));

        alert('Гриб успешно добавлен!');
        form.reset();
    });
});
