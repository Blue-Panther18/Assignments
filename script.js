const backArrow = document.getElementById('back-arrow');
const forwardArrow = document.getElementById('forward-arrow');
const container = document.querySelector('.carousel-img')

const images = ['./Assets/Images/1.jpg', './Assets/Images/3.jpg', './Assets/Images/4.jpg', './Assets/Images/5.jpg', './Assets/Images/6.jpg', './Assets/Images/7.jpg'];

let index = images.length - 1
let counter = index

backArrow.addEventListener('click', () => {
    if (counter < 0) counter = index;
    container.style.backgroundImage = `url(${images[counter]})`;
    counter--;
    
    
});

forwardArrow.addEventListener('click', () => {
    if (counter == index-1 || counter < 0) counter = 0;
    container.style.backgroundImage= `url(${images[counter]})`;
    counter++;
})