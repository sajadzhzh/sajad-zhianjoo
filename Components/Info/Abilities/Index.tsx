import Sort from "./Sort";

export default function Abilities() {
  return (
    <div className="xl:col-span-2 border border-(--border) rounded-xl px-8 py-7 flex flex-col gap-4">
      <h2 className="text-xl font-bold">مهارت‌های من</h2>
      <div className="w-full flex flex-col xl:flex-row items-center gap-2">
        <div className="w-full xl:w-1/3 px-2 h-full xl:border-e border-(--border) flex flex-col gap-2">
          <Sort
            heading="فرانت‌اند"
            items={["Next.js", "React.js", "Tailwind", "Bootstrap", "Css"]}
          />
        </div>

        <div className="w-full xl:w-1/3 px-2 h-full xl:border-e border-(--border) flex flex-col gap-2">
          <Sort heading="بک‌اند" items={["Next.js", "Python"]} />
        </div>

        <div className="w-full xl:w-1/3 px-2 h-full flex flex-col gap-2">
          <Sort heading="مهارت‌های کلی" items={["GitHub"]} />
        </div>
      </div>
    </div>
  );
}
