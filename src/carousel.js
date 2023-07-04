const track =  document.querySelector('.carousel__track');
const slides = Array.from(track.children);

const prevBtnMob = document.querySelector('.prev-mob');
const nextBtnMob = document.querySelector('.next-mob');

const dotsNav =document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
} 
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

const hideShowArrow = (slides, prevBtnMob, nextBtnMob, targetIndex) => {
    if(targetIndex === 0){
        prevBtnMob.classList.add('hide');
        nextBtnMob.classList.remove('hide');
    }else if(targetIndex === slides.length - 1){
        prevBtnMob.classList.remove('hide');
        nextBtnMob.classList.add('hide');
    }else{
        prevBtnMob.classList.remove('hide');
        nextBtnMob.classList.remove('hide');
    }
}
// prev btn
prevBtnMob.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrow (slides, prevBtnMob, nextBtnMob, prevIndex);
})

// next btn
nextBtnMob.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrow (slides, prevBtnMob, nextBtnMob, nextIndex);
})

// navigation

dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');

    if(!targetDot) return;
    const currentSlide = track.querySelector('.current-slide');
    currentDot = dotsNav.querySelector('.current-slide');

    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];


    moveToSlide(track, currentSlide, targetSlide);

    updateDots(currentDot, targetDot);

     hideShowArrow (slides, prevBtnMob, nextBtnMob, targetIndex);

})