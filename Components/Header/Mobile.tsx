import Link from "next/link";
import Menu from "./Menu/Menu";

export default function Mobile() {
  return (
    <header className="header flex lg:hidden">
      <Link href={"/"}>
        <h1 className="text-[18px]">
          سجاد ژیانجو<span className="text-(--primary)">.</span>
        </h1>
      </Link>

      <div className="w-15">
        <Menu />
      </div>
    </header>
  );
}
