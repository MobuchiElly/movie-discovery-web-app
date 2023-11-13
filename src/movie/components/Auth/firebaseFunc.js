const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

exports.processSubscription = functions.auth.user().onCreate(async (user) => {
  const email = user.email;

  if (email && isValidEmail(email)) {
    await sendWelcomeEmail(email);
  }

  return null;
});

function isValidEmail(email) {
  // Add your email validation logic here
  // You can use a library like 'validator' or a regex to validate the email format
  return true;
}

async function sendWelcomeEmail(email) {
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "buchidev@outlook.com",
      pass: "buchiamy?123",
    },
  });

  const mailOptions = {
    from: "buchidev@outlook.com",
    to: email,
    subject: "Welcome to Movie Discovery!",
    text: "Thanks for subscribing. You will be informed about the latest movies and events.",
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully to ${email}`);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}