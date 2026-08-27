import Badge from "@/Components/Badge/Badge";

export default function Abilities(){
    return(
        <div className="w-2/4 border border-(--border) rounded-xl px-8 py-7 flex flex-col gap-4">
            <h2 className="text-xl font-bold">مهارت‌های من</h2>
            <div className="w-full flex items-center gap-2">
                <div className="w-1/3 px-2 h-full border-e border-(--border) flex flex-col gap-2">
                    <h3 className="text-[14px]">فرانت‌اند</h3>
                    <div className="w-full flex flex-wrap gap-2 items-center">
                        <Badge className="text-[13px]">
                            Next.js
                        </Badge>
                        <Badge className="text-[13px]">
                            React.js
                        </Badge>
                        <Badge className="text-[13px]">
                            Tailwind
                        </Badge>
                        <Badge className="text-[13px]">
                            BootStrap
                        </Badge>
                    </div>
                </div>

                <div className="w-1/3 px-2 h-full border-e border-(--border) flex flex-col gap-2">
                    <h3 className="text-[14px]">بک‌اند</h3>
                    <div className="w-full flex flex-wrap gap-2 items-center">
                        <Badge className="text-[13px]">
                            Next.js
                        </Badge>
                        <Badge className="text-[13px]">
                            Python
                        </Badge>
                    </div>
                </div>

                <div className="w-1/3 px-2 h-full flex flex-col gap-2">
                    <h3 className="text-[14px]">مهارت‌های کلی</h3>
                    <div className="w-full flex flex-wrap gap-2 items-center">
                        <Badge className="text-[13px]">
                            GitHub
                        </Badge>
                    </div>
                </div>
            </div>
        </div>
    )
}