import type { Project } from "../types/project";

export const api = {
	getProjects: async (): Promise<Project[]> => {
		const response = await fetch("/data/projects.json");
		return response.json();
	},
};
