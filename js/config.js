angular.module('todo-app', ['ui.router', 'ui.sortable', 'ngStorage',
    'levelSelector', 'angular-md5'
])
    .config(function($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/tasks");
        //
        // Now set up the states
        $stateProvider
            .state('tasks', {
                url: "/tasks",
                templateUrl: "views/tasks.html",
                controller: "TasksCtrl"
            })
            .state('todos.list', {
                url: "/list",
                templateUrl: "views/state1.list.html",
                controller: function($scope) {
                    $scope.items = ["A", "List", "Of", "Items"];
                }
            })
            .state('state2', {
                url: "/state2",
                templateUrl: "views/state2.html"
            })
            .state('state2.list', {
                url: "/list",
                templateUrl: "views/state2.list.html",
                controller: function($scope) {
                    $scope.things = ["A", "Set", "Of", "Things"];
                }
            });

    });
