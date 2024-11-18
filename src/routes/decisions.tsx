import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { FileCheck } from "lucide-react";

import { PageTitle } from "../components/PageTitle";
import { api } from "../api/api";
import { DecisionCard } from "../components/Decisions/DecisionCard";

export const Route = createFileRoute("/decisions")({
	component: RouteComponent,
});

function RouteComponent() {
	const { data: decisions } = useQuery({
		queryKey: ["decisions"],
		queryFn: api.getDecisions,
	});

	return (
		<div className="flex flex-col gap-6">
			<PageTitle
				title="Decisions Log"
				caption="Review recent decisions and their rationale"
				icon={FileCheck}
			/>

			<div className="inline-flex p-2 shadow-md lg:p-4 bg-surface/40 rounded-2xl">
				<ul className="flex flex-col gap-4">
					{decisions?.map((decision) => (
						<li key={decision.id}>
							<DecisionCard decision={decision} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
