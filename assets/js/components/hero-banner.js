export class HeroBanner extends HTMLElement {
  constructor() {
    super();

    this.selectors = {
      parallaxImage: '[data-parallax-image]'
    };

    this.handleScroll = this.throttle(this.parallax.bind(this), 14);
  }

  connectedCallback() {
    this.parallaxImage = this.querySelector(this.selectors.parallaxImage);

    if (this.parallaxImage) {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  throttle(callback, limit) {
    let waiting = false;
    return () => {
      if (!waiting) {
        callback();
        waiting = true;
        setTimeout(() => {
          waiting = false;
        }, limit);
      }
    };
  }

  parallax() {
    const scrolled = window.pageYOffset;
    const coords = `${scrolled * 0.5}px`;
    if (this.parallaxImage) {
      this.parallaxImage.style.transform = `translateY(${coords})`;
    }
  }
}