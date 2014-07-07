angular.module('todo-app').controller('HomeCtrl', function($scope, $state, hoodie) {

    $scope.signIn = function() {
        hoodie.account.signIn($scope.email, $scope.password);
        $state.go('tasks');
    };

    $scope.signUp = function() {
        hoodie.account.signUp($scope.email, $scope.password);
        $scope.signIn();
    };

});
