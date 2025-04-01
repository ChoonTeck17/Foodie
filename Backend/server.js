require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const port = 5001;

// Debugging logs to verify environment variables
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS);

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Use environment variables for sensitive information
    pass: process.env.EMAIL_PASS, // Use environment variables for sensitive information
  },
});

app.post('/send-email', async (req, res) => {
  console.log('Incoming request:', req.body);

  const { email, subject, html } = req.body;
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email, // This will use whatever email is sent in the request body
    subject,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email.', error: error.message });
  }
});
app.listen(port, () => console.log(`Server running on port ${port}`));