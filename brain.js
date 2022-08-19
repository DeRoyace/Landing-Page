console.log(document.URL);
var c = 0;
function navResponse()
{
    var a = document.getElementById('nav-links');
    console.log(a);
    if(c%2 === 0)
    {
        a.classList.add('icon-nav-menu');
        a.style.visibility="visible";
    }
    else
    {
        a.classList.remove('icon-nav-menu');
        a.style.visibility="collapse";
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

