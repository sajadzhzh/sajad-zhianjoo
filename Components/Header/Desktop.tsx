import Link from "next/link";
import HeaderItems from "./items";
import CollaborationButton from "../Collaboration/Collaboration";

export default function Desktop() {
  return (
    <header className="header hidden lg:flex">
      <Link href={"/"}>
        <h1 className="text-[20px]">
          سجاد ژیانجو<span className="text-(--primary)">.</span>
        </h1>
      </Link>

      <div className="flex gap-3 items-center text-[13px]">
        <HeaderItems />
      </div>

      <div className="w-40">
        <CollaborationButton />
      </div>
    </header>
  );
}
