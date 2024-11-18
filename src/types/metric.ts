export type Metric = {
	id: number;
	team_member: string;
	metrics: {
		pr_review_time: number;
		code_coverage: number;
		communication_patterns: string;
	};
};

export type BarChartData = {
	name: string;
	data: number;
};
