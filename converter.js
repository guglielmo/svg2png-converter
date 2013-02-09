var http = require('http'),
    url = require('url'),
    jsdom = require('jsdom'),
    qs = require('querystring'),
    child_proc = require('child_process');
 
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'image/png'});

  // get svg string passed in POST data
  if (req.method == 'POST') {
    var body = '';
    req.on('data', function(data) {
      body += data;
    });
    req.on('end', function() {
      var svgsrc = body;
      console.log('converting svg');
      convert.stdin.write(svgsrc);
      convert.stdin.end();
      console.log('done converting');
      console.log('');
    });
  }

  // function to convert from svg into png
  var convert = child_proc.spawn("convert", ["svg:", "png:-"]);
 
  convert.stdout.on('data', function (data) {
    res.write(data);
  });
  convert.on('exit', function(code) {
    res.end();
  });
 
}).listen(8888, "0.0.0.0");
 
console.log('SVG3PNG server running at http://thishost:8888/');
console.log('ex. curl -X POST -d @svgfile.svg http://thishost:8888/');
