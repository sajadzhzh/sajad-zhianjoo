"use client";

import { GetAllProjects } from "@/Actions/Projects";
import ProjectHero from "@/Components/Hero/ProjectHero";
import ProjectItem from "@/Components/Projects/Item";
import { useEffect, useState } from "react";
import Loading from "../Loading";

export default function ProjectsPage() {
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const request = async () => {
      const res = await GetAllProjects();

      if (res.success) {
        setProject(res.data);
        setLoading(false);
      } else {
        setProject([]);
        setLoading(false);
      }
    };
    request();
  }, []);
  return (
    <div className="w-full min-h-svh">
      <ProjectHero />

      <div className="w-full border-t border-(--border) Container grid justify-items-center grid-cols-1 min-[810px]:grid-cols-2 xl:grid-cols-3 gap-4">
        {project &&
          project.map((i, index) => <ProjectItem key={index} data={i} />)}

        {loading && <Loading />}

        {!loading && !project && (
          <p className="col-span-3 w-full py-2 flex items-center justify-center bg-red-600/20 border border-red-600 rounded">
            پروژه ایی ثبت نشده است.
          </p>
        )}
      </div>
    </div>
  );
}
