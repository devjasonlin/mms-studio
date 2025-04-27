export class NavigationEle extends HTMLElement {
  constructor() {
    super();
    this.navigationEleInit();
  }

  navigationEleInit() {
    window.addEventListener("scroll", () => {
      const menuToggle = this.querySelector("#menu-toggle");
      if (window.scrollY > 0 && menuToggle.checked) {
        menuToggle.checked = false;
      }
    });
  }
}
