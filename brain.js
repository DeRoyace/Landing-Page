window.addEventListener("load", function(){
    let load = this.document.querySelector(".loading");
    load.style.opacity = "0";
    load.style.visibility = "hidden"
});

var c = 0;
function navResponse()
{
    let nav_menus = document.getElementById('nav-links');
    let ham_icon = document.getElementById('ham-icon');
    console.log(nav_menus);
    let links = document.getElementsByClassName('link-items');
    var pos = 0;
    if(c%2 === 0)
    {
        nav_menus.classList.add('icon-nav-menu');
        for (let index = 0; index < 4; index++) {
            if(links[index].classList.contains('active-link'))
                pos = index;
        }
        links[pos].classList.remove('active-link');
        ham_icon.style.position="fixed";
        ham_icon.classList.add('make-cross');
        nav_menus.style.visibility="visible";
        nav_menus.style.opacity = "1";
    }
    else
    {
        nav_menus.classList.remove('icon-nav-menu');
        nav_menus.style.opacity = "0"
        setTimeout(function(){
            links[pos].classList.add('active-link');
            nav_menus.style.visibility = "hidden"
        }, 350);
        ham_icon.style.position="absolute";
        ham_icon.classList.remove('make-cross');
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

