import { onMounted, nextTick } from 'vue'

function addNumberToElement(element, number) {
  if (element.classList.contains('numbered')) return
  element.classList.add('numbered')

  const span = document.createElement('span')
  span.className = 'project-number'
  span.textContent = number + ' '
  element.insertBefore(span, element.firstChild)
}

function findParentH1Index(element, h1Elements) {
  const allElements = Array.from(
    document.querySelectorAll('.project-h1, .project-h2, .project-h3')
  )
  const currentIndex = allElements.indexOf(element)

  for (let i = currentIndex - 1; i >= 0; i--) {
    if (allElements[i].classList.contains('project-h1')) {
      return Array.from(h1Elements).indexOf(allElements[i])
    }
  }
  return -1
}

function addProjectNumbering() {
  let h1Counter = 0
  let h2Counter = 0
  const h2Counters = []

  const projectH1s = document.querySelectorAll('.project-h1')
  const projectH2s = document.querySelectorAll('.project-h2')

  projectH1s.forEach(h1 => {
    h1Counter++
    addNumberToElement(h1, h1Counter + '.')
    h2Counters[h1Counter - 1] = 0
  })

  projectH2s.forEach(h2 => {
    const parentH1Index = findParentH1Index(h2, projectH1s)
    if (parentH1Index !== -1) {
      h2Counters[parentH1Index]++
      const num = `${parentH1Index + 1}.${h2Counters[parentH1Index]}.`
      addNumberToElement(h2, num)
    } else {
      h2Counter++
      addNumberToElement(h2, h2Counter + '.')
    }
  })
}

export function useProjectNumbering() {
  onMounted(async () => {
    await nextTick()
    setTimeout(addProjectNumbering, 100)
  })
}
