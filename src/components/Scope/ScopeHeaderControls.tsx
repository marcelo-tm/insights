import { Grid2x2, List } from "lucide-react";

import useBreakpoint from "../../hooks/useBreakpoint";
import { CircleButton } from "../CircleButton";
import type { LayoutTypes } from "../../types/general";

type ContainerProps = {
	onLayoutChange: (layoutType: LayoutTypes) => void;
	layoutType: LayoutTypes;
};

export function ScopeHeaderControls({
	onLayoutChange,
	layoutType,
}: ContainerProps) {
	const { isSmallScreen } = useBreakpoint();

	return (
		<div className="flex mb-2 lg:mb-4 gap-4">
			{!isSmallScreen && (
				<CircleButton
					icon={layoutType === "card" ? <List /> : <Grid2x2 />}
					label={layoutType === "card" ? "List view" : "Cards view"}
					tooltipPosition="top"
					onClick={() =>
						onLayoutChange(layoutType === "card" ? "list" : "card")
					}
				/>
			)}
		</div>
	);
}
