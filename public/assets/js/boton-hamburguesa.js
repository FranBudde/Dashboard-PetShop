window.onload = () => {
  const boton = document.getElementById('boton-menuHamburguesa');
  const barraLateral = document.getElementById('accordionSidebar');
  const contentWrapper = document.getElementById('content-wrapper')

  boton.addEventListener("click", () => {
    if (barraLateral.style.display === 'block') {
      barraLateral.style.display = 'none';
      contentWrapper.classList.remove('margin-left-navbar')

    } else {
      barraLateral.style.display = 'block';
      contentWrapper.classList.add('margin-left-navbar')
    }
  });

}




