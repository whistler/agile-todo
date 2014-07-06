angular.module('todo-app').service('TaskService', function(StorageService, md5) {

    this.tasks = StorageService.load();
    _this = this;

    function generateID(task) {
        var time = (new Date).getTime();
        return md5.createHash(task.description + time);
    }
    
    function findTaskAndList(task_id) {
        var found = {}
        _.each(_this.tasks, function(task_list) {
            _.each(task_list.tasks, function(task) {
                if (task.id == task_id) {
                    found = {task: task, task_list: task_list};
                }
            });
        });
        return found;
    }
    
    function findTaskList(task_list_name) {
        return _.find(_this.tasks, function(task_list){
            return task_list.name == task_list_name;
        })
    }

    this.add = function(description, points, list) {
        if (isNaN(points)) points = 2;
        if (list === undefined) list = "";
        var new_task = {
            description: description,
            points: 2,
            completed: false
        };
        new_task.id = generateID(new_task);
        var task_list = findTaskList(list);
        task_list.tasks.push(new_task);
        return new_task.id;
    };

    this.toggleComplete = function(task_id) {
        var task = findTaskAndList(task_id);
        task.task.completed = !task.task.completed;
    };

    this.removeTask = function(task_id) {
        var result = findTaskAndList(task_id);
        var index = _.indexOf(_.pluck(result.task_list.tasks, "id"),task_id);
        result.task_list.tasks.splice(index, 1);
    };

});
