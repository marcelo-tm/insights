import { cn } from "../utils/general";
import type { TooltipPosition } from "../types/general";

type TooltipProps = {
	text: string;
	isActive?: boolean;
	position?: TooltipPosition;
	baseClass?: string;
	activeClass?: string;
};

export function Tooltip({
	text,
	isActive = false,
	position = "right",
	baseClass,
	activeClass,
}: TooltipProps) {
	const positionClasses: Record<TooltipPosition, string[]> = {
		top: [
			"bottom-full",
			"left-1/2",
			"-translate-x-1/2",
			"-translate-y-2",
			"mb-1",
		],
		bottom: [
			"top-full",
			"left-1/2",
			"-translate-x-1/2",
			"translate-y-2",
			"mt-1",
		],
		left: [
			"right-full",
			"top-1/2",
			"-translate-y-1/2",
			"-translate-x-2",
			"mr-1",
		],
		right: [
			"left-full",
			"top-1/2",
			"-translate-y-1/2",
			"translate-x-2",
			"ml-1",
		],
	};

	return (
		<div
			className={cn(
				"absolute invisible text-sm transition-all duration-300 opacity-0 whitespace-nowrap group-hover:visible group-hover:opacity-100",
				baseClass,
				positionClasses[position],
				isActive && activeClass
			)}
			style={{ zIndex: 40 }}
		>
			{text}
		</div>
	);
}
