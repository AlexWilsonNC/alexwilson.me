document.getElementById('theme-btn').addEventListener('click', function () {
  if (document.body.classList == '') {
    document.body.classList.add('dark')
    document.getElementById('theme-btn').innerText = 'Light Mode';
  } else {
    document.body.classList.remove('dark')
    document.getElementById('theme-btn').innerText = 'Dark Mode';

  }
});