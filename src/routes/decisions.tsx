import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/decisions")({
	component: RouteComponent,
});

function RouteComponent() {
	return "Hello /decisions!";
}
