let darkMode = localStorage.getItem('darkMode');
let spaceMode = localStorage.getItem('spaceMode');

const darkButton = document.getElementById('theme-btn');
const spaceButton = document.getElementById('theme-btn-space')
const alienShip = document.getElementById('spaceship');

// DARK
//////////////////////////////////////////////////////////////
const enableDarkMode = () => {
  document.body.classList.add('dark');
  document.body.classList.remove('space');
  document.getElementById('theme-btn').innerText = 'Light Mode';
  document.getElementById('tryme').style.display = 'none';
  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  document.body.classList.remove('dark');
  document.getElementById('theme-btn').innerText = 'Dark Mode';
  localStorage.setItem('darkMode', null);
};

if(darkMode === 'enabled') {
  enableDarkMode();
}

darkButton.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// SPACE
////////////////////////////////////////////////////////////
const enableSpaceMode = () => {
  document.body.classList.add('space');
  document.body.classList.remove('dark');
  document.getElementById('theme-btn-space').innerText = 'Main Theme';
  document.getElementById('tryme').style.display = 'none';
  // document.body.classList.remove('hide-ship');
  document.getElementById('spaceship').style.left = '3000px';
  document.getElementById('spaceship').style.top = '-200px';
  localStorage.setItem('spaceMode', 'enabled');
};

const disableSpaceMode = () => {
  document.body.classList.remove('space');
  document.getElementById('theme-btn-space').innerText = 'Outer Space';
  localStorage.setItem('spaceMode', null);
};

if(spaceMode === 'enabled') {
  enableSpaceMode();
}

spaceButton.addEventListener('click', () => {
  spaceMode = localStorage.getItem('spaceMode');
  if (spaceMode !== 'enabled') {
    enableSpaceMode();
    // moveShip();
  } else {
    disableSpaceMode();
  }
});