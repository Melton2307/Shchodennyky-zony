
function showPage(id) {
  document.querySelectorAll('.page').forEach(page => page.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function switchLanguage(lang) {
  document.querySelectorAll('[data-lang-ua], [data-lang-en], [data-lang-pl]').forEach(el => {
    el.textContent = el.getAttribute('data-lang-' + lang);
  });
}
