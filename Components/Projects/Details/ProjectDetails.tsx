import Button from "@/Components/Button/Button";
import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import post from "@/public/4.jpg";

export default function Details({ id }: { id: string }) {
  return (
    <div className="w-full min-h-svh">
      <div className="Container w-full lg:h-[50svh] grid grid-cols-1 items-center lg:grid-cols-2 gap-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <h1 className="flex gap-2 items-center text-[24px] font-bold">
              <div className="border-4 border-(--primary) rounded-full"></div>
              ویترینو
            </h1>

            <p className="text-[14px] text-(--muted)">فروشگاه اینترنتی</p>
          </div>

          <p className="text-[12px] text-justify text-(--muted)">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
            <Button
              theme="normal"
              className="border border-(--border) hover:bg-(--surface)"
            >
              <FaGithub />
              کد منبع در گیت‌هاب
            </Button>

            <Button theme="primary" disAbled>
              <ExternalLinkIcon />
              مشاهده سایت
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center rounded-xl shadow-[0_0_20px_rgba(124,58,237,0.15)]">
          <Image
            src={post}
            alt="Project"
            width={500}
            height={500}
            className="size-full rounded-xl"
          />
        </div>
      </div>

      <div className="mt-20 mb-10 Container w-full grid justify-items-center grid-cols-1 min-[810px]:grid-cols-2 xl:grid-cols-3 gap-4">
        <Image
          src={post}
          alt="Project"
          width={500}
          height={500}
          className="size-full rounded-xl"
        />
        <Image
          src={post}
          alt="Project"
          width={500}
          height={500}
          className="size-full rounded-xl"
        />
        <Image
          src={post}
          alt="Project"
          width={500}
          height={500}
          className="size-full rounded-xl"
        />
        <Image
          src={post}
          alt="Project"
          width={500}
          height={500}
          className="size-full rounded-xl"
        />
        <Image
          src={post}
          alt="Project"
          width={500}
          height={500}
          className="size-full rounded-xl"
        />
        <Image
          src={post}
          alt="Project"
          width={500}
          height={500}
          className="size-full rounded-xl"
        />
      </div>
    </div>
  );
}
