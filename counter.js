const counter = document.getElementById("counter");


let time = 30;
let myStopFunction;

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
        setInterval();
      };
      
     

}, 1000)

 myStopFunction()

 //function stopTimer() {
 // clearInterval(restTime);