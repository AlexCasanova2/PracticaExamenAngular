var app = angular.module("angularExamenApp", []);
app.controller("controlangularExamen", ["$scope", "serv"
            , function ($scope, serv) {
                
                $scope.select;
                $scope.prueba = "pruebacontroller";
                //$scope.jugadores = serv.jugadores;
                $scope.equipos = serv.equipos;
                
                $scope.crearEquipo = function () {
                    serv.crearEquipo($scope.nombreEquipo, $scope.victoriasEquipo,
                            $scope.derrotasEquipo, $scope.tipoJuego);
                };
                
                $scope.crearJugador = function () {
                    serv.crearJugador($scope.nicknameJugador, $scope.nombreJugador, $scope.funcionJugador, $scope.puntosJugador, $scope.select);
                };
                
                $scope.borrar= function(select,nickname){
                 serv.borrarJugador(select,nickname);
                };

               $scope.valoresJugador = function($index, select){
                   var jugador = $scope.equipos[select].jugadores[$index];
                   $scope.nicknameJugador = jugador.nickname;
                   $scope.nombreJugador = jugador.nombre;
                   $scope.funcionJugador = jugador.funcion;
                   $scope.puntosJugador = jugador.puntos;
               };
               
               
            }]
        );
      