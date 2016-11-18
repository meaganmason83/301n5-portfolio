'use strict';

var portfolios = [];

function Portfolio(name, url) {
  this.name = name;
  this.url = url;
  portfolios.push(this);
}

function makePortfolio() {
  new Portfolio('Campfire Coffee', 'https://meaganmason83.github.io/class_8_lab/');
  new Portfolio('Chocolate Pizza', 'https://meaganmason83.github.io/ChocoPizza/');
  new Portfolio('Bus Mall', 'https://meaganmason83.github.io/BusMall/');
  new Portfolio('Home Field Advantage', 'https://rtuts67.github.io/Final_Project_HFA_201n6/');
}
makePortfolio();
