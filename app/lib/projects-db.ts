import { sql } from '@vercel/postgres';

// This interface defines the structure of a project object.
export interface Project {
  projectId: number;
  projectName: string;
  description: string;
  technologies: string[];
  url?: string;
}

// This function retrieves all projects from the database.
export async function getProjects(type?: string): Promise<Project[]> {
  if (type) {
    const { rows } = await sql<Project>`SELECT * FROM projects WHERE "type" = ${type} ORDER BY "projectId" DESC`;
    return rows;
  }
  const { rows } = await sql<Project>`SELECT * FROM projects ORDER BY "projectId" DESC`;
  return rows;
}
/**
 * Data returns as follows:
 * [
 * projectId: ID,
 * projectName: string,
 * description: string,
 * technologies: string[],
 * url: string
 * ]
 */

// This function gets a single project by its ID from the database.
export async function getProjectById(projectId: number): Promise<Project | null> {
  const { rows } = await sql<Project>`SELECT * FROM projects WHERE "projectId" = ${projectId}`;
  return rows[0] || null;
}
/**
 * Data returns as follows:
 * [
 * projectId: ID,
 * projectName: string,
 * description: string,
 * technologies: string[],
 * url: string
 * ]
 */