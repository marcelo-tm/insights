import { ClipboardList, Gauge, UserRound } from "lucide-react";

import { cn } from "../../utils/general";
import type { Scope } from "../../types/scope";

type ScopeCardProps = {
	scope: Scope;
};

export function ScopeCard({ scope }: ScopeCardProps) {
	return (
		<div className={cn("shadow-sm bg-surface rounded-xl p-4")}>
			<p className="font-bold font-lg mb-2">{scope.description}</p>

			<div className="flex items-center justify-between mb-2">
				<div>
					<small className="text-text-primary/70 text-xs">Added by</small>
					<div className="flex items-center gap-2">
						<UserRound size={20} />
						<p>{scope.by}</p>
					</div>
				</div>

				<div>
					<small className="text-text-primary/70 text-xs">
						Potential Impact
					</small>
					<div className="flex items-center gap-2">
						<Gauge size={20} />
						<p>{scope.impact}</p>
					</div>
				</div>
			</div>

			<div>
				<small className="text-text-primary/70 text-xs">
					Rationale for Addition
				</small>
				<div className="flex items-center gap-2">
					<ClipboardList size={20} />
					<p>{scope.impact}</p>
				</div>
			</div>
		</div>
	);
}
