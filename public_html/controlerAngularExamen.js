var app = angular.module("angularExamenApp", []);
app.controller("controlangularExamen", ["$scope", "serv"
            , function ($scope, serv) {

                $scope.prueba = "pruebacontroller";
//    $scope.jugadores = serv.jugadores;
                $scope.equipos = serv.equipos;
                $scope.crearEquipo = function () {
                    serv.crearEquipo($scope.nombreEquipo, $scope.victoriasEquipo,
                            $scope.derrotasEquipo, $scope.tipoJuego);

                };
                $scope.crearJugador = function () {
                    serv.crearJugador($scope.nicknameJugador, $scope.nombreJugador, $scope.funcionJugador, $scope.puntosJugador);

                };

            }]
        );
      