// mudando de cor com scroll

var navbar = document.querySelector('.nav-bar');
var logo = document.querySelector('.logo1');
document.addEventListener("scroll", function () {
  var posicaoy = window.pageYOffset;
  console.log(posicaoy);
  navbar.style.backgroundColor = posicaoy == 0 ? "" : "green";
  logo.style.color = posicaoy == 0 ? "" : "white";
});


// menu-mobile
class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelector(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);

    
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }
  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }

}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".menu-list li",

);
mobileNavbar.init();