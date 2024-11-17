import type { ReactNode } from "react";

import useBreakpoint from "../hooks/useBreakpoint";
import { cn } from "../utils/general";
import { X } from "lucide-react";

type FilterProps = {
	show: boolean;
	children: ReactNode;
	onClose: () => void;
};

export function Filter({ show, children, onClose }: FilterProps) {
	const { isSmallScreen } = useBreakpoint();

	if (show) {
		return (
			<>
				<div
					className={cn(
						{
							"absolute bg-surface p-4 shadow-xl rounded-t-xl mt-2 flex flex-col bottom-0 left-0 w-full z-50 transition-all duration-300 md:w-auto md:rounded-xl":
								isSmallScreen,
						},
						{
							"absolute z-50 bg-surface p-4 shadow-xl rounded-xl mt-2 flex flex-col":
								!isSmallScreen,
						}
					)}
				>
					<button type="button" className="self-end" onClick={onClose}>
						<X />
					</button>
					{children}
				</div>
				{isSmallScreen && (
					<div className="absolute top-0 left-0 h-screen w-full bg-black/50 z-40" />
				)}
			</>
		);
	}

	return null;
}
