
const stories = ['story1.html', 'story2.html', 'story3.html'];
let current = 0;

function loadStory(index) {
  fetch(stories[index])
    .then(res => res.text())
    .then(html => {
      document.getElementById('page-container').innerHTML = html;
      document.getElementById('page-number').innerText = `Сторінка ${index + 1}`;
    });
}

function prevPage() {
  if (current > 0) {
    current--;
    loadStory(current);
  }
}

function nextPage() {
  if (current < stories.length - 1) {
    current++;
    loadStory(current);
  }
}

function goToStory(index) {
  current = index;
  loadStory(current);
}

window.onload = () => loadStory(current);
