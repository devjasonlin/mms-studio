import { MarqueeEle } from './components/marquee-ele.js';
import { ProjectCard } from './components/project-card.js';
import { NavigationEle } from './components/navigation-ele.js';
import { ScrollUp } from './components/scroll-up.js';

if (!window.customElements.get('marquee-ele')) {
  customElements.define('marquee-ele', MarqueeEle);
}

if (!window.customElements.get('project-card')) {
  customElements.define('project-card', ProjectCard);
}

if (!window.customElements.get('navigation-ele')) {
  customElements.define('navigation-ele', NavigationEle);
}

if (!window.customElements.get('scroll-up')) {
  customElements.define('scroll-up', ScrollUp);
}
