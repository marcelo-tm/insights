import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "../utils/general";
import { Tooltip } from "./Tooltip";

type CircleButtonProps = {
	icon: ReactNode;
	label: string;
	path?: string;
	onClick?: () => void;
	className?: string;
};

export function CircleButton({
	icon,
	label,
	path,
	onClick,
	className,
}: CircleButtonProps) {
	if (path) {
		return (
			<Link to={path}>
				{({ isActive }) => (
					<div
						className={cn(
							"p-4 rounded-full bg-surface/50 hover:bg-hover relative group transition-all duration-300 shadow-md",
							{
								"bg-primary-light text-white hover:bg-primary": isActive,
								className,
							}
						)}
					>
						{icon}
						<Tooltip text={label} isActive={isActive} />
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
				"p-4 rounded-full bg-surface/50 hover:bg-hover shadow-md",
				className
			)}
		>
			{icon}
		</button>
	);
}
