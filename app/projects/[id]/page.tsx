import { getProjectById } from "@/app/lib/projects-db";
import ProjectList from "@/components/ProjectList";
import MissingProjectId from "@/components/errors/MissingProjectId";

export default async function Projects({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // Get the project ID from the request parameters.
  const projectId = Number(id); // Converts the project ID from a string to a number.

  // Validate the project ID to ensure it is a valid integer. If not, return a 400 response with an error message.
  if (!Number.isInteger(projectId)) {
    return (
      <main className="container mx-auto px-4 py-12">
        <p className="text-red-500">Invalid project ID</p>
      </main>
    );
  }

  const project = await getProjectById(projectId);

  if (!project) {
    return (
      <main className="container mx-auto px-4 py-12">
        <MissingProjectId />
      </main>
    );
  }

  const projectCards =
    project && project.projectName
      ? [
          {
            title: project.projectName,
            description: project.description,
            technologies: project.technologies,
            link: project.url,
          },
        ]
      : [];

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mt-6 flex flex-col gap-6">
        <ProjectList projects={projectCards} />
      </div>
    </main>
  );
}
