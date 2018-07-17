


var app = angular.module('todo', []); 
app.controller('todocontrol', function($scope) {
    $scope.todoLista = [];

    $scope.check = function() {
        $scope.todoLista.push({todoText:$scope.todoTask, description:$scope.description});
        console.log($scope.todoLista);
        $scope.todoInput = "";
        
    };

    $scope.remove = function(){
            var List=[];
            angular.forEach($scope.todoLista,function(v){
            if(!v.done){
                List.push(v);
            }
        });    $scope.todoLista=List;
        };
});


