import { Logo } from "./Logo";
import useBreakpoint from "../hooks/useBreakpoint";
import { MobileSidebar } from "./Sidebar/MobileSidebar";

export function Header() {
	const { isSmallScreen } = useBreakpoint();

	return (
		<div className="flex items-center justify-between mb-10">
			<div className="flex items-center gap-4">
				<MobileSidebar />
				<Logo variant={isSmallScreen ? "mini" : "full"} />
			</div>
		</div>
	);
}
