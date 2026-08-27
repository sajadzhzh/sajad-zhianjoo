"use client"

import { ArrowLeft } from "lucide-react";
import Button from "../Button/Button";
import Carousel from "../Carousel/Carousel";
import ProjectItem from "./Item";
import "./project.css";
import { useRouter } from "next/navigation";

export default function Projects() {
  const router = useRouter()
  return (
    <div className="w-full Container" id="projects">
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div>
          <p className="text-[14px] text-(--primary)">نمونه کار‌های من</p>
          <h2 className="text-[24px] font-bold">پروژه‌های منتخب</h2>
          <p className="text-[13px] text-(--muted)">
            مجموعه ای از پروژه هایی که با تمرکز بر طراحی ، توسعه مدرن و کیفیت
            پیاده‌سازی کرده‌ام.
          </p>
        </div>

        <div className="w-2/3 lg:w-50">
          <Button
            theme="normal"
            onClick={()=> router.push("/projects")}
            className="text-[13px] border border-(--border) hover:bg-(--surface-hover)"
          >
            مشاهده همه پروژه‌ها
            <ArrowLeft size={18} className="text-(--primary)" />
          </Button>
        </div>
      </div>

      <Carousel>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </Carousel>
    </div>
  );
}
