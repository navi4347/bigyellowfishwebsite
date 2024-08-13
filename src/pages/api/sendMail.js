// pages/api/sendEmail.js
import nodemailer from "nodemailer";
import fs from "fs";

const loadConfig = (filePath) => {
  const config = {};
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const lines = fileContent.split("\n");
  lines.forEach((line) => {
    const [key, value] = line.split("=");
    if (key && value) {
      config[key.trim()] = value.trim();
    }
  });
  return config;
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      first_name,
      last_name,
      email,
      phone,
      company,
      country,
      description,
    } = req.body;
    const config = loadConfig("byfwebsiteenv");
    let transporter = nodemailer.createTransport({
      host: config.SMTP_HOST, // SMTP server address
      port: config.SMTP_PORT, // SMTP server port
      secure: config.SMTP_SECURE === "true", // Convert to boolean
      auth: {
        user: config.SMTP_USER, // SMTP username
        pass: config.SMTP_PASS, // SMTP password
      },
      tls: {
        rejectUnauthorized: false, // Add this to solve SSL issues
      },
    });
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take our messages");
      }
    });
    let htmlContent = `<table cellspacing="0" style="border: 2px dashed #FB4314; width: 300px; height: 200px;"> <tr> <th>Name:</th><td> ${
      first_name + " " + last_name
    } </td> </tr> <tr style="background-color: #e0e0e0;"> <th>Email:</th><td> ${email} </td> </tr> <tr style="background-color: #e0e0e0;"> <th>Mobile No:</th><td> ${phone} </td> </tr> <tr style="background-color: #e0e0e0;"> <th>Company Name:</th><td> ${company} </td> </tr> <tr style="background-color: #e0e0e0;"> <th>Country:</th><td> ${country} </td> </tr> <tr style="background-color: #e0e0e0;"> <th>Additional Details:</th><td> ${description} </td> </tr>';`;

    let plainText =
      "Name : " +
      first_name +
      " " +
      last_name +
      ", Email : " +
      email +
      ", Mobile No : " +
      phone +
      ", Company Name : " +
      company +
      ", Country : " +
      country +
      ", Additional Details : " +
      description;

    try {
      const fromMail = "support@bigyellowfish.io";
      let info = await transporter.sendMail({
        from: fromMail,
        to: 'contact@bigyellowfish.io',
        subject: "Mail from Bigyellowfish website", // Subject line
        html: htmlContent,
        text: plainText,
      });

      console.log("Message sent: %s", info.messageId);
      res.status(200).json({ html: htmlContent, text: plainText });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
