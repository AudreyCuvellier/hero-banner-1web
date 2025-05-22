document.addEventListener('DOMContentLoaded', function () {
  const glitchText = document.querySelector('.glitch-text');
  setInterval(() => {
      glitchText.style.animation = `none`;
      setTimeout(() => {
          glitchText.style.animation = `glitch 1s infinite`;
      }, 100);
  }, 3000);
});