import { Circle, CircleAlert, CircleMinus } from "lucide-react";

import type { BlockerLevel, BlockerLevelsList } from "../types/blocker";

export const BLOCKER_LEVELS = {
	low: {
		label: "Low",
		color: "info",
		icon: Circle,
	},
	medium: {
		label: "Medium",
		color: "warning",
		icon: CircleMinus,
	},
	high: {
		label: "High",
		color: "error",
		icon: CircleAlert,
	},
} as const;

export function returnBlockerLevelInfo(level: BlockerLevelsList): BlockerLevel {
	return BLOCKER_LEVELS[level];
}
