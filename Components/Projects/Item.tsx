import Image from "next/image";
import Badge from "../Badge/Badge";
import Link from "next/link";
import post from "@/public/4.jpg";
import Button from "../Button/Button";
import { ArrowRight } from "lucide-react";
import { scrollAnimation } from "@/Helper/Animation";
import "./project.css";

type projectType = {
  id: number;
  name: string;
  sort: string;
  short_description: string;
  abilities: string;
  thumbnail: string;
};

export default function ProjectItem({ data }: { data: projectType }) {
  const parsedAbilities = JSON.parse(JSON.parse(data.abilities));

  return (
    <Link
      href={`/projects/${data.id}`}
      className="project-item opacity-0"
      ref={scrollAnimation("fade-up")}
    >
      <Image src={`${process.env.NEXT_PUBLIC_API_SERVER_URL}${data.thumbnail}`} unoptimized alt="project" width={500} height={500} />
      <div className="flex flex-col gap-2 w-full px-3 py-2">
        <h2 className="text-[18px]">{data.name}</h2>
        <h6 className="text-[14px] text-(--muted)">{data.sort}</h6>
        <p className="text-[12px] text-(--muted) text-justify">
          {data.short_description}
        </p>
        <div className="w-full flex gap-2">
          {parsedAbilities.map((i: string, index: any) => (
            <Badge key={index}>{i}</Badge>
          ))}
        </div>
        <div className="absolute bottom-2 right-2 w-1/3 mx-auto">
          <Button theme="normal" className="text-[14px]">
            <ArrowRight className="text-(--primary)" />
            <p className="text-(--primary) text-nowrap">مشاهده پروژه</p>
          </Button>
        </div>
      </div>
    </Link>
  );
}
