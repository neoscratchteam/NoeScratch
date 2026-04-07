import { Metadata } from "next";
import ProjectPage from "./ProjectClient";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found | NeoScratch",
    };
  }

  return {
    title: `${project.title} | NeoScratch Portfolio`,
    description: project.description,
    openGraph: {
      title: `${project.title} | NeoScratch Case Study`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default function Page({ params }: Props) {
  return <ProjectPage params={params} />;
}
