(function() {
    const currentPage = document.location.pathname.split("/").pop();

    const menuItems = document.querySelectorAll('nav ul li a');

    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentPage) {
            item.classList.add('active');
        }

        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = '#ffdfdf';
        });

        item.addEventListener('mouseout', () => {
            item.style.backgroundColor = '';
        });
    });

    window.addEventListener('load', () => {
        const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        const footer = document.querySelector('footer');
        const loadTimeMessage = document.createElement('p');
        loadTimeMessage.textContent = `Время загрузки страницы: ${loadTime} мс`;
        footer.appendChild(loadTimeMessage);
    });
})();
