myApp.factory("taskFactory", function()
{
	var tasks = [
		{name: "Eat dinner", priority: "High", deadline: "2015-12-11", created_at: "2015-11-12"},
		{name: "Watch football", priority: "High", deadline: "2015-2-11", created_at: "2013-11-12"},
		{name: "Take black belt", priority: "Low", deadline: "2015-1-11", created_at: "2012-11-12"},
		{name: "Eat lunch", priority: "Normal", deadline: "2012-12-11", created_at: "2010-11-12"}
	];
	var factory = {};
	factory.getTasks = function()
	{
		return tasks;
	}
	factory.removeTask = function(task)
	{
		tasks.splice(tasks.indexOf(task), 1);
	}
	factory.addTask = function(newTask)
	{
		var today = new Date().toISOString().slice(0, 10);
		newTask.created_at = today;
		newTask.deadline = newTask.deadline.toISOString().slice(0, 10);
		tasks.push(newTask);
	}
	return factory;
})