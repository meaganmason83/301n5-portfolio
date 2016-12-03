'use strict';

function Portfolio(opts) {
  for (let keys in opts) {
    this[keys] = opts[keys];
  // this.title = opts.title;
  // this.url = opts.url;
  // this.iframe = opts.iframe;
  // this.language = opts.language;
  // this.description = opts.description;
  }
}

Portfolio.allPortfolios = [];

Portfolio.prototype.toHtml = function() {
  var htmlTemp = Handlebars.compile($('#handlebarsTemplate').html());
  $('#myPortfolios').append(htmlTemp(this));
};

//combining push and append
// Portfolio.loadAll = function(inputData) {
//   inputData.forEach(function(theCurrentArticleObject) {
//     Portfolio.allPortfolios.push(new Portfolio(theCurrentArticleObject));
//   }).forEach(function() {
//     $('#myPortfolios').append(Portfolio.allPortfolios.toHtml());
//   })
// };

Portfolio.fetchAll = function() {
  if (localStorage.localdata) {
    var localData = JSON.parse(localStorage.getItem('localdata'));
    Portfolio.loadAll(localData);
    portfolioView.handleMainNav();
  } else {
    $.getJSON('data/localdata.json', function(data) {
      localStorage.setItem('localdata', JSON.stringify(data));
      var localData = JSON.parse(localStorage.getItem('localdata'));
      Portfolio.loadAll(localData);
      portfolioView.handleMainNav();
    });
  }
};
// Portfolio.fetchAll();
