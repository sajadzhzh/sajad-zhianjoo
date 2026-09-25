"use client";

import { GetResume } from "@/Actions/Resume";
import { GetAboutMe } from "@/Actions/SiteSettings";
import Loading from "@/app/Loading";
import Button from "@/Components/Button/Button";
import { scrollAnimation } from "@/Helper/Animation";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";

type ResumeType = {
  link: string;
  is_active: boolean;
};

export default function AboutMe() {
  const [aboutMe, setAboutMe] = useState("");
  const [resume, setResume] = useState<ResumeType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const request = async () => {
      const resAboutMe = await GetAboutMe();
      const resResume = await GetResume();

      if (resAboutMe.success) {
        setAboutMe(resAboutMe.data.about_me);
        setLoading(false);
      } else {
        setAboutMe("");
        setLoading(false);
      }
      if (resResume.success) {
        setResume(resResume.data);
        setLoading(false);
      } else {
        setResume([]);
        setLoading(false);
      }
    };
    request();
  }, []);
  return (
    <div
      ref={scrollAnimation("fade-right")}
      className="opacity-0 md:col-span-2 xl:col-span-1 border border-(--border) rounded-xl px-8 py-7 flex flex-col gap-4"
    >
      {aboutMe && (
        <>
          <h2 className="text-xl font-bold">درباره من</h2>
          <p className="text-[12px] text-justify text-(--muted)">{aboutMe}</p>
        </>
      )}

      {loading && <Loading />}

      {resume.length > 0 && (
        <Button
          theme="primary"
          onClick={() => window.open(resume[0].link, "_blank")}
          disAbled={resume[0].is_active ? false : true}
        >
          <Download />
          دانلود رزومه
        </Button>
      )}
    </div>
  );
}
