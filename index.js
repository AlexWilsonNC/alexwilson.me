document.getElementById('theme-btn').addEventListener('click', function () {
    const button = document.getElementById('theme-btn');
    const pWhite = document.querySelectorAll('.project-text');

    document.body.classList = 'dark';
    document.getElementById('nav').style.backgroundColor = 'black';
    document.getElementById('white-tech-box').style.backgroundColor = 'rgb(22, 22, 22)';
    document.getElementById('white-tech-box').style.color = 'white';
    document.getElementById('testimonials').style.color = 'white';
    document.getElementById('up-arrow').style.color = 'black';
    // pWhite.style.color = 'white'; //////////////////////
    button.style.color = 'black';
    button.style.backgroundColor = 'white';
    button.innerText = 'Light Mode';
    button.addClass('lightSwitch');
});

// document.getElementsByClassName('lightSwitch').addEventListener('click', function () {
//     const button = document.getElementById('theme-btn');

//     document.body.classList = '';
//     document.getElementById('nav').style.backgroundColor = 'white';
//     document.getElementById('white-tech-box').style.backgroundColor = 'white';
//     document.getElementById('white-tech-box').style.color = 'black';
//     document.getElementById('testimonials').style.color = 'black';
//     document.getElementById('up-arrow').style.color = 'white';
//     button.style.color = 'white';
//     button.style.backgroundColor = 'black';
//     button.innerText = 'Dark Mode';
// });