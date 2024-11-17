import { Bell, Settings } from "lucide-react";

import { CircleButton } from "./CircleButton";
import { Logo } from "./Logo";
import useBreakpoint from "../hooks/useBreakpoint";
import { ThemeToggle } from "./ThemeToggle";
import { MobileSidebar } from "./Sidebar/MobileSidebar";

export function Header() {
	const { isSmallScreen } = useBreakpoint();

	function handleToggleNotifications() {
		console.log("toggle menu");
	}

	function handleToggleSettings() {
		console.log("toggle menu");
	}

	return (
		<div className="flex items-center justify-between mb-10">
			<div className="flex items-center gap-4">
				<MobileSidebar />
				<Logo variant={isSmallScreen ? "mini" : "full"} />
			</div>

			<div className="flex items-center gap-4">
				<ThemeToggle />
				<CircleButton
					icon={<Bell />}
					label="Notifications"
					onClick={handleToggleNotifications}
				/>
				<CircleButton
					icon={<Settings />}
					label="Settings"
					onClick={handleToggleSettings}
				/>
			</div>
		</div>
	);
}
