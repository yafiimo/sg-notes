console.log('index.js');

var say = require('say');
// require looks in the node_modules directory for a module called say
// if you delete the module say, you can simply just type 'npm install' in the shell
// and it installs everything in the package.json dependencies

say.speak('Hello World!');
