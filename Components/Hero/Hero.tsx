"use client";

import {
  ArrowLeft,
  Code2,
  Dot,
  Gauge,
  Server,
  ShieldCheck,
  User2,
} from "lucide-react";
import Badge from "../Badge/Badge";
import CodeCard from "./CodeCard";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GetAboutMe, GetAvailable } from "@/Actions/SiteSettings";
import Loading from "@/app/Loading";

export default function HeroArea() {
  const [available, setAvailable] = useState(false);
  const [header, setHeader] = useState("");
  const [header_bold, setHeader_bold] = useState("");
  const [about_me, setAbout_me] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const request = async () => {
      const resAvailable = await GetAvailable();
      const resAboutMe = await GetAboutMe();

      if (resAvailable.success) {
        setAvailable(resAvailable.data.is_available);
      }
      if (resAboutMe.success) {
        setHeader(resAboutMe.data.header);
        setHeader_bold(resAboutMe.data.header_bold);
        setAbout_me(resAboutMe.data.about_me);
      }

      if (resAvailable.success && resAboutMe.success) {
        setLoading(false);
      }
    };

    request();
  }, []);

  return (
    <>
      <div className="Container flex flex-col lg:flex-row items-center gap-4 mt-5">
        {!loading && (
          <>
            <div className="fade-left w-full lg:w-1/2 flex flex-col gap-4 items-center lg:items-start">
              {available && (
                <Badge className="w-max text-[13px] flex items-center">
                  <Dot className="text-green-500" size={20} />
                  در دسترس برای پروژه‌های جدید
                </Badge>
              )}

              {header && (
                <>
                  <h1 className="text-[34px] font-bold">
                    {header} <br />
                    <span className="text-(--primary)">{header_bold}</span>
                  </h1>

                  <p className="text-[14px] text-justify max-w-4/5 text-(--muted)">
                    {about_me}
                  </p>
                </>
              )}

              <div className="w-2/3 lg:w-full flex flex-col lg:flex-row gap-2">
                <Button
                  onClick={() => router.push("/#contact")}
                  theme="normal"
                  className="border border-(--border) hover:bg-(--surface-hover)"
                >
                  <User2 />
                  تماس با من
                </Button>
                <Button
                  theme="primary"
                  onClick={() => router.push("/projects")}
                >
                  <ArrowLeft />
                  مشاهده پروژه‌ها
                </Button>
              </div>
            </div>
            <div className="fade-right w-full lg:w-1/2 flex items-center justify-center">
              <CodeCard />
            </div>
          </>
        )}

        {loading && <div className="h-85 flex items-center justify-center w-full"><Loading /></div>}
      </div>

      {!loading && (
        <div className="overflow-hidden w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-around gap-5 bg-(--surface) border-y border-(--border) Container">
        <div className="fade-left flex gap-2">
          <Gauge className="text-(--primary)" />

          <div className="flex flex-col gap-2">
            <h3>سرعت و عملکرد</h3>
            <p className="text-[13px] text-(--muted) max-w-[70%]">
              بهینه سازی برای سرعت بارگذاری و عملکرد بهتر
            </p>
          </div>
        </div>

        <div className="fade-up flex gap-2">
          <Code2 className="text-(--primary)" />

          <div className="flex flex-col gap-2">
            <h3>توسعه مدرن</h3>
            <p className="text-[13px] text-(--muted) max-w-[70%]">
              توسعه با تکنولوژی‌های مدرن و استانداردهای روز وب
            </p>
          </div>
        </div>

        <div className="fade-down flex gap-2">
          <Server className="text-(--primary)" />

          <div className="flex flex-col gap-2">
            <h3>توسعه Full-Stack</h3>
            <p className="text-[13px] text-(--muted) max-w-[70%]">
              پیاده‌سازی کامل Frontend، Backend، API و دیتابیس
            </p>
          </div>
        </div>

        <div className="fade-right flex gap-2">
          <ShieldCheck className="text-(--primary)" />

          <div className="flex flex-col gap-2">
            <h3>کدنویسی اصولی</h3>
            <p className="text-[13px] text-(--muted) text-justify">
              کد تمیز، ساختار قابل توسعه و توجه به امنیت پروژه
            </p>
          </div>
        </div>
      </div>
      )}
    </>
  );
}
