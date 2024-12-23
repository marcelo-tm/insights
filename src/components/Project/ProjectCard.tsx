import { useMemo } from "react";
import { format } from "date-fns";

import type { Project, ProjectStatusList } from "../../types/project";
import { returnProjectStatusInfo } from "../../utils/projects";
import { cn } from "../../utils/general";
import { ProgressBar } from "../ProgressBar";
import { StatusLabel } from "../Content/StatusLabel";
import { AvatarGroup } from "../Content/AvatarGroup";

type ProjectCardProps = {
	project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
	const {
		color,
		icon: Icon,
		label,
	} = useMemo(
		() => returnProjectStatusInfo(project.status as ProjectStatusList),
		[project.status]
	);

	return (
		<div className="shadow-sm bg-surface rounded-xl p-4">
			<div className={cn("flex items-center justify-between pb-2")}>
				<p className="font-bold">{project.name}</p>
				<StatusLabel color={color} icon={Icon} label={label} />
			</div>

			<div className="flex items-center justify-between mb-2">
				<div>
					<small className="text-text-primary/70 text-xs">Progress</small>
					<p className="text-xl">{`${project.progress}%`}</p>
				</div>
				<div className="text-right">
					<small className="text-text-primary/70 text-xs">Expected date</small>
					<p className="text-lg">
						{format(new Date(project.expected_date), "MM/dd/yyyy")}
					</p>
				</div>
			</div>
			<ProgressBar progress={project.progress} progressColor={`bg-${color}`} />

			<div className="mt-2">
				<AvatarGroup names={project.owners} />
			</div>
		</div>
	);
}
