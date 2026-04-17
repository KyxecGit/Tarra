document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.addEventListener('click', () => {
      hero.classList.toggle('active');
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
