import { Grid2x2, List, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

import type { ProjectFilterParams } from "../../types/project";
import useBreakpoint from "../../hooks/useBreakpoint";
import { CircleButton } from "../CircleButton";
import { Filter } from "../Filter";
import { PROJECT_STATUSES } from "../../utils/projects";
import { StatusLabel } from "../Content/StatusLabel";
import { Button } from "../Button";
import { cn } from "../../utils/general";
import type { LayoutTypes } from "../../types/general";

type ContainerProps = {
	onLayoutChange: (layoutType: LayoutTypes) => void;
	layoutType: LayoutTypes;
	onApplyFilters: (filters: ProjectFilterParams) => void;
};

export function ProjectHeaderControls({
	onLayoutChange,
	layoutType,
	onApplyFilters,
}: ContainerProps) {
	const { isSmallScreen } = useBreakpoint();
	const [showFilter, setShowFilter] = useState(false);
	const [statusFilter, setStatusFilter] = useState<string[]>([]);

	function handleToggleFilter() {
		setShowFilter((prevState) => !prevState);
	}

	function handleStatusFilterToggle(status: string) {
		let newStatusList = [];
		if (statusFilter.includes(status)) {
			newStatusList = statusFilter.filter((item) => item !== status);
		} else {
			newStatusList = [...statusFilter, status];
		}
		setStatusFilter(newStatusList);
	}

	function handleApplyFilters() {
		onApplyFilters({ status: statusFilter });
		setShowFilter(false);
	}

	function handleResetFilters() {
		setStatusFilter([]);
		onApplyFilters({ status: [] });
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
						<span className="mb-2 text-text-primary/70">Status</span>
						<ul
							className={cn("flex items-center gap-4", {
								"flex-wrap": isSmallScreen,
							})}
						>
							{Object.keys(PROJECT_STATUSES).map((key) => {
								const statusObj =
									PROJECT_STATUSES[key as keyof typeof PROJECT_STATUSES];
								return (
									<button
										type="button"
										key={key}
										onClick={() => handleStatusFilterToggle(key)}
									>
										<StatusLabel
											label={statusObj.label}
											color={
												statusFilter.includes(key)
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
