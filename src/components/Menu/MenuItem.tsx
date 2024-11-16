import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "../../utils/general";

type MenuItemProps = {
	label: string;
	icon?: ReactNode;
	path: string;
};

export function MenuItem({ label, icon, path }: MenuItemProps) {
	return (
		<Link to={path}>
			{({ isActive }: { isActive: boolean }) => (
				<div
					className={cn(
						"rounded-full flex gap-2 p-4 transition-all ease-in-out hover:bg-primary/20 hover:text-text-primary whitespace-nowrap",
						{
							"bg-primary text-white": isActive,
						}
					)}
				>
					{icon}
					<span>{label}</span>
				</div>
			)}
		</Link>
	);
}
