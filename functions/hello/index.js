exports.handle = function(e, ctx, cb) { //Lambda handeler

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '', //enter sender email address 
    pass: '' //enter sender password
  }
});

var mailOptions = {
  from: '"Fred Foo ?" <foo@blurdybloop.com>', // reciever recieve email with this name
  to: '', //email addrees of reciever
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    cb(null, 'Email sent')

  }
});

}
