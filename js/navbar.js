// Navbar functionality
document.addEventListener('DOMContentLoaded', function() {
  const optionPencil = document.querySelector('.option-pencil');
  const optionHand = document.querySelector('.option-hand');

  // Function to set active state
  function setActiveOption(activeOption) {
    // Remove active class from all options
    optionPencil.classList.remove('active');
    optionHand.classList.remove('active');
    
    // Add active class to selected option
    activeOption.classList.add('active');
  }

  // Event listeners for option buttons
  optionPencil.addEventListener('click', function() {
    setActiveOption(optionPencil);
  });

  optionHand.addEventListener('click', function() {
    setActiveOption(optionHand);
  });

  // Initialize with pencil as active (default state)
  setActiveOption(optionPencil);
});
