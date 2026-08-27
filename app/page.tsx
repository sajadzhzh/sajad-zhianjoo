import HeroArea from "@/Components/Hero/Hero";
import Abilities from "@/Components/Info/Abilities/Index";
import AboutMe from "@/Components/Info/AboutMe/Index";
import Collaboration from "@/Components/Info/Collaboration/Index";
import Projects from "@/Components/Projects/Projects";

export default function Home() {
  return (
    <div className="w-full space-y-5">
      <HeroArea />

      <Projects />

      <div className="w-full Container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2" id="about_me">
        <Collaboration />
        <Abilities />
        <AboutMe />
      </div>
    </div>
  );
}
