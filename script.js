const buttonWidth = 200;
const buttonHeight = 86;
const maxWidth = window.innerWidth - buttonWidth;
const maxHeight = window.innerHeight - buttonHeight;

const button = document.querySelector('.unclickable_button');
const button2 = document.querySelector('.unclickable_button2');

button.addEventListener('click', () => alert('Thank you, I love you too !'));
button2.addEventListener('click', () => alert('I see how it is...'));

button.addEventListener('mouseover', () => {
    button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
    button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
})