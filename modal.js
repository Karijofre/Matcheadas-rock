//Modal de Bienvenida

const modalWelcome = document.getElementById("modal-welcome");

swal({
    title: "¡Bienvenida/o!",
    text: "En MatchADAs del Rock tu objetivo es juntar tres o más ítems del mismo rockstar, ya se en fila o columna. Para eso, selecciona un ítem y a continuación un ítem adyacente para intercambiarlos de lugar. Si se forma un grupo , esos ítems se eliminarán y ganarás puntos. ¡Sigue armando grupos de 3 o más rockstars antes de que se acabe el tiempo! Controles Click izquierdo: selección Enter o Espacio: selección  Flechas o WASD: movimiento e intercambio",
    icon: "amy.png",
    button: "A Jugar",
  });

 window.onload = modalWelcome();
