const scrollContainers = document.querySelectorAll('.autoscroll_wrapper');
const scrolls = document.querySelectorAll('.autoscroll');


function getWidth(){
    console.log(scrolls.length);
    //console.log(e);
    for (i = 0; i < scrolls.length; i++){
        let el = scrolls[i];
        console.log(el.scrollWidth);
    }

}


getWidth();