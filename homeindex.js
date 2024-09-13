let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.addEventListener("scroll",function(){
      if(isDesktopView()){
      var header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY>0)
      }
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




// for testing

const navbar = document.querySelector('.navbar');

    function changeNavbarColor() {
      if (window.innerWidth < 992) {
        navbar.classList.add('navbar-mobile');
      } else {
        navbar.classList.remove('navbar-mobile');
      }
    }

    // Initial check when the page loads
    changeNavbarColor();


    function isDesktopView(){
      return window.innerWidth > 992;
    }

    
    function updateHeaderOnResize() {
      var header = document.querySelector("header");
    
      if (!isDesktopView()) {
        header.classList.remove("sticky"); // Remove sticky class on smaller screens
      }

      if(window.scrollY===0){
        header.classList.remove("sticky");
      }
    }



    window.addEventListener('resize', changeNavbarColor);


    