myApp.controller("taskController", function($scope, taskFactory)
{
	$scope.tasks_view = taskFactory.getTasks();
	$scope.removeTask = function(task)
	{
		taskFactory.removeTask(task);
	}
	$scope.addTask = function()
	{
		taskFactory.addTask($scope.newTask);
		$scope.newTask = {};
	}
})