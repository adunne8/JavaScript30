const sliderImages = document.querySelectorAll('.slide-in');


function checkSlide(e) {
    console.log("Running Calcs");
    sliderImages.forEach(sliderImage => {
        //console.log((window.scrollY + window.innerHeight) - sliderImage.height);

        // HALFWAY THROUGH THE IMAGE
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;

        // BOTTOM OF IMAGE
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        console.log(`ImageBottom: ${imageBottom} isHalfShown: ${isHalfShown} isNotScrolledPast: ${isNotScrolledPast}`);

        if(isHalfShown && isNotScrolledPast){
            sliderImage.classList.add('active');
        }
        else{
            sliderImage.classList.remove('active');
        }

        // console.log(slideInAt);
        // if(slideInAt >= window.scrollY + window.innerHeight){
        //     sliderImage.classList.add('active');
        // }
    });
}


// DEBOUNCE FUNCTION TO LIMIT CALLOUTS TO FUNCTION, FIRST PARAMETER
function debounce(func, wait = 20, immediate = true) {
    var timeout;

    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// RUN FUNCTION THROUGH DEBOUNCE FOR PERFORMANCE
window.addEventListener('scroll', debounce(checkSlide));