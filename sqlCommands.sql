
CREATE TABLE IF NOT EXISTS projects (
  "projectId" SERIAL PRIMARY KEY,
  "type" varchar(255) NOT NULL,
  "projectName" varchar(255) NOT NULL,
  "description" TEXT,
  "technologies" text[],
  "url" varchar(500) NOT NULL
);

INSERT INTO projects ("projectId", "type", "projectName", "description", "technologies", "url")
VALUES (
  112, 
  'Full-Stack',
  'Wedding Gift App', 
  'A full-stack React and Node.js app where users can help a new wedding couple plan their special day.', 
  ARRAY['React', 'Node.js', 'TypeScript', 'Express'], 
  'https://github.com/helaman-Y-B/WeddingGift-'
), (
  232, 
  'Front-End',
  'Weather Application', 
  'A React app that fetches and displays weather data.', 
  ARRAY['React', 'JavaScript', 'CSS'], 
  'https://github.com/your-username/project2'
), (
  333, 
  'Full-Stack',
  'Heritage Makers', 
  'A Next.js web application for selling artisanal products.', 
  ARRAY['Next.js', 'CSS', 'TypeScript', 'Vercel', 'PostgreSQL'], 
  'https://github.com/helaman-Y-B/Heritage-Makers'
), (
  432, 
  'Front-End',
  'Share Hike', 
  'A web application for sharing hiking experiences and trails. This project was focused only on the front-end.', 
  ARRAY['HTML', 'CSS', 'TypeScript'], 
  'https://github.com/helaman-Y-B/wdd231/tree/main/shareHike'
);


