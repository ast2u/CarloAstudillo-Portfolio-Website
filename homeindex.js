var navbar = document.querySelector('.navbar');

    function changeNavbarColor() {
      if (window.innerWidth < 992) {
        navbar.classList.add('navbar-mobile');
      } else {
        navbar.classList.remove('navbar-mobile');
      }
    }

    // Initial check when the page loads
    changeNavbarColor();

    // Listen to window resize events
    window.addEventListener('resize', changeNavbarColor);

    var sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function stickyNavbar() {
      if (window.scrollY > sticky) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    }
    
    // When the user scrolls the page, execute stickyNavbar
    window.onscroll = function() {
      stickyNavbar();
    };