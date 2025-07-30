// Scroll Animations - Animate.css integration
class ScrollAnimations {
  constructor() {
    this.animatedElements = [];
    this.animatedSet = new Set();
    this.init();
  }

  init() {
    this.animatedElements = document.querySelectorAll('[data-animate]');
    this.initializeElements();
    this.setupIntersectionObserver();
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  initializeElements() {
    // Set opacity 0 for all animated elements
    this.animatedElements.forEach(element => {
      element.style.opacity = '0';
      element.style.transition = 'opacity 0.3s ease-in-out';
    });
  }

  setupIntersectionObserver() {
    const options = {
      threshold: 0.1, // 10% of element visible
      rootMargin: '0px 0px -50px 0px' // Trigger a bit earlier
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.animatedSet.has(entry.target)) {
          this.animateElement(entry.target);
          this.animatedSet.add(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    this.animatedElements.forEach(element => {
      observer.observe(element);
    });
  }

  animateElement(element) {
    const animation = element.getAttribute('data-animate');
    const delay = element.getAttribute('data-delay') || '';
    const speed = element.getAttribute('data-speed') || '';
    
    element.classList.remove('animate__animated');
    element.classList.forEach(className => {
      if (className.startsWith('animate__')) {
        element.classList.remove(className);
      }
    });

    element.classList.add('animate__animated', animation);
    
    if (delay) element.classList.add(delay);
    if (speed) element.classList.add(speed);

    element.style.opacity = '1';
    
  }

  handleScroll() {
    this.animatedElements.forEach(element => {
      if (this.isElementInViewport(element) && !this.animatedSet.has(element)) {
        this.animateElement(element);
        this.animatedSet.add(element);
      }
    });
  }

  isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ScrollAnimations();
}); 