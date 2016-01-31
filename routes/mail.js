var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
/* GET users listing. */
router.post('/', function(req, res, next) {
    

    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport('smtps://ahmeds.xyz%40gmail.com:fejalkef1231cdsa@smtp.gmail.com');

    var content = ''+
        'Name: ' + req.body.name + '\n' +
        'Phone: ' + req.body.phone + '\n' +
        'Email: ' + req.body.email + '\n' +
        'Message: ' + req.body.message + '\n';
    
    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: 'Ahmeds.xyz 👥 <ahmeds.xyz@gmail.com>', // sender address
        to: 'syed.ahmed.anas@gmail.com', // list of receivers
        subject: 'New message from potential client', // Subject line
        text: content, // plaintext body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
            res.status(500).end();
        }
        res.status(200).end();
    });
});

module.exports = router;