(function() {
    window.addEventListener("load", () => {
        const loadTime = performance.now();
        const footer = document.querySelector("footer");
        const loadInfo = document.createElement("p");
        loadInfo.textContent = `Время загрузки страницы: ${loadTime.toFixed(2)} мс`;
        footer.appendChild(loadInfo);
    });

    const currentPage = document.location.pathname.split("/").pop();
    const menuLinks = document.querySelectorAll("nav ul li a");

    menuLinks.forEach(link => {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
})();
