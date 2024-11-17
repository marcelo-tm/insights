import { cn } from "../utils/general";

type ProgressBarProps = {
	progress: number;
	progressColor?: string;
};

export function ProgressBar({ progress, progressColor }: ProgressBarProps) {
	return (
		<div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden">
			<div
				className={cn("bg-info h-full rounded-full", progressColor)}
				style={{ width: `${progress}%` }}
			/>
		</div>
	);
}
