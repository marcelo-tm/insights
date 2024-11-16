import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/scope")({
	component: RouteComponent,
});

function RouteComponent() {
	return "Hello /scope!";
}
