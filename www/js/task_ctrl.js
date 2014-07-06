angular.module('todo-app')
    .controller('TasksCtrl', function($scope, TaskService, StorageService) {

        function getTimeOrder(tasks) {
            // later find the order of keys in taks
            var times = [undefined, "today", "tomorrow", "week", "month",
                "quarter", "year", "future"
            ];
            return times;
        }

        function mapTasks(tasks) {
            var grouped_tasks = _.groupBy(tasks, function(task) {
                return task.when;
            });
            var time_order = getTimeOrder(tasks);
            var sorted_tasks = _(time_order).map(function(time) {
                return {
                    name: time,
                    tasks: grouped_tasks[time] || []
                };
            });
            return sorted_tasks;
        }
        
        function mapBack(tasks) {
            _.map(tasks, function(taskList) {
                var tasks = _.map(taskList.tasks, function (task) {
                    task.when = taskList.name;
                    return task;
                });
                return tasks;
            });
        }

        $scope.mapTasks = function() {
            console.log(mapTasks($scope.tasks));
        };

        $scope.tasks = TaskService.tasks;

        $scope.newTask = function() {
            TaskService.add($scope.new_task);
            $scope.new_task = "";
        };

        $scope.deleteTask = function(task) {
            TaskService.removeTask(task.id);
        };

        $scope.completeTask = function(task) {
            TaskService.toggleComplete(task.id);
        };

        $scope.clear = function() {
            StorageService.clear();
        };

        $scope.log = function() {
            console.log($scope.tasks);
        };

        $scope.sortableOptions = {
            placeholder: ".task-list",
            connectWith: ".task-list",
            dropOnEmpty: true,
            axis: "y",
            cursor: "move",
            scroll: true,
            update: function(e, ui) {
                //TaskService.tasks = mapBack($scope.tasks);
            }
        };

    });
