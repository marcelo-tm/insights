import type { FolderCheck } from "lucide-react";

export type Decision = {
	id: number;
	description: string;
	by: number;
	rationale: string;
	date: string;
	type: string;
};

export type DecisionTypesList = "scheduling" | "resourcing" | "technical";

export type DecisionType = {
	label: string;
	color: string;
	icon: typeof FolderCheck;
};

export type DecisionFilterParams = {
	type?: string[];
};
