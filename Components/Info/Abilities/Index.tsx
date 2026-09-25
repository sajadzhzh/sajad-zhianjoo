"use client";

import { scrollAnimation } from "@/Helper/Animation";
import Sort from "./Sort";
import { useEffect, useState } from "react";
import { GetAllAbilities } from "@/Actions/Abilities";
import Loading from "@/app/Loading";

type Abilitytype = {
  id: number;
  name: string;
  sort: string;
};

export default function Abilities() {
  const [abilities, setAbilities] = useState<Abilitytype[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const request = async () => {
      const res = await GetAllAbilities();

      if (res.success) {
        setAbilities(res.data);
        setLoading(false);
      } else {
        setAbilities([]);
        setLoading(false);
      }
    };
    request();
  }, []);

  return (
    <div
      ref={scrollAnimation("fade-down")}
      className="opacity-0 xl:col-span-2 border border-(--border) rounded-xl px-8 py-7 flex flex-col gap-4"
    >
      <h2 className="text-xl font-bold">مهارت‌های من</h2>
      {abilities && (
        <div className="w-full flex flex-col xl:flex-row items-center gap-2">
          <div className="w-full xl:w-1/3 px-2 h-full xl:border-e border-(--border) flex flex-col gap-2">
            <Sort
              heading="فرانت‌اند"
              items={abilities
                .filter((i) => i.sort === "فرانت‌اند")
                .map((i) => i.name)}
            />
          </div>

          <div className="w-full xl:w-1/3 px-2 h-full xl:border-e border-(--border) flex flex-col gap-2">
            <Sort
              heading="بک‌اند"
              items={abilities
                .filter((i) => i.sort === "بک‌اند")
                .map((i) => i.name)}
            />
          </div>

          <div className="w-full xl:w-1/3 px-2 h-full flex flex-col gap-2">
            <Sort
              heading="مهارت‌های عمومی"
              items={abilities
                .filter((i) => i.sort === "مهارت عمومی")
                .map((i) => i.name)}
            />
          </div>
        </div>
      )}

      {loading && <Loading />}
    </div>
  );
}
