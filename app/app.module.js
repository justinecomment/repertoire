var myApp = angular.module('myApp', ['ngRoute', 'ngResource']);

myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/', {
    controller: 'MainCtrl',
    templateUrl: 'HTML/accueil.html'
  })
  .when('/contacts', {
    controller: 'contactCtrl',
    templateUrl: 'HTML/contacts.html'
  })
  .when('/add', {
    controller:'addCtrl',
    templateUrl:'HTML/contactAdd.html'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);


myApp.service('contactsService',function($http) {
  this.jsonContacts = function(){
    return $http.get('JSON/user.json').success(function(result){
        return result;
    })
  };
});

myApp.controller('MainCtrl',function ($scope, contactsService) {
  contactsService.jsonContacts().then(function(result){
    $scope.totalEmail = result.data.length;
  })
});

myApp.controller('contactCtrl', function($scope, $resource, $http, $templateCache) {  
  $scope.method = 'GET';
  $scope.url='http://localhost/~justinekociszewski/contacts.php';  
  $scope.fetch = function() {
      $scope.code = null;
      $scope.response = null;

      $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
      success(function(data, status) {
          $scope.data = data || "Request OK";
      }).
      error(function(data, status) {
          $scope.data = data || "Request failed";
      });
  };

  $scope.updateModel = function(method, url) {
      $scope.method = method;
      $scope.url = url;
  };
});

myApp.controller('addCtrl' ,function($scope, $location){
  $scope.validateForm = function(){
    if($scope.myAddForm.$valid == true){
      console.log('valid');   
      $location.path('/contacts');
    }
    else{
      console.log('non valid');
    }
  };
});
