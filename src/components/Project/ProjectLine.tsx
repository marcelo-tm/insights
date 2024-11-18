import { useMemo } from "react";
import { format } from "date-fns";

import type { Project, ProjectStatusList } from "../../types/project";
import { returnProjectStatusInfo } from "../../utils/projects";
import { cn } from "../../utils/general";
import { Clock } from "lucide-react";
import { Tooltip } from "../Tooltip";
import { StatusLabel } from "../Content/StatusLabel";
import { AvatarGroup } from "../Content/AvatarGroup";

type ProjectLineProps = {
	project: Project;
};

export function ProjectLine({ project }: ProjectLineProps) {
	const {
		color,
		icon: Icon,
		label,
	} = useMemo(
		() => returnProjectStatusInfo(project.status as ProjectStatusList),
		[project.status]
	);

	return (
		<div className="shadow-sm bg-surface rounded-xl col-span-full relative">
			<div className="flex items-center p-4 justify-between relative z-10">
				<div className="flex items-center gap-4">
					<StatusLabel color={color} icon={Icon} label={label} />{" "}
					<p className="font-bold">{project.name} </p>
					<p>{`${project.progress}% completed`}</p>
				</div>

				<div className="flex items-center gap-4">
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
				</div>
			</div>
			<div
				className={cn("absolute w-32 h-2 rounded-xl top-0", {
					"bg-error/40": color === "error",
					"bg-warning/40": color === "warning",
					"bg-success/40": color === "success",
					"bg-info/40": color === "info",
				})}
				style={{ width: `${project.progress}%` }}
			/>
		</div>
	);
}
