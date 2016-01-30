var express = require('express');
var router = express.Router();
var request = require('request');
/* GET users listing. */
router.get('/', function(req, res, next) {
    var url = '';
    if(req.query.website == 'wwc')
        url = 'http://worldwidecargoservices.co.uk';        
    else if(req.query.website == 'admin')
    {
        url = 'http://blackrockdigital.github.io/startbootstrap-sb-admin-2/pages/index.html';
    }
    else
    {
        url = '';
        res.send('Error');
        res.end();
        return;
    }
    request(url, function(error,response,html)
    {
        res.send(html);
        res.end();
    })
});

module.exports = router;
