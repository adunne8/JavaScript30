const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;



slider.addEventListener('mousedown', (e) => {

    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    console.log(slider.scrollLeft);
    scrollLeft = slider.scrollLeft;

});

slider.addEventListener('mouseleave', () => {

    isDown = false;
    slider.classList.remove('active');

});

slider.addEventListener('mouseup', () => {

    isDown = false;    
    slider.classList.remove('active');
    
});

slider.addEventListener('mousemove', (e) => {
    // EXIT IF NOT CLICKED
    if (!isDown) return;

    e.preventDefault();

    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2.5;
    console.log({scrollLeft, walk});
    slider.scrollLeft = scrollLeft - walk;

    
});
