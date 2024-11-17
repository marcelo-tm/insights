import type { FolderCheck } from "lucide-react";

export type Blocker = {
	id: number;
	blocked: string;
	blocked_by: number;
	reason: string;
	owner: string;
	level: string;
};

export type BlockerLevelsList = "low" | "medium" | "high";

export type BlockerLevel = {
	label: string;
	color: string;
	icon: typeof FolderCheck;
};

export type BlockerFilterParams = {
	level?: string[];
};
