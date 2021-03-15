

//DOM

const combo = document.getElementById("combo");
const helpButton = document.getElementById("help-button");
const restart = document.getElementById("restart");


//EVENTS

const nuevaGrid = ()=>{
  document.innerHTML = "";
}

//Tiempo de juego

let topTime = 30;
let stopTime = 0; 






//Bienvenida

const contenido = document.createElement("span");
contenido.innerHTML = "En MatcheADAs tu objetivo es juntar tres o más ítems del mismo tipo, ya sea en fila o columna. Para eso, selecciona un ítem y a continuación un ítem adyacente para intercambiarlos de lugar. <br /> <br /> Si se forma un grupo, esos ítems se eliminarán y ganarás puntos. ¡Sigue armando grupos de 3 o más antes de que se acabe el tiempo!<br /> <br /> <strong>Controles</strong> <br /> Click izquierdo: selección <br />Enter o Espacio: selección <br /> Flechas o WASD: movimiento e intercambio";

const welcome = () =>{
  swal ({
    title:"¡Bienvenida/o!",
    content: contenido,
    button: "A jugar!",
    closeOnClickOutside : false,
    closeOnEsc : false, 
  }).then((value) =>{
    if(value){
      difficulty();
    }
  })
}

//Botón ?

const info = () =>{
  clearInterval(time);
  swal({
    title: "Información",
    content: contenido,
    button: "A jugar!",
    closeOnClickOutside: false,
    closeOnEsc: false,
  }).then((value)=>{
    counter(stopTime);
  })
}

//Dificultades

const difficulty = () =>{
  swal({
    title: "Nuevo juego",
    text: "Selecciona una dificultad",
    buttons: {
      easy: {
        text: "Fácil",
        value: "easy",
      },
      normal: {
        text: "Normal",
        value: "normal",
      },
      hard: {
        text: "Difícil",
        value: "hard",
      },
    },
    closeOnClickOutside: false,
    closeOnEsc: false,
  }).then((value)=>{
    switch(value){
      case "easy":
        place= 9;
        nuevaGrid(place);
        break;
      case "normal":
        place= 8;
        nuevaGrid(place);
        break;
      case "hard":
        place= 7;
        nuevaGrid(place);
        break;
      default:    
    }
  })
}

//Reestablecer

const restarting = () =>{
  clearInterval(time);
  swal({
    title: "Reiniciar juego",
    text: "Perderás todo tu puntaje acumulado!",
    buttons: {
      noRestart: {
        text: "Cancelar",
        value: "noRestart",
      },
      newGame: {
        text: "Nuevo juego",
        value: "newGame",
      },
    },
    closeOnClickOutside: false,
    closeOnEsc: false,
  }).then((value)=>{
    switch(value){
      case "noRestart":
        time(stopTime);
        break;
      case "new":
        nuevaGrid();
        difficulty();
        break;
      default:    
    }
  })
}

//Fin del juego

const gameOver = () =>{
  clearInterval(time);
  swal({
    title: "¡Juego terminado!",
    text: `Puntaje final:`,
    buttons: {
      new: {
        text: "Nuevo juego",
        value: "new",
      },
      reinicia: {
        text: "Reiniciar",
        value: "reinicia",
      },
    },
    closeOnClickOutside: false,
    closeOnEsc: false,
  }).then((value) =>{
    switch(value){
      case "new":
        nuevaGrid();
        difficulty();
        break;
      case "reinicia":
        nuevaGrid();
        break;
      default:    
    }
  })  
}

window.addEventListener("load", ()=>{
  welcome();
})

helpButton.addEventListener("click",()=>{
  info();
})

restart.addEventListener("click",()=>{
  restarting();
})


