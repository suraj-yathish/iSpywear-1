var fs = require('fs');


module.exports = function(app) {


app.get('/',function(req,res){
	res.end("Node-File-Upload");

});
app.post('/upload', function(req, res) {
	console.log(req.files.image.originalFilename);
	console.log(req.files.image.path);
		fs.readFile(req.files.image.path, function (err, data){
		var dirname = "/Users/jianghe/Desktop/Mobile/iSpyWear2/MicrosoftBand/file-upload";
		var newPath = dirname + "/uploads/" + 	req.files.image.originalFilename;
		fs.writeFile(newPath, data, function (err) {
		if(err){
		res.json({'response':"Error"});
		}else {
		res.json({'response':"Saved"});
}
});
});
});


app.get('/uploads/:file', function (req, res){
		file = req.params.file;
		var dirname = "/Users/jianghe/Desktop/Mobile/iSpyWear2/MicrosoftBand/file-upload";
		var text = fs.readFileSync(dirname + "/uploads/" + file);
		res.writeHead(200, {'Content-Type': 'text/html' });
		res.end(text, 'binary');

});
};