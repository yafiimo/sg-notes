function TodoFactory(API_URL, $http) {
  return {
    getAll: function() {
      return $http({
        method: 'GET',
        url: `${API_URL}/todos`
      });
    }
  };
}

angular
  .module('TodoApp')
  .factory('TodoFactory', TodoFactory);
