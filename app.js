/*===== MENU SHOW =====*/
 const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.querySelector(navId);
  
    if (toggleId && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
        toggle.classList.toggle("is-active");
      });
    }
  };
  showMenu("mobile-menu",".navbar__menu") 
  
  /*===== ACTIVE AND REMOVE MENU =====*/
  const navLink = document.querySelectorAll('.navbar__links')
  
  function linkAction(){
    // Active link
      navLink.forEach(n => n.classList.remove('active-link'))
      this.classList.add('active-link')
      
      // Remove menu mobile
      const navMenu = document.querySelector('.navbar__menu');
      const mobileNav = document.getElementById("mobile-menu");
      if (mobileNav.classList.contains("is-active")){
        mobileNav.classList.toggle("is-active");
      }
      navMenu.classList.remove('active');
      
  }
  navLink.forEach(n => n.addEventListener('click', linkAction))