import Link from "next/link";

export default function HeaderItems() {
  return (
    <>
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
    </>
  );
}
