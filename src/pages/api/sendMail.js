


import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      first_name,
      last_name,
      email,
      phone,
      company,
      country,
      description,
    } = req.body;

    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'byfacct@gmail.com',
        pass: 'jlrn ziut rhsw pieu',
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    transporter.verify((error, success) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Server is ready to take our messages');
      }
    });

    const htmlContent = `
      <table cellspacing="0" style="border: 2px dashed #FB4314; width: 300px; height: 200px;">
        <tr><th>Name:</th><td>${first_name} ${last_name}</td></tr>
        <tr style="background-color: #e0e0e0;"><th>Email:</th><td>${email}</td></tr>
        <tr style="background-color: #e0e0e0;"><th>Mobile No:</th><td>${phone}</td></tr>
        <tr style="background-color: #e0e0e0;"><th>Company Name:</th><td>${company}</td></tr>
        <tr style="background-color: #e0e0e0;"><th>Country:</th><td>${country}</td></tr>
        <tr style="background-color: #e0e0e0;"><th>Additional Details:</th><td>${description}</td></tr>
      </table>`;

    const plainText = `
      Name: ${first_name} ${last_name},
      Email: ${email},
      Mobile No: ${phone},
      Company Name: ${company},
      Country: ${country},
      Additional Details: ${description}`;

    try {
      const fromMail = 'byfacct@gmail.com';
      let info = await transporter.sendMail({
        from: fromMail,
        to: 'naveen.konda@bigyellowfish.io',
        subject: 'Mail from Bigyellowfish website',
        html: htmlContent,
        text: plainText,
      });

      console.log('Message sent: %s', info.messageId);
      res.status(200).json({ html: htmlContent, text: plainText });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
