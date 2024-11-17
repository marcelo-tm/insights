import {
	FileCheck,
	Folder,
	Menu,
	Scaling,
	TrendingUp,
	X,
	XOctagon,
} from "lucide-react";
import useBreakpoint from "../../hooks/useBreakpoint";
import { CircleButton } from "../CircleButton";
import { useState } from "react";
import { cn } from "../../utils/general";
import { MobileSidebarItem } from "./MobileSidebarItem";

export function MobileSidebar() {
	const { isSmallScreen } = useBreakpoint();
	const [isExpanded, setIsExpanded] = useState(false);

	function handleToggleMenu() {
		setIsExpanded((prevState) => !prevState);
	}

	if (isSmallScreen) {
		return (
			<>
				<CircleButton
					icon={isExpanded ? <X /> : <Menu />}
					label="Menu"
					onClick={handleToggleMenu}
					className={isExpanded ? "relative z-10 bg-hover" : ""}
				/>

				<div
					className={cn(
						"absolute top-0 -left-full w-3/4 md:w-2/4 h-screen bg-surface/95 transition-all duration-300 shadow-lg p-6",
						{ "left-0": isExpanded }
					)}
				>
					<nav className="mt-24">
						<ul className="flex flex-col gap-4">
							<li>
								<MobileSidebarItem
									icon={<Folder />}
									label="Projects and Progress"
									path="/"
									onClick={handleToggleMenu}
								/>
							</li>
							<li>
								<MobileSidebarItem
									icon={<XOctagon />}
									label="Current Blockers"
									path="/blockers"
									onClick={handleToggleMenu}
								/>
							</li>
							<li>
								<MobileSidebarItem
									icon={<FileCheck />}
									label="Decisions Log"
									path="/decisions"
									onClick={handleToggleMenu}
								/>
							</li>
							<li>
								<MobileSidebarItem
									icon={<Scaling />}
									label="Scope Creep"
									path="/scope"
									onClick={handleToggleMenu}
								/>
							</li>
							<li>
								<MobileSidebarItem
									icon={<TrendingUp />}
									label="Engineering Metrics"
									path="/metrics"
									onClick={handleToggleMenu}
								/>
							</li>
						</ul>
					</nav>
				</div>
			</>
		);
	}

	return null;
}
