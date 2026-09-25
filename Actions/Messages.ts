"use server";

import { postFetch } from "@/Helper/Fetch";
import Response from "@/Helper/Response";

export async function NewMessage({
  name,
  title,
  email,
  text,
}: {
  name: string;
  title: string;
  email: string;
  text: string;
}) {
  if (!name || !title || !email || !text) {
    return Response({
      success: false,
      message: "تمام بخش ها الزامی هستند!",
    });
  }
  try {
    const res = await postFetch("messages", {
      name,
      title,
      email,
      text,
    });

    if (res.success) {
      return Response({
        success: res.success,
        message: res.message,
      });
    } else {
      return Response({
        success: res.success,
        message: res.message,
      });
    }
  } catch (e: any) {
    console.log(e.message);

    return Response({
      success: false,
      message: "مشکلی پیش آمد. لطفا مجدد تلاش کنید.",
    });
  }
}
