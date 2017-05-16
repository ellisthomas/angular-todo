app.controller("ItemNewCtrl", function($http, $q, $scope, FIREBASE_CONFIG) {
     
    $scope.addNewItem = () => {
        $scope.newTask.isCompleted = false;
        postNewItem($scope.newTask).then((respone) => {
          $scope.newTask = {};
            //switch views
        }).catch((error) => {
            console.log("Add error", error);
        });
    };
});