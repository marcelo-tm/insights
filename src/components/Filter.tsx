import { useState, type ReactNode } from "react";

import useBreakpoint from "../hooks/useBreakpoint";
import { cn } from "../utils/general";
import { SlidersHorizontal, X } from "lucide-react";
import { CircleButton } from "./CircleButton";

type FilterProps = {
	children: ReactNode;
};

export function Filter({ children }: FilterProps) {
	const { isSmallScreen } = useBreakpoint();
	const [show, setShow] = useState(false);

	function handleToggleFilter() {
		setShow((prevState) => !prevState);
	}

	return (
		<div className={cn({ relative: !isSmallScreen })}>
			<CircleButton
				icon={<SlidersHorizontal />}
				label="Filters"
				tooltipPosition="top"
				onClick={handleToggleFilter}
			/>
			<div
				className={cn(
					"invisible opacity-0 absolute bg-surface z-50 transition-all duration-300 p-4 shadow-xl flex flex-col mt-2",
					{
						"rounded-t-xl bottom-0 left-0 w-full": isSmallScreen,
					},
					{
						"rounded-xl": !isSmallScreen,
					},
					{
						"visible opacity-100": show,
					}
				)}
			>
				<button type="button" className="self-end" onClick={handleToggleFilter}>
					<X />
				</button>
				{children}
			</div>
			{isSmallScreen && (
				<div
					className={cn(
						"absolute invisible opacity-0 top-0 left-0 h-screen w-full bg-black/50 z-40",
						{ "visible opacity-100": show }
					)}
				/>
			)}
		</div>
	);
}
