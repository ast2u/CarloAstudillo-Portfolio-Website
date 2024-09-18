
function createObserver(containers, delay) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const index = Array.from(containers).indexOf(element);
        setTimeout(() => {
          element.classList.add('show');
        }, index * delay); // Delay between each container
        observer.unobserve(element);
      }
    });
  }, {
    threshold: 0.1 // Adjust as necessary
  });

  containers.forEach(container => {
    observer.observe(container);
  });
}


document.addEventListener("DOMContentLoaded", function() {

  AOS.init({
    duration: 1000, 
    once: true      
  });

  var typed = new Typed(".auto-type", {
    strings: ["Web Development", "Software Development", "Cloud Computing"],
    typeSpeed: 70,
    backSpeed: 40,
    loop: true
  });

const containers = document.querySelectorAll('.timeline-container');
const containers2 = document.querySelectorAll('.timeline-container2');

  createObserver(containers, 900); // 900ms delay for first set
  createObserver(containers2, 1800); // 900ms delay for first set
  });



// fix
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

function isDesktopView(){
  return window.innerWidth > 992;
}


function activateTimeline(timeline, screenRatio) {
  const timelinePosition = timeline.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / screenRatio;

  if (timelinePosition < screenPosition) {
    timeline.classList.add('active');
  }
}


window.addEventListener("scroll",function(){

  // Sticky function for navbar
      var header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY>0)

      const timeline = document.querySelector('.timeline');
      const timeline2 = document.querySelector('.timeline2');

      activateTimeline(timeline, 1.3);
activateTimeline(timeline2, 1.4);
      

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

