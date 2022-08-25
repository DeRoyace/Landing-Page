var c = 0;
function navResponse()
{
    let a = document.getElementById('nav-links');
    let b = document.getElementById('ham-icon');
    console.log(a);
    let links = document.getElementsByClassName('link-items');
    var pos = 0;
    if(c%2 === 0)
    {
        a.classList.add('icon-nav-menu');
        for (let index = 0; index < 4; index++) {
            if(links[index].classList.contains('active-link'))
                pos = index;
        }
        links[pos].classList.remove('active-link');
        b.style.position="fixed";
        b.classList.add('make-cross');
        a.style.visibility="visible";
    }
    else
    {
        a.classList.remove('icon-nav-menu');
        a.style.visibility="collapse";
        setTimeout(function(){
            links[pos].classList.add('active-link');
        }, 350);
        b.style.position="absolute";
        b.classList.remove('make-cross');
    }   
    c += 1;
}

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

slideBoxes(index);

// end of sliding


// document.getElementsByClassName(".menu-icon").addEventListener("click", function(){
//     document.getElementsByClassName("links").style.visibility="visible";
// });

