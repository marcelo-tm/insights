import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Menu } from "../components/Menu";
import { Header } from "../components/Header";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	return (
		<div className="w-full h-screen gap-4 p-4 font-lato bg-background text-text-primary">
			<Header />
			<div className="flex">
				<Menu />
				<main className="w-full">
					<div className="p-4 rounded-3xl bg-surface">
						<Outlet />
					</div>
				</main>
			</div>
		</div>
	);
}
