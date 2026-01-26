// Cyberpunk Portfolio - Interactive Effects

document.addEventListener('DOMContentLoaded', () => {
  // Mouse tracking effect
  const mouseGlowCyan = document.createElement('div');
  const mouseGlowMagenta = document.createElement('div');
  
  mouseGlowCyan.className = 'mouse-glow mouse-glow-cyan';
  mouseGlowMagenta.className = 'mouse-glow mouse-glow-magenta';
  
  document.body.appendChild(mouseGlowCyan);
  document.body.appendChild(mouseGlowMagenta);

  document.addEventListener('mousemove', (e) => {
    const x = e.clientX - 200;
    const y = e.clientY - 200;
    
    mouseGlowCyan.style.left = x + 'px';
    mouseGlowCyan.style.top = y + 'px';
    
    // Delayed movement for magenta glow
    setTimeout(() => {
      mouseGlowMagenta.style.left = (x - 50) + 'px';
      mouseGlowMagenta.style.top = (y - 50) + 'px';
    }, 100);
  });

  // Smooth scroll for links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Add click effect to contact cards
  document.querySelectorAll('.contact-card').forEach(card => {
    card.addEventListener('click', function() {
      const link = this.querySelector('a');
      if (link) {
        window.open(link.href, '_blank');
      }
    });
  });

  // Stagger animation for elements
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });
});

// Prevent default link behavior for anchors without href
document.querySelectorAll('a:not([href])').forEach(link => {
  link.style.cursor = 'pointer';
});
