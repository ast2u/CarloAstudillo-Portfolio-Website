document.addEventListener("DOMContentLoaded", function() {
  var typed = new Typed(".auto-type", {
    strings: ["Web Development", "Software Development", "Cloud Computing"],
    typeSpeed: 70,
    backSpeed: 40,
    loop: true
  });

  const containers = document.querySelectorAll('.timeline-container');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const index = Array.from(containers).indexOf(element);
        // Add a class to trigger the animation with a delay
        setTimeout(() => {
          element.classList.add('show');
        }, index * 900); // 1 second (1000ms) delay between each container
        observer.unobserve(element); // Optional: Stop observing after animation
      }
    });
  }, {
    threshold: 0.1 // Adjust as necessary
  });

  containers.forEach(container => {
    observer.observe(container);
  });

});


// fix
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

function isDesktopView(){
  return window.innerWidth > 992;
}



window.addEventListener("scroll",function(){

  // Sticky function for navbar
      var header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY>0)

    const timeline = document.querySelector('.timeline');
    const timelinePosition = timeline.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (timelinePosition < screenPosition) {
      timeline.classList.add('active');
    }

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

