const animItems = document.querySelectorAll('.anim-items');


if(animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if(animItemHeight > window.innerHeight) {
                 animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            

            if((window.pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active')
            } 
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect();
        const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollHeight;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    } 

    animOnScroll();

}

// Slide 

const slideItems = document.querySelectorAll('.slide');
const indexSlide = document.querySelectorAll('.index__slide span');
const RightArrow = document.querySelectorAll('.slide__arrow__right');
const LeftArrow = document.querySelectorAll('.slide__arrow__left');


let indexSlideActive = 0
function hideSlide(slideItem) {
    slideItem.forEach(element => {
        element.style.display = "none";
    });
}

function showSlide (index = 0) {
    slideItems[index].style.display = "block"; 
    indexSlide.forEach((element, index) => {
        element.innerHTML = `${index + 1}/${indexSlide.length}`
    })
}


hideSlide(slideItems);
showSlide(indexSlideActive);




RightArrow.forEach((item) => {
    item.addEventListener('click', () => {
        indexSlideActive++
        if(indexSlideActive > indexSlide.length - 1) {
            indexSlideActive = 0
        }
        hideSlide(slideItems);
        showSlide(indexSlideActive);
    })
})

LeftArrow.forEach((item) => {
    item.addEventListener('click', () => {
        indexSlideActive--
        if(indexSlideActive < 0 ) {
            indexSlideActive = slideItems.length - 1
            console.log(indexSlideActive)
        }
        hideSlide(slideItems);
        showSlide(indexSlideActive);
    })
})


// modall 

function openModall(window, variebels) {
    window.style.display = "block";
    document.body.style.overflow = "hidden"
    document.body.style.marginRight = "15px"
    clearTimeout(variebels);
}


function closeModall(window) {
    window.style.display = "none";
    document.body.style.overflow = ""
    document.body.style.marginRight = "0px"
}



function onModall(trigerSelector, modallSelector, closeSellector, avtomatics, keyCode) {
    const triger = document.querySelector(trigerSelector),
          modallWindow = document.querySelector(modallSelector),
          close = document.querySelector(closeSellector);

    let avtomatic = avtomatics;

    triger.addEventListener('click', () => {
        openModall(modallWindow, TimeOpen);
    })

    close.addEventListener('click', () => {
        closeModall(modallWindow);
    })

    window.addEventListener('click', (event) => {
        const target = event.target;
        const targetSlect = target;
        if(targetSlect.classList.contains('fill')) {
            closeModall(modallWindow);
        }

    })
    document.addEventListener('keydown', (event) => {
        if(event.code == "Escape") {
            closeModall(modallWindow);
        } if(event.code == keyCode) {
            openModall(modallWindow, TimeOpen);
        }
    })        
    const TimeOpen = setTimeout(() => {
        if(avtomatic) {
            openModall(modallWindow, TimeOpen);
         }
        }, 60000);
}


onModall('.nav__btn', '.modall__consultation', '.modall__consultation .close', true, "KeyM");



// scroll dawn




