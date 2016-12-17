'use strict';

(function(module) {

  var portfolioView = {};

  Portfolio.renderAll = function(inputData) {
    Portfolio.allPortfolios.forEach(function(allPortfolios) {
      $('#myPortfolios').append(allPortfolios.toHtml());
    })
  }

  Portfolio.fetchAll();

  module.portfolioView = portfolioView;
})(window);
