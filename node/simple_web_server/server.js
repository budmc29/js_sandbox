var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');

var mimeTypes = {
  "html" : "text/html",
  "jpeg" : "image/jpeg",
  "jpg" : "image/jpeg",
  "png" : "image/png",
  "js" : "text/javascript",
  "css" : "text/css"
};

http.createServer(function(req, res) {
  var uri = url.parse(req.url).pathname;
  var fileName = path.join(process.cwd(), unescape(uri));
  console.log('Loading ' + uri);
  var stats;

  try {
    stats = fs.lstatSync(fileName);
  } catch(err) {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write('404 Not Found\n');
    res.end();
    return;
  }

  if (stats.isFile()) {
   var mimeType = mimeTypes[path.extname(fileName).split('.').reverse()[0]];
   res.writeHead(200, {'Content-Type': mimeType});

   var fileStream = fs.createReadStream(fileName);
   fileStream.pipe(res);
  } else if (stats.isDirectory()) {
   res.writeHead(302, {
     'location' : 'index.html'
   });
   res.end();
  } else {
    res.writeHead(500, {'Content-Type' : 'text/plain'});
    res.write('500 Internal Error\n');
    res.end();
  }
}).listen(3000);
