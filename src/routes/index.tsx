import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Folder } from "lucide-react";

import { PageTitle } from "../components/PageTitle";
import { ProjectCard } from "../components/Content/ProjectCard";
import { Container } from "../components/Content/Container";
import { api } from "../api/api";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	const { data: projects } = useQuery({
		queryKey: ["projects"],
		queryFn: api.getProjects,
	});

	return (
		<div className="flex flex-col w-full gap-6">
			<PageTitle
				title="Projects and Progress"
				caption="View and track the progress of projects"
				icon={Folder}
			/>

			<Container>
				{projects?.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</Container>
		</div>
	);
}
