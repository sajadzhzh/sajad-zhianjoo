"use client";

import Button from "@/Components/Button/Button";
import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import post from "@/public/4.jpg";
import { useEffect, useState } from "react";
import { GetProjectById } from "@/Actions/Projects";
import Loading from "@/app/Loading";
import { scrollAnimation } from "@/Helper/Animation";

type ProjectType = {
  name: string;
  sort: string;
  description: string;
  short_description: string;
  sourceLink: string;
  address: string;
  abilities: string;
  thumbnail: string;
  images: string;
};

export default function Details({ id }: { id: string }) {
  const [project, setProject] = useState<ProjectType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const request = async () => {
      const res = await GetProjectById(id);

      if (res.success) {
        setProject(res.data);
        setLoading(false);
      } else {
        setProject(null);
        setLoading(false);
      }
    };
    request();
  }, []);

  return (
    <div className="w-full min-h-svh">
      {project && (
        <>
          <div className="Container w-full lg:h-[50svh] grid grid-cols-1 items-center lg:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6 order-2 lg:order-1" ref={scrollAnimation("fade-left")}>
              <div className="flex flex-col">
                <h1 className="flex gap-2 items-center text-[24px] font-bold">
                  <div className="border-4 border-(--primary) rounded-full"></div>
                  {project?.name}
                </h1>

                <p className="text-[14px] text-(--muted)">{project?.sort}</p>
              </div>

              <p className="text-[12px] text-justify text-(--muted)">
                {project?.description}
              </p>

              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
                <Button
                  theme="normal"
                  className="border border-(--border) hover:bg-(--surface)"
                  onClick={() => window.open(project?.sourceLink, "_blank")}
                >
                  <FaGithub />
                  کد منبع در گیت‌هاب
                </Button>

                <Button
                  theme="primary"
                  onClick={() => window.open(project?.address, "_blank")}
                  disAbled={project?.address ? false : true}
                >
                  <ExternalLinkIcon />
                  مشاهده سایت
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center rounded-xl order-1 lg:order-2" ref={scrollAnimation("fade-right")}>
              <Image
                src={`${process.env.NEXT_PUBLIC_API_SERVER_URL}${project?.thumbnail}`}
                alt="Project"
                width={500}
                height={500}
                unoptimized
                className="size-[80%] rounded-xl shadow-[0_0_20px_rgba(124,58,237,0.15)]"
              />
            </div>
          </div>

          <div className="mt-20 mb-10 Container w-full grid justify-items-center grid-cols-1 min-[810px]:grid-cols-2 xl:grid-cols-3 gap-4">
            {JSON.parse(JSON.parse(project?.images)).map((i: any, index: any) => (
              <Image
                src={`${process.env.NEXT_PUBLIC_API_SERVER_URL}${i}`}
                key={index}
                alt="Project"
                width={500}
                height={500}
                unoptimized
                className="size-[90%] rounded-xl opacity-0"
                ref={scrollAnimation("fade-up")}
              />
            ))}
          </div>
        </>
      )}

      {loading && <div className="h-svh w-full flex items-center justify-center"><Loading /></div>}
    </div>
  );
}
