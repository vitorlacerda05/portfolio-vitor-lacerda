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
      <div class="project-details">
        <h2 class="project-h2">Sobre o Projeto</h2>
        <p class="regular-base">
          O UrbVerde é uma plataforma inovadora para monitoramento e gestão de cobertura vegetal urbana.
          Desenvolvido com foco na sustentabilidade e tecnologia, o projeto foi reconhecido pela 
          Sociedade Brasileira de Computação.
        </p>
        
        <div class="project-highlights">
          <h3 class="project-h3">Principais Funcionalidades</h3>
          <ul class="features-list">
            <li class="regular-base">Dashboard interativo para visualização de dados</li>
            <li class="regular-base">Sistema de monitoramento em tempo real</li>
            <li class="regular-base">Relatórios automáticos de cobertura vegetal</li>
            <li class="regular-base">Interface responsiva e acessível</li>
          </ul>
        </div>
        
        <div class="project-technologies">
          <h3 class="project-h3">Tecnologias Utilizadas</h3>
          <div class="tech-badges">
            <span class="tech-badge">React</span>
            <span class="tech-badge">TypeScript</span>
            <span class="tech-badge">Figma</span>
            <span class="tech-badge">Node.js</span>
          </div>
        </div>
      </div>
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
      <div class="project-details">
        <h2 class="project-h2">Sobre o Projeto Exemplo</h2>
        <p class="regular-base">
          Este é um exemplo de como estruturar o conteúdo de um novo projeto.
          Basta adicionar as informações aqui e o sistema automaticamente 
          populará a página.
        </p>
        
        <div class="project-highlights">
          <h3 class="project-h3">Características</h3>
          <ul class="features-list">
            <li class="regular-base">Interface moderna e intuitiva</li>
            <li class="regular-base">Responsividade total</li>
            <li class="regular-base">Performance otimizada</li>
          </ul>
        </div>
      </div>
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
