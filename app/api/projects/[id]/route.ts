import { getProjectById } from '@/app/lib/projects-db';

// This function handles GET requests to retrieve a single project by its ID from the database.
export async function GET( request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // Get the project ID from the request parameters.
  const projectId = Number(id);

  // Validate the project ID to ensure it is a valid integer. If not, return a 400 response with an error message.
  if (!Number.isInteger(projectId)) {
    return Response.json({ error: "Invalid project ID" }, { status: 400 });
  }

  const data = await getProjectById(projectId);

  // If no project is found with the given ID, return a 404 response with an error message.
  if (!data) {
    return Response.json(
      { error: "Project not found" },
      { status: 404 }
    );
  }

  // Return the retrieved project as a JSON response with appropriate headers.
  return Response.json(data);
}