
//Niveles de dificultad del juego

/* let easy =""
let normal =""
let hard =" */

/* 


  swal("Selecciona una dificultad para tu nuevo juego", {
  
    buttons: {
      facil: {
        text: "Facil",
        value: "easy"
      },
      medio: {
        text: "Medio",
        value: "normal"
      },
      dificil: {
        text: "dificil",
        value: "hard"
      },
    },
   
  })
  .then((value) => {
    switch (value) {
      case "facil":
        easy(value)
        break;
      case "medio":
        break;
        normal(value)
      case "dificil":
        break;
        hard(value)
      default:
    }
    
    grid.innerHTML = value
  });
  
    const easy = (value) =>{
    document.grid.style.height = '650px'; 
    document.grid.style.width = "650px";
  }

    const normal = (value) =>{
    document.grid.style.height = "560px";
    document.grid.style.width = "560px";
  }

    const hard = (value) =>{
    document.grid.style.height = "500px";
    document.grid.style.width = "500px";
  }
  

 */

//Modal de Bienvenida

const modalWelcome = document.getElementById("modal-welcome");

swal({
    title: "¡Bienvenida/o!",
    text: "En MatchADAs del Rock tu objetivo es juntar tres o más ítems del mismo rockstar, ya se en fila o columna. Para eso, selecciona un ítem y a continuación un ítem adyacente para intercambiarlos de lugar. Si se forma un grupo , esos ítems se eliminarán y ganarás puntos. ¡Sigue armando grupos de 3 o más rockstars antes de que se acabe el tiempo! Controles: *** Click izquierdo: selección *** Enter o Espacio: selección ***  Flechas o WASD: movimiento e intercambio",
    icon: "amy.png",
    button: "A Jugar",
    closeOnClickOutside: false,
    closeOnEsc: false,
    
  }
    /* .then(value) */
  );
  

  /*  modalWelcome();  */
