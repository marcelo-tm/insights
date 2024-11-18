import { useMemo } from "react";
import { format } from "date-fns";

import type { Decision, DecisionTypesList } from "../../types/decision";
import { returnDecisionTypeInfo } from "../../utils/decisions";
import { Tooltip } from "../Tooltip";

type DecisionItemProps = {
	decision: Decision;
};

export function DecisionItem({ decision }: DecisionItemProps) {
	const { icon: Icon, label } = useMemo(
		() => returnDecisionTypeInfo(decision.type as DecisionTypesList),
		[decision.type]
	);

	return (
		<div className="flex gap-4">
			<div className="rounded-full p-3 bg-primary w-12 h-12 relative group">
				<Icon color="white" />
				<Tooltip
					text={label}
					position="bottom"
					baseClass="text-xs bg-primary text-white p-1 shadow-md font-normal rounded-md"
				/>
			</div>

			<div className="p-4 bg-background rounded-lg text-sm">
				<p className="text-sm">
					{format(new Date(decision.date), "MM/dd/yyyy")}
				</p>

				<p className="font-bold mb-2">{decision.description}</p>

				<div>
					<small className="text-text-primary/70 text-xs">
						Rationale for Addition
					</small>
					<p>{decision.rationale}</p>
				</div>

				<div className="mt-1">
					<small className="text-text-primary/70 text-xs">Added by</small>
					<p>{decision.by}</p>
				</div>
			</div>
		</div>
	);
}
