var levelup = require('level');
var open={};
var db =(data)=>{ 
	if(open[data]!=undefined){
		return open[data];
	}
	else{
		open[data]=levelup('./db/'+data,{
			keyEncoding:'json',
			valueEncoding:'json'
		});
		return open[data];
	}
}
module.exports = db;
