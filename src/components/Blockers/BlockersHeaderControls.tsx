import { Grid2x2, List } from "lucide-react";
import { useState } from "react";

import useBreakpoint from "../../hooks/useBreakpoint";
import { CircleButton } from "../CircleButton";
import { Filter } from "../Filter";
import { StatusLabel } from "../Content/StatusLabel";
import { Button } from "../Button";
import { cn } from "../../utils/general";
import type { LayoutTypes } from "../../types/general";
import type { BlockerFilterParams } from "../../types/blocker";
import { BLOCKER_LEVELS } from "../../utils/blockers";

type ContainerProps = {
	onLayoutChange: (layoutType: LayoutTypes) => void;
	layoutType: LayoutTypes;
	onApplyFilters: (filters: BlockerFilterParams) => void;
};

export function BlockerHeaderControls({
	onLayoutChange,
	layoutType,
	onApplyFilters,
}: ContainerProps) {
	const { isSmallScreen } = useBreakpoint();
	const [LevelFilter, setLevelFilter] = useState<string[]>([]);

	function handleLevelFilterToggle(status: string) {
		let newStatusList = [];
		if (LevelFilter.includes(status)) {
			newStatusList = LevelFilter.filter((item) => item !== status);
		} else {
			newStatusList = [...LevelFilter, status];
		}
		setLevelFilter(newStatusList);
	}

	function handleApplyFilters() {
		onApplyFilters({ level: LevelFilter });
	}

	function handleResetFilters() {
		setLevelFilter([]);
		onApplyFilters({ level: [] });
	}

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

			<Filter>
				<>
					<span className="mb-2 text-text-primary/70">Level</span>
					<ul
						className={cn("flex items-center gap-4", {
							"flex-wrap": isSmallScreen,
						})}
					>
						{Object.keys(BLOCKER_LEVELS).map((key) => {
							const statusObj =
								BLOCKER_LEVELS[key as keyof typeof BLOCKER_LEVELS];
							return (
								<button
									type="button"
									key={key}
									onClick={() => handleLevelFilterToggle(key)}
								>
									<StatusLabel
										label={statusObj.label}
										color={
											LevelFilter.includes(key)
												? statusObj.color
												: "bg-slate-200 text-text-primary"
										}
										icon={statusObj.icon}
									/>
								</button>
							);
						})}
					</ul>

					<div className="flex justify-end items-center gap-4 mt-6">
						<Button variant="outline" onClick={handleResetFilters}>
							Reset filters
						</Button>
						<Button onClick={handleApplyFilters}>Apply filters</Button>
					</div>
				</>
			</Filter>
		</div>
	);
}
