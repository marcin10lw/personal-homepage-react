import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.post('/api/submit-form', async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.GMAIL_USER,
      subject: 'Personal homepage message',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.status(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
