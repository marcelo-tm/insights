import type { Blocker, BlockerFilterParams } from "../types/blockers";
import type { Project, ProjectFilterParams } from "../types/project";
import type { Scope } from "../types/scope";

export const api = {
	getProjects: async (params?: ProjectFilterParams): Promise<Project[]> => {
		const response = await fetch("/data/projects.json");
		const projects = await response.json();

		return projects.filter((project: Project) => {
			let matches = true;

			if (params?.status && params.status.length > 0) {
				matches = matches && params.status.includes(project.status);
			}

			return matches;
		});
	},

	getBlockers: async (params?: BlockerFilterParams): Promise<Blocker[]> => {
		const response = await fetch("/data/blockers.json");
		const blockers = await response.json();

		return blockers.filter((blocker: Blocker) => {
			let matches = true;

			if (params?.level && params.level.length > 0) {
				matches = matches && params.level.includes(blocker.level);
			}

			return matches;
		});
	},

	getScopes: async (): Promise<Scope[]> => {
		const response = await fetch("/data/scope.json");
		return response.json();
	},
};
