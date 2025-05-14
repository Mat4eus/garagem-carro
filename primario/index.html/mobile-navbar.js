class MobileNavbar {
    constructor() {
        this.mobileMenu = document.querySelector('.mobile-menu');
        this.navlist = document.querySelector('.nav-list');
        this.navlist = document.querySelectorAll('.nav-list');
        this.actveClass = 'active';
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", () => console.log("click"));

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