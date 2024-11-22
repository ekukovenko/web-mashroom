document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const commentsContainer = document.getElementById('comments-container');
    const commentTemplate = document.getElementById('comment-template');

    const fetchComments = async () => {
        try {
            preloader.style.display = 'flex';

            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/3/comments`);

            if (!response.ok) throw new Error(`Response status: ${response.status}`);

            let data = await response.json();

            shuffleArray(data)

            preloader.style.display = 'none';

            renderComments(data);
        } catch (error) {
            preloader.style.display = 'none';
            commentsContainer.innerHTML = `<p style="color: red;">⚠ Что-то пошло не так: ${error.message}</p>`;
        }
    };

    const renderComments = (comments) => {
        commentsContainer.innerHTML = '';

        comments.forEach((comment) => {
            const commentClone = commentTemplate.content.cloneNode(true);
            commentClone.querySelector('.comment-name').textContent = comment.name;
            commentClone.querySelector('.comment-email').textContent = comment.email;
            commentClone.querySelector('.comment-body').textContent = comment.body;
            commentsContainer.appendChild(commentClone);
        })
    };

    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };


    document.getElementById('refresh-button').addEventListener('click', fetchComments);

    fetchComments();
});
