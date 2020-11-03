import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

export const getProjects = () => {
  const projectsDirectory = path.join(process.cwd(), 'projects');
  const fileNames = fs.readdirSync(projectsDirectory);
  const projects = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return { id, data };
  });
  return projects;
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET': {
      const projectData = getProjects();
      res.status(200);
      res.json(projectData);
      break;
    }
    default: {
      res.status(405).end();
    }
  }
};
