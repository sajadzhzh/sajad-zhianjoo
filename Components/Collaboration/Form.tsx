"use client";

import { useState } from "react";
import Button from "../Button/Button";
import toast from "react-hot-toast";
import { NewMessage } from "@/Actions/Messages";

export default function CollaborationForm() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!name || !title || !email || !text) {
      toast.error("تمام بخش ها الزامی هستند");
    }

    try {
      const res = await NewMessage({ name, title, email, text });

      if (res.success) {
        res.message && toast.success(res.message);
      } else {
        res.message && toast.error(res.message);
      }
    } catch {
      toast.error("مشکلی در ارتباط با سرور پیش آمد. لطفا دوباره تلاش کنید.");
    }
  };
  return (
    <form className="w-full space-y-2" onSubmit={(e) => handleSubmit(e)}>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-[12px] text-(--muted)">
          نام و نام خانوادگی
        </label>
        <input
          type="text"
          className="border border-(--border) outline-0 rounded focus:bg-(--surface-hover)"
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-[12px] text-(--muted)">
          موضوع پیام
        </label>
        <input
          type="text"
          className="border border-(--border) outline-0 rounded focus:bg-(--surface-hover)"
          name="subject"
          id="subject"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-[12px] text-(--muted)">
          آدرس ایمیل
        </label>
        <input
          type="text"
          className="border border-(--border) outline-0 rounded focus:bg-(--surface-hover)"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-[12px] text-(--muted)">
          متن پیام
        </label>
        <textarea
          name="message"
          className="border border-(--border) outline-0 rounded focus:bg-(--surface-hover)"
          id="message"
          rows={5}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>

      <Button theme="primary" type="submit">
        ارسال پیام
      </Button>
    </form>
  );
}
