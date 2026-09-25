"use client";

import { GetSocialMedia } from "@/Actions/SiteSettings";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";

export default function FollowMe() {
  const [instagram, setInstagram] = useState("");
  const [telegram, setTelegram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");

  useEffect(() => {
    const request = async () => {
      const res = await GetSocialMedia();

      if (res.success) {
        setInstagram(res.data.instagram);
        setTelegram(res.data.telegram);
        setLinkedin(res.data.linkedin);
        setGithub(res.data.github);
      } else {
        setInstagram("");
        setTelegram("");
        setLinkedin("");
        setGithub("");
      }
    };
    request();
  }, []);
  return (
    <div className="w-full lg:w-max flex flex-col gap-2">
      <h2 className="text-[14px] text-center">من را دنبال کنید</h2>
      <div className="flex gap-2 w-full justify-center">
        <Link
          href={instagram}
          className="w-max p-2 rounded-full bg-(--surface) hover:bg-(--surface-hover) group"
        >
          <FaInstagram size={20} className="group-hover:text-red-500" />
        </Link>
        <Link
          href={telegram}
          className="w-max p-2 rounded-full bg-(--surface) hover:bg-(--surface-hover) group"
        >
          <FaTelegram size={20} className="group-hover:text-blue-700" />
        </Link>
        <Link
          href={github}
          className="w-max p-2 rounded-full bg-(--surface) hover:bg-(--surface-hover) group"
        >
          <FaGithub size={20} className="group-hover:text-gray-500" />
        </Link>
        <Link
          href={linkedin}
          className="w-max p-2 rounded-full bg-(--surface) hover:bg-(--surface-hover) group"
        >
          <FaLinkedin size={20} className="group-hover:text-blue-500" />
        </Link>
      </div>
    </div>
  );
}
