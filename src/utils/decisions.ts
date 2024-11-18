import { CalendarClock, Code2, Users } from "lucide-react";

import type { DecisionType, DecisionTypesList } from "../types/decision";

export const DECISION_TYPES = {
	scheduling: {
		label: "Scheduling",
		color: "info",
		icon: CalendarClock,
	},
	resourcing: {
		label: "Resourcing",
		color: "info",
		icon: Users,
	},
	technical: {
		label: "Technical",
		color: "info",
		icon: Code2,
	},
} as const;

export function returnDecisionTypeInfo(type: DecisionTypesList): DecisionType {
	return DECISION_TYPES[type];
}
