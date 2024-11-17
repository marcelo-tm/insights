import { Clock, FolderCheck, ThumbsUp, TriangleAlert } from "lucide-react";
import type { ProjectStatus, ProjectStatusList } from "../types/project";

const projectStatuses = {
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
		icon: Clock,
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
	return projectStatuses[status];
}
