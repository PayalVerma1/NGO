

  document.querySelector('.menu-icon').addEventListener('click', function () {
    this.classList.toggle('clicked');
    document.querySelector('.hamburger-menu').classList.toggle('open');
  });

  // Add click handlers to project images
  document.querySelectorAll('.project-img').forEach(function(img) {
    img.addEventListener('click', function() {
      const project = this.getAttribute('data-project');
      // Use query string for navigation
      window.location.href = `project_detail.html?project=${project}`;
    });
  });

