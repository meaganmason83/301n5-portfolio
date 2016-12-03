'use strict';

var portfolioView = {};

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
Portfolio.fetchAll();
