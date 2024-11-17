import type { ProjectStatus } from "../../types/project";
import { cn } from "../../utils/general";

export function StatusLabel({ color, icon: Icon, label }: ProjectStatus) {
	return (
		<div
			className={cn(
				"text-white text-sm p-2 px-3 rounded-lg flex gap-2 items-center whitespace-nowrap transition-all duration-300",
				{
					"bg-error": color === "error",
					"bg-warning": color === "warning",
					"bg-success": color === "success",
					"bg-info": color === "info",
				},
				color
			)}
		>
			{<Icon size={16} />}
			{label}
		</div>
	);
}
