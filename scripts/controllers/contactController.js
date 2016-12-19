'use strict';

(function(module) {
  var contactController = {};

  contactController.reveal = function() {
    $('#aboutme').hide();
    $('#myPortfolios').hide();
    $('#icons').fadeIn(1000);
  };

  module.contactController = contactController;
})(window);
