import Button from "@/Components/Button/Button";
import { Handshake } from "lucide-react";

export default function Collaboration() {
  return (
    <div className="relative w-full xl:w-1/4 overflow-hidden rounded-xl border border-(--border) bg-(--surface) px-8 py-7">
      <div
        className="
      pointer-events-none
      absolute
      -right-20
      top-1/2
      h-44
      w-44
      -translate-y-1/2
      rounded-full
      bg-(--primary)
      blur-[70px]
    "
      />

      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white">ایده‌ای در ذهن دارید؟</h3>

        <p className="mt-4 max-w-sm text-sm leading-7 text-(--muted)">
          شاید با هم یک چیز فوق‌العاده بسازیم. من اینجام تا ایده‌های شما را به
          واقعیت تبدیل کنم.
        </p>

        <Button theme="primary">
            <Handshake />
            شروع همکاری
        </Button>
      </div>
    </div>
  );
}
