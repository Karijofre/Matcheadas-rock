//-Generar una grilla que contenga los espacios necesarios para incorporar mis imágenes.
//- Crear una matriz que contenga el espacio, las imágenes y la función adecuados para moverlos.
//-Recorrer la matriz haciendola random para poder darle las funciones.
//-El atributo drag hace que pueda arrastras las imágenes y soltarlas.
//-Crear la función , recorriendo la matriz, para lograr las coincidencias de imágenes por tres y cuatro filas y/o tres y cuatro columnas.
//-Agregar una puntuación de tres puntos cada vez que se encuentre una fila/columna de tres ítems, agregando esto como una variable global comenzando con el puntaje de inicio en cero.


//DOM

//Grilla de 8 (modo normal)

document.addEventListener("DOMContentLoaded",()=>{
    const grid = document.querySelector(".grid")
    const scoreDisplay = document.getElementById("score")
    let place = 8
    const squares = []
    const imageColors = [ 
         "url(mercury.png)",
         "url(bowie.png)",
         "url(elvis.png)",
         "url(jagger.png)",
         "url(jim.png)", 
         "url(michael.png)"]
    function myBoard () {
    for (let i = 0; i < place * place; i++) {
    const square = document.createElement("div")
    square.setAttribute("draggable", true)
    square.setAttribute("id", i)
    let randomColor = Math.floor(Math.random() * imageColors.length)
    square.style.backgroundImage = imageColors[randomColor]
    grid.appendChild(square)
    squares.push(square)
    }
  }

  myBoard();


  //Utilizando eventos (drag) de arrastre para mover los div de la grilla.

   let running =""
   let anotherRun = ""
   let squareIdRunning =""
   let squareIdAnotherRun = ""
   let score = 0

   squares.forEach(square => square.addEventListener("dragstart", dragStart));
   squares.forEach(square => square.addEventListener("dragend", dragEnd));
   squares.forEach(square => square.addEventListener("dragover", dragOver));
   squares.forEach(square => square.addEventListener("dragenter", dragEnter));
   squares.forEach(square => square.addEventListener("dragleave", dragLeave));
   squares.forEach(square => square.addEventListener("drop", dragDrop));

   function dragStart(){
    running = this.style.backgroundImage
    squareIdRunning = parseInt(this.id)
    console.log(running)
    console.log(this.id, "dragstart")
  }

   

   function dragOver(e){
       e.preventDefault()
    console.log(this.id, "dragover")
  }

   function dragEnter(e){
       e.preventDefault()
    console.log(this.id, "dragenter")
  }

   function dragLeave(){
    console.log(this.id, "dragleave")
  }

   function dragDrop(){
    console.log(this.id, "drop")
    anotherRun = this.style.backgroundImage;
    squareIdAnotherRun = parseInt(this.id);
    this.style.backgroundImage = running;
    squares [squareIdRunning].style.backgroundImage = anotherRun
  }

  function dragEnd(){
    console.log(this.id, "dragend")
    let runOks = [
        squareIdRunning - 1,
        squareIdRunning - place,
        squareIdRunning + 1,
        squareIdRunning + place, 
    ]
    let runOk = runOks.includes(squareIdAnotherRun)
    if (squareIdAnotherRun && runOks) {
        squareIdAnotherRun = null   
    }else if (squareIdAnotherRun && !runOks) {
       squares[squareIdAnotherRun].style.backgroundImage = anotherRun;
       squares[squareIdRunning].style.backgroundImage = running; 
    } else squares[squareIdRunning].style.backgroundImage = running; 
  }


  //Soltar ítems una vez que son eliminados

  function down() {
      for(i = 0; i < 55; i++){
          if(squares[i + place].style.backgroundImage === ""){
              squares[i + place].style.backgroundImage = squares[i].style.backgroundImage
              squares[i].style.backgroundImage = ""
              const primerFila = [0, 1, 2, 3, 4, 5, 6, 7]
              const esLaPrimera = primerFila.includes(i)
              if(esLaPrimera && squares[i].style.backgroundImage === ""){
                  let randomColor = Math.floor(Math.random() * imageColors.length)
                  squares[i].style.backgroundImage = imageColors[randomColor]
              }
          }
      }
  }


  //Matcheado

  
  // Concidencias de cuatro ítems en el matcheado

  function matchFour(){
    for(i = 0; i < 60; i++){
        let filaDeCuatro = [i, i+1, i+2, i+3]
        let colorFijo = squares[i].style.backgroundImage
        const empty = squares[i].style.backgroundImage === ""

        const notValid = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55]
        if(notValid.includes(i)) continue

        if (filaDeCuatro.every(index => squares[index].style.backgroundImage === colorFijo && !empty )) {
            score += 4
            scoreDisplay.innerHTML = score 
            filaDeCuatro.forEach(index => {
                squares[index].style.backgroundImage = ""
            })
        }
    }
}
 matchFour()


// Concidencias de cuatro columnas en el matcheado

function matchFourColumn(){
  for(i = 0; i < 47; i++){ //El bucle se detiene en la celda 47
      let columnaDeCuatro = [i, i+place, i+place*2, i+place*3]
      let colorFijo = squares[i].style.backgroundImage
      const empty = squares[i].style.backgroundImage === ""

      if (columnaDeCuatro.every(index => squares[index].style.backgroundImage === colorFijo && !empty )) {
          score += 4
          scoreDisplay.innerHTML = score
          columnaDeCuatro.forEach(index => {
              squares[index].style.backgroundImage = ""
          })
      }
  }
}
 matchFourColumn()



  // Concidencias de tres ítems en el matcheado

  function matchThree(){
      for(i = 0; i < 61; i++){
          let filaDeTres = [i, i+1, i+2]
          let colorFijo = squares[i].style.backgroundImage
          const empty = squares[i].style.backgroundImage === ""

          const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55] /*  es cada índice NO VALIDO porque no quiero que mi fila de
          tres empiece en seis de lo contrario una fila aparecería al otro lado de mi grilla, igual para el índice siete y así sucesivamente. */
          if(notValid.includes(i)) continue

          if (filaDeTres.every(index => squares[index].style.backgroundImage === colorFijo && !empty )) {
              score += 3
              scoreDisplay.innerHTML = score 
              filaDeTres.forEach(index => {
                  squares[index].style.backgroundImage = ""
              })
          }
      }
  }
  matchThree()


  // Concidencias de tres columnas en el matcheado

  function matchThreeColumn(){
    for(i = 0; i < 47; i++){  //para una columna de 3 se detiene en la celda 47
        let columnaDeTres = [i, i+place, i+place*2]
        let colorFijo = squares[i].style.backgroundImage
        const empty = squares[i].style.backgroundImage === ""

        if (columnaDeTres.every(index => squares[index].style.backgroundImage === colorFijo && !empty )) {
            score += 3
            scoreDisplay.innerHTML = score 
            columnaDeTres.forEach(index => {
                squares[index].style.backgroundImage = ""
            })
        }
    }
}
 matchThreeColumn()


  window.setInterval(function(){
      matchThree()
      matchThreeColumn()
      matchFour()
      matchFourColumn()
      down()
      
  }, 100) //Invoca la función cada 100 milisegundos




});









