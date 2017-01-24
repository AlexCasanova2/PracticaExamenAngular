
var jugador = new Jugador();
jugador.nombre = "juan";

document.write(jugador.nombre);


function Equipo(){
    this.nombre;
    this.victorias;
    this.derrotas;
    this.tipo;
    this.jugadores = new Array();
    
    
    this.addJugador = function (jugador){
        var j = this.jugadores.push(jugador);
        return j;
    };
    
    this.getJugador = function (nickname){
        return this.jugadores[nickname];
    };
    
    this.delJugador = function(nickname){
        for(var i; jugadores.size();i++){
            if(this.nickname=nickname){
                jugadores.splice(i,1);
            }
        }
        delete this.jugadores[nickname];
    };
    
    this.getJugadorMaxPuntos = function(jugador,puntos){
        
    };
};

function Jugador(){
    this.nickname;
    this.nombre;
    this.funcion;
    this.puntos;
    
    Jugador.updateJugador = function(nombre,funcion,puntos){
    this.nombre= nombre || this.nombre;
    this.funcion=funcion || this.funcion;
    this.puntos = puntos || this.puntos;
    };
}