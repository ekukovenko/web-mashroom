document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const commentsContainer = document.getElementById('comments-container');

    const fetchComments = async () => {
        try {
            preloader.classList.remove('hidden');

            const randomFilter = Math.random() > 0.5 ? '?id_gte=100' : '?id_lte=50';
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments${randomFilter}`);

            if (!response.ok) throw new Error(`Response status: ${response.status}`);

            const data = await response.json();

            preloader.classList.add('hidden');

            renderComments(data);
        } catch (error) {
            preloader.classList.add('hidden');
            commentsContainer.innerHTML = `<p style="color: red;">⚠ Что-то пошло не так: ${error.message}</p>`;
        }
    };

    const renderComments = (comments) => {
        commentsContainer.innerHTML = comments
            .slice(0, 10)
            .map(
                (comment) => `
                <div class="comment-card">
                    <h3>${comment.name}</h3>
                    <p><strong>Email:</strong> ${comment.email}</p>
                    <p>${comment.body}</p>
                </div>
            `
            )
            .join('');
    };

    document.getElementById('refresh-button').addEventListener('click', fetchComments);

    fetchComments();
});
