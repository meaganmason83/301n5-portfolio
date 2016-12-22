'use strict';

(function(module) {

  var githubObj = {};

  githubObj.myRepos = [];

  githubObj.getRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/user/repos?type=owner',
      method: 'GET',
      headers: {
        'Authorization':'token ' + githubToken},
      success: function(data) {
        githubObj.myRepos = data;
        callback();
      }
    });
  };

  githubObj.withTheAttribute = function(myAttr) {
    return githubObj.myRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.githubObj = githubObj;
})(window);
