import HeroArea from "@/Components/Hero/Hero";
import Abilities from "@/Components/Info/Abilities/Index";
import Collaboration from "@/Components/Info/Collaboration/Index";
import Projects from "@/Components/Projects/Projects";

export default function Home() {
  return (
    <div className="w-full space-y-5">
      <HeroArea />

      <Projects />

      <div className="w-full Container flex gap-2">
        <Collaboration />
        <Abilities />
        <div className="w-1/4 border"></div>
      </div>
    </div>
  );
}
