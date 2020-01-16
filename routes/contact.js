var express = require('express');
//var nodemailer = require('nodemailer');

var router = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
  console.log("contact get");
});


// router.post('/', function (req, res) {

// 	var smtpConfig = {
// 	    host: 'smtp.gmail.com',
// 	    port: 465,
// 	    secure: true, // use SSL
// 	    auth: {
// 	        user: 'allansitemail@gmail.com',
// 	        pass: 'Fruit$alaD'
// 	    }
// 	};


// 	// create reusable transporter object using the default SMTP transport
// 	//var transporter = nodemailer.createTransport(smtpConfig);

// 	//var transporter = nodemailer.createTransport(transport);
// 	// setup e-mail data with unicode symbols
// 	// var mailOptions = {
// 	//     from: 'allansitemail@gmail.com', // sender address
// 	//     to: 'allanferenczmail@gmail.com', // list of receivers
// 	//     subject: 'Website contact form: ' + req.body.subject, // Subject line
// 	//     html: 'From:' + req.body.name + '  &lt;' + req.body.email + '&gt; <br/>' + req.body.message // html body
// 	// };

// 	// send mail with defined transport object
// 	// transporter.sendMail(mailOptions, function(error, info){
// 	//     if(error){
// 	//         return console.log(error);
// 	//         res.render('contact', { title: 'Contact', msg: 'Error occured, message not sent.'})
// 	//     }
// 	//     console.log('Message sent: ' + info.response);

// 	//     res.render('contact', { title: 'Contact', msg: 'Message sent! I will respond within 24-hours.'})

//  	// });
// });



module.exports = router;



