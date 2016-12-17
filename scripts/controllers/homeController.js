'use strict';

(function(module) {
  var homeController = {};

  homeController.reveal = function() {
    $('#aboutme').hide();
    $('#myPortfolios').hide();
    $('#icons').hide();
  };

  module.homeController = homeController;
})(window);
