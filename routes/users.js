var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');



var url ='https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/';
var headers = {
    "X-Riot-Token": "RGAPI-e270dd5b-e3f6-4f3a-a9ff-cb7898e58b2c",
}



/* GET users listing. */
router.get('/:summoner',async (req, res, next)=> {
  var summoner = req.params.summoner;
 const fetchRes= await fetch(url+summoner, { method: 'GET', headers: headers});
 const jsonRes= await fetchRes.json();
 res.json(jsonRes)
});


module.exports = router;
