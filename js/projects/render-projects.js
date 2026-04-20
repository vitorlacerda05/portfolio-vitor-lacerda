function toSlug(str) {
  return str.toLowerCase().replace(/\s+/g, '-')
}

function fromSlug(slug) {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

function renderProjectCards() {
  const grid = document.getElementById('projects-grid')
  if (!grid) return

  grid.innerHTML = PROJECTS.map((project, i) => {
    const titleTag = i === 0 ? 'h1' : 'h3'
    const cornerSquares = `
      <div class="corner-square top-left"></div>
      <div class="corner-square top-right"></div>
      <div class="corner-square bottom-left"></div>
      <div class="corner-square bottom-right"></div>`

    return `
      <a href="${project.url}" class="project-card ${project.cardBg}" data-badges="${project.badges.join(',')}">
        <div class="project-image-container">
          <div class="project-image-single">
            <img src="${project.image.src}" alt="${project.image.alt}">
            ${cornerSquares}
          </div>
        </div>
        <div class="project-content">
          <div class="project-content-top">
            <div class="project-title-container">
              <${titleTag} class="project-title">${project.title}</${titleTag}>
            </div>
            <div class="card-badges-wrapper">
              ${project.badges.map(b => `<span class="card-badge regular-sm">${b}</span>`).join('')}
            </div>
          </div>
          <div class="project-content-bottom">
            <p class="project-description regular-sm">${project.description}</p>
            <span class="card-date regular-sm">${project.date}</span>
          </div>
        </div>
      </a>`
  }).join('')
}

function initProjectFilters() {
  const buttons = document.querySelectorAll('.project-filter-btn')
  if (!buttons.length) return

  function applyFilter(filter) {
    const showAll = filter === 'All'

    document.querySelectorAll('.project-card').forEach(card => {
      const badges = card.dataset.badges ? card.dataset.badges.split(',') : []
      card.style.display = showAll || badges.includes(filter) ? '' : 'none'
    })

    buttons.forEach(b => {
      b.classList.toggle('active', b.dataset.filter === filter)
    })

    const params = new URLSearchParams(window.location.search)
    params.set('filter', toSlug(filter))
    history.replaceState(null, '', '?' + params.toString())
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => applyFilter(btn.dataset.filter))
  })

  const params = new URLSearchParams(window.location.search)
  const slug = params.get('filter')
  const filterFromUrl = slug ? fromSlug(slug) : null
  const matched = filterFromUrl && [...buttons].find(b => b.dataset.filter === filterFromUrl)

  if (matched) {
    applyFilter(matched.dataset.filter)
  } else {
    applyFilter('UX Design') // Default filter
  }
}

renderProjectCards()
initProjectFilters()
