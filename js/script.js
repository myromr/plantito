    // JavaScript code for the dropdown functionality
    window.addEventListener('DOMContentLoaded', function() {
        var dropdown = document.querySelector('.dropdown');
        var dropdownContent = document.querySelector('.dropdown-content');
  
        dropdown.addEventListener('click', function() {
          dropdownContent.classList.toggle('show');
        });
  
        window.addEventListener('click', function(e) {
          if (!dropdown.contains(e.target)) {
            dropdownContent.classList.remove('show');
          }
        });
      });