
export class MarqueeEle extends HTMLElement {
  constructor() {
    super();

    this.marqueeInit();
    this.marqueeClone();
    this.marqueeBehaviour();
  }
  marqueeInit() {
    let marqueeColours = ['#BFB8A5'];
    marqueeColours = this.dataset.marqueeColours.split(',');
    const randomColour = marqueeColours[Math.floor(Math.random() * marqueeColours.length)];
    this.style.backgroundColor = randomColour;
  }
  marqueeClone() {
    const marqueeContent = this.querySelector('.marquee-content');
    const marqueeItems = this.querySelectorAll('.marquee-content span');
    
    for (let i = 0; i < 5; i++) {
      marqueeItems.forEach(item => {
        const clone = item.cloneNode(true);
        marqueeContent.appendChild(clone);
      });
    }
  }
  marqueeBehaviour() {
    const marqueeContent = this.querySelector('.marquee-content');
    this.addEventListener('mouseenter', function() {
        marqueeContent.style.animationPlayState = 'paused';
    });
    
    this.addEventListener('mouseleave', function() {
        marqueeContent.style.animationPlayState = 'running';
    });
  }
}
