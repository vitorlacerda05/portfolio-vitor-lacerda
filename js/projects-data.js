// Dados dos projetos

const projectsData = {
  'urbverde': {
    title: 'UrbVerde',
    badges: [
      'UX/UI Designer',
      'Project Lead'
    ],
    description: 'Projeto premiado pela Sociedade Brasileira de Computação e organizadores da COP 30',
    date: 'mar, 2024 - jun, 2025',
    image: '../assets/images/homepage/projects/urbverde.png',
    imageAlt: 'UrbVerde Dashboard - Interface do projeto de cobertura vegetal',
    content: `
      <!-- Conteúdo específico do UrbVerde -->
      <h1 class="project-h1">Sobre o Projeto Exemplo</h1>
        <p class="project-paragraph">
          Este é um exemplo de como estruturar o conteúdo de um novo projeto.
          Basta adicionar as informações aqui e o sistema automaticamente 
          populará a página.
        </p>
    `
  },
  
  // Exemplo de como adicionar um novo projeto
  'exemplo': {
    title: 'Projeto Exemplo',
    badges: [
      'Frontend Developer',
      'UI Designer'
    ],
    description: 'Descrição do projeto exemplo para demonstrar o sistema',
    date: 'jan, 2024 - mar, 2024',
    image: '../assets/images/homepage/projects/exemplo.png',
    imageAlt: 'Projeto Exemplo - Interface do projeto',
    content: `
      <!-- Conteúdo específico do projeto exemplo -->
        <h2 class="project-h2">Sobre o Projeto Exemplo</h2>
        <p class="project-paragraph">
          Este é um exemplo de como estruturar o conteúdo de um novo projeto.
          Basta adicionar as informações aqui e o sistema automaticamente 
          populará a página.
        </p>
    `
  }
};

// Função para obter dados do projeto baseado na URL
function getProjectData() {
  const pathParts = window.location.pathname.split('/');
  const filename = pathParts[pathParts.length - 1];
  const projectId = filename.replace('.html', '');
  
  return projectsData[projectId] || null;
}

function loadProjectData() {
  const projectData = getProjectData();
  
  if (!projectData) {
    console.error('Projeto não encontrado:', window.location.pathname);
    return;
  }
  

  document.getElementById('page-title').textContent = `Vitor Lacerda - ${projectData.title}`;
  document.getElementById('project-title').textContent = projectData.title;
  document.getElementById('project-description').textContent = projectData.description;
  document.getElementById('project-date').textContent = projectData.date;
  
  const projectImage = document.getElementById('project-image');
  projectImage.src = projectData.image;
  projectImage.alt = projectData.imageAlt;
  
  const badgesWrapper = document.getElementById('badges-wrapper');
  badgesWrapper.innerHTML = '';
  projectData.badges.forEach(badge => {
    const badgeElement = document.createElement('div');
    badgeElement.className = 'badge';
    badgeElement.innerHTML = `<span class="badge-text regular-sm">${badge}</span>`;
    badgesWrapper.appendChild(badgeElement);
  });
  
  document.getElementById('project-content').innerHTML = projectData.content;
}

document.addEventListener('DOMContentLoaded', loadProjectData);
