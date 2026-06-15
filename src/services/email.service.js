const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL_USER,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error('Error connecting to email server:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

const sendEmail = async (to, subject, text, html) => {
  try {
    const info = await transporter.sendMail({
      from: `"Backend Ledger" <${process.env.EMAIL_USER}>`, 
      to, 
      subject, 
      text, 
      html, 
    });
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

async function sendRegistrationEmail(userEmail, name){
  const subject = 'Welcome to Backend Ledger!';
  const text = `Hello ${name}, \n\nThankyou for registering at Backend Ledger. \n\nBest Regards, \n The Backend Ledger's Team`;
  const html = `<p>Hello ${name}, </p><p>Thankyou for registering at Backend Ledger.</p><p>Best Regards, <br>The Backend Ledger's Team`;

  await sendEmail(userEmail, subject, text, html)
} 

module.exports = {
  sendRegistrationEmail
}