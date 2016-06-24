var express=require('express');
var router = express.Router();
var db = require('./level')('proj');
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/:proj',(req,res,next)=>{
	var proj=req.params.proj;
	var data=req.body;
	db.put(proj,data,(err)=>{
		if(err) {
			console.log(err);
			err.message='Not Found';
			err.error={};
			next(err);
			return;
		}
		else{
			res.send('success');
		}
	});
});

module.exports = router;
