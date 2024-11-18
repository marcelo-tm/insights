import useBreakpoint from "../../hooks/useBreakpoint";
import type { Metric } from "../../types/metric";

export function MetricsTable({ metrics }: { metrics: Metric[] }) {
	const { isSmallScreen } = useBreakpoint();

	if (isSmallScreen) {
		return (
			<table className="min-w-full text-left text-sm">
				<thead className="border-b border-slate-200 font-medium">
					<tr>
						<th scope="col" className="px-6 py-4">
							Team Member
						</th>
						<th scope="col" className="px-6 py-4">
							Communication Patterns
						</th>
					</tr>
				</thead>
				<tbody>
					{metrics?.map((metric: Metric) => (
						<tr key={metric.id} className="border-b border-slate-200">
							<td className="whitespace-nowrap px-6 py-4">
								{metric.team_member}
							</td>
							<td className="whitespace-nowrap px-6 py-4">
								{metric.metrics.communication_patterns}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		);
	}

	return (
		<table className="min-w-full text-left text-sm">
			<tbody>
				<tr className="border-b border-slate-200">
					<td className="whitespace-nowrap px-6 py-4 font-bold">Team Member</td>
					{metrics?.map((metric: Metric) => (
						<td key={metric.id} className="whitespace-nowrap px-6 py-4">
							{metric.team_member}
						</td>
					))}
				</tr>
				<tr className="border-b border-slate-200">
					<td className="whitespace-nowrap px-6 py-4 font-bold">
						Communication Patterns
					</td>
					{metrics?.map((metric: Metric) => (
						<td key={metric.id} className="whitespace-nowrap px-6 py-4">
							{metric.metrics.communication_patterns}
						</td>
					))}
				</tr>
			</tbody>
		</table>
	);
}
