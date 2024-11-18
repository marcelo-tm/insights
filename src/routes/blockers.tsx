import { XOctagon } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";

import { PageTitle } from "../components/PageTitle";
import type { BlockerFilterParams } from "../types/blockers";
import type { LayoutTypes } from "../types/general";
import { api } from "../api/api";
import { Container } from "../components/Content/Container";
import { BlockerHeaderControls } from "../components/Blockers/BlockersHeaderControls";
import { BlockerCard } from "../components/Blockers/BlockerCard";
import { BLockerLine } from "../components/Blockers/BlockerLine";

export const Route = createFileRoute("/blockers")({
	component: RouteComponent,
});

function RouteComponent() {
	const [layoutType, setLayoutType] = useState<LayoutTypes>("card");
	const [filters, setFilters] = useState<BlockerFilterParams>({
		level: [],
	});

	const { data: blockers } = useQuery({
		queryKey: ["blockers", filters],
		queryFn: () => api.getBlockers(filters),
	});

	const handleLayoutChange = useCallback((layoutType: LayoutTypes) => {
		setLayoutType(layoutType);
	}, []);

	const handleApplyFilters = useCallback((filters: BlockerFilterParams) => {
		setFilters(filters);
	}, []);

	const HeaderControls = useMemo(
		() => (
			<BlockerHeaderControls
				onLayoutChange={handleLayoutChange}
				layoutType={layoutType}
				onApplyFilters={handleApplyFilters}
			/>
		),
		[layoutType, handleLayoutChange, handleApplyFilters]
	);

	return (
		<div className="flex flex-col w-full gap-6">
			<PageTitle
				title="Current Blockers"
				caption="Identify current blockages and determine their impact"
				icon={XOctagon}
			/>

			<Container headerControls={HeaderControls}>
				{blockers?.map((blocker) => {
					if (layoutType === "card")
						return <BlockerCard key={blocker.id} blocker={blocker} />;
					return <BLockerLine key={blocker.id} blocker={blocker} />;
				})}
			</Container>
		</div>
	);
}
