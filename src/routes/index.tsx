import { useCallback, useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Folder } from "lucide-react";

import { PageTitle } from "../components/PageTitle";
import { Container } from "../components/Content/Container";
import { api } from "../api/api";
import type { ProjectFilterParams } from "../types/project";
import { ProjectHeaderControls } from "../components/Project/ProjectHeaderControls";
import type { LayoutTypes } from "../types/general";
import { ProjectCard } from "../components/Project/ProjectCard";
import { ProjectLine } from "../components/Project/ProjectLine";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	const [layoutType, setLayoutType] = useState<LayoutTypes>("card");
	const [filters, setFilters] = useState<ProjectFilterParams>({
		status: [],
	});

	const { data: projects } = useQuery({
		queryKey: ["projects", filters],
		queryFn: () => api.getProjects(filters),
	});

	const handleLayoutChange = useCallback((layoutType: LayoutTypes) => {
		setLayoutType(layoutType);
	}, []);

	const handleApplyFilters = useCallback((filters: ProjectFilterParams) => {
		setFilters(filters);
	}, []);

	const HeaderControls = useMemo(
		() => (
			<ProjectHeaderControls
				onLayoutChange={handleLayoutChange}
				layoutType={layoutType}
				onApplyFilters={handleApplyFilters}
			/>
		),
		[layoutType, handleLayoutChange, handleApplyFilters]
	);

	return (
		<div className="flex flex-col w-full gap-6">
			<PageTitle
				title="Projects and Progress"
				caption="View and track the progress of projects"
				icon={Folder}
			/>

			<Container headerControls={HeaderControls}>
				{projects?.map((project) => {
					if (layoutType === "card")
						return <ProjectCard key={project.id} project={project} />;
					return <ProjectLine key={project.id} project={project} />;
				})}
			</Container>
		</div>
	);
}
