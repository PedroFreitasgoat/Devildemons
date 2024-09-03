const thumbs = document.querySelectorAll('.thumb li'); 
const infoSlider = document.querySelectorAll('.info-slider'); 

let index = 0;

thumbs.forEach((thumb, ind) => {
    thumb.addEventListener('click', (event) => {

        document.querySelector('.thumb.selected').classList.remove('selected');
        thumb.classList.add('selected');

        index = ind;

        infoSlider.forEach(slide => {
            slide.style.transform = `translateY(${index * -100}%)`;
        });
    });
});
