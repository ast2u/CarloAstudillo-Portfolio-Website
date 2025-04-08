



document.getElementsByClassName("cv-btn")[0].addEventListener("click",()=>{
  let canvas = document.createElement("canvas");
  canvas.width=600;
  canvas.height=600;
  let container = document.getElementsByClassName("button-wrapper")[0];
  container.appendChild(canvas);

  let confetti_button = confetti.create(canvas);
  confetti_button({
    particleCount:300,
    spread:500,
    startVelocity:20,
    scalar:.8,
    ticks:50
  }).then(()=> container.removeChild(canvas));
})

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



  const swiper = new Swiper('.swiper', {
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  AOS.init({
    duration: 1000, 
    once: true      
  });


  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Trigger confetti only once
            confetti({
              particleCount:450,
              spread: 300
            });
            observer.unobserve(entry.target); // Stop observing after triggering
        }
    });
}, {
    threshold: 0.5 // Adjust based on when you want the effect to trigger
});

// Start observing the target element
const target = document.getElementById('confetti-trigger');
if (target) {
    observer.observe(target);
}


  var typed = new Typed(".auto-type", {
    strings: ["Software Engineer", "Full-Stack Engineer", "Cloud Computing"],
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


function activateTimeline(timeline, screenRatio) {
  const timelinePosition = timeline.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / screenRatio;

  if (timelinePosition < screenPosition) {
    timeline.classList.add('active');
  }
}


window.addEventListener("scroll",function(){

  if(window.innerWidth > 602){
      var header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY>0)
    }
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

