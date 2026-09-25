"use client";

import { Mail, MapPin } from "lucide-react";
import FollowMe from "./FollowMe";
import { useEffect, useState } from "react";
import { GetAddress } from "@/Actions/SiteSettings";

export default function Footer() {
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const request = async () => {
      const res = await GetAddress();

      if (res.success) {
        setAddress(res.data.address);
        setEmail(res.data.email);
      } else {
        setAddress("");
        setEmail("");
      }
    };
    request();
  }, []);
  return (
    <footer
      className="w-full pb-4 border-t border-(--border) Container flex flex-col md:flex-row gap-5 items-center justify-between"
      id="contact"
    >
      <p className="text-nowrap flex items-end gap-1 text-[14px]">
        <MapPin />
        {address}
      </p>
      <FollowMe />
      <p className="text-nowrap flex items-end gap-1 text-[14px]">
        <Mail />
        {email}
      </p>
    </footer>
  );
}
