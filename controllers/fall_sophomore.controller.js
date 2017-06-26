'use strict';


angular.module('FallSophModule').controller('SophFallController',function () {

    var vm = this;
    vm.appTitle = "College Checklist App";
    vm.appHeadline = "This one will save to local storage!";
    vm.saved = localStorage.getItem('todos');
    vm.todos = (localStorage.getItem('todos')!==null) ? JSON.parse(vm.saved) : [


        {text: 'with your school counselor about your college plans. Review your course schedule.', done: false},
        {text: ' about the courses', done: false} ];
    localStorage.setItem('todos', JSON.stringify(vm.todos));

    vm.addTodo = function() {
        vm.todos.push({
            text: vm.todoText,
            done: false
        });
        vm.todoText = ''; //clear the input after adding
        localStorage.setItem('todos', JSON.stringify(vm.todos));
    };

    vm.remaining = function() {
        var count = 0;
        angular.forEach(vm.todos, function(todo){
            count+= todo.done ? 0 : 1;
        });
        return count;
    };

    vm.archive = function() {
        var oldTodos = vm.todos;
        vm.todos = [];
        angular.forEach(oldTodos, function(todo){
            if (!todo.done)
                vm.todos.push(todo);
        });
        localStorage.setItem('todos', JSON.stringify(vm.todos));
    };
})
