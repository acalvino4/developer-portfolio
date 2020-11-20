import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { email, name } = req.body;
  console.log(req.body);
  res.status(200).end();
};
