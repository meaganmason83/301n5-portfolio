'use strict';

var portfolios = [];

function Portfolio(title, url, language, description) {
  this.title = title;
  this.url = url;
  this.language = language;
  this.description = description;
  portfolios.push(this);
}

function makePortfolio() {
  new Portfolio('Campfire Coffee', 'https://meaganmason83.github.io/class_8_lab/', 'HTML/CSS/JavaScript', 'Individual Project');
  new Portfolio('Chocolate Pizza', 'https://meaganmason83.github.io/ChocoPizza/', 'HTML/CSS/JavaScript', 'Individual Project');
  new Portfolio('Bus Mall', 'https://meaganmason83.github.io/BusMall/', 'HTML/CSS/JavaScript', 'Individual Project');
  new Portfolio('Home Field Advantage', 'https://rtuts67.github.io/Final_Project_HFA_201n6/', 'HTML/CSS/JavaScript', 'Group Project');
}
makePortfolio();

// Article.prototype.toHtml = function() {
//   var $newArticle = $('article.template').clone();
//   $newArticle.find('h1').text(this.name);
//   $newArticle.attr('data-category', this.url);
//   $newArticle.removeClass('template');
//   return $newArticle;
// };
//
// portfolios.forEach(function(Portfolio) {
//   $('#myPortfolios').append(article.toHtml());
// });
