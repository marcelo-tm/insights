import { Tooltip } from "../Tooltip";

export function AvatarGroup({ names }: { names: string[] }) {
	return (
		<div className="flex -space-x-4">
			{names.map((name, index) => (
				<div
					key={`${index}${name[0]}`}
					className="flex items-center justify-center w-10 h-10 group rounded-full cursor-default text-text-primary font-bold border-4 border-white bg-slate-200 relative"
					style={{
						zIndex: names.length - index,
					}}
					title={name}
				>
					{name[0].toUpperCase()}

					<Tooltip
						text={name}
						position="bottom"
						baseClass="text-xs bg-slate-200 p-1 shadow-md font-normal rounded-md"
					/>
				</div>
			))}
		</div>
	);
}
