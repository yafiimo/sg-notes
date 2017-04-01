function MainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/todos',
      templateUrl: '/states/home.html'
    })
    .state('new', {
      url: '/todos/new',
      templateUrl: '/states/new.html'
    })
    .state('show', {
      url: 'todos/:id'
    })
    .state('edit', {
      url: '/todos/:id/edit',
      templateUrl: '/states/home.html'
    });


  $urlRouterProvider.otherwise('/todos');
}

angular
  .module('TodoApp', ['ui.router'])
  .constant('API_URL', 'http://localhost:3000')
  .config(MainRouter);
