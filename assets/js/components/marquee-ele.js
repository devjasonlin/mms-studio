
export class MarqueeEle extends HTMLElement {
  constructor() {
    super();

    this.marqueeInit();
  }
  marqueeInit() {
    let marqueeColours = ['#BFB8A5'];
    marqueeColours = this.dataset.marqueeColours.split(',');
    const randomColour = marqueeColours[Math.floor(Math.random() * marqueeColours.length)];
    this.style.backgroundColor = randomColour;
  }
}
