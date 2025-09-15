// Scroll Animations - Animate.css integration
class ScrollAnimations {
  constructor() {
    this.animatedElements = [];
    this.animatedSet = new Set();
    this.countersAnimated = new Set();
    this.init();
  }

  init() {
    this.animatedElements = document.querySelectorAll('[data-animate]');
    this.initializeElements();
    this.setupIntersectionObserver();
    this.setupCounterObserver();
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  initializeElements() {
    this.animatedElements.forEach(element => {
      element.style.opacity = '0';
      element.style.filter = 'blur(5px)';
      element.style.transition = 'opacity 0.6s ease-out, filter 0.4s ease-out';
    });
  }

  setupIntersectionObserver() {
    const options = {
      threshold: 0.1, 
      rootMargin: '0px 0px -80px 0px'
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

    // Animate opacity and blur
    element.style.opacity = '1';
    element.style.filter = 'blur(0px)';
    
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

  // Counter animation methods
  setupCounterObserver() {
    const counterElements = document.querySelectorAll('.highlight-number p');
    
    const options = {
      threshold: 0.5, // 50% of element visible
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.countersAnimated.has(entry.target)) {
          this.animateCounter(entry.target);
          this.countersAnimated.add(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    counterElements.forEach(element => {
      observer.observe(element);
    });
  }

  animateCounter(element) {
    const text = element.textContent;
    const hasPlus = text.includes('+');
    const targetNumber = parseInt(text.replace('+', ''));
    
    if (isNaN(targetNumber)) return;

    let currentNumber = 0;
    // Duração mais equilibrada: números menores são mais rápidos, mas não tanto
    const duration = Math.max(800, (targetNumber / 15) * 1500); // Mínimo 800ms, máximo proporcional
    const increment = targetNumber / 60; // 60 frames for smooth animation
    const stepTime = duration / 60;

    const timer = setInterval(() => {
      currentNumber += increment;
      
      if (currentNumber >= targetNumber) {
        currentNumber = targetNumber;
        clearInterval(timer);
      }
      
      // Mantém o + se estava presente no HTML original
      element.textContent = hasPlus ? '+' + Math.floor(currentNumber) : Math.floor(currentNumber);
    }, stepTime);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ScrollAnimations();
}); 