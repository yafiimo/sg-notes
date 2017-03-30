function TrucksController() {
  var controller = this;

  function init() {
    controller.imageClass = 'customClass';
    controller.imageHeight = '400px';
    controller.imageWidth = '400px';
    controller.image1 = 'https://www.autoevolution.com/images/news/monster-truck-icon-bigfoot-8778_1.jpg';
    controller.image2 = 'http://www.alternative-energy-news.info/wp-content/uploads/2015/03/bigfoot-electric-monster-truck.jpg';
    controller.image3 = 'http://thenewswheel.com/wp-content/uploads/2016/01/Monster-Jam-Show-in-Dayton-El-Toro-Loco-truck-history-760x508.jpg';
  }
  init();

}

angular
  .module('simonsmithapp')
  .controller('TrucksController', TrucksController);
