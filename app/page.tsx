import ProjectList from "@/components/ProjectList";
const projects = [
  {
    title: "Wedding Gift App",
    description:
      "A full-stack React and Node.js app where users can help a new wedding couple plan their special day.",
    technologies: ["Node.js", "React", "TypeScript", "Express"],
    link: "https://github.com/helaman-Y-B/WeddingGift-",
  },
  {
    title: "Weather Application",
    description: "A React app that fetches and displays weather data.",
    technologies: ["React", "JavaScript", "CSS"],
    link: "https://github.com/your-username/project2",
  },
  {
    title: "Heritage Makers",
    description: "A Next.js web application for selling artisanal products.",
    technologies: ["Next.js", "CSS", "TypeScript", "Vercel", "PostgreSQL"],
    link: "https://github.com/helaman-Y-B/Heritage-Makers",
  },
  {
    title: "Share Hike",
    description:
      "A web application for sharing hiking experiences and trails. This project was focused only on the front-end.",
    technologies: ["HTML", "JavaScript", "CSS"],
    link: "https://github.com/helaman-Y-B/wdd231/tree/main/shareHike",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I'm a full-stack developer learning Next.js and React. Here are some
          of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}
