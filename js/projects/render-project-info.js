function renderProjectInfo() {
  const container = document.getElementById('project-main-content')
  if (!container) return

  const project = PROJECTS.find(p => p.id === container.dataset.project)
  if (!project) return

  const imgSrc = '../' + project.image.src

  container.innerHTML = `
    <div class="project-info">
      <div class="project-header">
        <h1 class="project-title project-h1-alt">${project.title}</h1>
        <div class="badges-wrapper">
          ${project.badges.map(b => `<span class="badge regular-sm">${b}</span>`).join('')}
        </div>
      </div>
      <div class="project-description">
        <p class="description-text">${project.description}.</p>
        <div class="project-date">
          <span class="date-text regular-sm">${project.date}</span>
        </div>
      </div>
    </div>
    <div class="project-image-container">
      <div class="image-wrapper">
        <img src="${imgSrc}" alt="${project.image.alt}" class="project-image">
      </div>
      <div class="corner-square corner-top-left"></div>
      <div class="corner-square corner-bottom-left"></div>
      <div class="corner-square corner-bottom-right"></div>
      <div class="corner-square corner-top-right"></div>
    </div>`
}

renderProjectInfo()
