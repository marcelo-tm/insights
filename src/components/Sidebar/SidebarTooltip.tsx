import type { TooltipPosition } from "../../types/general";
import { Tooltip } from "../Tooltip";

type SidebarTooltipProps = {
	text: string;
	isActive?: boolean;
	tooltipPosition?: TooltipPosition;
};

export function SidebarTooltip({
	text,
	isActive = false,
	tooltipPosition = "right",
}: SidebarTooltipProps) {
	return (
		<Tooltip
			text={text}
			isActive={isActive}
			position={tooltipPosition}
			baseClass="p-3 text-sm text-text-primary bg-surface rounded-xl shadow-lg"
			activeClass="bg-primary-light text-white"
		/>
	);
}
