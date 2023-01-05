(function(){
    'use strict';

    angular.module('FilterApp', [])
    .controller('FilterController', FilterController);

    FilterController.$inject = ['$scope'];

    function FilterController($scope){
        $scope.name = 'Kate';
        $scope.stateOfBeing = 'hungry';

        $scope.sayMessage = function(){
            return 'Kate likes to eat healthy snacks at night!';
        };

        $scope.feedYaakov = function(){
            $scope.stateOfBeing = 'fed';
        };
    };
})();