import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content');

export function getContent(filename) {
  const raw = fs.readFileSync(path.join(contentDir, filename), 'utf8');
  const { data } = matter(raw);
  return data;
}
