import type { ReactNode } from "@tanstack/react-router";
import { List, SlidersHorizontal } from "lucide-react";

import { CircleButton } from "../CircleButton";
import useBreakpoint from "../../hooks/useBreakpoint";

export function Container({ children }: { children: ReactNode }) {
	const { isSmallScreen } = useBreakpoint();

	return (
		<div className="w-full p-2 shadow-md lg:p-4 bg-surface/40 rounded-2xl">
			<div className="flex mb-2 lg:mb-4 gap-4">
				{!isSmallScreen && (
					<CircleButton
						icon={<List />}
						label="List view"
						tooltipPosition="top"
					/>
				)}
				<CircleButton
					icon={<SlidersHorizontal />}
					label="Filters"
					tooltipPosition="top"
				/>
			</div>
			<div className="grid grid-cols-1 gap-2 lg:gap-4 md:grid-cols-2 lg:grid-cols-3">
				{children}
			</div>
		</div>
	);
}
