var express = require('express');
var router = express.Router();
var db=require('./level')('user');
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
var session=require('./session');
var min=(a,b)=>{
	return (a<b)?a:b;
}
var level=['visitor','member','editor', 'project owner','administrator'];
router.use(session);

router.post('/login', function(req, res) {
	if(req.session.info!=undefined){
		return res.send(req.session.info.levl);
	}
	var pass=req.body.password;
	var usnm=req.body.username;
	db.get(usnm,(err,rep)=>{
		if(err) {
			res.send('failed');
			return;
		}
		if(pass!=rep.pass){
			res.send('failed');
		}
		else{
			res.session.info={};
			res.session.info=rep;
			return res.send(req.session.info.levl);
		}
	});
});

router.post('/reginister',function(req,res){
	if(req.session.info.levl!=undefined){
		return res.send('AreadyLoggedIn');
	}
	else{
		info.levln=0;
		info.levl=level[info.levln];
		info.usnm=(req.body.username);
		info.pass=req.body.pass;
		info.proj={};
		db.put(info.usnm,info);
		db.put(info.usnm,info);
		return res.send(info);
	}
});

router.post('/change',function(req,res){
	if(req.session.info==undefined||req.session.info.levln<3){
		rea.send('Promission Denied');
	}
	var info={};
	info.levln=req.body.levln;
	if(req.session.info.levln==3){
		info.levln=min(2,req.body.levln);
	}
	info.levl=level[info.levln];
	info.usnm=(req.body.username);
	info.pass=req.body.pass;
	info.proj={};
	db.put(info.usnm,info);
	return res.send(info);
});

router.get('')


module.exports = router;
