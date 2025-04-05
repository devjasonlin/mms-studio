import { MarqueeEle } from './components/marquee-ele.js';


if (!window.customElements.get('marquee-ele')) {
  customElements.define('marquee-ele', MarqueeEle);
}