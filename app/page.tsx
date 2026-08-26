import HeroArea from "@/Components/Hero/Hero";
import Projects from "@/Components/Projects/Projects";

export default function Home() {
  return (
    <div className="w-full space-y-5">
      <HeroArea />

      <Projects />
    </div>
  );
}
