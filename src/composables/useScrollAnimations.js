import { onMounted, onBeforeUnmount, nextTick } from 'vue'

export function useScrollAnimations() {
  let observer = null
  let counterObserver = null
  const animatedSet = new WeakSet()
  const countersAnimated = new WeakSet()
  let animatedElements = []
  let counterTimers = []

  function animateElement(element) {
    const animation = element.getAttribute('data-animate')
    const delay = element.getAttribute('data-delay') || ''
    const speed = element.getAttribute('data-speed') || ''

    Array.from(element.classList).forEach(className => {
      if (className.startsWith('animate__')) element.classList.remove(className)
    })

    element.classList.add('animate__animated', animation)
    if (delay) element.classList.add(delay)
    if (speed) element.classList.add(speed)

    element.style.opacity = '1'
    element.style.filter = 'blur(0px)'
  }

  function initializeElements(els) {
    els.forEach(element => {
      element.style.opacity = '0'
      element.style.filter = 'blur(5px)'
      element.style.transition = 'opacity 0.6s ease-out, filter 0.4s ease-out'
    })
  }

  function animateCounter(element) {
    const targetText = element.getAttribute('data-target')
    if (!targetText) return

    const hasPlus = targetText.includes('+')
    const targetNumber = parseInt(targetText.replace('+', ''))
    if (isNaN(targetNumber)) return

    let currentNumber = 0
    const duration = Math.max(800, (targetNumber / 15) * 1500)
    const increment = targetNumber / 60
    const stepTime = duration / 60

    const timer = setInterval(() => {
      currentNumber += increment

      if (currentNumber >= targetNumber) {
        currentNumber = targetNumber
        clearInterval(timer)
      }

      element.textContent = hasPlus
        ? '+' + Math.floor(currentNumber)
        : Math.floor(currentNumber)
    }, stepTime)

    counterTimers.push(timer)
  }

  async function setup() {
    await nextTick()
    animatedElements = Array.from(document.querySelectorAll('[data-animate]'))
    initializeElements(animatedElements)

    observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !animatedSet.has(entry.target)) {
            animateElement(entry.target)
            animatedSet.add(entry.target)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
    )
    animatedElements.forEach(el => observer.observe(el))

    const counterElements = document.querySelectorAll('.highlight-number p')
    counterObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !countersAnimated.has(entry.target)) {
            animateCounter(entry.target)
            countersAnimated.add(entry.target)
            counterObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5, rootMargin: '0px 0px -100px 0px' }
    )
    counterElements.forEach(el => counterObserver.observe(el))
  }

  onMounted(setup)
  onBeforeUnmount(() => {
    if (observer) observer.disconnect()
    if (counterObserver) counterObserver.disconnect()
    counterTimers.forEach(t => clearInterval(t))
  })
}
