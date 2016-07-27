var express=require('express');
var app=express();
var middleware=require('./middleware');
var PORT=3000;

app.use(middleware.logger);

app.get('/',function(req,res){
	res.send('Hello Express!');
});

app.get('/about',middleware.requestAuth,function(req,res){
	res.send('About Us....');
});

app.use(express.static(__dirname+'/public'));

app.listen(PORT,function(){
	console.log('Server started on port : ' + PORT);
});

