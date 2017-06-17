var myHttp = require('http');
var myUrl = require('url');

var serverCreation = new myHttp.Server(function(req, res) {
	
	console.log(req.method, req.url);
	
	var adress = myUrl.parse(req.url);
	console.log(adress);
	console.log(req.headers);


	if (adress.path == '/page1') {
		res.setHeader("Cache-Control", "no-cache");
		res.end(adress.path);
	} else {
		res.statusCode = 404;
		res.end("Page not found, type page1");
	}
});

serverCreation.listen(1337, '127.0.0.1'); //http://127.0.0.1:1337/