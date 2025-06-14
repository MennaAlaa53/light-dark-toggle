const btn = document.getElementById('toggle-btn');
const icon = document.getElementById('icon');
const body = document.body;

btn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');

  if (body.classList.contains('dark-mode')) {
    icon.textContent = '🌙'; 
  } else {
    icon.textContent = '☀️'; 
  }
});
