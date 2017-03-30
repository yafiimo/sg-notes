function CatsController() {
  var controller = this;

  function init() {
    controller.imageClass = 'customClass';
    controller.imageHeight = '400px';
    controller.imageWidth = '400px';
    controller.image1 = 'http://cdn77.sadanduseless.com/wp-content/uploads/2015/07/trump-cat8.jpg';
    controller.image2 = 'http://i.dailymail.co.uk/i/pix/2016/02/29/08/31AAB74000000578-0-Internet_pranksters_are_posting_pictures_of_their_cats_who_look_-a-6_1456735143689.jpg';
    controller.image3 = 'http://cdn77.sadanduseless.com/wp-content/uploads/2015/07/trump-cat1.jpg';
  }

  init();

}

angular
  .module('simonsmithapp')
  .controller('CatsController', CatsController);
