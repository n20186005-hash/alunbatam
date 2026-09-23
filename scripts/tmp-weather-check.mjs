import { readFileSync } from 'node:fs';

const h = readFileSync('dist-static/en/index.html', 'utf8');
const start = h.indexOf('id="cuaca"');
const end = h.indexOf('id="fasilitas"');
const text = h
  .slice(start, end)
  .replace(/<[^>]+>/g, '\n')
  .split('\n')
  .map((line) => line.trim())
  .filter(Boolean)
  .join(' | ');
console.log(text.slice(0, 1500));
