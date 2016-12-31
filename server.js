'use strict';

var express = require('express'),
  port = process.env.PORT || 3000,
  app = express(),
  requestProxy = require('express-request-proxy');

app.use(express.static('./'));

app.get('/github/*', function(request, response) {
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`
    }
  }))(request, response)
})

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', {root: '.'});
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
