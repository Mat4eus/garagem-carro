class MobileNavbar {
    constructor(mobileMenu,navlist,navLinks) {
        this.mobileMenu = document.querySelector('.mobile-menu');
        this.navlist = document.querySelector('.nav-list');
        this.navLinks = document.querySelectorAll('.nav-links');
        this.actveClass = 'active';
        this.rodape = document.querySelector('.rodape');

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link,index) => {
            link.style.animation
               ?   (link.style.animation = "")
               :   (link.style.animation = "navLinkFade 0.5s ease forwards $ {index / 7 + 0.3}s");    
        });
    }
    handleClick(){
        this.navlist.classList.toggle(this.actveClass);
        this.mobileMenu.classList.toggle(this.actveClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);

    }

    init(){
        if(this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();