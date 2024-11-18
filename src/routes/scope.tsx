import { useCallback, useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Scaling } from "lucide-react";

import { PageTitle } from "../components/PageTitle";
import type { LayoutTypes } from "../types/general";
import { api } from "../api/api";
import { Container } from "../components/Content/Container";
import { ScopeHeaderControls } from "../components/Scope/ScopeHeaderControls";
import { ScopeCard } from "../components/Scope/ScopeCard";
import { ScopeLine } from "../components/Scope/ScopeLine";

export const Route = createFileRoute("/scope")({
	component: RouteComponent,
});

function RouteComponent() {
	const [layoutType, setLayoutType] = useState<LayoutTypes>("card");

	const { data: scopes } = useQuery({
		queryKey: ["scopes"],
		queryFn: api.getScopes,
	});

	const handleLayoutChange = useCallback((layoutType: LayoutTypes) => {
		setLayoutType(layoutType);
	}, []);

	const HeaderControls = useMemo(
		() => (
			<ScopeHeaderControls
				onLayoutChange={handleLayoutChange}
				layoutType={layoutType}
			/>
		),
		[layoutType, handleLayoutChange]
	);

	return (
		<div className="flex flex-col w-full gap-6">
			<PageTitle
				title="Scope Creep"
				caption="Identify scope extensions and reasons for each addition"
				icon={Scaling}
			/>
			<Container headerControls={HeaderControls}>
				{scopes?.map((scope) => {
					if (layoutType === "card")
						return <ScopeCard key={scope.id} scope={scope} />;
					return <ScopeLine key={scope.id} scope={scope} />;
				})}
			</Container>
		</div>
	);
}
