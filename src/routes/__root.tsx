import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Header } from "../components/Header";
import useBreakpoint from "../hooks/useBreakpoint";
import { Sidebar } from "../components/Sidebar/Sidebar";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	const { isSmallScreen } = useBreakpoint();

	return (
		<div
			className="w-full min-h-screen p-4 bg-fixed bg-light-bg font-lato text-text-primary"
			style={{ backgroundAttachment: "fixed" }}
		>
			<Header />

			<div className="flex w-full gap-10">
				{!isSmallScreen && <Sidebar />}
				<Outlet />
			</div>
		</div>
	);
}
