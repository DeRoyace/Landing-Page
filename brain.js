let index = 0;
function slideBoxes() {
    let i;
    let slides = document.getElementsByClassName("boxes");
    console.log(slides)
    for(i=0; i < slides.length; i++)
    {
        slides[i].style.display = "none"
    }
    index++;
    let count = 0;
    for(;count < 4; index++)
    {
        if(index > slides.length)
            index = 1
        count++;
        slides[index - 1].style.display = "block"
    }
}

function plusSlides(n) {
    slideBoxes()
}

slideBoxes(index)