var express=require('express');
var router = express.Router();
var db = require('./level')('proj');

var testrest={
	'id': 'testid',
	'version': '1.0.0',
	'brief': 'just a test app',
	'name': "Test App By THSCSLab",
	'datas':[
		{
			'lead': 'test lead1',
			'paras': [
				'testparas',
				'test para2',
			]
		},
		{
			'lead': 'test lead2',
			'paras': [
				'testparasasd',
				'test para2dsa',
			]
		},
	],
	'mems':[
		{
			'full': 'test leader',
			'name': 'Lead',
			'descs': ['a leader','project owner']
		},
		{
			'full': 'Xiao Ming',
			'name': 'ming',
			'descs': ['not a leader','code writer']
		},
		{
			'full': 'test man 3',
			'name': 'no name',
			'descs': ['soy sauce getter','project doer']
		},
	],
	'faqs': [
		{
			'Q': 'test question1',
			'A': 'no answer',
		},
		{
			'Q': 'test2',
			'A': 'wtf the answer is',
		}
	],
	'urls':[
		{
			'name': 'Githa',
			'text': 'Http://wikiquote.org/zh/???'
		},
		{
			'name': 'testname',
			'text': './'
		},
	]
};

router.get('/:proj', function(req, res, next) {
	var id=req.params.proj;
	if(id=='test') {
		res.render('proj',testrest);
		return;
			console.log(err);
			err.message='Not Found';
			err.error={};
			next(err);
			return;
		}
	rep.id=id;
	res.render('proj',rep);
});

module.exports = router;
