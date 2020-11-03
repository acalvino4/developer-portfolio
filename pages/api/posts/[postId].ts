import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

export const getPost = (id?: string) => {
  if (id) {
    const postFile = `${path.join(process.cwd(), 'posts', id)}.md`;
    if (fs.existsSync(postFile)) {
      const fileContents = fs.readFileSync(postFile, 'utf8');
      const { data, content } = matter(fileContents);
      return { id, data, content };
    }
  }
  return undefined;
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { postId } = req.query;
  if (typeof postId === 'string') {
    switch (req.method) {
      case 'GET': {
        const post = getPost(postId);
        if (post) {
          res.status(200);
          res.json(post);
        } else {
          res.status(404).end();
        }
        break;
      }
      default: {
        res.status(405).end();
      }
    }
  } else {
    res.status(404).end();
  }
};
