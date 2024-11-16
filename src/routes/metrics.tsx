import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/metrics")({
	component: RouteComponent,
});

function RouteComponent() {
	return "Hello /metrics!";
}
