

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { consoleLogs } = req.body;
      const subject = 'Liveinads userdetails information';
    const removeDuplicates = (arr) => {
        return arr.filter((obj, index, self) =>
          index === self.findIndex((o) => JSON.stringify(o) === JSON.stringify(obj))
        );
      };
      const uniqueConsoleLogs = removeDuplicates(consoleLogs);
      const body = JSON.stringify(uniqueConsoleLogs, null, 2);
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'srinivasareddybobba208@gmail.com',
            pass: 'cznj helw pwji hszt',
          },
        });

      console.log(body)
      const mailOptions = {
        from: 'srinivasareddybobba208@gmail.com',
        to: 'srinivas@adsgoat.in', 
        subject: subject,
        text: body,
      };
      
      await transporter.sendMail(mailOptions);

      console.log('Email sent successfully');
      res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}

  

