import { ArrowLeft, Dot, User2 } from "lucide-react";
import Badge from "../Badge/Badge";
import CodeCard from "./CodeCard";
import Button from "../Button/Button";

export default function HeroArea() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center gap-4 mt-5">
        <div className="w-full lg:w-1/2 flex flex-col gap-4 items-center lg:items-start">
          <Badge className="w-max text-[13px] flex items-center">
            <Dot className="text-green-500" size={20} />
            در دسترس برای پروژه‌های جدید
          </Badge>

          <h1 className="text-[34px] font-bold">
            ساخت تجربه‌های وب <br />
            <span className="text-(--primary)">مدرن و حرفه‌ای</span>
          </h1>

          <p className="text-[14px] text-justify lg:max-w-[66%] text-(--muted)">
            من سجاد هستم، توسعه‌دهنده Full Stack با تمرکز بر Frontend. به ساخت
            رابط‌های کاربری مدرن، سریع و واکنش‌گرا علاقه‌مندم و در کنار آن تجربه
            توسعه Backend، API و دیتابیس را نیز دارم.
          </p>

          <div className="w-full flex flex-col lg:flex-row gap-2">
            <Button
              theme="normal"
              className="border border-(--border) hover:bg-(--surface-hover)"
            >
              <User2 />
              تماس با من
            </Button>
            <Button theme="primary">
              <ArrowLeft />
              مشاهده پروژه‌ها
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <CodeCard />
        </div>
      </div>

      <div className="w-full mt-5 absolute right-0 bg-(--surface) border-y border-(--border) Container">
        
      </div>
    </>
  );
}
