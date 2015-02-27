var http=require("http"),
    fs = require("fs");
var mapData={"css":"text/css","js":"text/javascript","html":"text/html"};
function welcomeMsg(req,resp){
	var uri="." + req.url;
	if(req.url === "/") {
		fs.readFile("./index.html", function(err, data) {
			resp.writeHeader(200, {"Content-Type": "text/html"});
			resp.write(data);
			resp.end();
		});
	}else{
		var ext = uri.substr(uri.lastIndexOf(".")+1, uri.length);
		if(ext==="ico"){
			return;
		}
		fs.readFile(uri, function(err, data) {
			
			console.log("Extension: " + ext);
			console.log("DataType: " + mapData[ext]);

			resp.writeHeader(200, {"Content-Type": mapData[ext]});
			resp.write(data);
			resp.end();
		});
	}
}

http.createServer(welcomeMsg).listen(3040);