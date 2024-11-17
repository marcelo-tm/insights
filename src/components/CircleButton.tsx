import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { cn } from "../utils/general";
import { SidebarTooltip } from "./Sidebar/SidebarTooltip";
import type { TooltipPosition } from "../types/general";

type CircleButtonProps = {
	icon: ReactNode;
	label?: string;
	path?: string;
	onClick?: () => void;
	className?: string;
	tooltipPosition?: TooltipPosition;
};

export function CircleButton({
	icon,
	label,
	path,
	onClick,
	className,
	tooltipPosition = "right",
}: CircleButtonProps) {
	if (path) {
		return (
			<Link to={path}>
				{({ isActive }) => (
					<div
						className={cn(
							"p-4 rounded-full bg-surface hover:bg-hover relative group transition-all duration-300 shadow-md",
							{
								"bg-primary-light text-white hover:bg-primary": isActive,
								className,
							}
						)}
					>
						{icon}
						{label && <SidebarTooltip text={label} isActive={isActive} />}
					</div>
				)}
			</Link>
		);
	}

	return (
		<button
			type="button"
			onClick={onClick}
			className={cn(
				"p-4 rounded-full bg-surface hover:bg-hover relative group transition-all duration-300 shadow-md",
				className
			)}
		>
			{icon}
			{label && (
				<SidebarTooltip text={label} tooltipPosition={tooltipPosition} />
			)}
		</button>
	);
}
