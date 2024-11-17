import type { ReactNode } from "react";

import { cn } from "../utils/general";

type ButtonProps = {
	children: string | ReactNode;
	onClick: () => void;
	variant?: "primary" | "outline";
};

export function Button({
	children,
	onClick,
	variant = "primary",
}: ButtonProps) {
	return (
		<button
			type="button"
			className={cn("p-2 rounded-lg transition-all duration-300", {
				"bg-primary-light text-white hover:bg-primary": variant === "primary",
				"border-2 border-slate-200 hover:bg-slate-200": variant === "outline",
			})}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
