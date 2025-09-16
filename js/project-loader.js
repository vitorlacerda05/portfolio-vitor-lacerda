// Sistema de carregamento automático de projetos
// Este arquivo é responsável por popular o template com os dados do projeto

// Função para extrair o ID do projeto da URL
function getProjectIdFromUrl() {
  const pathParts = window.location.pathname.split('/');
  const filename = pathParts[pathParts.length - 1];
  return filename.replace('.html', '');
}

// Função para carregar dados do projeto via fetch (se usando JSON)
async function loadProjectDataFromJson(projectId) {
  try {
    const response = await fetch(`../data/projects/${projectId}.json`);
    if (!response.ok) {
      throw new Error('Projeto não encontrado');
    }
    return await response.json();
  } catch (error) {
    console.error('Erro ao carregar dados do projeto:', error);
    return null;
  }
}

// Função para carregar dados do projeto do arquivo JavaScript
function loadProjectDataFromJs(projectId) {
  // Verifica se o objeto projectsData está disponível
  if (typeof projectsData === 'undefined') {
    console.error('Arquivo projects-data.js não foi carregado');
    return null;
  }
  
  return projectsData[projectId] || null;
}

// Função para popular elementos da página
function populatePageElements(projectData) {
  // Título da página
  const pageTitle = document.getElementById('page-title');
  if (pageTitle) {
    pageTitle.textContent = `Vitor Lacerda - ${projectData.title}`;
  }
  
  // Título do projeto
  const projectTitle = document.getElementById('project-title');
  if (projectTitle) {
    projectTitle.textContent = projectData.title;
  }
  
  // Descrição
  const projectDescription = document.getElementById('project-description');
  if (projectDescription) {
    projectDescription.textContent = projectData.description;
  }
  
  // Data
  const projectDate = document.getElementById('project-date');
  if (projectDate) {
    projectDate.textContent = projectData.date;
  }
  
  // Imagem
  const projectImage = document.getElementById('project-image');
  if (projectImage) {
    projectImage.src = projectData.image;
    projectImage.alt = projectData.imageAlt;
  }
  
  // Badges
  const badgesWrapper = document.getElementById('badges-wrapper');
  if (badgesWrapper && projectData.badges) {
    badgesWrapper.innerHTML = '';
    projectData.badges.forEach(badge => {
      const badgeElement = document.createElement('div');
      badgeElement.className = 'badge';
      badgeElement.innerHTML = `<span class="badge-text regular-sm">${badge}</span>`;
      badgesWrapper.appendChild(badgeElement);
    });
  }
  
  // Conteúdo específico
  const projectContent = document.getElementById('project-content');
  if (projectContent && projectData.content) {
    projectContent.innerHTML = projectData.content;
    
    // Aplica numeração automática após carregar o conteúdo
    if (window.ProjectNumbering) {
      setTimeout(() => {
        window.ProjectNumbering.reapplyNumbering();
      }, 50);
    }
  }
}

// Função para exibir erro quando projeto não for encontrado
function showProjectNotFound() {
  const projectTitle = document.getElementById('project-title');
  const projectDescription = document.getElementById('project-description');
  const projectDate = document.getElementById('project-date');
  
  if (projectTitle) projectTitle.textContent = 'Projeto não encontrado';
  if (projectDescription) projectDescription.textContent = 'O projeto solicitado não foi encontrado.';
  if (projectDate) projectDate.textContent = '---';
  
  console.error('Projeto não encontrado:', getProjectIdFromUrl());
}

// Função principal de inicialização
async function initializeProject() {
  const projectId = getProjectIdFromUrl();
  
  if (!projectId) {
    console.error('ID do projeto não encontrado na URL');
    return;
  }
  
  // Tenta carregar dados do arquivo JavaScript primeiro
  let projectData = loadProjectDataFromJs(projectId);
  
  // Se não encontrou no JS, tenta carregar do JSON
  if (!projectData) {
    projectData = await loadProjectDataFromJson(projectId);
  }
  
  // Se encontrou os dados, popula a página
  if (projectData) {
    populatePageElements(projectData);
  } else {
    showProjectNotFound();
  }
}

// Inicializa quando a página estiver carregada
document.addEventListener('DOMContentLoaded', initializeProject);

// Exporta funções para uso externo se necessário
window.ProjectLoader = {
  initializeProject,
  getProjectIdFromUrl,
  loadProjectDataFromJs,
  loadProjectDataFromJson
};
