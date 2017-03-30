function FrisbeesController() {
  var controller = this;

  function init() {
    controller.imageClass = 'customClass';
    controller.imageWidth = '400px';
    controller.image1 = 'http://www.whenwasitinvented.org/wp-content/uploads/2011/12/Frisbee.jpg';
    controller.image2 = 'http://www.discace.com/frisbees/ultimate-frisbees/frisbees/frisbee-whamo-original.fw.png';
    controller.image3 = 'https://s-media-cache-ak0.pinimg.com/originals/10/80/d1/1080d11e325d5227befb96216e9fffd5.jpg';
  }
  init();

}

angular
  .module('simonsmithapp')
  .controller('FrisbeesController', FrisbeesController);
