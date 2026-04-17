document.addEventListener('DOMContentLoaded', () => {
  const heroCard = document.querySelector('.hero-card');
  const heroBg = document.querySelector('.hero-bg');
  const heroDarken = document.querySelector('.hero-darken');
  
  if (heroCard) {
    heroCard.addEventListener('mouseenter', () => {
      if (heroBg) heroBg.style.transform = 'scale(1.12)';
      if (heroDarken) heroDarken.style.background = 'rgba(0,0,0,.5)';
    });
    
    heroCard.addEventListener('mouseleave', () => {
      if (heroBg) heroBg.style.transform = 'scale(1)';
      if (heroDarken) heroDarken.style.background = 'rgba(0,0,0,0)';
    });
  }

  const videos = document.querySelectorAll('.video-player');
  if ('IntersectionObserver' in window && videos.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target;
        if (!entry.isIntersecting && !video.paused) {
          video.pause();
        }
      });
    }, { threshold: 0.25 });
    videos.forEach(video => observer.observe(video));
  }
});
