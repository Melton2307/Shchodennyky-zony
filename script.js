
let currentSpread = 0;
const spreads = document.querySelectorAll('.book');

function showSpread(index) {
    spreads.forEach((spread, i) => {
        spread.style.display = (i === index) ? 'flex' : 'none';
    });
}

function nextPage() {
    if (currentSpread < spreads.length - 1) {
        currentSpread++;
        showSpread(currentSpread);
    }
}

function prevPage() {
    if (currentSpread > 0) {
        currentSpread--;
        showSpread(currentSpread);
    }
}

document.addEventListener("DOMContentLoaded", () => showSpread(currentSpread));
