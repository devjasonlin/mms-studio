import { MarqueeEle } from './components/marquee-ele.js';
import { ProjectCard } from './components/project-card.js';
import { NavigationEle } from './components/navigation-ele.js';
import { NavigationEleV2 } from './components/navigation-ele-v2.js';
import { ScrollUp } from './components/scroll-up.js';
import { HeroBanner } from './components/hero-banner.js';

if (!window.customElements.get('marquee-ele')) {
  customElements.define('marquee-ele', MarqueeEle);
}

if (!window.customElements.get('hero-banner')) {
  customElements.define('hero-banner', HeroBanner);
}

if (!window.customElements.get('project-card')) {
  customElements.define('project-card', ProjectCard);
}

if (!window.customElements.get('navigation-ele')) {
  customElements.define('navigation-ele', NavigationEle);
}

if (!window.customElements.get('navigation-ele-v2')) {
  customElements.define('navigation-ele-v2', NavigationEleV2);
}

if (!window.customElements.get('scroll-up')) {
  customElements.define('scroll-up', ScrollUp);
}
