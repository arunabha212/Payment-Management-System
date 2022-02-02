
angular.module("bill", [])
    .filter("capitalisefirstletter", function () {
        return function (input) {
            return input.substring(0, 1).toUpperCase() + input.substring(1);
        }
    })
    .controller("billctrl", function ($scope, $http) {
        $http.get('https://arunabha212.github.io/JSON/bill.json')
            .success(function (response) {
                $scope.list = response.billitems;
                $scope.totalbill = function () {
                    var sum = 0;
                    for (var i = 0; i < $scope.list.length; i++) {
                        if ($scope.list[i].paymentstatus == 'pending') {
                            sum += ($scope.list[i].price * $scope.list[i].quantity);
                        }

                    }
                    return sum;

                };
            });
    });
