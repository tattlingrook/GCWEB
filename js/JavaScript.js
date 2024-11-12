document.addEventListener("DOMContentLoaded", () => {
    const createGameBtn = document.getElementById("create-game-btn");
    const configuracionesBtn = document.getElementById("configuraciones-btn");
    const puntuacionesBtn = document.getElementById("puntuaciones-btn");
    //GameScreen
    const MenuPausaBtn = document.getElementById("menu-pausa-btn");

    const body = document.body;
    
    createGameBtn.addEventListener("click", () => {
      // Change the page
    window.location.href = "index.php";
    
      // Add the transition class
    body.classList.add("transition");
    
      // After the transition finishes, remove the class
    setTimeout(() => {
        body.classList.remove("transition");
    }, 500);
    });

    configuracionesBtn.addEventListener("click", () => {
        // Change the page
    window.location.href = "configuraciones.php";
    
        // Add the transition class
    body.classList.add("transition");
    
        // After the transition finishes, remove the class
    setTimeout(() => {
    body.classList.remove("transition");
    }, 500);
    });

    puntuacionesBtn.addEventListener("click", () => {
        // Change the page
    window.location.href = "puntuaciones.php";
    
        // Add the transition class
    body.classList.add("transition");
    
        // After the transition finishes, remove the class
    setTimeout(() => {
    body.classList.remove("transition");
    }, 500);
    });

    });