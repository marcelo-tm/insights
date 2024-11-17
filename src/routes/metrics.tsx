import { createFileRoute } from "@tanstack/react-router";
import { PageTitle } from "../components/PageTitle";

export const Route = createFileRoute("/metrics")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<PageTitle
			title="Engineering Metrics"
			caption="Gain insights into essential engineering metrics"
		/>
	);
}
