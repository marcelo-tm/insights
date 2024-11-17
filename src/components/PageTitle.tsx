import type { Folder } from "lucide-react";
import useBreakpoint from "../hooks/useBreakpoint";

type PageTitleProps = {
	title: string;
	caption: string;
	icon: typeof Folder;
};

export function PageTitle({ title, caption, icon: Icon }: PageTitleProps) {
	const { isSmallScreen } = useBreakpoint();

	return (
		<div className="flex flex-col gap-2">
			<div className="flex items-center gap-2">
				<Icon size={isSmallScreen ? 26 : 40} />
				<h1 className="text-xl font-bold md:text-4xl text-text-primary">
					{title}
				</h1>
			</div>
			<p className="text-sm md:text-base text-text-primary/70">{caption}</p>
		</div>
	);
}
