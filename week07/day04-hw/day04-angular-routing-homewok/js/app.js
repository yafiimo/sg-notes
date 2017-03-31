function mainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('todos', {
      url: '/todos',
      templateUrl: '../states/home.html'
    })
    // New
    .state('new', {
      url: '/todos/new',
      templateUrl: '../states/new.html'
    });

  $urlRouterProvider.otherwise('/');
}

angular
  .module('angularstates', ['ui.router'])
  .config(mainRouter);
