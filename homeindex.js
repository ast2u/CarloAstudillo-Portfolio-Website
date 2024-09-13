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


    window.addEventListener("scroll",function(){
      if(isDesktopView()){
      var header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY>0)
      }
      
    })