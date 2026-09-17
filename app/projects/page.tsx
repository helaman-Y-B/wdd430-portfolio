import { getProjects } from '../lib/projects-db';
import ProjectList from "@/components/ProjectList";

export default async function Projects() {

    const projects = await getProjects();
    const projectCards = projects.map(({ projectName, url, description, technologies }) => ({
        title: projectName,
        description,
        technologies,
        link: url,
    }));

    return (
        <main className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-4">Projects</h1>
            <p className="text-gray-600">Here are some of my projects:</p>
            <div className="mt-6 flex flex-col gap-6">
                <ProjectList projects={projectCards} />
            </div>
        </main>
    );
}