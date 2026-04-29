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
});
