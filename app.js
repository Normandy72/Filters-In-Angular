(function(){
    'use strict';

    angular.module('FilterApp', [])
    .controller('FilterController', FilterController);

    FilterController.$inject = ['$scope', '$filter'];

    function FilterController($scope, $filter){
        $scope.name = 'Kate';
        $scope.stateOfBeing = 'hungry';
        $scope.cookieCost = .45;

        $scope.sayMessage = function(){
            var message = 'Kate likes to eat healthy snacks at night!';
            var output = $filter('uppercase')(message);
            return output;
        };

        $scope.feedYaakov = function(){
            $scope.stateOfBeing = 'fed';
        };
    };
})();