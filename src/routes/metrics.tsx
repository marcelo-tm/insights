import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

import { api } from "../api/api";
import { PageTitle } from "../components/PageTitle";
import type { BarChartData } from "../types/metric";
import { MetricBarChartCard } from "../components/Metrics/MetricBarChartCard";
import { MetricsTable } from "../components/Metrics/MetricsTable";

export const Route = createFileRoute("/metrics")({
	component: RouteComponent,
});

function RouteComponent() {
	const [prReviewTimes, setPrReviewTimes] = useState<BarChartData[]>([]);
	const [codeCoveragePerc, setCodeCoveragePerc] = useState<BarChartData[]>([]);

	const { data: metrics } = useQuery({
		queryKey: ["metrics"],
		queryFn: api.getMetrics,
	});

	useEffect(() => {
		const prReviewTimesList = metrics?.reduce((acc: BarChartData[], curr) => {
			acc.push({ name: curr.team_member, data: curr.metrics.pr_review_time });
			return acc;
		}, [] as BarChartData[]);
		setPrReviewTimes(prReviewTimesList ?? []);
	}, [metrics]);

	useEffect(() => {
		const codeCoveragePercList = metrics?.reduce(
			(acc: BarChartData[], curr) => {
				acc.push({
					name: curr.team_member,
					data: curr.metrics.code_coverage,
				});
				return acc;
			},
			[] as BarChartData[]
		);
		setCodeCoveragePerc(codeCoveragePercList ?? []);
	}, [metrics]);

	return (
		<div className="flex flex-col w-full gap-6">
			<PageTitle
				title="Engineering Metrics"
				caption="Gain insights into essential engineering metrics"
				icon={TrendingUp}
			/>

			<div className="w-full p-2 shadow-md lg:p-4 bg-surface/40 rounded-2xl">
				<div className="grid grid-cols-1 gap-2 lg:gap-4 md:grid-cols-2 lg:grid-cols-2">
					<MetricBarChartCard title="PR Review Times" data={prReviewTimes} />
					<MetricBarChartCard title="Code Coverage" data={codeCoveragePerc} />

					<div className="shadow-sm bg-surface rounded-xl p-4 col-span-full">
						<MetricsTable metrics={metrics ?? []} />
					</div>
				</div>
			</div>
		</div>
	);
}
