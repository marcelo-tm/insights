import { createFileRoute } from "@tanstack/react-router";
import { PageTitle } from "../components/PageTitle";
import { Scaling } from "lucide-react";

export const Route = createFileRoute("/scope")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<PageTitle
			title="Scope Creep"
			caption="Identify scope extensions and reasons for each addition"
			icon={Scaling}
		/>
	);
}
