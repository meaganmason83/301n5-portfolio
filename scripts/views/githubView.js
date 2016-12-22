'use strict';

(function(module) {

  var githubView = {};

  var guthubCompiler = Handlebars.compile($('#repo-template').html());

  githubView.renderAll = function() {
    $('#aboutme ul').empty().append(
      githubObj.withTheAttribute('name')
      .map(guthubCompiler)
    );
  };

  githubObj.getRepos(githubView.renderAll);

  module.githubView = githubView;
})(window);
