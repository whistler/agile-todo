angular.module('todo-app', ['ui.router', 'ui.sortable', 'ngStorage',
    'levelSelector', 'angular-md5', 'hoodie'
])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "views/home.html",
                controller: "HomeCtrl",
                onEnter: function($state, hoodie) {
                    if (hoodie.account.username !== undefined) {
                        $state.transitionTo('tasks');
                    }
                }
            })
            .state('tasks', {
                url: "/tasks",
                templateUrl: "views/tasks.html",
                controller: "TasksCtrl",
                onEnter: function($state, hoodie) {
                    if (hoodie.account.username === undefined) {
                        $state.transitionTo('home');
                    }
                }
            });

    });
