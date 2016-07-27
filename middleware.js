var middleware={
	requestAuth:function(req,res,next){
		console.log('Middleware Route accessed');
		next();
	},
	logger:function(req,res,next){
		console.log('Request : ' + req.method + ' ' + req.originalUrl + ' at ' + new Date().toString());
		next();
	}
}

module.exports=middleware;

