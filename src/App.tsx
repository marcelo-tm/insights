import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { useAuth } from "./hooks/useAuth";

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

const router = createRouter({
	routeTree,
	context: {
		authentication: {
			signIn: () => {},
			signOut: () => {},
			isLogged: () => false,
		},
	},
});

export default function App() {
	const authentication = useAuth();
	return <RouterProvider router={router} context={{ authentication }} />;
}
