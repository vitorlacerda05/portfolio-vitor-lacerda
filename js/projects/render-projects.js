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
      <a href="${project.url}" class="project-card ${project.cardBg}">
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

renderProjectCards()
