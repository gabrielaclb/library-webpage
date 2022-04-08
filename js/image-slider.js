let count = 0;

const carousel = () => {

    const images = document.querySelectorAll(".story__image");
    images.forEach(img => {
        img.style.display = "none";
    });
    
    count++;
    if (count > images.length) {
        count = 1;
    }

    images[count - 1].style.display = "block";
    setTimeout(carousel, 2000);
}

carousel();