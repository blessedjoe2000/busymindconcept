import ContactUs from "@/components/ContactUs";
import {
  HeroDemo1,
  HeroDemo2,
  HeroDemo3,
  HeroDemo4,
} from "@/components/ProjectPhotos";
import Projects from "@/components/Projects";
import RobotHeader from "@/components/RobotHeader";

export default function Home() {
  return (
    <div>
      <RobotHeader />
      <Projects />
      <HeroDemo1 />
      <HeroDemo4 />
      <HeroDemo2 />
      <HeroDemo3 />
      <ContactUs />
    </div>
  );
}
