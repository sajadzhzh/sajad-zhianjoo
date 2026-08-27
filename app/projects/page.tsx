import ProjectHero from "@/Components/Hero/ProjectHero";
import ProjectItem from "@/Components/Projects/Item";

export default function ProjectsPage() {
  return (
    <div className="w-full min-h-svh">
      <ProjectHero />

      <div className="w-full Container grid justify-items-center grid-cols-1 min-[810px]:grid-cols-2 xl:grid-cols-3 gap-4">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  );
}
