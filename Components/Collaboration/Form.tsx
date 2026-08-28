import Button from "../Button/Button";

export default function CollaborationForm() {
  return (
    <form className="w-full space-y-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-[12px] text-(--muted)">نام و نام خانوادگی</label>
        <input type="text" className="border border-(--border) outline-0 rounded focus:bg-(--surface-hover)" name="name" id="name" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-[12px] text-(--muted)">موضوع پیام</label>
        <input type="text" className="border border-(--border) outline-0 rounded focus:bg-(--surface-hover)" name="subject" id="subject" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-[12px] text-(--muted)">آدرس ایمیل</label>
        <input type="text" className="border border-(--border) outline-0 rounded focus:bg-(--surface-hover)" name="email" id="email" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-[12px] text-(--muted)">متن پیام</label>
        <textarea name="message" className="border border-(--border) outline-0 rounded focus:bg-(--surface-hover)" id="message" rows={5}></textarea>
      </div>

      <Button theme="primary" type="submit">
        ارسال پیام
      </Button>
    </form>
  );
}
