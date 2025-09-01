// Scroll Animation

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {

  const triggerBottom = window.innerHeight * 0.8;

  sections.forEach(sec => {

    const secTop = sec.getBoundingClientRect().top;

    if (secTop < triggerBottom) {

      sec.classList.add('visible');

    }

  });

});