import { NextApiRequest, NextApiResponse } from 'next';
import transporter from 'lib/mailer';

export default async (req: NextApiRequest, res: NextApiResponse) => (
  new Promise((resolve, reject) => {
    switch (req.method) {
      case 'POST': {
        const { name, email, message } = req.body;
        const newEmail = {
          from: email,
          to: 'acalvino4@gmail.com',
          subject: `${name} via Portfolio`,
          text: message,
          replyTo: email
        };
        transporter.sendMail(newEmail, (err, info) => {
          if (err) {
            // eslint-disable-next-line no-console
            console.log(err);
            res.status(500).end();
            resolve();
          } else {
            res.status(200);
            res.json(req.body);
            resolve();
          }
        });
        break;
      }
      default: {
        res.status(405).end();
        resolve();
      }
    }
  })
);
