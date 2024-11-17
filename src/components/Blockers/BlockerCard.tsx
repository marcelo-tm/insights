import { useMemo } from "react";
import { format } from "date-fns";

import { cn } from "../../utils/general";
import { ProgressBar } from "../ProgressBar";
import { StatusLabel } from "../Content/StatusLabel";
import { AvatarGroup } from "../Content/AvatarGroup";
import type { Blocker, BlockerLevelsList } from "../../types/blockers";
import { returnBlockerLevelInfo } from "../../utils/blockers";

type BlockerCardProps = {
	blocker: Blocker;
};

export function BlockerCard({ blocker }: BlockerCardProps) {
	const {
		color,
		icon: Icon,
		label,
	} = useMemo(
		() => returnBlockerLevelInfo(blocker.level as BlockerLevelsList),
		[blocker.level]
	);

	return (
		<div className="shadow-sm bg-surface rounded-xl p-4">
			<div className={cn("flex items-center justify-end rounded-t-xl pb-4")}>
				{/* <p className="font-bold">{blocker.name}</p> */}
				<StatusLabel color={color} icon={Icon} label={label} />
			</div>

			{/* <div className="flex items-center justify-between mb-2">
				<div>
					<small className="text-text-primary/70 text-xs">Progress</small>
					<p className="text-xl">{`${blocker.progress}% completed`}</p>
				</div>
				<div className="text-right">
					<small className="text-text-primary/70 text-xs">
						Expected completion date
					</small>
					<p className="text-lg">
						{format(new Date(blocker.expected_date), "MM/dd/yyyy")}
					</p>
				</div>
			</div>
			<ProgressBar progress={blocker.progress} progressColor={`bg-${color}`} />

			<div className="mt-2">
				<AvatarGroup names={blocker.owners} />
			</div> */}
		</div>
	);
}
