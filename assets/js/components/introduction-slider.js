export class IntroductionSlider {
  constructor() {
    this.init();
  }

  init() {
    // 等待DOM加载完成
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupSlider());
    } else {
      this.setupSlider();
    }
  }

  setupSlider() {
    const sliderElement = document.querySelector('.introduction__slider');
    
    if (sliderElement && window.Flickity) {
      const flkty = new window.Flickity(sliderElement, {
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        prevNextButtons: true,
        wrapAround: true,
        autoPlay: 3000,
        adaptiveHeight: false,
        draggable: true,
        freeScroll: false,
        groupCells: 1,
        lazyLoad: 1
      });

      sliderElement.flkty = flkty;
    }
  }
} 