import { createFileRoute } from "@tanstack/react-router";
import { PageTitle } from "../components/PageTitle";
import { TrendingUp } from "lucide-react";

export const Route = createFileRoute("/metrics")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<PageTitle
			title="Engineering Metrics"
			caption="Gain insights into essential engineering metrics"
			icon={TrendingUp}
		/>
	);
}
