function addProjectNumbering() {
  // Contadores para cada nível
  let h1Counter = 0;
  let h2Counter = 0;
  let h3Counter = 0;
  
  // Array para armazenar os contadores de h2 por seção h1
  let h2Counters = [];
  let h3Counters = [];
  
  // Busca todos os elementos com as classes especificadas
  const projectH1s = document.querySelectorAll('.project-h1');
  const projectH2s = document.querySelectorAll('.project-h2');
  //const projectH3s = document.querySelectorAll('.project-h3');
  
  // Processa os H1s primeiro
  projectH1s.forEach((h1, index) => {
    h1Counter++;
    h2Counter = 0; // Reset do contador h2 para cada h1
    h3Counter = 0; // Reset do contador h3 para cada h1
    
    // Adiciona a numeração
    const currentNumber = h1Counter + '.';
    addNumberToElement(h1, currentNumber);
    
    // Armazena o contador atual de h2 para esta seção h1
    h2Counters[h1Counter - 1] = 0;
  });
  
  // Processa os H2s
  projectH2s.forEach((h2, index) => {
    // Encontra qual seção h1 este h2 pertence
    const parentH1Index = findParentH1Index(h2, projectH1s);
    
    if (parentH1Index !== -1) {
      h2Counters[parentH1Index]++;
      const h1Number = (parentH1Index + 1) + '.';
      const h2Number = h2Counters[parentH1Index];
      const currentNumber = h1Number + h2Number + '.';
      
      addNumberToElement(h2, currentNumber);
      
      // Reset do contador h3 para este h2
      const h2Key = `${parentH1Index}-${h2Counters[parentH1Index]}`;
      h3Counters[h2Key] = 0;
    } else {
      // Se não tem pai h1, usa numeração simples
      h2Counter++;
      const currentNumber = h2Counter + '.';
      addNumberToElement(h2, currentNumber);
    }
  });
  
  /* Processa os H3s
  projectH3s.forEach((h3, index) => {
    // Encontra qual seção h2 este h3 pertence
    const parentInfo = findParentH2Index(h3, projectH1s, projectH2s);
    
    if (parentInfo.h1Index !== -1 && parentInfo.h2Index !== -1) {
      const h2Key = `${parentInfo.h1Index}-${parentInfo.h2Index}`;
      h3Counters[h2Key] = (h3Counters[h2Key] || 0) + 1;
      
      const h1Number = (parentInfo.h1Index + 1) + '.';
      const h2Number = parentInfo.h2Index + '.';
      const h3Number = h3Counters[h2Key];
      const currentNumber = h1Number + h2Number + h3Number + '.';
      
      addNumberToElement(h3, currentNumber);
    } else {
      // Se não tem pais, usa numeração simples
      h3Counter++;
      const currentNumber = h3Counter + '.';
      addNumberToElement(h3, currentNumber);
    }
  });
  */
}

// Função para adicionar numeração ao elemento
function addNumberToElement(element, number) {
  // Verifica se já tem numeração para evitar duplicação
  if (element.classList.contains('numbered')) {
    return;
  }
  
  // Adiciona classe para identificar que já foi numerado
  element.classList.add('numbered');
  
  // Cria o span com a numeração
  const numberSpan = document.createElement('span');
  numberSpan.className = 'project-number';
  numberSpan.textContent = number + ' ';
  
  // Insere a numeração no início do elemento
  element.insertBefore(numberSpan, element.firstChild);
}

// Função para encontrar o índice do H1 pai
function findParentH1Index(element, h1Elements) {
  let currentElement = element.previousElementSibling;
  
  // Procura para trás até encontrar um H1
  while (currentElement) {
    if (currentElement.classList.contains('project-h1')) {
      return Array.from(h1Elements).indexOf(currentElement);
    }
    currentElement = currentElement.previousElementSibling;
  }
  
  // Se não encontrou para trás, procura nos elementos anteriores
  const allElements = Array.from(document.querySelectorAll('.project-h1, .project-h2, .project-h3'));
  const currentIndex = allElements.indexOf(element);
  
  for (let i = currentIndex - 1; i >= 0; i--) {
    if (allElements[i].classList.contains('project-h1')) {
      return Array.from(h1Elements).indexOf(allElements[i]);
    }
  }
  
  return -1;
}

// Função para encontrar o índice do H2 pai
function findParentH2Index(element, h1Elements, h2Elements) {
  const allElements = Array.from(document.querySelectorAll('.project-h1, .project-h2, .project-h3'));
  const currentIndex = allElements.indexOf(element);
  
  let h1Index = -1;
  let h2Index = -1;
  
  // Procura para trás até encontrar H1 e H2
  for (let i = currentIndex - 1; i >= 0; i--) {
    const el = allElements[i];
    
    if (el.classList.contains('project-h1')) {
      h1Index = Array.from(h1Elements).indexOf(el);
      break;
    } else if (el.classList.contains('project-h2') && h2Index === -1) {
      h2Index = Array.from(h2Elements).indexOf(el);
    }
  }
  
  return { h1Index, h2Index };
}

function removeProjectNumbering() {
  const numberedElements = document.querySelectorAll('.numbered');
  numberedElements.forEach(element => {
    const numberSpan = element.querySelector('.project-number');
    if (numberSpan) {
      numberSpan.remove();
    }
    element.classList.remove('numbered');
  });
}

function reapplyProjectNumbering() {
  removeProjectNumbering();
  addProjectNumbering();
}

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(addProjectNumbering, 100);
});

// Exporta funções
window.ProjectNumbering = {
  addNumbering: addProjectNumbering,
  removeNumbering: removeProjectNumbering,
  reapplyNumbering: reapplyProjectNumbering
};
