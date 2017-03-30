function mainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state(
      'home', {
        url: '/',
        templateUrl: '../states/home.html'
      })
    .state(
      'cats', {
        url: '/cats',
        templateUrl: '../states/cats.html'
      })
    .state(
      'frisbee', {
        url: '/frisbee',
        templateUrl: '../states/frisbee.html'
      })
    .state(
      'trucks', {
        url: '/trucks',
        templateUrl: '../states/trucks.html'
      });


  $urlRouterProvider.otherwise('/');
}

angular
  .module('simonsmithapp', ['ui.router'])
  .config(mainRouter);
