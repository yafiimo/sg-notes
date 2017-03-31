## create directory structure
``` shell
bower init
```

``` shell
bower install --save angular
```

## set up index.html
## include angular in scripts from bower
## include app.js in script
## make a controllers directory with home.controller.js

``` javascript
// In app.js:

angular.module('myFirstApp', []);
/*creates an app myFirstApp, looks in the DOM for ng-app */
```
## include ng-app="myFirstApp" to html tag

``` javascript
// In home.controller.js:
function HomeController() {
  var controller = this;
}

angular
  .module('myFirstApp', [])
  .controller('HomeController', HomeController);

  /* Registers a  myFirstApp, looks in the DOM for ng-app */
  
  // .controller second parameter is the name of the function as given in its declaration
```
## include home.controller.js in script
