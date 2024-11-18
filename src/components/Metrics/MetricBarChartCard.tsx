import {
	Bar,
	BarChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import useBreakpoint from "../../hooks/useBreakpoint";
import type { BarChartData } from "../../types/metric";

type MetricBarChartCardProps = {
	title: string;
	data: BarChartData[];
};

export function MetricBarChartCard({ title, data }: MetricBarChartCardProps) {
	const { isSmallScreen } = useBreakpoint();

	return (
		<div className="shadow-sm bg-surface rounded-xl p-4 h-[400px]">
			<p className="text-text-primary/80 font-bold mb-2 ml-8">{title}</p>
			<ResponsiveContainer width={isSmallScreen ? "100%" : "100%"} height="90%">
				<BarChart width={730} height={250} data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Bar dataKey="data" fill="#4189d6" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}
