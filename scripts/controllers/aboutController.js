'use strict';

(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    $('#myPortfolios').hide();
    $('#icons').hide();
    $('#aboutme').fadeIn(1000);
  };

  module.aboutController = aboutController;
})(window);
