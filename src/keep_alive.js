var http = require('https')

http.createServeur(function (req, res) {
  res.write("I'm alive");
  res.end();
}).listen(8080);
