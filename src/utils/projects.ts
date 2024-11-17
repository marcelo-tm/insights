import { ClockAlert, FolderCheck, ThumbsUp, TriangleAlert } from "lucide-react";

import type { ProjectStatus, ProjectStatusList } from "../types/project";

export const PROJECT_STATUSES = {
	at_risk: {
		label: "At Risk",
		color: "error",
		icon: TriangleAlert,
	},
	on_track: {
		label: "On Track",
		color: "info",
		icon: ThumbsUp,
	},
	delayed: {
		label: "Delayed",
		color: "warning",
		icon: ClockAlert,
	},
	completed: {
		label: "Completed",
		color: "success",
		icon: FolderCheck,
	},
} as const;

export function returnProjectStatusInfo(
	status: ProjectStatusList
): ProjectStatus {
	return PROJECT_STATUSES[status];
}
