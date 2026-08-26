import Image from "next/image";
import Badge from "../Badge/Badge";
import Link from "next/link";
import post from "@/public/4.jpg";
import Button from "../Button/Button";
import { ArrowRight } from "lucide-react";

export default function ProjectItem() {
  return (
    <Link href={""} className="project-item">
      <Image src={post} alt="project" width={500} height={500} />
      <div className="flex flex-col gap-2 w-full px-3 py-2">
        <h2 className="text-[18px]">ویترینو</h2>
        <h6 className="text-[14px] text-(--muted)">فروشگاه اینترنتی</h6>
        <p className="text-[12px] text-(--muted) text-justify">
          رابط کاربری فروشگاه اینترنتی با طراحی مدرن و تجربه خریدی سریع و
          لذت‌بخش
        </p>
        <div className="w-full flex gap-2">
          <Badge>Next.js</Badge>
          <Badge>Tailwind</Badge>
          <Badge>Css</Badge>
        </div>
        <div className="absolute bottom-2 right-2 w-1/3 mx-auto">
          <Button theme="normal" className="text-[14px]">
            <ArrowRight className="text-(--primary)"/>
            <p className="text-(--primary) text-nowrap">مشاهده پروژه</p>
          </Button>
        </div>
      </div>
    </Link>
  );
}
