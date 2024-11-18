import { useMemo } from "react";

import { cn, getIconColor } from "../../utils/general";
import type { Blocker, BlockerLevelsList } from "../../types/blockers";
import { returnBlockerLevelInfo } from "../../utils/blockers";
import { AvatarGroup } from "../Content/AvatarGroup";
import { Tooltip } from "../Tooltip";

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
		<div
			className={cn("shadow-sm bg-surface rounded-xl p-4 border-t-8", {
				"border-error": color === "error",
				"border-warning": color === "warning",
				"border-info": color === "info",
			})}
		>
			<div className={cn("flex items-center justify-between pb-2")}>
				<div>
					<small className="text-text-primary/70 text-xs">
						Blocked Item/Person
					</small>
					<p>{blocker.blocked}</p>
				</div>

				<div className="relative group">
					<Icon size={30} color={getIconColor(color)} />
					<Tooltip
						text={label}
						position="bottom"
						baseClass={cn(
							"text-xs bg-slate-200 p-1 shadow-md font-normal rounded-md text-white",
							{
								"bg-error": color === "error",
								"bg-warning": color === "warning",
								"bg-info": color === "info",
							}
						)}
					/>
				</div>
			</div>

			<div>
				<small className="text-text-primary/70 text-xs">Blocked by</small>
				<p>{blocker.blocked_by}</p>
			</div>

			<div>
				<small className="text-text-primary/70 text-xs">Reason for Block</small>
				<p>{blocker.reason}</p>
			</div>

			<div className="mt-2">
				<AvatarGroup names={[blocker.owner]} />
			</div>
		</div>
	);
}
