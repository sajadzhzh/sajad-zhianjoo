import Link from "next/link";
import Button from "../Button/Button";

export default function Desktop() {
  return (
    <header className="header hidden lg:flex">
      <Link href={"/"}>
        <h1 className="text-[20px]">
          سجاد ژیانجو<span className="text-(--primary)">.</span>
        </h1>
      </Link>

      <div className="flex gap-3 items-center text-[13px]">
        <Link href={""} className="item active">
          خانه
        </Link>
        <Link href={""} className="item">
          درباره‌من
        </Link>
        <Link href={""} className="item">
          مهارت‌ها
        </Link>
        <Link href={""} className="item">
          نمونه کار‌ها
        </Link>
        <Link href={""} className="item">
          تماس با من
        </Link>
      </div>

      <div className="w-40">
        <Button theme="primary">همکاری با من</Button>
      </div>
    </header>
  );
}
