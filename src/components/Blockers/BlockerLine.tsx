import { useMemo } from "react";
import { format } from "date-fns";

import { cn, getIconColor } from "../../utils/general";
import { Clock } from "lucide-react";
import { Tooltip } from "../Tooltip";
import { StatusLabel } from "../Content/StatusLabel";
import { AvatarGroup } from "../Content/AvatarGroup";
import type { Blocker, BlockerLevelsList } from "../../types/blocker";
import { returnBlockerLevelInfo } from "../../utils/blockers";

type BlockerLineProps = {
	blocker: Blocker;
};

export function BLockerLine({ blocker }: BlockerLineProps) {
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
			className={cn(
				"shadow-sm bg-surface rounded-xl col-span-full relative border-l-8 flex items-center justify-between p-4",
				{
					"border-error": color === "error",
					"border-warning": color === "warning",
					"border-info": color === "info",
				}
			)}
		>
			<div className="flex items-center gap-8">
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

				<div>
					<small className="text-text-primary/70 text-xs">
						Blocked Item/Person
					</small>
					<p>{blocker.blocked}</p>
				</div>

				<div>
					<small className="text-text-primary/70 text-xs">Blocked by</small>
					<p>{blocker.blocked_by}</p>
				</div>

				<div>
					<small className="text-text-primary/70 text-xs">
						Reason for Block
					</small>
					<p>{blocker.reason}</p>
				</div>
			</div>

			{/* <div className="flex items-center gap-4">
					<div className="flex items-center gap-1 group relative cursor-default">
						<Clock size={20} />
						<span>{format(new Date(project.expected_date), "MM/dd/yyyy")}</span>

						<Tooltip
							text="Expected completion date"
							position="bottom"
							baseClass="text-xs bg-surface p-1 shadow-md font-normal rounded-md"
						/>
					</div>
					<AvatarGroup names={project.owners} />
				</div> */}

			<AvatarGroup names={[blocker.owner]} />
		</div>
	);
}
