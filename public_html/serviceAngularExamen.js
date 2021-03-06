var equipo = new Equipo();
var jugador = new Jugador();
equipo.nombre = "Los Manolos";
equipo.victorias = 8;
equipo.derrotas = 4;
equipo.tipo = "Futbol";

jugador.nickname="juanete";
jugador.nombre = "juan";
jugador.funcion= "portero";
jugador.puntos = 0;


document.write("Equipos <br>");
document.write("Nombre equipo: ");
document.write(equipo.nombre);
document.write("<br>");
document.write("Victorias equipo: ");
document.write(equipo.victorias);
document.write("<br>");
document.write("Derrotas equipo: ");
document.write(equipo.derrotas);
document.write("<br>");
document.write("Tipo de equipo: ");
document.write(equipo.tipo);
document.write("<br>");
document.write("Jugadores equipo: ");
equipo.addJugador(jugador);
document.write(equipo.getJugador("juanete").nombre);
document.write("<br>");
document.write("Jugador Max. puntuación: ");
document.write(equipo.getJugadorMaxPuntos().nombre);
document.write("<br>");

document.write("<br>");
document.write("Jugadores <br>");
document.write("Nickname jugador: ");
document.write(jugador.nickname);
document.write("<br>");
document.write("Nombre jugador: ");
document.write(jugador.nombre);
document.write("<br>");
document.write("Funcion jugador: ");
document.write(jugador.funcion);
document.write("<br>");
document.write("Puntos jugador: ");
document.write(jugador.puntos);


function Equipo(nombre, victorias, derrotas, tipo){
    this.nombre;
    this.victorias;
    this.derrotas;
    this.tipo;
    this.jugadores = [];
    
    
    this.addJugador = function (jugador){
    this.jugadores[jugador.nickname]=jugador;

        this.jugadores.push(jugador);
   
    };
    
    this.getJugador = function (nickname){
        return this.jugadores[nickname];
    };
    
    this.delJugador = function(nickname){
        for(var i=0;i< this.jugadores.length;i++){
            if(this.jugadores[i].nickname == nickname){
                this.jugadores.splice(i,1);
                i=this.jugadores.length;
            }
        }
    };
    
    this.getJugadorMaxPuntos = function(){
        var max = new Jugador();
        for(var key in this.jugadores){
            if(this.jugadores[key].puntos>max.puntos){
                max= this.jugadores[key];
            }
        }
        return max;
    };
    
//     this.borrarJugador2 = function($index){
//         this.jugadores.splice($index, 1);
//    };
};

function Jugador(nickname, nombre, funcion, puntos){
    this.nickname = nickname || "";
    this.nombre = nombre || "";
    this.funcion = funcion || "";
    this.puntos = puntos || 0;
    
    this.updateJugador = function(nombre,funcion,puntos){
    this.nombre= nombre || this.nombre;
    this.funcion=funcion || this.funcion;
    this.puntos = puntos || this.puntos;
    };
}

app.service("serv", function(){
    this.equipos = [];
    this.equipos.push(equipo);
    
    this.crearEquipo = function(nombre,victorias,derrotas,tipo){
        var e = new Equipo();
        e.nombre = nombre;
        e.victorias=victorias;
        e.derrotas=derrotas;
        e.tipo=tipo;
        this.equipos.push(e);
    };
    
    this.crearJugador = function(nickname, nombre, funcion, puntos, equipo){
        if(equipo == null || nickname == ""){
            console.log("no hay equipo");
        }else{
            
            var j = new Jugador(nickname, nombre, funcion, puntos);
            var i = false ;
            
            for(key in this.equipos[equipo].jugadores){
                if(this.equipos[equipo].jugadores[key].nickname == nickname){
                    j.updateJugador(nombre,funcion, puntos);
                    this.equipos[equipo].jugadores[key] = j;
                    i= true;
                }
            }
            if(!i){
                this.equipos[equipo].addJugador(j);
                console.log("jugador añadido");
            }
        }
    };
    
    this.borrarJugador = function(select,nickname){
        this.equipos[select].delJugador(nickname);
    };
    
  
    
});