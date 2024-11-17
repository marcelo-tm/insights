import type { ReactNode } from "@tanstack/react-router";

type ContainerProps = {
	children: ReactNode;
	headerControls?: ReactNode;
};

export function Container({
	children,
	headerControls: HeaderControls,
}: ContainerProps) {
	return (
		<div className="w-full p-2 shadow-md lg:p-4 bg-surface/40 rounded-2xl">
			{HeaderControls}
			<div className="grid grid-cols-1 gap-2 lg:gap-4 md:grid-cols-2 lg:grid-cols-4">
				{children}
			</div>
		</div>
	);
}
