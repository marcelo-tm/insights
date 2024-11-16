import { Bell, Settings } from "lucide-react";
import { IconButton } from "../IconButton";
import { Logo } from "../Logo";
import { ThemeToggle } from "../ThemeToggle";

export function Header() {
	return (
		<div className="flex items-center justify-between px-4 mb-8 rounded-full items-centerp-3 bg-surface-light">
			<Logo />

			<div className="flex items-center gap-3">
				<ThemeToggle />
				<IconButton icon={<Bell />} onClick={() => console.log("bell")} />
				<IconButton
					icon={<Settings />}
					onClick={() => console.log("settings")}
				/>
				<IconButton icon={<span>M</span>} onClick={() => console.log("user")} />
			</div>
		</div>
	);
}
