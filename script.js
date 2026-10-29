const scroll = new LocomotiveScroll({
    el: document.querySelector('#container'),
    smooth: true
});

document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll("img[data-src]");

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const img = entry.target;

                img.src = img.dataset.src;

                img.onload = () => {
                    img.classList.add("loaded");
                };

                observer.unobserve(img);
            }

        });

    }, {
        rootMargin: "100px 0px",
        threshold: 0
    });

    images.forEach(img => {
        observer.observe(img);
    });

});
