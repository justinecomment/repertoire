myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/', {
    controller: 'accueilCtrl',
    templateUrl: 'view/accueil.html'
  })
  .when('/contacts', {
    controller: 'contactsCtrl',
    templateUrl: 'view/contacts.html'
  })
  .when('/add', {
    controller:'addContactCtrl',
    templateUrl:'view/addContact.html'
  })
  .when('/edit',{
    controller: 'editContactCtrl',
    templateUrl: 'view/editContact.html'
  })
  .when('/categories',{
    controller: 'categoriesCtrl',
    templateUrl: 'view/categories.html'
  })
  .when('/add/categories',{
    controller: 'addCategoriesCtrl',
    templateUrl: 'view/addCategories.html'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);


