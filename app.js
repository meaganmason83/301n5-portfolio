'use strict';

var portfolios = [];

var portfolioView = {};

function Portfolio(opts) {
  this.title = opts.title;
  this.url = opts.url;
  this.iframe = opts.iframe;
  this.language = opts.language;
  this.description = opts.description;
}

Portfolio.prototype.toHtml = function() {
  var htmlTemp = Handlebars.compile($('#handlebarsTemplate').html());
  $('#myPortfolios').append(htmlTemp(this));
};

localData.forEach(function(theCurrentArticleObject) {
  portfolios.push(new Portfolio(theCurrentArticleObject));
});
portfolios.forEach(function(portfolio) {
  $('#myPortfolios').append(portfolio.toHtml());
});

portfolioView.handleMainNav = function () {
  $('#icons').hide();
  $('#myPortfolios').hide();
  $('#aboutme').hide();
  $('.main-nav').on('click', '.tab', function() {
    if ($(this).data('navbar') === 'portfolio') {
      $('#myPortfolios').fadeIn(1000);
      $('#icons').hide();
      $('#aboutme').hide();
    } else if ($(this).data('navbar') === 'contact') {
      $('#icons').fadeIn(1000);
      $('#aboutme').hide();
      $('#myPortfolios').hide();
    } else if ($(this).data('navbar') === 'about') {
      $('#aboutme').fadeIn(1000);
      $('#icons').hide();
      $('#myPortfolios').hide();
    }
  });
  $('.main-nav .tab:first').click();
};

portfolioView.handleMainNav();
