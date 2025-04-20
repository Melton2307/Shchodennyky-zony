
let currentPage = 0;
const pages = document.querySelectorAll('.page');
const flipSound = document.getElementById('flipSound');
const bgMusic = document.getElementById('bgMusic');

function nextPage() {
  if (currentPage < pages.length) {
    pages[currentPage].classList.add('flipped');
    currentPage++;
    flipSound.play();
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    pages[currentPage].classList.remove('flipped');
    flipSound.play();
  }
}

function changeLanguage(lang) {
  localStorage.setItem('lang', lang);
  document.querySelectorAll('[data-ua]').forEach(el => {
    el.innerText = el.dataset[lang];
  });
}

window.onload = () => {
  const lang = localStorage.getItem('lang') || 'ua';
  document.getElementById('languageSelect').value = lang;
  changeLanguage(lang);
}
