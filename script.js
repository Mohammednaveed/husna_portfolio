// Smooth Scrolling for Nav Links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});

// Project Item Hover Effect
const projectItems = document.querySelectorAll('.project-item');
projectItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.classList.add('shadow-lg');
  });

  item.addEventListener('mouseleave', () => {
    item.classList.remove('shadow-lg');
  });
});
