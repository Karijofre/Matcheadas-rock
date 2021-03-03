//-Detectar el soporte táctil
//-Ignorar navegadores sin el soporte táctil
//-Realizar la función para simular el evento del mouse
//-Ignorar multi eventos táctiles
//-Evitar el scroll 
//-Crear el evento del mouse según las coordenadas
//-Disparar el evento al elemento destinado
//-Ignorar el evento en el momento en que el usuario/a no lo maneja


(function ($) {
    $.support.touch = "ontouched" in document;
    if(!$.support.touch){
        return;
    }
    let mouseRaton = $.ui.mouse.prototype,
    _mouseInit = mouseRaton._mouseInit,
    touchHandled;

    function simulateMouseEvent (event, simulatedType){
        if(event.originalEvent.touches.length > 1){
            return; 
        }
        event.preventDefault();

        let touch = event.originalEvent.changedTouches[0],
        simulatedEvent = document.createEvent("MouseEvents");

        //Evento del mouse simulado usando las coordenadas del evento táctil
        simulatedEvent.initMouseEvent (
            simulatedType, //type
            true, //bubbles
            true, //cancelable
            window, //view
            1, //detail
            touch.screenX, //screen X
            touch.screenY, //screen Y
            touch.clientX, //client X
            touch.clientY, //client Y
            false, //ctrlKey
            false, //altKey
            false, //shiftKey
            false, //metaKey
            0, //button
            null //relatedTarget

        );
        event.target.dispatchEvent(simulatedEvent);
    }

    mouseRaton._touchStart = function (event){
        let self = this;
        if(touchHandled || !self._mouseCapture(event.originalEvent.changedTouches[0])){
            return;
        }

        touchHandled = true;
        //Determinar el movimiento click
        self._touchMoved = false;
        simulateMouseEvent(event, "mouseover");
        simulateMouseEvent(event, "mousemove");
        simulateMouseEvent(event, "mousedown");
    };

    mouseRaton._touchMove = function(event){
        if(!touchHandled){
            return;
        }
        this._touchMoved = true;
        simulateMouseEvent(event, "mousemove");
    };

    mouseRaton._touchEnd = function (event){
        //Ignorar el evento si no está siendo manipulado
        if(!touchHandled){
            return;
        }
        simulateMouseEvent(event, "mouseup");
        simulateMouseEvent(event, "mouseout");
        //Si la interacción táctil no se movió, debería activarse con un clic
        if(!this._touchMoved){
            simulateMouseEvent(event, "click");
        }

        touchHandled = false;
    };

    mouseRaton._mouseInit = function() {
        let self = this;
        //Delega los controladores táctiles al elemento:
        self.element
             .on("touchstart", $.proxy(self, "_touchStart"))
             .on("touchmove", $.proxy(self, "_touchMove"))
             .on("touchend", $.proxy(self, "_touchEnd" ));

        _mouseInit.call(self);
    };
    (jQuery);
})