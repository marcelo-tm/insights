import { createFileRoute } from "@tanstack/react-router";
import { PageTitle } from "../components/PageTitle";

export const Route = createFileRoute("/decisions")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<PageTitle
			title="Decisions Log"
			caption="Review recent decisions and their rationale"
		/>
	);
}
