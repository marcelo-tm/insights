import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Header } from "../components/Header";
import useBreakpoint from "../hooks/useBreakpoint";
import { Sidebar } from "../components/Sidebar/Sidebar";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	const { isBigScreen } = useBreakpoint();

	return (
		<div className="w-full h-screen p-6 bg-cover lg:p-4 bg-light-bg dark:bg-dark-bg font-lato text-text-primary">
			<Header />

			<div className="flex gap-10">
				{isBigScreen && <Sidebar />}
				<Outlet />
			</div>
		</div>
	);
}
