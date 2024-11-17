type PageTitleProps = {
	title: string;
	caption: string;
};

export function PageTitle({ title, caption }: PageTitleProps) {
	return (
		<div className="flex flex-col gap-2">
			<h1 className="text-xl font-bold md:text-4xl text-text-primary">
				{title}
			</h1>
			<p className="text-sm md:text-base text-text-primary/70">{caption}</p>
		</div>
	);
}
