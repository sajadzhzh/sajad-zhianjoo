export default function CodeCard() {
  return (
    <div dir="ltr" className="relative w-full max-w-140 overflow-hidden rounded-2xl border border-zinc-800 bg-[#181a1f] shadow-[0_0_60px_rgba(124,58,237,0.15)]">
      
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-zinc-800 px-5 py-4">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-500" />
      </div>

      {/* Code */}
      <div className="overflow-x-auto p-6 font-mono text-sm leading-8 sm:p-8 sm:text-base">
        <div>
          <span className="text-purple-400">const</span>{" "}
          <span className="text-white">developer</span>{" "}
          <span className="text-zinc-400">=</span>{" "}
          <span className="text-white">{"{"}</span>
        </div>

        <div className="pl-6">
          <span className="text-blue-300">name</span>
          <span className="text-zinc-400">:</span>{" "}
          <span className="text-orange-300">
            "Sajad Zhianjoo"
          </span>
          <span className="text-zinc-400">,</span>
        </div>

        <div className="pl-6">
          <span className="text-blue-300">role</span>
          <span className="text-zinc-400">:</span>{" "}
          <span className="text-orange-300">
            "FullStack Developer"
          </span>
          <span className="text-zinc-400">,</span>
        </div>

        <div className="pl-6">
          <span className="text-blue-300">focus</span>
          <span className="text-zinc-400">:</span>{" "}
          <span className="text-orange-300">
            "Programming & Web Development"
          </span>
          <span className="text-zinc-400">,</span>
        </div>

        <div className="pl-6">
          <span className="text-blue-300">passion</span>
          <span className="text-zinc-400">:</span>{" "}
          <span className="text-orange-300">
            "Building modern
          </span>

          <div className="pl-12">
            <span className="text-orange-300">
              digital experiences"
            </span>
          </div>
        </div>

        <div>
          <span className="text-white">{"}"}</span>
        </div>
      </div>
    </div>
  );
}