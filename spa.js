angular.module('app',['ngRoute'])
.config(function($routeProvider)
{
    $routeProvider.when('/',
    {
        templateUrl:'index.html',
        
    }).when('/about',
    {
        templateUrl:'about.html',
        controller:'aboutctrl'
    }).when('/login',
    {
        templateUrl:'login.html',
        controller:'loginctrl'
    }).when('/checkout',
    {
        templateUrl:'checkout.html',
        controller:'billctrl'
    }).when('/login/tab1',
    {
        templateUrl:'logintab1.html',
        controller:'logintab1ctrl'
    }).when('/paymentform',
    {
        templateUrl:'paymentform.html',
        
    }).when('/login/:tab2',
    {
        templateUrl:'login.html',
        controller:'logintab2ctrl'
    })
})
.controller('myctrl',function()
{

})
.controller('aboutctrl',function()
{

})
.controller('loginctrl',function(){
    
})
.controller("logintab2ctrl",function($scope,$routeParams)
{
    if($routeParams.tab2)
        $scope.message="Login Page coming soon...!!!!"

})
.filter("capitalisefirstletter", function () {
    return function (input) { 
        return input.substring(0, 1).toUpperCase() + input.substring(1);
    }
})
.filter("showdate",function(){
    return function(input)
    {
        var arr= input.split("-")
        var month
        //console.log(arr)
        if(arr[1]=="01")
        month="Jan"
        else if (arr[1]=="02")
        month="Feb"
        else if (arr[1]=="03")
        month="Mar"
        else if (arr[1]=="04")
        month="Apr"
        else if (arr[1]=="05")
        month="May"
        else if (arr[1]=="06")
        month="Jun"
        else if (arr[1]=="07")
        month="Jul"
        else if (arr[1]=="08")
        month="Aug"
        else if (arr[1]=="09")
        month="Sep"
        else if (arr[1]=="10")
        month="Oct"
        else if (arr[1]=="11")
        month="Nov"
        else
        month="Dec"

        return arr[2]+'-'+month+'-'+arr[0];
    }
})
.controller("billctrl", function ($scope, $http) {
    $http.get('http://127.0.0.1:7100/getjson')//https://arunabha212.github.io/JSON/bill.json
        .success(function (response) {
            $scope.list = response;
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
