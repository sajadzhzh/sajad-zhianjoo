"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderItems() {
  const path = usePathname()
  return (
    <>
      <Link href={"/"} className={path === "/" ? "item active" : "item"}>
        خانه
      </Link>
      <Link href={"/#projects"} className={path === "/projects" ? "item active" : "item"}>
        نمونه کار‌ها
      </Link>
      <Link href={"/#about_me"} className={path === "/#about_me" ? "item active" : "item"}>
        درباره‌من
      </Link>
      <Link href={"/#contact"} className={path === "/#contact" ? "item active" : "item"}>
        تماس با من
      </Link>
    </>
  );
}
