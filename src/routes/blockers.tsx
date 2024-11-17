import { createFileRoute } from "@tanstack/react-router";
import { PageTitle } from "../components/PageTitle";

export const Route = createFileRoute("/blockers")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<PageTitle
			title="Current Blockers"
			caption="Identify current blockages and determine their impact"
		/>
	);
}
