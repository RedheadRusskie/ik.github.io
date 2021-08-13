
window.onload = function() {
  const EFFECT = document.querySelector("#effect",);

  window.addEventListener('scroll', scrollEffect);

  function scrollEffect() {
    if(window.scrollY>=450 || window.screen.availWidth>=1024) {
      EFFECT.style.opacity = '1';
      EFFECT.style.transform = 'translateX(0px)';
      EFFECT.style.transition = '1s ease-in-out';
    } else {
      EFFECT.style.opacity = '0';
      EFFECT.style.transform = 'translateY(-40px)';
    }
  } 
}