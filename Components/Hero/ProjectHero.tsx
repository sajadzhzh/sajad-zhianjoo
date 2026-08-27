export default function ProjectHero(){
    return(
        <section className="relative w-full overflow-hidden py-20 lg:py-28">
        <div
          className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-64
          w-64
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-(--primary)
          opacity-20
          blur-[120px]
        "
        />

        <div className="Container relative z-10 flex flex-col items-center text-center">
          <span className="mb-4 text-sm font-medium text-(--primary)">
            پروژه‌های من
          </span>

          <h1 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            پروژه‌هایی که
            <span className="text-(--primary)"> ساخته‌ام</span>
          </h1>

          <p
            className="
            mt-5
            max-w-2xl
            text-sm
            leading-7
            text-(--font-color)
            opacity-60
            sm:text-base
          "
          >
            مجموعه‌ای از پروژه‌هایی که در مسیر یادگیری و توسعه ساخته‌ام؛ از
            رابط‌های کاربری مدرن تا اپلیکیشن‌های Full-Stack.
          </p>
        </div>
      </section>
    )
}