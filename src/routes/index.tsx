import { createFileRoute } from "@tanstack/react-router";
import { PageTitle } from "../components/PageTitle";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<PageTitle
			title="Projects and Progress"
			caption="View and track the progress of projects"
		/>
	);
}
