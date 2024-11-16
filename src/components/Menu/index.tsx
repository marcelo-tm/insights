import {
	ClipboardList,
	XOctagon,
	FileCheck,
	Scaling,
	TrendingUp,
} from "lucide-react";
import { MenuItem } from "./MenuItem";

const MENUS_LIST = [
	{
		label: "Projects and Progress",
		icon: ClipboardList,
		path: "/",
	},
	{
		label: "Current Blockers",
		icon: XOctagon,
		path: "/blockers",
	},
	{
		label: "Decisions Log",
		icon: FileCheck,
		path: "/decisions",
	},
	{
		label: "Scope Creep",
		icon: Scaling,
		path: "/scope",
	},
	{
		label: "Engineering Metrics",
		icon: TrendingUp,
		path: "/metrics",
	},
];

export function Menu() {
	return (
		<aside>
			<nav>
				<ul className="flex flex-col gap-3 mt-14">
					{MENUS_LIST.map((menu) => (
						<li key={menu.path}>
							<MenuItem
								label={menu.label}
								icon={<menu.icon />}
								path={menu.path}
							/>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	);
}
