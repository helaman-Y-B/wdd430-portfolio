
CREATE TABLE IF NOT EXISTS projects (
  projectId SERIAL PRIMARY KEY,
  projectName varchar(255) NOT NULL,
  description TEXT,
  technologies text[],
  url varchar(500) NOT NULL
);

INSERT INTO projects (projectId, projectName, description, technologies, url)
VALUES (
  1, 
  'Wedding Gift App', 
  'A full-stack React and Node.js app where users can help a new wedding couple plan their special day.', 
  ARRAY['React', 'Node.js', 'TypeScript', 'Express'], 
  'https://github.com/helaman-Y-B/WeddingGift-'
);

INSERT INTO projects (projectId, projectName, description, technologies, url)
VALUES (
  2, 
  'Weather Application', 
  'A React app that fetches and displays weather data.', 
  ARRAY['React', 'JavaScript', 'CSS'], 
  'https://github.com/your-username/project2'
), (
  3, 
  'Heritage Makers', 
  'A Next.js web application for selling artisanal products.', 
  ARRAY['Next.js', 'CSS', 'TypeScript', 'Vercel', 'PostgreSQL'], 
  'https://github.com/helaman-Y-B/Heritage-Makers'
), (
  4, 
  'Share Hike', 
  'A web application for sharing hiking experiences and trails. This project was focused only on the front-end.', 
  ARRAY['HTML', 'CSS', 'TypeScript'], 
  'https://github.com/helaman-Y-B/wdd231/tree/main/shareHike'
);


