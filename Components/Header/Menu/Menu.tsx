"use client";

import Button from "@/Components/Button/Button";
import { Handshake, TextAlignStart } from "lucide-react";
import "./menu.css";
import HeaderItems from "../items";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Menu() {
  const Ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (Ref.current && !Ref.current.contains(event.target as Node)) {
        setOpen(false);
      }

      if (Ref.current?.contains(event.target as Node)) {
        setTimeout(() => {
          setOpen(false);
        }, 250);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);
  return (
    <>
      <Button theme="normal" onClick={() => setOpen(true)}>
        <TextAlignStart size={24} />
      </Button>

      <div
        className={
          open
            ? "absolute show right-0 top-0 w-full h-svh bg-gray-600/50 z-999"
            : "absolute right-0 top-0 w-full h-svh bg-gray-600/50 z-999 hidden hide"
        }
      >
        <div
          className={`menu ${open ? "translate-x-0 slideLeft" : "translate-x-full slideRight"}`}
          ref={Ref}
        >
          <div className="flex flex-col gap-5">
            <Link href={"/"} className="w-full">
              <h1 className="text-[20px] text-center">
                سجاد ژیانجو<span className="text-(--primary)">.</span>
              </h1>
            </Link>

            <HeaderItems />
          </div>
          <div className="w-full">
            <Button theme="primary">
              <Handshake size={20} />
              همکاری با من
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
