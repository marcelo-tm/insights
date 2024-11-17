import { Grid2x2, List, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

import useBreakpoint from "../../hooks/useBreakpoint";
import { CircleButton } from "../CircleButton";
import { Filter } from "../Filter";
import { StatusLabel } from "../Content/StatusLabel";
import { Button } from "../Button";
import { cn } from "../../utils/general";
import type { LayoutTypes } from "../../types/general";
import type { BlockerFilterParams } from "../../types/blockers";
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
	const [showFilter, setShowFilter] = useState(false);
	const [LevelFilter, setLevelFilter] = useState<string[]>([]);

	function handleToggleFilter() {
		setShowFilter((prevState) => !prevState);
	}

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
		setShowFilter(false);
	}

	function handleResetFilters() {
		setLevelFilter([]);
		onApplyFilters({ level: [] });
		setShowFilter(false);
	}

	return (
		<div className="flex mb-2 lg:mb-4 gap-4">
			{!isSmallScreen && layoutType === "card" && (
				<CircleButton
					icon={<List />}
					label="List view"
					tooltipPosition="top"
					onClick={() => onLayoutChange("list")}
				/>
			)}
			{!isSmallScreen && layoutType === "list" && (
				<CircleButton
					icon={<Grid2x2 />}
					label="Cards view"
					tooltipPosition="top"
					onClick={() => onLayoutChange("card" as LayoutTypes)}
				/>
			)}

			<div className={cn({ relative: !isSmallScreen })}>
				<CircleButton
					icon={<SlidersHorizontal />}
					label="Filters"
					tooltipPosition="top"
					onClick={handleToggleFilter}
				/>
				<Filter show={showFilter} onClose={() => setShowFilter(false)}>
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
		</div>
	);
}
