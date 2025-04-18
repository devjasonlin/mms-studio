import { MarqueeEle } from './components/marquee-ele.js';
import { ProjectCard } from './components/project-card.js';

if (!window.customElements.get('marquee-ele')) {
  customElements.define('marquee-ele', MarqueeEle);
}

if (!window.customElements.get('project-card')) {
  customElements.define('project-card', ProjectCard);
}