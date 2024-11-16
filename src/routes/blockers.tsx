import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blockers")({
	component: RouteComponent,
});

function RouteComponent() {
	return "Hello /blockers!";
}
