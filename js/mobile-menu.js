document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileCloseBtn = document.getElementById('mobile-close-btn');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    mobileOverlay.classList.add('active');
    document.body.classList.add('mobile-menu-open');
    document.body.style.overflow = 'hidden';
    mobileMenuBtn.style.display = 'none';
  }

  function closeMobileMenu() {
    mobileOverlay.classList.remove('active');
    document.body.classList.remove('mobile-menu-open');
    document.body.style.overflow = ''; // Restore scrolling
    mobileMenuBtn.style.display = 'flex';
  }

  // Event listeners
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openMobileMenu);
    mobileMenuBtn.addEventListener('touchstart', openMobileMenu);
  }

  if (mobileCloseBtn) {
    mobileCloseBtn.addEventListener('click', closeMobileMenu);
  }
  
  // Close menu when clicking on overlay (outside dropdown)
  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', function(e) {
      if (e.target === mobileOverlay) {
        closeMobileMenu();
      }
    });
  }

  // Close menu when clicking on nav links
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close menu on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileOverlay.classList.contains('active')) {
      closeMobileMenu();
    }
  });
}); 