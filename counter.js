
const counter = document.getElementById("counter");


let time = 30;

setInterval(()=>{
    if(time > -1){
        counter.innerHTML = time
        time--
    }else{
        swal("¡Juego terminado!", {
            buttons: ["Nuevo juego", "Reiniciar"],
          })
        return; 
    }
    function myStopFunction() {
        clearInterval(time);
       
      }
     

}, 1000)

 myStopFunction()

 
