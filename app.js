'use strict';

var portfolios = [];

function Portfolio(title, url, language, description) {
  this.title = title;
  this.url = url;
  this.language = language;
  this.description = description;
}

// function makePortfolio() {
//   new Portfolio('Campfire Coffee', 'https://meaganmason83.github.io/class_8_lab/', 'HTML/CSS/JavaScript', 'Individual Project');
//   new Portfolio('Chocolate Pizza', 'https://meaganmason83.github.io/ChocoPizza/', 'HTML/CSS/JavaScript', 'Individual Project');
//   new Portfolio('Bus Mall', 'https://meaganmason83.github.io/BusMall/', 'HTML/CSS/JavaScript', 'Individual Project');
//   new Portfolio('Home Field Advantage', 'https://rtuts67.github.io/Final_Project_HFA_201n6/', 'HTML/CSS/JavaScript', 'Group Project');
// }
// makePortfolio();

Portfolio.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  $newArticle.find('h1').text(this.title);
  $newArticle.find('url', this.url);
  $newArticle.find('p').text(this.language);
  $newArticle.find('.article-body').html(this.description);
  $newArticle.removeClass('template');
  return $newArticle;
};

localData.forEach(function(theCurrentArticleObject) {
  portfolios.push(new Portfolio(theCurrentArticleObject));
});
portfolios.forEach(function(article) {
  $('#myPortfolios').append(article.toHtml());
});
