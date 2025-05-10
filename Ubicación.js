document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".container");
    setInterval(() => {
        container.style.boxShadow = `0 0 30px rgba(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}, 0.8)`;
    }, 1000);
});
