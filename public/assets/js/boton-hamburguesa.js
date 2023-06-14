window.onload = () => {
    const boton = document.getElementById('boton-menuHamburguesa');
    const barraLateral = document.getElementById('accordionSidebar');
  
    boton.addEventListener("click", () => {
      if (barraLateral.style.display === 'block') {
        barraLateral.style.display = 'none';
      } else {
        barraLateral.style.display = 'block';
      }
    });
    
  }
  

