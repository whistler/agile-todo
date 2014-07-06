angular.module('todo-app')
    .service('StorageService', function($localStorage, $sessionStorage) {

        this.clear = function() {

            var defaultTasks = [{
                name: "",
                tasks: [
                    {   
                        id: 1,
                        description: 'do something',
                        completed: false
                    },
                    {
                        id: 2,
                        description: 'something finished',
                        completed: true
                    }
                ],
            },{
                name:"today",
                tasks: [
                    {    
                        id: 3,
                        description: 'do something',
                        completed: false
                    },
                    {
                        id: 4,
                        description: 'something finished',
                        completed: true
                    }
                ]
            },{
                name: "tomorrow",
                tasks: [
                    {    
                        id: 5,
                        description: 'do something',
                        completed: false
                    },
                    {
                        id: 6,
                        description: 'something finished',
                        completed: true
                    }
                ]   
            }];

            $localStorage.tasks = defaultTasks;
        };

        this.save = function(tasks) {
            $localStorage.tasks = tasks;
        };

        this.load = function() {
            return $localStorage.tasks;
        };

    });
