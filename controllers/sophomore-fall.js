var app = angular.module('sophomoreFall', []);
app.controller('sFallCtrl', function($scope) {
    $scope.saved = JSON.parse(localStorage.getItem('sophFalltodoList'));
    $scope.todoList = [{todoText:'Meet with your school counselor about your college plans. ' +
    'Review your course schedule to make sure you are enrolled in challenging courses that will help ' +
    'you prepare for college. Many colleges prefer four years of English, history, math, science and a foreign language.', done:false},
        {todoText:'Find out about the courses and tests required by the colleges that you might be interested in attending', done:false},
        {todoText:'Study hard and keep up your grades in all courses', done:false},
        {todoText:'Get Involved in a few extracurricular activities. Long-term involvement in a couple of areas such as sport and community' +
        '/career-related activity is more valuable than participating briefly in a number of activities. Look for' +
        'leadership roles.', done:false},
        {todoText:'Evaluate your personality, interests and skills. Then explore career opportunities that might match your interests', done:false},
        {todoText:'Talk to friends or relatives who are home from college for the holidays to learn about their college experiences', done:false},
        {todoText:'Attend a college fair in your area and chat with college representatives.', done:false},
        {todoText:'Set up a separate email account specifically for your college search. Remember to check it for periodic' +
        'updates.', done:false}];



    $scope.remove = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);
        });
    };
    $scope.save = function () {
        if($scope.saved===null){
            localStorage.setItem('sophFalltodoList',JSON.stringify($scope.todoList));
        }
        else{
            localStorage.setItem('sophFalltodoList',JSON.stringify($scope.saved));
        }
        console.log($scope.saved);
    };
    $scope.checkboxClick = function (x) {
        x.done = (!x.done);
    };
    $scope.openNav= function () {
        document.getElementById("mySidenav").style.width = "250px";
    };

    /* Set the width of the side navigation to 0 */
    $scope.closeNav = function() {
        document.getElementById("mySidenav").style.width = "0";
    }
});