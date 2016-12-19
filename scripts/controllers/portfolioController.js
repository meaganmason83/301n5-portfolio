'use strict';

(function(module) {
  var portfolioController = {};

  portfolioController.reveal = function() {
    $('#aboutme').hide();
    $('#icons').hide();
    $('#myPortfolios').fadeIn(1000);
  };

  module.portfolioController = portfolioController;
})(window);
