document.addEventListener("DOMContentLoaded", function() {
  var typed = new Typed(".auto-type", {
    strings: ["Web Development", "Software Developer", "Cloud Enthusiast"],
    typeSpeed: 90,
    backSpeed: 80,
    loop: true
  });
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


function isDesktopView(){
  return window.innerWidth > 992;
}



window.addEventListener("scroll",function(){

  // Sticky function for navbar
      var header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY>0)


  // Navbar adding active when its on the screen
      sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
    
        if(top >= offset && top < offset + height){
          navLinks.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id +']').classList.add
            ('active');
          })
        }
      })
      
    })

