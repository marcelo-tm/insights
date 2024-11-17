import type { FolderCheck } from "lucide-react";

export type Project = {
	id: number;
	name: string;
	progress: number;
	status: string;
	expected_date: string;
	owners: string[];
};

export type ProjectStatusList =
	| "on_track"
	| "delayed"
	| "at_risk"
	| "completed";

export type ProjectStatus = {
	label: string;
	color: string;
	icon: typeof FolderCheck;
};
