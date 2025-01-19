// Toggles the left menu visibility
function toggleMenu() {
    const menu = document.querySelector('.left-menu');
    menu.classList.toggle('collapsed');
}

// Adjusts page scale based on screen width
function adjustPageScale() {
    const width = window.innerWidth;
    let scale = 1;

    if (width <= 600) {
        scale = 0.5;
    } else if (width > 600 && width <= 700) {
        scale = 0.75;
    } else if (width > 700 && width <= 767) {
        scale = 0.8;
    } else if (width >= 992 && width <= 1600) {
        scale = 0.9;
    }

    document.body.style.transform = `scale(${scale})`;
    document.body.style.transformOrigin = 'top left';
}

// Debounce function to optimize resize event
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Event listeners for resizing and initial load
window.addEventListener('resize', debounce(adjustPageScale, 200));
window.addEventListener('load', adjustPageScale);
