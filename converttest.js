/* converttest.js: Send a PNG of a red square to STDOUT
 * ex. node converttest.js > test.png
 */
var convert = require('child_process').spawn("convert", ["svg:", "png:-"]),
    svgsrc = '<svg><rect height="100" width="100" style="fill:red;"/></svg>';
convert.stdout.on('data', function (data) {
	process.stdout.write(data);
});
convert.stdin.write(svgsrc);
convert.stdin.end();
