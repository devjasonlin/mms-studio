


export class ProjectCard extends HTMLElement {
  constructor() {
    super();
    this.colours = window.colours.split(",");
    // this.projectCardInit();
    this.randomBackground();
  }
  projectCardInit() {
    this.addEventListener('mousemove', function(e) {
      const x = e.clientX - this.getBoundingClientRect().left;
      const y = e.clientY - this.getBoundingClientRect().top;

      const centerX = this.offsetWidth / 2;
      const centerY = this.offsetHeight / 2;
      
      const angleX = (y - centerY) / 12;
      const angleY = (centerX - x) / 12;
      
      this.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });
    
    this.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
  }
  randomBackground() {
    let projectCardColours = ['#BFB8A5'];
    projectCardColours = this.colours;
    const randomIndex = Math.floor(Math.random() * projectCardColours.length);
    
    const randomColour = projectCardColours[randomIndex];   
    this.querySelector('.background-with-random-colour').style.backgroundColor = randomColour;
  }
}
