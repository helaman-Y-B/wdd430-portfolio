import { getProjects } from '@/app/lib/projects-db';


// This function handles GET requests to retrieve all projects from the database.
export async function GET(request: Request) {
    const data = await getProjects();

    // If no projects are found, return a 404 response with an error message.
    if (!data) {
        return new Response(JSON.stringify({ error: 'No projects found' }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    // Return the retrieved projects as a JSON response with appropriate headers.
    return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' }
    });
}