
function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    menu.classList.toggle('open');
}

// Stelle sicher, dass man beim Reload wieder ganz oben ist
window.addEventListener("load", function() {
    
    if (window.location.hash) {
        history.replaceState("", document.title, window.location.pathname + window.location.search);
        window.scrollTo(0, 0); // sofort ganz nach oben scrollen
    }
});
window.addEventListener('scroll', () => {
  const footer = document.getElementById('footer');
  if ((window.innerHeight + window.pageYOffset) >= (document.body.offsetHeight - 100)) {
    footer.classList.add('visible');
  } else {
    footer.classList.remove('visible');
  }
});

