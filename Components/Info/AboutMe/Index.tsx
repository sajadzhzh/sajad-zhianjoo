import Button from "@/Components/Button/Button";
import { Download } from "lucide-react";

export default function AboutMe() {
  return (
    <div className="md:col-span-2 xl:col-span-1 border border-(--border) rounded-xl px-8 py-7 flex flex-col gap-4">
      <h2 className="text-xl font-bold">درباره من</h2>
      <p className="text-[12px] text-justify text-(--muted)">
        من سجاد هستم، توسعه‌دهنده Full Stack با تمرکز بر Frontend. به ساخت
        رابط‌های کاربری مدرن، سریع و واکنش‌گرا علاقه‌مندم و در کنار آن تجربه
        توسعه Backend، API و دیتابیس را نیز دارم.
      </p>

      <Button theme="primary">
        <Download />
        دانلود رزومه
      </Button>
    </div>
  );
}
