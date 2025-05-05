import { HeroDemo1, HeroDemo2, HeroDemo3 } from "@/components/ProjectPhotos";
import Projects from "@/components/Projects";
import RobotHeader from "@/components/RobotHeader";

export default function Home() {
  return (
    <div>
      <RobotHeader />
      <Projects />
      <HeroDemo1 />
      <HeroDemo2 />
      <HeroDemo3 />
    </div>
  );
}
