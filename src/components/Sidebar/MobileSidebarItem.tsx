import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "../../utils/general";

type MobileSidebarItem = {
	label: string;
	icon: ReactNode;
	path: string;
	onClick: () => void;
};

export function MobileSidebarItem({
	label,
	icon,
	path,
	onClick,
}: MobileSidebarItem) {
	function handleItemClick() {
		setTimeout(() => onClick(), 300);
	}

	return (
		<Link to={path} onClick={handleItemClick}>
			{({ isActive }) => (
				<div
					className={cn(
						"flex items-center gap-2 p-4 rounded-lg transition-all duration-300",
						{
							"bg-primary-light/90 text-white": isActive,
						}
					)}
				>
					{icon}
					{label}
				</div>
			)}
		</Link>
	);
}
