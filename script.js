document.addEventListener('DOMContentLoaded', () => {

  // Menu mobile
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      links.classList.toggle('open');
    });
  }

  // Nav transparente → opaque sur page projet
  const navProject = document.querySelector('.nav-project');
  if (navProject) {
    const onScroll = () => {
      if (window.scrollY > 60) {
        navProject.classList.add('scrolled');
      } else {
        navProject.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Apparition au scroll des bandes projets
  if ('IntersectionObserver' in window) {
    const rows = document.querySelectorAll('.work-row');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, i * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -80px 0px' });

    rows.forEach(row => {
      row.style.opacity = '0';
      row.style.transform = 'translateY(30px)';
      row.style.transition = 'opacity 1s cubic-bezier(0.22, 1, 0.36, 1), transform 1s cubic-bezier(0.22, 1, 0.36, 1)';
      observer.observe(row);
    });

    // Apparition douce des blocs de la page projet
    const blocks = document.querySelectorAll('.project-intro-block, .project-body, .project-video, .project-gallery, .project-meta');
    const blockObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          blockObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    blocks.forEach(block => {
      block.style.opacity = '0';
      block.style.transform = 'translateY(40px)';
      block.style.transition = 'opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1), transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)';
      blockObserver.observe(block);
    });
  }
});
