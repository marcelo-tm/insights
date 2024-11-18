import { ClipboardList, Gauge, UserRound } from "lucide-react";
import type { Scope } from "../../types/scope";

type ScopeLineProps = {
	scope: Scope;
};

export function ScopeLine({ scope }: ScopeLineProps) {
	return (
		<div className="shadow-sm bg-surface rounded-xl col-span-full p-4 flex items-center justify-between">
			<div className="flex items-center gap-8">
				<p className="font-bold font-lg">{scope.description}</p>

				<div>
					<small className="text-text-primary/70 text-xs">Added by</small>
					<div className="flex items-center gap-2">
						<UserRound size={20} />
						<p>{scope.by}</p>
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

			<div>
				<small className="text-text-primary/70 text-xs">Potential Impact</small>
				<div className="flex items-center gap-2">
					<Gauge size={20} />
					<p>{scope.impact}</p>
				</div>
			</div>
		</div>
	);
}
