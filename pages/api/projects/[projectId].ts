import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

export const getProject = (id?: string) => {
  if (id) {
    const projectFile = `${path.join(process.cwd(), 'projects', id)}.md`;
    if (fs.existsSync(projectFile)) {
      const fileContents = fs.readFileSync(projectFile, 'utf8');
      const { data, content } = matter(fileContents);
      return { id, data, content };
    }
  }
  return undefined;
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { projectId } = req.query;
  if (typeof projectId === 'string') {
    switch (req.method) {
      case 'GET': {
        const project = getProject(projectId);
        if (project) {
          res.status(200);
          res.json(project);
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
