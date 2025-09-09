// Navbar functionality
document.addEventListener('DOMContentLoaded', function() {
  const optionPencil = document.querySelector('.option-pencil');
  const optionHand = document.querySelector('.option-hand');

  // Function to set active state and toggle draggable
  function setActiveOption(activeOption) {
    // Remove active class from all options
    optionPencil.classList.remove('active');
    optionHand.classList.remove('active');
    
    // Add active class to selected option
    activeOption.classList.add('active');
    
    // Toggle draggable functionality based on active option
    if (activeOption === optionPencil) {
      // Pencil active = Enable draggable
      window.toggleDraggable(true);
    } else if (activeOption === optionHand) {
      // Hand active = Disable draggable
      window.toggleDraggable(false);
    }
  }

  // Event listeners for option buttons
  optionPencil.addEventListener('click', function() {
    setActiveOption(optionPencil);
  });

  optionHand.addEventListener('click', function() {
    setActiveOption(optionHand);
  });

  // Initialize with hand as active (default state - draggable disabled)
  // Remove active class from all options first
  optionPencil.classList.remove('active');
  optionHand.classList.remove('active');
  
  // Add active class to hand option
  optionHand.classList.add('active');
  
  // Set draggable disabled without showing toaster
  window.toggleDraggable(false, false);
});
