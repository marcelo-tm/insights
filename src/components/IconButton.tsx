import type { ReactNode } from "react";

type IconButtonProps = {
	icon: ReactNode;
	onClick: () => void;
};

export function IconButton({ icon, onClick }: IconButtonProps) {
	return (
		<button
			type="button"
			onClick={onClick}
			className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface text-text-primary"
		>
			{icon}
		</button>
	);
}
