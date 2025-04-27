


export class ScrollUp extends HTMLElement {
  constructor() {
    super();
    this.scrollBtnToggle();
    this.scrollLogic();
  }

  scrollBtnToggle() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        this.classList.add("show");
      } else {
        this.classList.remove("show");
      }
    });
  }

  scrollLogic() {
    this.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
}
