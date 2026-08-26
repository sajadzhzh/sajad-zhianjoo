import Link from "next/link";
import Button from "../Button/Button";
import { Menu, TextAlignStart } from "lucide-react";

export default function Mobile() {
  return (
    <header className="header flex lg:hidden">
      <Link href={"/"}>
        <h1 className="text-[18px]">
          سجاد ژیانجو<span className="text-(--primary)">.</span>
        </h1>
      </Link>

      <div className="w-15">
        <Button theme="normal">
            <TextAlignStart size={24}/>
        </Button>
      </div>
    </header>
  );
}
