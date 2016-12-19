'use strict';

(function(module) {

  function Portfolio(opts) {
    for (let keys in opts) {
      this[keys] = opts[keys];
    }
  }

  Portfolio.allPortfolios = [];

  Portfolio.prototype.toHtml = function() {
    var htmlTemp = Handlebars.compile($('#handlebarsTemplate').html());
    $('#myPortfolios').append(htmlTemp(this));
  };


  Portfolio.loadAll = function(inputData) {
    inputData.forEach(function(theCurrentArticleObject) {
      Portfolio.allPortfolios.push(new Portfolio(theCurrentArticleObject));
    })
  };


  Portfolio.fetchAll = function() {
    if (localStorage.localdata) {
      var localData = JSON.parse(localStorage.getItem('localdata'));
      Portfolio.loadAll(localData);
      Portfolio.renderAll(localData);
    } else {
      $.getJSON('data/localdata.json', function(data) {
        localStorage.setItem('localdata', JSON.stringify(data));
        var localData = JSON.parse(localStorage.getItem('localdata'));
        Portfolio.loadAll(localData);
        Portfolio.renderAll(localData);
      });
    }
  };

  module.Portfolio = Portfolio;
})(window);
