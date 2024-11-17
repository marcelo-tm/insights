import { cn } from "../utils/general";

export function Tooltip({
	text,
	isActive = false,
}: { text: string; isActive?: boolean }) {
	return (
		<div
			className={cn(
				"absolute invisible p-3 ml-10 text-sm transition-all duration-300 -translate-y-1/2 opacity-0 text-text-primary top-1/2 left-1/2 whitespace-nowrap bg-hover/90 rounded-xl group-hover:visible group-hover:opacity-100",
				{ "bg-primary-light/90 text-white": isActive }
			)}
		>
			{text}
		</div>
	);
}
