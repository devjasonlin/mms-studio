export class NavigationEleV2 extends HTMLElement {
  constructor() {
    super();
    this.navToggle = this.querySelector("#v2-navigation-toggle");
    this.navigationEleInit();
  }

  navigationEleInit() {
    window.addEventListener("scroll", () => {
      if (window.innerWidth < 768 && this.navToggle && this.navToggle.checked) {
        this.navToggle.checked = false;
      }
    });
  }
}
