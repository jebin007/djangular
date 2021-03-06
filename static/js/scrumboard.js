(function() {
    'use strict';
    angular.module('scrumboard.demo', ['ngRoute'])
        .controller('ScrumboardController', ['$scope', '$http', ScrumboardController]);

    function ScrumboardController($scope, $http) {
        
        $scope.add = function (list, title) {
            var card = {
                list: list.id,
                title: title
            };
            $http.post('/scrumboard/cards/', card)
            .then(function(response){
                list.cards.push(response.data);
            },
            function(){
                alert('Could Not Create The Card!!');
            });
        };

        $scope.logout = function() {
            http.get('/auth_api/logout/')
                .then(function () {
                    $location.url('/login');
                });
        }

        $scope.data = [];
        $http.get('/scrumboard/lists/').then(function(response) {
            $scope.data = response.data;
        });

        $scope.sortBy='story_points';
        $scope.reverse=true;
        $scope.showFilters=false;
    }    

}());