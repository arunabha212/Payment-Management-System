//https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js
angular.module("bill",[])

.controller("billctrl",function($scope,$http)
{
    $http.get('')
    .success(function(response)
    {
        $scope.list=response.bill-items;
    })
})
