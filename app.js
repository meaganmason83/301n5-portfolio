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
  var $newArticle = $('article.template').clone();
  $newArticle.find('h1').text(this.title);
  $newArticle.find('#projCSS a').attr('href', this.url);
  $newArticle.find('#projCSS iframe').attr('src', this.iframe);
  $newArticle.find('p').text(this.language);
  $newArticle.find('.article-body').html(this.description);
  $newArticle.removeClass('template');
  return $newArticle;
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
  $('.main-nav').on('click', '.tab', function() {

    //   $('#myPortfolios').fadeIn(1000);
  });
  $('.main-nav .tab:first').click();
};

portfolioView.handleMainNav();
