import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";

export default function FollowMe() {
  return (
    <div className="w-full lg:w-max flex flex-col gap-2">
      <h2 className="text-[14px] text-center">من را دنبال کنید</h2>
      <div className="flex gap-2 w-full justify-center">
        <Link
        href={""}
        className="w-max p-2 rounded-full bg-(--surface) hover:bg-(--surface-hover) group"
      >
        <FaInstagram size={20} className="group-hover:text-red-500" />
      </Link>
      <Link
        href={""}
        className="w-max p-2 rounded-full bg-(--surface) hover:bg-(--surface-hover) group"
      >
        <FaTelegram size={20} className="group-hover:text-blue-700" />
      </Link>
      <Link
        href={""}
        className="w-max p-2 rounded-full bg-(--surface) hover:bg-(--surface-hover) group"
      >
        <FaGithub size={20} className="group-hover:text-gray-500" />
      </Link>
      <Link
        href={""}
        className="w-max p-2 rounded-full bg-(--surface) hover:bg-(--surface-hover) group"
      >
        <FaLinkedin size={20} className="group-hover:text-blue-500" />
      </Link>
      </div>
    </div>
  );
}
