import { FileCheck, Folder, Scaling, TrendingUp, XOctagon } from "lucide-react";
import { CircleButton } from "../CircleButton";

export function Sidebar() {
	return (
		<aside>
			<nav className="mt-24">
				<ul className="flex flex-col gap-4">
					<li>
						<CircleButton
							icon={<Folder />}
							label="Projects and Progress"
							path="/"
						/>
					</li>
					<li>
						<CircleButton
							icon={<XOctagon />}
							label="Current Blockers"
							path="/blockers"
						/>
					</li>
					<li>
						<CircleButton
							icon={<FileCheck />}
							label="Decisions Log"
							path="/decisions"
						/>
					</li>
					<li>
						<CircleButton
							icon={<Scaling />}
							label="Scope Creep"
							path="/scope"
						/>
					</li>
					<li>
						<CircleButton
							icon={<TrendingUp />}
							label="Engineering Metrics"
							path="/metrics"
						/>
					</li>
				</ul>
			</nav>
		</aside>
	);
}
